import Image from "next/image";
import Link from "next/link";
import heroImage from "@/assets/service/hero.png";
import dece1 from "@/assets/service/dces1.png";
import dece2 from "@/assets/service/dces2.png";
import dece3 from "@/assets/service/dces3.png";
import dece4 from "@/assets/service/dces4.png";
import dece5 from "@/assets/service/dces5.png";
import dece6 from "@/assets/service/dces6.png";
import dece7 from "@/assets/service/dces7.png";
import Testmonies from "../testmonies";
import Contactus from "../contactus";

export default function ServiceHero() {
  const dcesList = [
    {
      image: dece1,
      title: "General Dentistry",
      description:
        "Routine dental care focused on prevention, diagnosis, and treatment of common oral health issues. Includes dental check-ups, cleanings, fillings, and oral hygiene guidance",
      list: [
        "Dental check-ups",
        "Scaling & polishing",
        "Tooth fillings",
        "Gum care",
      ],
    },
    {
      image: dece2,
      title: "Orthodontics",
      description:
        "Correct misaligned teeth and bite issues using modern orthodontic solutions tailored for both children and adults.",
      list: ["Metal & ceramic braces", "Clear aligners", "Bite correction"],
    },
    {
      image: dece3,
      title: "Cosmetic Dentistry",
      description:
        "Enhance the appearance of your smile with safe and effective cosmetic dental treatments designed to improve tooth color, shape, and alignment.",
      list: [
        "Teeth whitening",
        "Smile makeover",
        "Veneers",
        "Cosmetic fillings",
      ],
    },
    {
      image: dece4,
      title: "Pediatric Dentistry",
      description:
        "Gentle and friendly dental care specially designed for children, focusing on early prevention and healthy oral development.",
      list: [
        "Child dental check-ups",
        "Preventive treatments",
        "Fluoride application",
        "Oral hygiene education",
      ],
    },
    {
      image: dece5,
      title: "Oral & Maxillofacial Surgery",
      description:
        "Advanced surgical dental procedures performed with precision, safety, and patient comfort as the top priority.",
      list: [
        "Wisdom tooth removal",
        "Surgical extractions",
        "Dental trauma care",
      ],
    },
    {
      image: dece6,
      title: "Root Canal Treatment",
      description:
        "Pain-free root canal procedures to save infected or damaged teeth and restore their natural function.",
      list: [
        "Single & multi-root canals",
        "Infection removal",
        "Tooth restoration",
      ],
    },
  ];
  return (
    <div className="mt-[76px] lg:mt-[126px] px-4 lg:px-12">
      <section className="w-full h-[211px] lg:h-[398px] relative overflow-hidden rounded-3xl mb-7 lg:mb-16">
        <Image
          src={heroImage.src}
          alt=""
          fill
          className="object-cover absolute top-0 left-0 rounded-3xl"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-white text-[20px] lg:text-[48px] font-bold leading-[29px] lg:leading-[69px]">
            Our Services
          </h1>
          <p className="text-white text-[12px] lg:text-[20px] lg:leading-[29px] font-semibold flex gap-2 justify-center">
            <Link href="/" className="">
              Home
            </Link>
            /
            <Link href="/services" className="">
              Services
            </Link>
          </p>
        </div>
      </section>

      <section className="mb-7">
        <div className="flex justify-between items-end mb-4">
          <div className="hidden lg:block"></div>
          <div>
            <h1 className="lg:text-center text-[16px] lg:text-[48px] lg:leading-[69px] font-semibold text-secondary">
              Dental Care for Every Smile
            </h1>
            <p className="lg:text-center text-[12px] lg:text-[20px] lg:leading-[29px] font-normal leading-[17px] text-secondary/75">
              Comprehensive dental care with modern <br className="lg:hidden" />
              technology and <br className="hidden lg:block" />a patient-first
              approach.
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
          {dcesList.map((item, index) => (
            <div
              key={index}
              className="border border-secondary rounded-3xl p-2 "
            >
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
              <ul className="mb-3">
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

      {/* Testimonials */}
      <Testmonies />

      {/* Contact Us */}
      <Contactus />
    </div>
  );
}
