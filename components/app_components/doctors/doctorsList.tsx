"use client";

import dotr1 from "@/assets/doctors/dotr1.png";
import dotr2 from "@/assets/doctors/dotr2.png";
import dotr3 from "@/assets/doctors/dotr3.png";
import dotr4 from "@/assets/doctors/dotr4.png";
import dotr5 from "@/assets/doctors/dotr5.png";
import dotr6 from "@/assets/doctors/dotr6.png";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export default function DoctorsList() {
  const t = useTranslations("doctorPage");
  const doctorsList = [
    {
      image: dotr1,
      name: t("dr1Name"),
      specialization: t("dr1Specialty"),
      istxtBlack: "lg:text-black lg:fill-black",
      searchKey: "Dr. Ahmed Al-Harthy د. أحمد الحارثي",
    },
    {
      image: dotr2,
      name: t("dr2Name"),
      specialization: t("dr2Specialty"),
      istxtBlack: "",
      searchKey: "Dr. Amina Al-Harthy د. أمينة الحارثي (MBBS)",
    },
    {
      image: dotr3,
      name: t("dr3Name"),
      specialization: t("dr3Specialty"),
      istxtBlack: "",
      searchKey: "Dr. Fatima Al-Balushi د. فاطمة البلوشي (MBBS)",
    },
    {
      image: dotr4,
      name: t("dr4Name"),
      specialization: t("dr4Specialty"),
      istxtBlack: "lg:text-black lg:fill-black",
      searchKey: "Dr. Mohammed (MBBS) د. محمد",
    },
    {
      image: dotr5,
      name: t("dr1Name"),
      specialization: t("dr1Specialty"),
      istxtBlack: "lg:text-black lg:fill-black",
      searchKey: "Dr. Ahmed Al-Harthy د. أحمد الحارثي",
    },
    {
      image: dotr6,
      name: t("dr2Name"),
      specialization: t("dr2Specialty"),
      istxtBlack: "",
      searchKey: "Dr. Amina Al-Harthy د. أمينة الحارثي (MBBS)",
    },
  ];

  const [isInput, setIsInput] = useState(false);
  const [searchKey, setSearchKey] = useState<string>("");
  const [openMenu, setOpenMenu] = useState(false);
  const [filteredList, setFilteredList] =
    useState<typeof doctorsList>(doctorsList);
  const [selDocter, setSelDocter] = useState({
    image: dotr1,
    name: t("dr1Name"),
    specialization: t("dr1Specialty"),
  });

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

  const handleViewProfile = (doctor: any) => {
    setSelDocter(doctor);
    setOpenMenu(true);
  };

  useEffect(() => {
    const filteredList = doctorsList.filter((item) =>
      item.searchKey.toLowerCase().includes(searchKey.toLowerCase()),
    );
    setFilteredList(filteredList);
  }, [searchKey]);

  return (
    <section className="relative">
      <section className="mb-7">
        <div className="flex justify-between items-end mb-4">
          <div className="hidden lg:block"></div>
          <div>
            <h1 className="lg:text-center text-[16px] lg:text-[48px] lg:leading-[69px] font-semibold text-secondary">
              {t("ourDentalSpecialists")}
            </h1>
            <p className="lg:text-center text-[12px] lg:text-[20px] lg:leading-[29px] font-normal leading-[17px] text-secondary/75">
              {t("meetTheExperiencedDentistsBehind")}{" "}
              <br className="lg:hidden" />
              {t("safeAndComfortable")} <br className="hidden lg:block" />{" "}
              {t("careUsingModernTechniquesAnd")} <br className="lg:hidden" />
              {t("bestPractices")}.
            </p>
          </div>
          <div
            className={cn(
              "w-9 h-9 lg:w-12 lg:h-12 rounded-[8px] lg:rounded-[12px]  flex items-center justify-center relative",
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
                "w-2xs h-9 lg:h-12 rounded-[8px] lg:rounded-[12px] border border-primary absolute right-0 p-2.5",
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
          {filteredList.map((doctor, index) => (
            <div
              key={index}
              className="h-[433px] lg:h-[520px] rounded-[24px] p-4 bg-[#EEFAFA] relative overflow-hidden"
            >
              <div className="absolute w-full h-[480px] -bottom-28 -left-0.5">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover saturate-0"
                />
              </div>
              <h3 className="lg:text-2xl text-base font-semibold text-secondary lg:leading-[35px] leading-[23px] mb-2">
                {doctor.name}
              </h3>

              <p className="lg:text-base text-[12px] font-medium text-secondary lg:leading-[23px] leading-[17px] bg-secondary/8 rounded-full px-2 py-1 lg:px-3 lg:py-1 inline-block">
                {doctor.specialization}
              </p>

              <button
                className={cn(
                  "group bg-[#24B6B6] text-white rounded-full px-4 py-3 absolute bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-20px)] flex items-center justify-between",
                  "lg:border lg:border-primary lg:bg-[#24B6B61F] lg:backdrop-blur-sm lg:hover:bg-[#24B6B6] lg:hover:text-white lg:transition-all lg:duration-500 lg:ease-in-out cursor-pointer",
                  doctor.istxtBlack,
                )}
                onClick={() => setOpenMenu(true)}
              >
                <span className="lg:text-base text-[12px] font-medium lg:leading-[23px] leading-[17px]">
                  {t("viewProfile")}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    className={cn(
                      "fill-white group-hover:fill-white lg:transition-all lg:duration-500 lg:ease-in-out",
                      doctor.istxtBlack,
                    )}
                    d="M16.551 0a1.177 1.177 0 0 1 1.202 1.15L18 16.328c.01.645-.51 1.176-1.164 1.185a1.177 1.177 0 0 1-1.202-1.15l-.201-12.36-13.4 13.642a1.194 1.194 0 0 1-1.673.025 1.157 1.157 0 0 1-.027-1.65l13.4-13.642-12.524.186a1.177 1.177 0 0 1-1.202-1.15A1.174 1.174 0 0 1 1.17.229z"
                  ></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {openMenu && (
          <>
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              // className="sticky bottom-0 left-0 z-50 w-full h-full"
              className={cn(
                "fixed bottom-0 left-0 rounded-t-[24px] z-50 h-auto w-full bg-white shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)]",
                "lg:hidden",
              )}
            >
              <div className="bg-white rounded-t-[24px] px-4 py-6 overflow-y-auto max-h-[80vh] no-scrollbar">
                {/* Doctor Image and Info Section */}
                <div className="flex gap-4 mb-4">
                  {/* Doctor Image */}
                  <div className="w-[202px] h-[270px] bg-[#24B6B6] rounded-[12px] shrink-0 relative overflow-hidden">
                    <Image
                      src={doctorsList[0].image}
                      alt={doctorsList[0].name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Doctor Quote */}
                  <div className="flex flex-col justify-between">
                    <div className="flex justify-end">
                      <button onClick={() => setOpenMenu(false)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="none"
                          viewBox="0 0 32 32"
                        >
                          <rect
                            width="31"
                            height="31"
                            x="0.5"
                            y="0.5"
                            stroke="#24B6B6"
                            rx="15.5"
                          ></rect>
                          <path
                            fill="#24B6B6"
                            d="m16 17.4-4.9 4.9a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275.95.95 0 0 1-.275-.7q0-.425.275-.7l4.9-4.9-4.9-4.9a.95.95 0 0 1-.275-.7q0-.425.275-.7a.95.95 0 0 1 .7-.275q.424 0 .7.275l4.9 4.9 4.9-4.9a.95.95 0 0 1 .7-.275q.424 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7L17.4 16l4.9 4.9a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <p className="text-base font-normal leading-[23px] text-[#224998]">
                      "I focus on preventive and cosmetic dental care, helping
                      patients achieve healthy smiles through comfortable and
                      personalized treatments."
                    </p>
                  </div>
                </div>

                {/* Doctor Name and Specialization */}
                <div className="mb-3">
                  <h2 className="text-xl font-semibold text-secondary mb-2">
                    {doctorsList[0].name}
                  </h2>
                  <p className="text-base font-normal text-secondary bg-[#EEFAFA] px-2 py-1 rounded-[8px]">
                    {doctorsList[0].specialization}
                  </p>
                </div>

                {/* Language Section */}
                <div className="mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-normal text-secondary w-[80px]">
                      Language
                    </span>
                    <span className="text-base font-normal text-secondary">
                      : Arabic & English
                    </span>
                  </div>
                </div>

                {/* Experience Section */}
                <div className="mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-normal text-secondary w-[80px]">
                      Experience
                    </span>
                    <span className="text-base font-normal text-secondary">
                      : 9+ years
                    </span>
                  </div>
                </div>

                {/* Specialist Section */}
                <div className="mb-3">
                  <div className="flex gap-2">
                    <span className="text-base font-normal text-secondary whitespace-nowrap w-[80px]">
                      Specialist in
                    </span>
                    <span className="text-base font-normal text-secondary ">
                      : braces, clear aligners, and bite correction for all ages
                    </span>
                  </div>
                </div>

                {/* Available Hours Section */}
                <div className="bg-[#EEFAFA] rounded-[12px] p-4">
                  <h3 className="text-lg font-semibold text-secondary mb-3">
                    Available Hours
                  </h3>
                  <div className="space-y-2">
                    <p className="text-base font-normal text-secondary">
                      Sun to Thu: 10:00 AM – 6:00 PM
                    </p>
                    <p className="text-base font-normal text-secondary">
                      Sat: 10:00 AM – 2:00 PM
                    </p>
                    <div className="bg-[#FFE5E5] rounded-[8px] px-3 py-2 mt-3">
                      <p className="text-sm font-normal text-secondary text-center">
                        Not available on Friday
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-amber-600">
        <button onClick={() => setOpenMenu(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 32 32"
          >
            <rect
              width="31"
              height="31"
              x="0.5"
              y="0.5"
              stroke="#24B6B6"
              rx="15.5"
            ></rect>
            <path
              fill="#24B6B6"
              d="m16 17.4-4.9 4.9a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275.95.95 0 0 1-.275-.7q0-.425.275-.7l4.9-4.9-4.9-4.9a.95.95 0 0 1-.275-.7q0-.425.275-.7a.95.95 0 0 1 .7-.275q.424 0 .7.275l4.9 4.9 4.9-4.9a.95.95 0 0 1 .7-.275q.424 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7L17.4 16l4.9 4.9a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275z"
            ></path>
          </svg>
        </button>
      </div> */}
    </section>
  );
}
