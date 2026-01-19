import React from "react";
import Image from "next/image";
import logo from "@/assets/landing/footerLogo.png";

function Footer() {
  return (
    <footer
      style={{
        background:
          "linear-gradient(216.46deg, #89FFFF -36.09%, #224998 110.03%), #D9D9D9",
      }}
      className="p-4"
    >
      <div className="mb-8">
        <Image src={logo.src} alt="logo" width={145.37} height={57} />
      </div>
      <div className="flex justify-between mb-8">
        <div>
          <h1 className="text-[20px] font-medium text-white leading-6">
            Quick Links
          </h1>
          <ul>
            <li className="text-[16px] font-normal text-white leading-6">
              Home
            </li>
            <li className="text-[16px] font-normal text-white leading-6">
              Services
            </li>
            <li className="text-[16px] font-normal text-white leading-6">
              Doctors
            </li>
            <li className="text-[16px] font-normal text-white leading-6">
              About Us
            </li>
            <li className="text-[16px] font-normal text-white leading-6">
              Blogs
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-[20px] font-medium text-white leading-6">
            Services
          </h1>
          <ul>
            <li className="text-[16px] font-normal text-white leading-6">
              Home
            </li>
            <li className="text-[16px] font-normal text-white leading-6">
              Services
            </li>
            <li className="text-[16px] font-normal text-white leading-6">
              Doctors
            </li>
            <li className="text-[16px] font-normal text-white leading-6">
              About Us
            </li>
            <li className="text-[16px] font-normal text-white leading-6">
              Blogs
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-[20px] font-medium text-white leading-6">Help</h1>
          <ul>
            <li className="text-[16px] font-normal text-white leading-6">
              FAQ
            </li>
            <li className="text-[16px] font-normal text-white leading-6">
              Help center
            </li>
            <li className="text-[16px] font-normal text-white leading-6">
              Support
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
