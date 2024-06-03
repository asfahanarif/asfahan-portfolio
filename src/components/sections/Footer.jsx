import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaGithub
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <footer className="py-7 bg-transparent ">
        <div className="max-w-screen-3xl container mx-auto px-4 md:px-40">
<div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a href="https://wa.me/+923024094921" target="_blank">
                <FaWhatsapp size={24} />
              </a>
              <a href="https://www.facebook.com/axnhere" target="_blank">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/asfahanarif" target="_blank">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.twitter.com/asfahanarif" target="_blank">
                <FaTwitter size={24} />
              </a>
              <a href="https://github.com/asfahanarif" target="_blank">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/asfahanarif" target="_blank">
                <FaLinkedinIn size={24} />
              </a>
          </div>
            </div>
              <p className="text-sm text-gray-400 mt-4">
                &copy; 2024 Asfahan Arif | All rights reserved
              </p>
              <p className="text-sm text-gray-400">Powered by AxN</p>
            </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
