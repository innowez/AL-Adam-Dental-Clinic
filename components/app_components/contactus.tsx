import React from "react";
import mapImage from "@/assets/landing/mapImg.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Contactus() {
  const t = useTranslations("contactUs");
  return (
    <section className="mb-6 flex flex-col md:flex-row gap-2">
      <div className="bg-[#EEFAFA] rounded-[16px] p-2 md:p-4 lg:p-9 mb-4 md:mb-0 w-full md:w-1/2 lg:w-[60%] flex flex-col justify-between">
        <div className="flex flex-col justify-between">
          <h1 className="text-[16px] sm:text-[24px] lg:text-[32px] xl:text-[48px] font-semibold text-secondary leading-6 lg:leading-[69px] mb-2">
            {t("title")}
          </h1>

          <h2 className="text-[12px] sm:text-[16px] xl:text-[20px] font-normal text-secondary leading-4 sm:leading-[18px] lg:leading-[22px] mb-6">
            {t("description")}
          </h2>

          <div></div>
        </div>
        <div
          className="lg:h-[356px] h-[228px] w-full md:h-[359px]  relative "
          id="contact"
        >
          <Image
            src={mapImage.src}
            alt="mapImage"
            fill
            className="absolute object-cover top-0 left-0 bottom-0 right-0 rounded-[16px] h-full w-full "
          />
        </div>
      </div>
      <div className="bg-[#EEFAFA] rounded-[16px] py-4 px-4 lg:py-9 lg:px-12 md:w-1/2 lg:w-[548px] ">
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
              placeholder={t("pname")}
              required
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
              placeholder={t("pemail")}
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
              placeholder={t("pphoneNumber")}
              required
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
              placeholder={t("pmessage")}
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
