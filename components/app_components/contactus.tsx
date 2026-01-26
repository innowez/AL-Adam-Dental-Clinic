import React from "react";
import mapImage from "@/assets/landing/mapImg.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Contactus() {
  const t = useTranslations("contactUs");
  return (
    <section className="mb-6 flex flex-col xl:flex-row gap-2">
      <div className="bg-[#EEFAFA] rounded-[16px] p-2 lg:p-9 mb-4 lg:mb-0 lg:w-full">
        <h1 className="text-[16px] lg:text-[48px] font-semibold text-secondary leading-6 lg:leading-[69px] mb-2">
          {t("title")}
        </h1>

        <h2 className="text-[12px] lg:text-[16px] font-normal text-secondary leading-4 lg:leading-[22px] mb-6">
          {t("description")}
        </h2>
        <div className="lg:h-[356px] sm:w-full sm:h-full " id="contact">
          <Image
            src={mapImage.src}
            alt="mapImage"
            width={704}
            height={359}
            className="rounded-[16px] h-[228px] w-[345px] sm:h-full sm:w-full xl:h-[359px] xl:w-[704px]"
          />
        </div>
      </div>
      <div className="bg-[#EEFAFA] rounded-[16px] py-4 px-4 lg:py-9 lg:px-12 lg:min-w-[548px] ">
        <form action="" className="flex flex-col gap-2 lg:gap-5">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="name"
              className="text-[16px] font-normal text-secondary leading-6"
            >
              {t("name")}
            </label>
            <input
              type="text"
              id="name"
              className="rounded-[8px] px-4 py-[11.5px] bg-white placeholder:text-[#22499866] "
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-[16px] font-normal text-secondary leading-6"
            >
              {t("email")}
            </label>
            <input
              type="email"
              id="email"
              className="rounded-[8px] px-4 py-[11.5px] bg-white placeholder:text-[#22499866] "
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="phone_number"
              className="text-[16px] font-normal text-secondary leading-6"
            >
              {t("phoneNumber")}
            </label>
            <input
              type="tel"
              id="phone_number"
              className="rounded-[8px] px-4 py-[11.5px] bg-white placeholder:text-[#22499866] "
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="message"
              className="text-[16px] font-normal text-secondary leading-6"
            >
              {t("message")}
            </label>
            <textarea
              name=""
              id="message"
              rows={4}
              className="rounded-[8px] px-4 py-[11.5px] bg-white placeholder:text-[#22499866] "
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary text-white rounded-full px-4 py-[11.5px] inline-block max-w-[110px]"
          >
            {t("submit")}
          </button>
        </form>
      </div>
    </section>
  );
}
