import React from "react";
import Image from "next/image";
import logo from "@/assets/landing/footerLogo.png";
import Link from "next/link";
import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations("headerFooter");
  return (
    <footer
      style={{
        background:
          "linear-gradient(216.46deg, #89FFFF -36.09%, #224998 110.03%), #D9D9D9",
      }}
      className="p-4 lg:p-12 relative bottom-0 w-full"
    >
      <div className="flex flex-col lg:flex-row justify-between ">
        <div className="mb-8">
          <Image
            src={logo.src}
            alt="logo"
            width={145.37}
            height={57}
            className="lg:w-[191px] lg:h-[75px] lg:mb-12"
          />
          <div className="mb-5 lg:block hidden">
            <h3 className="text-[16px] lg:text-[28px] font-medium text-white leading-6 lg:leading-[40px] mb-3">
              {t("subscribe")}
            </h3>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-white rounded-full px-4 py-2 w-full lg:w-[298px]"
              />
              <button className="bg-primary text-white rounded-full px-4 py-2 ">
                {t("subscribe")}
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-8 lg:max-w-[552px] lg:w-full">
          <div>
            <h1 className="text-[20px] font-medium text-white leading-6">
              {t("quickLinks")}
            </h1>
            <ul>
              <li className="text-[16px] font-normal text-white leading-6">
                <Link href="/">{t("home")}</Link>
              </li>
              <li className="text-[16px] font-normal text-white leading-6">
                <Link href="/services">{t("services")}</Link>
              </li>
              <li className="text-[16px] font-normal text-white leading-6">
                <Link href="/doctors">{t("doctors")}</Link>
              </li>
              <li className="text-[16px] font-normal text-white leading-6">
                <Link href="/about">{t("aboutUs")}</Link>
              </li>
              <li className="text-[16px] font-normal text-white leading-6">
                <Link href="/blog">{t("blogs")}</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-[20px] font-medium text-white leading-6">
              {t("services")}
            </h1>
            <ul>
              <li className="text-[16px] font-normal text-white leading-6">
                {t("home")}
              </li>
              <li className="text-[16px] font-normal text-white leading-6">
                {t("services")}
              </li>
              <li className="text-[16px] font-normal text-white leading-6">
                {t("doctors")}
              </li>
              <li className="text-[16px] font-normal text-white leading-6">
                {t("aboutUs")}
              </li>
              <li className="text-[16px] font-normal text-white leading-6">
                {t("blogs")}
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-[20px] font-medium text-white leading-6">
              {t("help")}
            </h1>
            <ul>
              <li className="text-[16px] font-normal text-white leading-6">
                {t("faq")}
              </li>
              <li className="text-[16px] font-normal text-white leading-6">
                {t("helpCenter")}
              </li>
              <li className="text-[16px] font-normal text-white leading-6">
                {t("support")}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-5 lg:hidden">
        <h3 className="text-[16px] font-medium text-white leading-6 mb-3">
          Subscribe Our Newsletter
        </h3>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-white rounded-full px-4 py-2 w-full"
          />
          <button className="bg-primary text-white rounded-full px-4 py-2 ">
            {t("submit")}
          </button>
        </div>
      </div>

      <hr className="text-white mb-5" />

      <div className="flex justify-between items-center">
        <p className="text-[12px] lg:text-base font-normal text-white leading-4 lg:leading-[23px] ">
          Copyright ©2026 Al Adam Dental Clinic, Inc. All Rights Reserved.
        </p>
        <div className="flex gap-2">
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="none"
              viewBox="0 0 15 15"
            >
              <path
                fill="#224998"
                d="M12.75 2.183A7.36 7.36 0 0 0 7.493 0C3.396 0 .06 3.338.06 7.433c0 1.312.345 2.587.99 3.712L0 15l3.938-1.035a7.43 7.43 0 0 0 3.554.908c4.096 0 7.433-3.338 7.433-7.433a7.39 7.39 0 0 0-2.175-5.257m-5.257 11.43c-1.11 0-2.198-.3-3.15-.863l-.226-.135-2.34.615.623-2.28-.15-.232a6.2 6.2 0 0 1-.945-3.285 6.19 6.19 0 0 1 6.18-6.18c1.65 0 3.202.645 4.365 1.815a6.14 6.14 0 0 1 1.808 4.372c.014 3.405-2.76 6.173-6.165 6.173m3.39-4.62c-.188-.09-1.103-.54-1.268-.608-.172-.06-.293-.09-.42.09-.127.188-.48.608-.585.728-.105.127-.217.142-.405.045-.187-.09-.787-.293-1.492-.923-.556-.495-.923-1.102-1.035-1.29-.106-.187-.016-.285.082-.382.083-.083.188-.218.277-.323s.128-.187.188-.307c.06-.128.03-.233-.015-.323s-.42-1.005-.57-1.38c-.15-.36-.308-.315-.42-.322h-.36a.67.67 0 0 0-.495.232c-.165.188-.645.638-.645 1.553s.668 1.8.757 1.92c.09.127 1.313 2.002 3.173 2.805.442.195.787.307 1.057.39.443.142.848.12 1.17.075.36-.053 1.103-.45 1.253-.886.157-.434.157-.802.105-.884-.053-.083-.165-.12-.352-.21"
              ></path>
            </svg>
          </div>

          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="none"
              viewBox="0 0 15 15"
            >
              <path
                fill="#224998"
                d="M15 7.5C15 3.36 11.64 0 7.5 0S0 3.36 0 7.5c0 3.63 2.58 6.653 6 7.35v-5.1H4.5V7.5H6V5.625A2.63 2.63 0 0 1 8.625 3H10.5v2.25H9a.75.75 0 0 0-.75.75v1.5h2.25v2.25H8.25v5.213A7.5 7.5 0 0 0 15 7.5"
              ></path>
            </svg>
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 18 18"
            >
              <g clipPath="url(#clip0_199_641)">
                <mask
                  id="mask0_199_641"
                  width="18"
                  height="18"
                  x="0"
                  y="0"
                  maskUnits="userSpaceOnUse"
                  style={{ maskType: "luminance" }}
                >
                  <path fill="#fff" d="M0 0h18v18H0z"></path>
                </mask>
                <g mask="url(#mask0_199_641)">
                  <path
                    fill="#224998"
                    d="M14.175.843h2.76l-6.03 6.91L18 17.156h-5.554l-4.354-5.702-4.975 5.702H.354l6.449-7.392L0 .844h5.696l3.929 5.212zm-.97 14.657h1.53L4.86 2.413H3.22z"
                  ></path>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_199_641">
                  <path fill="#fff" d="M0 0h18v18H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
