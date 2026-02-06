const express = require("express");
const { body, validationResult } = require("express-validator");
const nodemailer = require("nodemailer");
const Contact = require("../models/Contact");
const router = express.Router();

// Validation middleware
const validateContact = [
  body("name").notEmpty().trim().withMessage("Full name is required"),
  body("phone")
    .matches(/^[0-9]{10,15}$/)
    .withMessage("Enter a valid phone number (10-15 digits)"),
  body("email")
    .isEmail()
    .withMessage("Enter a valid email address")
    .normalizeEmail(),
  body("message").notEmpty().trim().withMessage("Message cannot be empty"),
];

// POST /api/contact - Handle form submission
router.post("/", validateContact, async (req, res) => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Format errors properly for frontend
      const formattedErrors = {};
      errors.array().forEach((error) => {
        formattedErrors[error.path] = error.msg;
      });
      return res.status(400).json({ errors: formattedErrors });
    }

    const { name, phone, email, message } = req.body;

    // Save to MongoDB
    const contact = new Contact({ name, phone, email, message });
    await contact.save();

    // Send email notification (only if email credentials are set)
    if (process.env.NODEMAILER_EMAIL && process.env.NODEMAILER_PASS) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.NODEMAILER_EMAIL,
          pass: process.env.NODEMAILER_PASS,
        },
      });
      //handle email sending errors gracefully
      await transporter.sendMail({
        from: process.env.NODEMAILER_EMAIL,
        to: process.env.NODEMAILER_EMAIL, // Send to yourself, or change to admin email
        subject: `New Contact Form Submission: ${name}`,
        html: `
          <h2>New Inquiry from NanoCoders Website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        `,
      });
    } else {
      console.warn(
        "Nodemailer credentials not set. Skipping email notification.",
      );
    }

    res.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Contact error:", error);
    res.status(500).json({
      error: "Server error",
      message: error.message,
    });
  }
});

// GET /api/contacts - Fetch all contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(50);
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
