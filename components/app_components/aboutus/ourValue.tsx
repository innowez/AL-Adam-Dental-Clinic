"use client";

import Image from "next/image";
import ourValueImg from "@/assets/aboutus/ourvalue.png";
import { useTranslations } from "next-intl";

export default function OurValue() {
  const t = useTranslations("aboutPage");
  const handleScroll = () => {
    window.scrollTo({
      top: document.getElementById("contact")?.offsetTop || 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="mb-10 lg:mb-20">
      <div className="relative h-[414px] lg:h-[395px] xl:h-[495px]">
        <Image
          src={ourValueImg.src}
          alt="ourValueImg"
          fill
          className="object-cover w-full h-full rounded-[24px]"
        />
        <div className="absolute top-0 left-0 w-full h-full p-4 sm:p-6 md:p-8 xl:p-10 ">
          <div className="flex flex-col gap-6 lg:justify-between h-full  ">
            <div className="">
              <span className="text-[12px] sm:text-[16px] md:text-[18px] xl:text-[20px] leading-[29px] text-white rounded-full border border-white px-2  lg:px-4 lg:py-0.5 inline-block mb-6">
                {t("ourValue")}
              </span>
              <h2 className="text-[20px] sm:text-[24px] md:text-[28px] xl:text-[48px] font-semibold leading-[29px] sm:leading-[35px] md:leading-[40px] xl:leading-[69px] text-white">
                {t("ourValueDesc1")} <br />
                {t("ourValueDesc2")}
              </h2>
            </div>

            <div className="ml-4 lg:ml-20">
              <ul className="text-[16px] md:text-[18px] xl:text-[20px] lg:leading-[29px] text-white list-disc ">
                <li>{t("patientFirst")}</li>
                <li>{t("clinicalExcellence")}</li>
                <li>{t("transparency")}</li>
                <li>{t("comfortCare")}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-full md:w-[67%] xl:w-[60%] p-4 sm:p-6 md:p-8 xl:p-10 ">
          <div className="flex flex-col lg:flex-row lg:items-end items-center justify-between gap-6 lg:gap-0 w-full ">
            <div>
              <button
                className="text-xs lg:text-base bg-white text-black rounded-full px-4 py-2"
                onClick={() => handleScroll()}
              >
                {t("contactUs")}
              </button>
            </div>

            <p className="text-[12px] sm:text-[16px] md:text-[18px] xl:text-[20px] leading-[17px] sm:leading-[24px] xl:leading-[29px] text-center lg:text-left text-white max-w-[433px]">
              {t("ourValuecontactDis")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
