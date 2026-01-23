"use client";

import dotr1 from "@/assets/doctors/dotr1.png";
import dotr2 from "@/assets/doctors/dotr2.png";
import dotr3 from "@/assets/doctors/dotr3.png";
import dotr4 from "@/assets/doctors/dotr4.png";
import dotr5 from "@/assets/doctors/dotr5.png";
import dotr6 from "@/assets/doctors/dotr6.png";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export default function DoctorsList() {
  const doctorsList = [
    {
      image: dotr1,
      name: "Dr. Ahmed Al-Harthy (MBBS) ",
      specialization: "General & Cosmetic Dentistry",
    },
    {
      image: dotr2,
      name: "Dr. Amina Al-Harthy (MBBS)",
      specialization: "Oral & Maxillofacial Surgery",
    },
    {
      image: dotr3,
      name: "Dr. Fatima Al-Balushi (MBBS)",
      specialization: "Orthodontics",
    },
    {
      image: dotr4,
      name: "Dr. Mohammed (MBBS)",
      specialization: "Pediatric Dentist",
    },
    {
      image: dotr5,
      name: "Dr. Ahmed Al-Harthy (MBBS) ",
      specialization: "General & Cosmetic Dentistry",
    },
    {
      image: dotr6,
      name: "Dr. Amina Al-Harthy (MBBS)",
      specialization: "Oral & Maxillofacial Surgery",
    },
  ];

  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <section className="mb-7">
        <div className="flex justify-between items-end mb-4">
          <div className="hidden lg:block"></div>
          <div>
            <h1 className="lg:text-center text-[16px] lg:text-[48px] lg:leading-[69px] font-semibold text-secondary">
              Our Dental Specialists
            </h1>
            <p className="lg:text-center text-[12px] lg:text-[20px] lg:leading-[29px] font-normal leading-[17px] text-secondary/75">
              Meet our dedicated dental team, focused on delivering{" "}
              <br className="lg:hidden" />
              safe and comfortable <br className="hidden lg:block" /> care using
              modern techniques and <br className="lg:hidden" />
              best practices.
            </p>
          </div>
          <div className="w-9 h-9 lg:w-12 lg:h-12 rounded-[8px] lg:rounded-[12px] border border-primary flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 20"
              className="lg:w-8 lg:h-8"
            >
              <path
                stroke="#24B6B6"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m17.5 17.5-3.617-3.617M9.167 15.833a6.667 6.667 0 1 0 0-13.333 6.667 6.667 0 0 0 0 13.333"
              ></path>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {doctorsList.map((doctor, index) => (
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
                className="bg-[#24B6B6] text-white rounded-full px-4 py-3 absolute bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-20px)] flex items-center justify-between"
                onClick={() => setOpenMenu(true)}
              >
                <span className="lg:text-base text-[12px] font-medium text-white lg:leading-[23px] leading-[17px]">
                  View Profile
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    fill="#fff"
                    d="M16.551 0a1.177 1.177 0 0 1 1.202 1.15L18 16.328c.01.645-.51 1.176-1.164 1.185a1.177 1.177 0 0 1-1.202-1.15l-.201-12.36-13.4 13.642a1.194 1.194 0 0 1-1.673.025 1.157 1.157 0 0 1-.027-1.65l13.4-13.642-12.524.186a1.177 1.177 0 0 1-1.202-1.15A1.174 1.174 0 0 1 1.17.229z"
                  ></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </section>

      <AnimatePresence initial={false}>
        {openMenu && (
          <>
            {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-40 h-full "></div> */}
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
              className="fixed bottom-0 left-0 rounded-t-[24px] z-50 h-auto w-full bg-white shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)]"
            >
              <div className="bg-white rounded-t-[24px] px-4 py-6 overflow-y-auto max-h-[80vh] no-scrollbar">
                {/* Doctor Image and Info Section */}
                <div className="flex gap-4 mb-4">
                  {/* Doctor Image */}
                  <div className="w-[202px] h-[270px] bg-[#24B6B6] rounded-[12px] flex-shrink-0 relative overflow-hidden">
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
                  <h3 className="text-lg font-semibold text-[#224998] mb-3">
                    Available Hours
                  </h3>
                  <div className="space-y-2">
                    <p className="text-base font-normal text-[#224998]">
                      Sun to Thu: 10:00 AM – 6:00 PM
                    </p>
                    <p className="text-base font-normal text-[#224998]">
                      Sat: 10:00 AM – 2:00 PM
                    </p>
                    <div className="bg-[#FFE5E5] rounded-[8px] px-3 py-2 mt-3">
                      <p className="text-sm font-normal text-[#224998] text-center">
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
    </>
  );
}
