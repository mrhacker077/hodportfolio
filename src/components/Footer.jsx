import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12 bg-red-700">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/parashuram.talawar.1?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://gpt.karnataka.gov.in/kptmangalore/public/en"
                target="_blank"
                rel="noopener noreferrer"
              >
              <FaInstagram size={24} /></a>
              <a
                href="https://gpt.karnataka.gov.in/kptmangalore/public/en"
                target="_blank"
                rel="noopener noreferrer"
              >
              <FaLinkedinIn size={24} /></a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 KPT Mangalore All rights reserved.
              </p>
              <p className="text-sm">Developed By ❤️ KPT CSE Students.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
