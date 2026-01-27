import React from "react";
import { Link } from "react-router-dom";

import {
  Shield,
  Lock,
  Eye,
  Users,
  Cookie,
  RefreshCw,
  Mail,
} from "lucide-react";
import ScrollToTop from "../components/ScrollToTop";

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Information We Collect",
      content:
        "We may collect personal information that you provide directly to us (such as name, email address, phone number) when you register, contact us, or subscribe to our services. We may also collect non-personal information like browser type, IP address, and pages visited.",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "How We Use Your Information",
      points: [
        "To provide and maintain our coding academy services",
        "To send you course updates, newsletters, and educational materials",
        "To improve website performance and learning experience",
        "To respond to your inquiries and support requests",
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Sharing Your Information",
      content:
        "We do not sell, trade, or rent students' personal information to others. However, we may share generic aggregated demographic information not linked to any personal identification with our educational partners and trusted affiliates.",
    },
    {
      icon: <Cookie className="w-6 h-6" />,
      title: "Cookies",
      content:
        "Our website may use cookies to enhance your learning experience. You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Your Rights",
      content:
        "You have the right to access, update, or delete your personal information at any time by contacting us. You can also unsubscribe from our mailing list by following the unsubscribe link in our emails.",
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Changes to This Privacy Policy",
      content:
        "We may update this Privacy Policy from time to time. We encourage you to check this page frequently for any changes.",
    },
  ];

  return (
    <>
      <ScrollToTop></ScrollToTop>
      <div className="min-h-screen" style={{ backgroundColor: "#132c56" }}>
        <div className="max-w-5xl mx-auto px-4 py-16 mt-11">
          <div
            className="fixed top-0 left-0 w-full z-50 bg-[#f7f7f7]
      px-4 sm:px-4 md:px-7 lg:px-10 xl:px-16
      border-b border-[#5bb5ea]/40
      shadow-[0_2px_10px_rgba(91,181,234,0.25)]"
          >
            <div className="flex justify-between items-center w-full">
              <div className="w-44 h-20 flex items-center">
                <Link to="/">
                  <img src="/images/logoscopy.png" alt="NanoCoders Logo" />
                </Link>
              </div>
              <div>
                <Link to="/">
                  <button
                    type="button"
                    className="bg-[#5bb5ea] text-[#132c56] border-2 border-[#132c56] font-medium px-3 md:px-7 rounded-full py-3 transition-all duration-300 group 
                            hover:bg-[#132c56] hover:text-[#5bb5ea] hover:scale-[1.05]"
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* Header */}
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 shadow-2xl"
              style={{ backgroundColor: "#5bb5ea" }}
            >
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-white leading-relaxed">
                Your privacy is important to us at{" "}
                <span className="font-bold" style={{ color: "#f2bf11" }}>
                  NanoCoder
                </span>
                . This Privacy Policy explains how we collect, use, disclose,
                and safeguard your information when you visit our coding academy
                website.
              </p>
            </div>
          </div>
          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="rounded-2xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl flex flex-col "
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  border: "3px solid #5bb5ea",
                }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div
                    className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: "#5bb5ea" }}
                  >
                    <div className="text-white">{section.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h2
                      className="text-2xl font-bold mb-4"
                      style={{ color: "#132c58" }}
                    >
                      <span style={{ color: "#f2bf11" }}>{index + 1}.</span>{" "}
                      {section.title}
                    </h2>
                    {section.content && (
                      <p
                        className="text-lg leading-relaxed"
                        style={{ color: "#132c58" }}
                      >
                        {section.content}
                      </p>
                    )}
                    {section.points && (
                      <ul className="space-y-3">
                        {section.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="text-lg leading-relaxed flex items-start gap-3"
                            style={{ color: "#132c58" }}
                          >
                            <span
                              className="font-bold text-xl mt-0.5"
                              style={{ color: "#f2bf11" }}
                            >
                              •
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div
            className="mt-16 rounded-2xl p-10 text-center shadow-2xl"
            style={{ backgroundColor: "#f2bf11" }}
          >
            <div
              className="inline-flex  items-center justify-center w-16 h-16 rounded-full mb-6"
              style={{ backgroundColor: "#132c58" }}
            >
              <Mail className="w-8 h-8" style={{ color: "#5bb5ea" }} />
            </div>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "#132c58" }}
            >
              Contact Us
            </h2>
            <p
              className="text-lg mb-6 font-medium"
              style={{ color: "#132c58" }}
            >
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <a
              href="mailto:official@nanocoder.org"
              className="inline-block font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{
                backgroundColor: "#132c58",
                color: "white",
              }}
            >
              official@nanocoder.org
            </a>
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center text-base">
            <p style={{ color: "#5bb5ea" }} className="font-medium">
              Last updated: January 2026
            </p>
            <p className="mt-2" style={{ color: "#f2bf11" }}>
              © 2026 NanoCoders Coding Academy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
