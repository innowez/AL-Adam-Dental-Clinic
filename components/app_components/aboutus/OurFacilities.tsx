"use client";
import { useState } from "react";
import Image from "next/image";
import faclity1 from "@/assets/aboutus/faclity1.png";
import faclity2 from "@/assets/aboutus/faclity2.png";
import faclity3 from "@/assets/aboutus/faclity3.png";
import faclity4 from "@/assets/aboutus/faclity4.png";
import faclity5 from "@/assets/aboutus/faclity5.png";
import faclity6 from "@/assets/aboutus/faclity6.png";
import faclity7 from "@/assets/aboutus/faclity7.png";
import faclity8 from "@/assets/aboutus/faclity8.png";
import faclity9 from "@/assets/aboutus/faclity9.png";
import faclity10 from "@/assets/aboutus/faclity10.png";
import faclity11 from "@/assets/aboutus/faclity11.png";
import faclity12 from "@/assets/aboutus/faclity12.png";

export default function OurFacilities() {
  const [isCheck, setIsCheck] = useState(false);

  return (
    <section>
      <div className="flex flex-col lg:flex-row justify-between items-start gap-2 relative mb-10">
        <div className="flex flex-col justify-center lg:justify-between lg:h-[460px] w-full lg:w-1/2 ">
          <div>
            <div className="mb-4 lg:mb-6 text-center lg:text-left ">
              <span className="text-tertiary text-[12px] lg:text-xl rounded-full border border-tertiary px-4 py-0.5 ">
                Our Facilities
              </span>
            </div>
            <h1 className="text-base lg:text-[32px] font-semibold leading-[23px] lg:leading-[46px] text-secondary text-center lg:text-left">
              Designed for Comfort, Safety, <br />
              and Modern Care
            </h1>
          </div>

          <div className="mb-[26px] ml-[69px] hidden lg:block">
            <ul className="flex flex-col gap-3 text-[12px] lg:text-xl xl:text-[24px] font-normal text-secondary leading-4 lg:leading-[22px] xl:leading-[35px]">
              <li className="cursor-pointer text-[32px] font-bold flex items-center gap-3">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="20"
                    fill="none"
                    viewBox="0 0 15 20"
                  >
                    <path
                      fill="#224998"
                      d="M0 1v18a1.002 1.002 0 0 0 1.57.824l13-9c.538-.373.538-1.271 0-1.645l-13-9A.999.999 0 0 0 0 1"
                    ></path>
                  </svg>
                </span>
                <span>Treatment rooms</span>
              </li>
              <li
                className={`cursor-pointer ${isCheck ? "text-[32px] font-bold flex items-center gap-3" : ""}`}
                onClick={() => setIsCheck(!isCheck)}
              >
                {isCheck && (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="20"
                      fill="none"
                      viewBox="0 0 15 20"
                    >
                      <path
                        fill="#224998"
                        d="M0 1v18a1.002 1.002 0 0 0 1.57.824l13-9c.538-.373.538-1.271 0-1.645l-13-9A.999.999 0 0 0 0 1"
                      ></path>
                    </svg>
                  </span>
                )}
                Reception and waiting area
              </li>
              <li className="">Sterilization area</li>
              <li className="">Advanced dental equipment</li>
            </ul>
          </div>
        </div>

        <div className="h-[460px] w-full lg:w-1/2">
          <div className="grid grid-cols-3 grid-rows-6 md:grid-cols-3 md:grid-rows-10 gap-2 h-full w-full">
            <div className="relative row-span-3 md:row-span-5">
              <Image
                src={isCheck ? faclity7 : faclity1}
                alt="faclity1"
                fill
                className="object-cover rounded-b-2xl lg:rounded-b-4xl w-full h-full"
              />
              <div
                className="absolute top-0 left-0 w-full h-full z-10 "
                style={{
                  background:
                    "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 21.65%)",
                }}
              ></div>
            </div>
            <div className="relative row-span-3 col-start-1 row-start-4 md:row-span-5 md:col-start-1 md:row-start-6">
              <Image
                src={isCheck ? faclity10 : faclity4}
                alt="faclity2"
                fill
                className="object-cover rounded-b-2xl lg:rounded-b-4xl"
              />
              <div
                className="absolute top-0 left-0 w-full h-full z-10 "
                style={{
                  background:
                    "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 21.65%)",
                }}
              ></div>
            </div>
            <div className="relative col-span-2 row-span-4 col-start-2 row-start-1 md:col-span-1 md:row-span-4 md:col-start-2 md:row-start-1">
              <Image
                src={isCheck ? faclity8 : faclity2}
                alt="faclity3"
                fill
                className="object-cover rounded-b-2xl lg:rounded-b-4xl"
              />
              <div
                className="absolute top-0 left-0 w-full h-full z-10 "
                style={{
                  background:
                    "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 21.65%)",
                }}
              ></div>
            </div>
            <div className="relative row-span-2 col-start-2 row-start-5 md:row-span-6 md:col-start-2 md:row-start-5">
              <Image
                src={isCheck ? faclity11 : faclity5}
                alt="faclity4"
                fill
                className="object-cover rounded-b-2xl lg:rounded-b-4xl"
              />
              <div
                className="absolute top-0 left-0 w-full h-full z-10 "
                style={{
                  background:
                    "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 21.65%)",
                }}
              ></div>
            </div>
            <div className="relative  row-span-2 col-start-3 row-start-5 md:row-span-6 md:col-start-3 md:row-start-1">
              <Image
                src={isCheck ? faclity9 : faclity3}
                alt="faclity5"
                fill
                className="object-cover rounded-b-2xl lg:rounded-b-4xl"
              />
              <div
                className="absolute top-0 left-0 w-full h-full z-10 "
                style={{
                  background:
                    "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 21.65%)",
                }}
              ></div>
            </div>
            <div className="relative hidden md:block md:row-span-4 md:col-start-3 md:row-start-7">
              <Image
                src={isCheck ? faclity12 : faclity6}
                alt="faclity6"
                fill
                className="object-cover rounded-b-2xl lg:rounded-b-4xl"
              />
              <div
                className="absolute top-0 left-0 w-full h-full z-10 "
                style={{
                  background:
                    "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 21.65%)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
