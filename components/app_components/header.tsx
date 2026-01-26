"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import mobileLogo from "@/assets/mobile_logo.png";
import logo from "@/assets/logo.png";
import { AnimatePresence, motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";

function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const isActive = (path: string) =>
    pathname === path ? "bg-[#24B6B614] rounded-full font-medium" : "";
  const [openMenu, setOpenMenu] = useState(false);

  const t = useTranslations("headerFooter");

  const handleScroll = () => {
    window.scrollTo({
      top: document.getElementById("contact")?.offsetTop || 0,
      behavior: "smooth",
    });
  };
  const isHomePage = pathname === "/";
  console.log(pathname);

  const currentLocale = locale;
  const nextLocale = currentLocale === "en" ? "ar" : "en";

  const onLanguageChange = () => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <header className="fixed xl:absolute top-0 left-0 right-0 z-50 shadow-lg bg-white xl:bg-transparent xl:shadow-none">
      <div className="flex justify-between items-center px-4 py-3 lg:py-7 lg:pl-12 lg:pr-14">
        <div className="flex gap-3 xl:hidden">
          <button
            onClick={() => setOpenMenu(true)}
            className="hamburger w-9 p-1 flex flex-col justify-between"
          >
            <div className="h-1 w-full bg-primary rounded-3xl"></div>
            <div className="h-1 w-full bg-primary rounded-3xl"></div>
            <div className="h-1 w-full bg-primary rounded-3xl"></div>
          </button>
          <div className="logo">
            <Image
              src={mobileLogo.src}
              alt="mobile-logo"
              width={81.54}
              height={28.82}
            />
          </div>
        </div>

        <div className="hidden xl:flex items-center gap-16">
          <Image src={logo.src} alt="logo" width={72} height={72} />
          <nav>
            <ul className="flex gap-1">
              <li
                className={`px-4 py-[9.5px] text-[20px] text-tertiary ${isActive(
                  "/",
                )}`}
              >
                <Link href="/">{t("home")}</Link>
              </li>
              <li
                className={`px-4 py-[9.5px] text-[20px] text-tertiary ${isActive(
                  "/services",
                )}`}
              >
                <Link href="/services">{t("services")}</Link>
              </li>
              <li
                className={`px-4 py-[9.5px] text-[20px] text-tertiary ${isActive(
                  "/doctors",
                )}`}
              >
                <Link href="/doctors">{t("doctors")}</Link>
              </li>
              <li
                className={`px-4 py-[9.5px] text-[20px] text-tertiary ${isActive(
                  "/about",
                )}`}
              >
                <Link href="/about">{t("about")}</Link>
              </li>
              <li
                className={`px-4 py-[9.5px] text-[20px] text-tertiary ${isActive(
                  "/blog",
                )}`}
              >
                <Link href="/blog">{t("blog")}</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex gap-1 lg:gap-2">
          <button
            className="hidden lg:flex items-center gap-2 mr-0 lg:mr-4 cursor-pointer "
            onClick={onLanguageChange}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="20"
              fill="none"
              viewBox="0 0 23 20"
            >
              <path
                fill={isHomePage ? "#fff" : "#2c2e83"}
                d="m10.9 20 4.55-12h2.1l4.55 12H20l-1.075-3.05h-4.85L13 20zM3 17l-1.4-1.4 5.05-5.05a11.6 11.6 0 0 1-1.588-2Q4.349 7.425 3.75 6h2.1q.5.975 1 1.7t1.2 1.45q.825-.825 1.713-2.313T11.1 4H0V2h7V0h2v2h7v2h-2.9q-.525 1.8-1.575 3.7T9.45 10.6l2.4 2.45-.75 2.05-3.05-3.125zm11.7-1.8h3.6l-1.8-5.1z"
              ></path>
            </svg>
            <span
              className={`${isHomePage ? "text-white" : "text-tertiary"} font-medium text-[20px]`}
            >
              {nextLocale === "ar" ? "العربية" : "English"}
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
          <button
            onClick={handleScroll}
            className="h-9 lg:h-12 px-2 lg:px-5 lg:text-xl flex items-center justify-center rounded-full bg-primary text-white"
          >
            {t("contactUs")}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {openMenu && (
          <>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-40 h-screen "></div>
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="absolute top-0 left-0 z-50 w-full h-full"
            >
              <div className="absolute top-0 left-0  z-50 h-[calc(100vh-80px)] w-[90%] bg-white">
                <div className="bg-white shadow-lg px-4 py-3 mb-7 ">
                  <div className="flex gap-3 items-center">
                    <button onClick={() => setOpenMenu(false)} className="logo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        fill="none"
                        viewBox="0 0 22 22"
                      >
                        <path
                          fill="#24B6B6"
                          d="M11 13.342 2.802 21.54q-.46.46-1.17.46-.712 0-1.172-.46T0 20.369q0-.712.46-1.171L8.658 11 .46 2.802Q0 2.342 0 1.632 0 .92.46.46T1.631 0t1.171.46L11 8.658 19.198.46q.46-.46 1.17-.46.712 0 1.172.46T22 1.631q0 .711-.46 1.171L13.342 11l8.198 8.198q.46.46.46 1.17 0 .712-.46 1.172t-1.171.46q-.712 0-1.171-.46z"
                        ></path>
                      </svg>
                    </button>
                    <div className="flex gap-2">
                      <h1 className="text-[20px] font-medium text-secondary">
                        Menu
                      </h1>
                    </div>
                  </div>
                </div>

                <nav>
                  <ul className="flex flex-col gap-5 px-4">
                    <li>
                      <Link
                        href="/"
                        className="text-[20px] text-secondary"
                        onClick={() => setOpenMenu(false)}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services"
                        className="text-[20px] text-secondary"
                        onClick={() => setOpenMenu(false)}
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/doctors"
                        className="text-[20px] text-secondary"
                        onClick={() => setOpenMenu(false)}
                      >
                        Doctors
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        className="text-[20px] text-secondary"
                        onClick={() => setOpenMenu(false)}
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className="text-[20px] text-secondary"
                        onClick={() => setOpenMenu(false)}
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
