import React, { useState } from "react";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log("Submitted Data:", formData);

    alert("Your message has been sent successfully");

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      className="bg-[#f3f2f9] mt-20 py-16 px-4 sm:px-6 lg:px-16 relative"
      id="contact"
    >
      <svg
        className="absolute -top-28 md:-top-31 lg:-top-35 left-0 w-full h-28 sm:h-28 md:h-32 lg:h-36"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,64 C240,120 480,120 720,96 960,72 1200,24 1440,32 L1440,120 L0,120 Z"
          fill="#f3f2f9"
        />
      </svg>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* LEFT SIDE */}
        <div>
          <span className="text-sm tracking-widest text-[#f2bf11] font-bold">
            – CONTACT US –
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#5bb5ea] mt-4">
            We’re <span className="text-[#f2bf11]"> Here to</span>
            <span className="text-[#132c56]"> Help You</span>
          </h2>
          <p className="text-[#132c56]/80 font-medium mt-4 max-w-lg">
            Have questions or ideas? Get in touch, we’re here to listen.
          </p>
          <p className="text-[#132c56] mt-3 max-w-lg">
            Reach out to our team anytime for project inquiries or
            consultations. We'll get back to you promptly.
          </p>
          <div className="mt-10 space-y-6">
            <div className="flex gap-4 items-start pb-6 border-b border-[#d6d3e3]">
              <MapPin className="text-[#132c56] mt-1" />
              <p className="text-[#132c56]">
                NanoCoders <br />
                Peshawar Pakistan
              </p>
            </div>
            <div className="flex gap-4 items-start pb-6 border-b border-[#d6d3e3]">
              <Mail className="text-[#132c56] mt-1" />
              <div>
                <p className="text-[#132c56]">+92 333-5986-021</p>
                <p className="text-[#f2bf11] font-medium cursor-pointer">
                  infonanocoders@gmail.com
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Clock className="text-[#132c56] mt-1" />
              <div className="text-[#132c56]">
                <p>Monday – Friday: 11 AM – 9 PM</p>
                <p>Saturday – Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white rounded-4xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-6 sm:p-10 w-full">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full name"
                className="w-full bg-[#f4f3fa] rounded-full px-6 py-4 text-sm text-[#132c56]  focus:outline-none focus:ring-2 focus:ring-[#132c56]"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="w-full bg-[#f4f3fa] rounded-full px-6 py-4 text-sm text-[#132c56]  focus:outline-none focus:ring-2 focus:ring-[#132c56]"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail"
                className="w-full bg-[#f4f3fa] rounded-full px-6 py-4 text-sm text-[#132c56] focus:outline-none focus:ring-2 focus:ring-[#132c56]"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                className="w-full bg-[#f4f3fa] rounded-[22px] px-6 py-4 text-sm text-[#132c56] min-h-30 resize-none focus:outline-none focus:ring-2 focus:ring-[#132c56]"
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full mt-4 bg-[#5bb5ea] text-[#132c56] font-medium py-4 rounded-full transition-all duration-300 hover:bg-[#f2bf11] shadow-[0_6px_16px_rgba(242,191,17,0.65)] hover:shadow-[0_8px_20px_rgba(91,181,234,0.65)]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
