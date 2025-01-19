import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-[#e2e8f0] py-8 px-4 text-center">
      <div className="container mx-auto flex flex-col items-center gap-6 md:flex-row md:justify-between md:items-start md:text-left">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#94a3b8] uppercase font-poppins">
          Hamsafran Travels
        </h1>

        {/* Contact Info */}
        <div className="text-base">
          <p className="flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-[#38bdf8]" />
            <a
              href="tel:+917829881674"
              className="hover:text-[#38bdf8] transition-colors"
            >
              +91 9596319497
            </a>
            <a
              href="tel:+917829881674"
              className="hover:text-[#38bdf8] transition-colors"
            >
              +91 8491926174
            </a>
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-[#38bdf8]" />
            <a
              href="mailto:navee1110@gmail.com"
              className="hover:text-[#38bdf8] transition-colors"
            >
              hamsafrantravels@gmail.com
            </a>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 text-2xl">
          <a
            href="https://www.instagram.com/hamsafran_travels?igsh=MW9sZTRtbTVxYjN1cQ=="
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#38bdf8] hover:text-[#fbbf24] transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/your-profile"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#38bdf8] hover:text-[#fbbf24] transition-colors"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.twitter.com/your-profile"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#38bdf8] hover:text-[#fbbf24] transition-colors"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 text-sm text-[#94a3b8]">
        <p>© 2024 Hamsafran Travels. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
