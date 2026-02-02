"use client";

import Image from "next/image";
import grid1 from "@/assets/aboutus/ovm1.png";
import grid2 from "@/assets/aboutus/ovm2.png";
import { useTranslations } from "next-intl";

function OurMissionVision() {
  const t = useTranslations("aboutPage");
  const handleScroll = () => {
    window.scrollTo({
      top: document.getElementById("contact")?.offsetTop || 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="xl:px-36 xl:mb-20 mb-8">
      <div className="flex justify-center md:justify-between items-center gap-2 relative mb-3 md:mb-10">
        <div>
          <span className="text-tertiary text-[12px] lg:text-xl rounded-full border border-tertiary px-4 py-0.5 inline-block">
            {t("missionVision")}
          </span>
        </div>
        <button
          className="hidden h-9 lg:h-auto text-[14px] md:flex items-center justify-center rounded-full bg-primary text-white lg:text-xl px-4 lg:px-5 lg:py-2"
          onClick={() => handleScroll()}
        >
          {t("contactUs")}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-5 gap-y-3 lg:gap-x-24 lg:gap-y-12">
        <div className="md:row-span-2 ">
          <h1 className=" text-[20px] lg:text-[48px] font-semibold leading-[29px] lg:leading-[69px] text-center md:text-left text-secondary mb-2 lg:mb-6">
            {t("vision")}
          </h1>
          <h2 className="text-base lg:text-[24px] font-semibold leading-[23px] lg:leading-[35px] text-secondary text-center md:text-left ">
            {t("visionTitle")}
          </h2>
          <p className="text-[12px] lg:text-[20px] leading-[17px] lg:leading-[29px] text-secondary/60 text-center md:text-left">
            {t("visionDescription")}
          </p>
        </div>
        <div className="md:row-span-3 md:col-start-1 md:row-start-3 relative h-[405px] md:h-[567px]">
          <Image
            className="w-full h-full object-cover rounded-4xl absolute"
            fill
            src={grid2}
            alt="grid1"
          />
        </div>

        <div className="order-4 md:order-3 md:row-span-3 md:col-start-2 md:row-start-1 relative h-[405px] lg:h-[567px]">
          <Image
            className="w-full h-full object-cover rounded-4xl absolute"
            fill
            src={grid1}
            alt="grid2"
          />
        </div>

        <div className="order-3 md:order-4 md:row-span-2 md:col-start-2 md:row-start-4 ">
          <h1 className="text-[20px] lg:text-[48px] font-semibold leading-[29px] lg:leading-[69px] text-center md:text-left text-secondary mb-2 lg:mb-6">
            {t("mission")}
          </h1>

          <h2 className="text-base lg:text-[24px] font-semibold leading-[23px] lg:leading-[35px] text-secondary text-center md:text-left">
            {t("missionTitle")}
          </h2>

          <p className="text-[12px] lg:text-[20px] leading-[17px] lg:leading-[29px] text-secondary/60 text-center md:text-left">
            {t("missionDescription")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurMissionVision;
