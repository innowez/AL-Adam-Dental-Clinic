"use client";

import { useTranslations } from "next-intl";

function FirstSection() {
  const t = useTranslations("firstSection");
  return (
    <section className="block lg:flex lg:justify-between items-center lg:mb-[72px]">
      <div className="hidden xl:block w-[437px]">
        <h1 className="text-[28px] font-semibold text-secondary leading-[40px] mb-5">
          {t("title1")} <br />
          {t("title2")}
        </h1>
        <h2 className="text-[20px] font-normal text-secondary leading-[29px]">
          {t("description")}
        </h2>
      </div>

      <div className="flex justify-between lg:gap-14 mb-7 w-full xl:w-auto">
        <div className="lg:px-10 min-w-[85px]">
          <h1 className="text-[20px] lg:text-4xl font-semibold text-secondary leading-6 lg:leading-[52px] text-center lg:text-left">
            15+
          </h1>
          <p className="text-[12px] lg:text-xl font-normal text-secondary leading-3 lg:leading-6 text-center lg:text-left">
            {t("experienced")} <br />
            {t("DentalSpecialists")}
          </p>
        </div>

        <div className="lg:px-10 min-w-[85px]">
          <div className="flex justify-center lg:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="25"
              fill="none"
              viewBox="0 0 26 29"
              className="lg:w-[69px] lg:h-[52px]"
            >
              <path
                fill="#224998"
                d="M23.174 22.604a.273.273 0 0 0 .36-.145l.289-.7a2.6 2.6 0 0 0 .008-1.98 2.6 2.6 0 0 0-1.376-1.417l-3.282-1.438V7.519c0-2.301-1.868-4.173-4.164-4.173a4.173 4.173 0 0 0-4.164 4.173h1.36a2.81 2.81 0 0 1 2.804-2.81 2.81 2.81 0 0 1 2.803 2.81V11.2h-4.545v1.364h4.545v3.764l-.76-.332a.3.3 0 0 0-.108-.023H9.852l-3.263-3.27a2.27 2.27 0 0 0-1.212-.636c.462-.36.76-.92.76-1.55v-.872a1.964 1.964 0 0 0-1.96-1.964l-1.361.001a.273.273 0 0 0-.273.273v4.253a.274.274 0 0 0 .273.273h.794a2.5 2.5 0 0 0-.255.221l-.519.52a.576.576 0 0 0 0 .811L7.9 19.107c.214.215.479.36.769.425l-.002 4.758H2.816v1.364h20.903V24.29h-4.546v-3.446zm-13.146 1.687v-4.31h2.558v4.31zm7.784 0h-3.865v-4.719h2.335l1.53.674z"
              ></path>
            </svg>
          </div>
          <p className="text-[12px] lg:text-xl font-normal text-secondary leading-3 lg:leading-6 text-center lg:text-left">
            {t("modern")} <br />
            {t("Equipment")}
          </p>
        </div>

        <div className="lg:px-10 min-w-[85px]">
          <h1 className="text-[20px] lg:text-4xl font-semibold text-secondary leading-6 lg:leading-[52px] text-center lg:text-left">
            5k+
          </h1>
          <p className="text-[12px] lg:text-xl font-normal text-secondary leading-3 lg:leading-6 text-center lg:text-left">
            {t("happy")} <br />
            {t("Patients")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
