import React from "react";
import Image from "next/image";
import Link from "next/link";
import mobileLogo from "@/assets/mobile_logo.png";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="flex justify-between px-4 py-3">
        <div className="flex gap-3">
          <div className="hamburger w-9 p-1 flex flex-col justify-between">
            <div className="h-1 w-full bg-primary rounded-3xl"></div>
            <div className="h-1 w-full bg-primary rounded-3xl"></div>
            <div className="h-1 w-full bg-primary rounded-3xl"></div>
          </div>
          <div className="logo">
            <Image
              src={mobileLogo.src}
              alt="mobile-logo"
              width={81.54}
              height={28.82}
            />
          </div>
        </div>
        <div className="flex gap-1">
          <button className="w-9 h-9 flex items-center justify-center rounded-full bg-[#01DF3C]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="none"
              viewBox="0 0 15 15"
            >
              <path
                fill="#fff"
                d="M12.75 2.183A7.36 7.36 0 0 0 7.493 0C3.396 0 .06 3.338.06 7.433c0 1.312.345 2.587.99 3.712L0 15l3.938-1.035a7.43 7.43 0 0 0 3.554.908c4.096 0 7.433-3.338 7.433-7.433a7.39 7.39 0 0 0-2.175-5.257m-5.257 11.43c-1.11 0-2.198-.3-3.15-.863l-.226-.135-2.34.615.623-2.28-.15-.232a6.2 6.2 0 0 1-.945-3.285 6.19 6.19 0 0 1 6.18-6.18c1.65 0 3.202.645 4.365 1.815a6.14 6.14 0 0 1 1.808 4.372c.014 3.405-2.76 6.173-6.165 6.173m3.39-4.62c-.188-.09-1.103-.54-1.268-.608-.172-.06-.293-.09-.42.09-.127.188-.48.608-.585.728-.105.127-.217.142-.405.045-.187-.09-.787-.293-1.492-.923-.556-.495-.923-1.102-1.035-1.29-.106-.187-.016-.285.082-.382.083-.083.188-.218.277-.323s.128-.187.188-.307c.06-.128.03-.233-.015-.323s-.42-1.005-.57-1.38c-.15-.36-.308-.315-.42-.322h-.36a.67.67 0 0 0-.495.232c-.165.188-.645.638-.645 1.553s.668 1.8.757 1.92c.09.127 1.313 2.002 3.173 2.805.442.195.787.307 1.057.39.443.142.848.12 1.17.075.36-.053 1.103-.45 1.253-.886.157-.434.157-.802.105-.884-.053-.083-.165-.12-.352-.21"
              ></path>
            </svg>
          </button>
          <button className="h-9 w-28 flex items-center justify-center rounded-full bg-primary text-white">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
