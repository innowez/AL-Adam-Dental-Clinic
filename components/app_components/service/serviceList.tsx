"use client";

import { useTranslations } from "next-intl";
import dece1 from "@/assets/service/dces1.png";
import dece2 from "@/assets/service/dces2.png";
import dece3 from "@/assets/service/dces3.png";
import dece4 from "@/assets/service/dces4.png";
import dece5 from "@/assets/service/dces5.png";
import dece6 from "@/assets/service/dces6.png";
import dece7 from "@/assets/service/dces7.png";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

function ServiceList() {
  const t = useTranslations("servicePage");

  const dcesList = [
    {
      image: dece1,
      title: t("generalDentistry"),
      description: t("generalDentistryDescription"),
      list: [
        t("generalDentistryList.0"),
        t("generalDentistryList.1"),
        t("generalDentistryList.2"),
        t("generalDentistryList.3"),
      ],
      searchKey: "General Dentistry",
    },
    {
      image: dece2,
      title: t("orthodontics"),
      description: t("orthodonticsDescription"),
      list: [
        t("orthodonticsList.0"),
        t("orthodonticsList.1"),
        t("orthodonticsList.2"),
      ],
      searchKey: "Orthodontics",
    },
    {
      image: dece3,
      title: t("cosmeticDentistry"),
      description: t("cosmeticDentistryDescription"),
      list: [
        t("cosmeticDentistryList.0"),
        t("cosmeticDentistryList.1"),
        t("cosmeticDentistryList.2"),
        t("cosmeticDentistryList.3"),
      ],
      searchKey: "Cosmetic Dentistry",
    },
    {
      image: dece4,
      title: t("pediatricDentistry"),
      description: t("pediatricDentistryDescription"),
      list: [
        t("pediatricDentistryList.0"),
        t("pediatricDentistryList.1"),
        t("pediatricDentistryList.2"),
        t("pediatricDentistryList.3"),
      ],
      searchKey: "Pediatric Dentistry",
    },
    {
      image: dece5,
      title: t("oralAndMaxillofacialSurgery"),
      description: t("oralAndMaxillofacialSurgeryDescription"),
      list: [
        t("oralAndMaxillofacialSurgeryList.0"),
        t("oralAndMaxillofacialSurgeryList.1"),
        t("oralAndMaxillofacialSurgeryList.2"),
      ],
      searchKey: "Oral and Maxillofacial Surgery",
    },
    {
      image: dece6,
      title: t("rootCanalTreatment"),
      description: t("rootCanalTreatmentDescription"),
      list: [
        t("rootCanalTreatmentList.0"),
        t("rootCanalTreatmentList.1"),
        t("rootCanalTreatmentList.2"),
      ],
      searchKey: "Root Canal Treatment",
    },
  ];

  const [isInput, setIsInput] = useState(false);
  const [searchKey, setSearchKey] = useState<string>("");
  const [filteredList, setFilteredList] = useState<typeof dcesList>(dcesList);

  const openInput = () => {
    setIsInput(true);
  };

  const closeInput = () => {
    setIsInput(false);
    setSearchKey("");
  };

  useEffect(() => {
    if (isInput) {
      document.getElementById("search")?.focus();
    }
  }, [isInput]);

  useEffect(() => {
    const filteredList = dcesList.filter((item) =>
      item.searchKey.toLowerCase().includes(searchKey.toLowerCase()),
    );
    setFilteredList(filteredList);
  }, [searchKey]);

  return (
    <section className="mb-7">
      <div className="flex justify-between items-end mb-4">
        <div className="hidden lg:block"></div>
        <div>
          <h1 className="lg:text-center text-[16px] lg:text-[48px] lg:leading-[69px] font-semibold text-secondary">
            {t("dentalCareForEverySmile")}
          </h1>
          <p className="lg:text-center text-[12px] lg:text-[20px] lg:leading-[29px] font-normal leading-[17px] text-secondary/75">
            {t("comprehensiveDentalCareWithModern")}{" "}
            <br className="lg:hidden" />
            {t("technologyAnd")} <br className="hidden lg:block" />
            {t("aPatientFirstApproach")}
          </p>
        </div>

        <div
          className={cn(
            "w-9 h-9 lg:w-12 lg:h-12 rounded-[8px] lg:rounded-[12px]  flex items-center justify-center relative bg-white",
            isInput ? "" : "border border-primary",
          )}
        >
          <input
            type="text"
            id="search"
            name="search"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            className={cn(
              "w-2xs h-9 lg:h-12 rounded-[8px] lg:rounded-[12px] border border-primary absolute right-0 p-2.5 bg-white",
              isInput ? "" : "hidden",
            )}
          />
          {isInput ? (
            <X
              className="lg:w-6 lg:h-6 cursor-pointer z-20 text-primary "
              onClick={closeInput}
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 20"
              className="lg:w-8 lg:h-8 cursor-pointer z-20 "
              onClick={openInput}
            >
              <path
                stroke="#24B6B6"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m17.5 17.5-3.617-3.617M9.167 15.833a6.667 6.667 0 1 0 0-13.333 6.667 6.667 0 0 0 0 13.333"
              ></path>
            </svg>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {filteredList.map((item, index) => (
          <div key={index} className="border border-secondary rounded-3xl p-2 ">
            <Image
              src={item.image.src}
              alt=""
              height={251}
              width={310}
              className="object-cover w-full h-[251px] mb-2 lg:mb-3 rounded-2xl "
            />
            <h1 className="text-[16px] lg:text-[24px] lg:leading-[35px] font-semibold text-secondary leading-[23px] mb-1 lg:mb-2">
              {item.title}
            </h1>
            <p className="text-[12px] lg:text-[20px] lg:leading-[29px] font-normal text-secondary/75 leading-[17px] mb-2 lg:mb-6">
              {item.description}
            </p>
            <ul className="mb-3 flex flex-col gap-2">
              {item.list.map((listItem, index) => (
                <li key={index} className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                    fill="none"
                    viewBox="0 0 9 9"
                    className="lg:w-5 lg:h-5"
                  >
                    <path
                      fill="#224998"
                      d="M2.519.814a2 2 0 0 1 3.22 0l.543.737a2 2 0 0 0 .424.424l.738.544a2 2 0 0 1 0 3.22l-.738.543a2 2 0 0 0-.424.424l-.543.738a2 2 0 0 1-3.22 0l-.544-.738a2 2 0 0 0-.424-.424L.814 5.74a2 2 0 0 1 0-3.22l.737-.544a2 2 0 0 0 .424-.424z"
                    ></path>
                  </svg>
                  <span className="text-[14px] lg:text-[20px] lg:leading-[29px] font-normal text-secondary/75 leading-[17px]">
                    {listItem}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceList;
