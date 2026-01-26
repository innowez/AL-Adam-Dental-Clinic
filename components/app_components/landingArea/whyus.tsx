import Image from "next/image";
import React from "react";
import smileFace from "@/assets/landing/smileFace.png";
import { useTranslations } from "next-intl";

function Whyus() {
  const t = useTranslations("whyUs");

  const whyChoose = [
    {
      title: t("experiencedSpecialists"),
      description: t("caringDentalServices"),
    },
    {
      title: t("patientComfortFirst"),
      description: t("gentleProcedures"),
    },
    {
      title: t("strictHygieneStandards"),
      description: t("internationalSterilization"),
    },
    {
      title: t("transparentCommunication"),
      description: t("clearExplanations"),
    },
  ];
  const handleScroll = () => {
    window.scrollTo({
      top: document.getElementById("contact")?.offsetTop || 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="mb-6 lg:mb-16">
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div>
          <h2 className="text-tertiary text-[12px] lg:text-xl rounded-full border border-tertiary px-4 py-0.5 mb-4 inline-block">
            {t("title")}
          </h2>

          <h2 className="text-[16px] lg:text-[48px] font-semibold text-secondary leading-6 lg:leading-[69px] mb-2">
            {t("description")}
          </h2>
        </div>

        <div className="flex justify-between items-center lg:items-start flex-row xl:flex-col gap-2 mb-4 w-full xl:max-w-[437px]">
          <p className="text-[12px] lg:text-[20px] font-normal text-[#22499899] leading-3 lg:leading-[29px]">
            {t("thoughtfulDentalCare")}
          </p>
          <button
            className="px-3.5 py-1 h-9 rounded-full bg-primary text-white min-w-[99px] lg:max-w-[133px] text-sm "
            onClick={() => handleScroll()}
          >
            {t("contactUs")}
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse lg:gap-4">
        <div className="mb-3 lg:mb-0">
          <Image
            src={smileFace.src}
            alt="smileFace"
            className="object-cover w-full rounded-[20px] h-[212px] lg:w-[626px] lg:h-[528px]"
            width={361}
            height={212}
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          {whyChoose.map((item, ind) => (
            <div
              key={ind}
              className="p-2.5 lg:p-7 rounded-3xl bg-[#24B6B614] flex flex-col justify-between "
            >
              <div className="flex justify-end w-full pr-2 pt-2 mb-6 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  fill="none"
                  viewBox="0 0 21 21"
                  className="lg:w-10 lg:h-10"
                >
                  <path
                    fill="#224998"
                    d="M19.31 0c.762-.011 1.39.59 1.402 1.342L21 19.049a1.37 1.37 0 0 1-1.358 1.383 1.374 1.374 0 0 1-1.403-1.341l-.234-14.42L2.372 20.586c-.53.54-1.404.553-1.952.03a1.35 1.35 0 0 1-.031-1.927L16.022 2.774 1.41 2.991A1.374 1.374 0 0 1 .008 1.65 1.37 1.37 0 0 1 1.366.267z"
                  ></path>
                </svg>
              </div>
              <div>
                <h1 className="text-[16px] lg:text-xl font-semibold text-secondary leading-[23px] lg:leading-[29px] mb-2">
                  {item.title}
                </h1>
                <p className="text-[12px] lg:text-[16px] font-normal text-secondary leading-[17px] lg:leading-[23px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Whyus;
