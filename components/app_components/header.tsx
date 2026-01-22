"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import mobileLogo from "@/assets/mobile_logo.png";
import logo from "@/assets/logo.png";

function Header() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path ? "bg-[#24B6B614] rounded-full font-medium" : "";

  return (
    <header className="fixed lg:absolute top-0 left-0 right-0 z-50 shadow-lg bg-white lg:bg-transparent lg:shadow-none">
      <div className="flex justify-between items-center px-4 py-3 lg:py-7 lg:pl-12 lg:pr-14">
        <div className="flex gap-3 lg:hidden">
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

        <div className="hidden lg:flex items-center gap-16">
          <Image
            src={logo.src}
            alt="logo"
            width={72}
            height={72}
          />
          <nav>
            <ul className="flex gap-1">
              <li className={`px-4 py-[9.5px] text-[20px] text-tertiary ${isActive('/')}`}>
                <Link href="/">Home</Link></li>
              <li className={`px-4 py-[9.5px] text-[20px] text-tertiary ${isActive('/services')}`}>
                <Link href="/services">Services</Link></li>
              <li className={`px-4 py-[9.5px] text-[20px] text-tertiary ${isActive('/doctors')}`}>
                <Link href="/doctors">Doctors</Link></li>
              <li className={`px-4 py-[9.5px] text-[20px] text-tertiary ${isActive('/about')}`}>
                <Link href="/about">About Us</Link></li>
              <li className={`px-4 py-[9.5px] text-[20px] text-tertiary ${isActive('/blog')}`}>
                <Link href="/blog">Blog</Link></li>
            </ul>
          </nav>
        </div>


        <div className="flex gap-1 lg:gap-2">
          <button className="hidden lg:flex items-center gap-2 mr-0 lg:mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="20"
              fill="none"
              viewBox="0 0 23 20"
            >
              <path
                fill="#fff"
                d="m10.9 20 4.55-12h2.1l4.55 12H20l-1.075-3.05h-4.85L13 20zM3 17l-1.4-1.4 5.05-5.05a11.6 11.6 0 0 1-1.588-2Q4.349 7.425 3.75 6h2.1q.5.975 1 1.7t1.2 1.45q.825-.825 1.713-2.313T11.1 4H0V2h7V0h2v2h7v2h-2.9q-.525 1.8-1.575 3.7T9.45 10.6l2.4 2.45-.75 2.05-3.05-3.125zm11.7-1.8h3.6l-1.8-5.1z"
              ></path>
            </svg>
            <span className="text-white font-medium text-[20px]">
              العربية
            </span>
          </button>
          <button className="w-9 h-9 lg:w-12 lg:h-12 flex items-center justify-center rounded-full bg-[#01DF3C]">
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
          <button className="h-9 lg:h-12 px-2 lg:px-5 lg:text-xl flex items-center justify-center rounded-full bg-primary text-white">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

