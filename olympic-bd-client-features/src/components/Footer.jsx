/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-800 via-red-700 to-red-600 text-white px-6 md:px-16 py-12 relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1: Logo & Description */}
        <div>
          <img
            src="vite.svg" // Replace with your actual logo
            alt="Olympic Industries Logo"
            className="h-12 mb-6 transition-transform duration-300 hover:scale-110"
          />
          <p className="text-sm leading-relaxed opacity-90">
            Olympic Industries Limited: Bangladesh's leading biscuit
            manufacturer, delivering quality and trust since 1979.
          </p>
          <div className="flex space-x-4 mt-6">
            <a
              href="#"
              className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition duration-300"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition duration-300"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition duration-300"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition duration-300"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">About Us</h4>
          <ul className="space-y-2 text-sm opacity-90">
            {[
              "Overview",
              "Leadership",
              "Facilities",
              "Sales and Distribution",
            ].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="hover:text-gray-200 transition duration-300 flex items-center"
                >
                  ➝ {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Investors */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Investors</h4>
          <ul className="space-y-2 text-sm opacity-90">
            {[
              "Corporate Governance",
              "Share Structure",
              "Annual Reports",
              "Financial Report",
              "Unclaimed Dividend",
            ].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="hover:text-gray-200 transition duration-300 flex items-center"
                >
                  ➝ {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: News */}
        <div>
          <h4 className="text-lg font-semibold mb-4">News</h4>
          <ul className="space-y-2 text-sm opacity-90">
            {[
              "Recent News",
              "Price Sensitive Information",
              "Material Information",
            ].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="hover:text-gray-200 transition duration-300 flex items-center"
                >
                  ➝ {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto mt-10 flex flex-col md:flex-row items-center justify-between text-sm">
        <div className="flex items-center space-x-6 mb-4 md:mb-0">
          <a
            href="tel:+8809-606565228"
            className="flex items-center space-x-2 hover:text-gray-200 transition duration-300"
          >
            <FaPhoneAlt /> <span>+88 09-606565228</span>
          </a>
          <a
            href="mailto:info@olympicbd.com"
            className="flex items-center space-x-2 hover:text-gray-200 transition duration-300"
          >
            <FaEnvelope /> <span>info@olympicbd.com</span>
          </a>
        </div>
        <div className="opacity-80 hover:opacity-100 transition duration-300">
          © 2025 Olympic Industries Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
