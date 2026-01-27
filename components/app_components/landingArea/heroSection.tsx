"use client";

import Image from "next/image";
import arabi1 from "@/assets/landing/arabi1.png";
import arabi2 from "@/assets/landing/arabi2.png";
import arabi3 from "@/assets/landing/arabi3.png";
import heroImage from "@/assets/landing/hero_Image.png";

import Contactus from "../contactus";
import Testmonies from "../testmonies";
import Doctors from "./doctors";
import { useTranslations } from "next-intl";
import FirstSection from "./firstSection";
import Service from "./service";
import Whyus from "./whyus";

function HeroSection() {
  const t = useTranslations("hero");

  const handleScroll = () => {
    window.scrollTo({
      top: document.getElementById("contact")?.offsetTop || 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-[60px] xl:mt-0 p-4 xl:pt-5 xl:px-12 ">
      <section className="flex mb-7 gap-2 sm:gap-4 lg:mb-[72px]">
        <div
          className="px-2 py-2.5 lg:px-12 xl:pt-[111px] md:mt-[10px] lg:mt-[50px] xl:mt-[90px] rounded-[26px] max-w-[200px] sm:max-w-full sm:w-1/2 "
          style={{
            background:
              "linear-gradient(180deg, rgba(36, 182, 182, 0.016) 0%, rgba(36, 182, 182, 0.08) 100%)",
          }}
        >
          <div className="flex items-center gap-2 mb-5 ">
            <div className="flex -space-x-2 lg:-space-x-5">
              <div className="w-[22.8px] h-[22.8px] lg:w-[48px] lg:h-[48px] bg-[#FFA142] rounded-full overflow-hidden ">
                <Image
                  src={arabi2.src}
                  alt="arabi2"
                  width={45.28}
                  height={22.18}
                  className="object-cover"
                />
              </div>
              <div className="w-[22.8px] h-[22.8px] lg:w-[48px] lg:h-[48px] bg-[#92EA5B] rounded-full overflow-hidden ">
                <Image
                  src={arabi1.src}
                  alt="arabi1"
                  width={45.28}
                  height={22.18}
                  className="object-cover"
                />
              </div>
              <div className="w-[22.8px] h-[22.8px] lg:w-[48px] lg:h-[48px] bg-[#AE78D8] rounded-full overflow-hidden ">
                <Image
                  src={arabi3.src}
                  alt="arabi3"
                  width={45.28}
                  height={22.18}
                  className=" object-cover"
                />
              </div>
            </div>
            <div>
              <h1 className="text-[11.09px] lg:text-2xl font-bold text-secondary leading-4 lg:leading-6 ">
                5K+
              </h1>
              <p className="text-[5.54px] lg:text-xs font-semibold text-secondary leading-2 lg:leading-4 ">
                {t("happy")}
                <br />
                {t("client")}
              </p>
            </div>
          </div>
          <h1 className="text-[16px] lg:text-5xl font-semibold text-secondary leading-[23px] lg:leading-[54px] mb-2 lg:mb-5">
            {t("title")}
          </h1>

          <p className="text-[12px] text-lg lg:text-xl font-normal text-secondary leading-[17px] lg:leading-[22px] mb-5 lg:mb-8">
            {t("description")}
          </p>

          <button
            className="h-9 lg:h-auto text-[14px] flex items-center justify-center rounded-full bg-primary text-white lg:text-xl px-4 lg:px-5 lg:py-2"
            onClick={() => handleScroll()}
          >
            {t("contactUs")}
          </button>
        </div>
        <div className="relative rounded-[26px] overflow-hidden min-w-[139px] w-full min-h-[250px] md:mt-[10px] lg:mt-[50px] xl:mt-0 lg:h-[610px] sm:w-1/2">
          <Image
            src={heroImage.src}
            alt="heroImage"
            fill
            className="object-cover lg:object-center lg:w-full lg:h-auto"
          />
        </div>
      </section>

      <FirstSection />

      {/* Service Container */}
      <Service />

      {/*Why patients choose us */}
      <Whyus />

      {/* Docters */}
      <Doctors />

      {/* Testimonials */}
      <Testmonies />

      {/* Contact Us */}
      <Contactus />
    </div>
  );
}

export default HeroSection;
