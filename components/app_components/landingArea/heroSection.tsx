import React from "react";
import Image from "next/image";
import arabi1 from "@/assets/landing/arabi1.png";
import arabi2 from "@/assets/landing/arabi2.png";
import arabi3 from "@/assets/landing/arabi3.png";
import heroImage from "@/assets/landing/hero_Image.png";
import smileFace from "@/assets/landing/smileFace.png";
import docter1 from "@/assets/landing/docter1.png";
import docter2 from "@/assets/landing/docter2.png";
import docter3 from "@/assets/landing/docter3.png";
import docter4 from "@/assets/landing/docter4.png";

import Contactus from "../contactus";
import Testmonies from "../testmonies";


function HeroSection() {
  const services = [
    {
      title: "General Dentistry",
      description:
        "Regular check-ups and cleanings to keep your teeth and gums healthy.",
    },
    {
      title: "Cosmetic Dentistry",
      description: "Safe and effective treatments to enhance your smile.",
    },
    {
      title: "Orthodontics",
      description:
        "Teeth alignment solutions to improve function and appearance for all age groups.",
    },
    {
      title: "Pediatric Dentistry",
      description:
        "Gentle and friendly dental care tailored specifically for children",
    },
    {
      title: "Root Canal Treatment",
      description:
        "Regular check-ups and cleanings to keep your teeth and gums healthy.",
    },
    {
      title: "Dental Implants",
      description:
        "Permanent tooth replacement solutions that restore comfort and confidence.",
    },
  ];

  const whyChoose = [
    {
      title: "Experienced Specialists",
      description:
        "Caring dental services that ensure every visit is comfortable and stress-free.",
    },
    {
      title: "Patient Comfort First",
      description:
        "Gentle procedures with a strong focus on pain management and care.",
    },
    {
      title: "Strict Hygiene Standards",
      description:
        "International sterilization and safety protocols followed consistently.",
    },
    {
      title: "Transparent Communication",
      description:
        "Clear explanations and honest guidance before every treatment.",
    },
  ];

  const docterList = [
    {
      name: "Dr. Ahmed Al-Harthy (MBBS) ",
      field: "General & Cosmetic Dentistry",
      image: docter1,
    },
    {
      name: "Fatima Al-Balushi (MBBS)",
      field: "Orthodontics",
      image: docter2,
    },
    {
      name: "Dr. Ahmed Al-Harthy (MBBS) ",
      field: "Oral & Maxillofacial Surgery",
      image: docter3,
    },
    {
      name: "Dr. Mohammed (MBBS)",
      field: "Pediatric Dentistry",
      image: docter4,
    },
  ];

  return (
    <div className="mt-[60px] lg:mt-0 p-4 lg:pt-5 lg:px-12 ">
      <section className="flex mb-7 gap-4 lg:mb-[72px]">
        <div
          className="px-2 py-2.5 lg:px-12 lg:pt-[111px] lg:mt-[90px] rounded-[26px] w-[200px] lg:w-1/2 "
          style={{
            background:
              "linear-gradient(180deg, rgba(36, 182, 182, 0.016) 0%, rgba(36, 182, 182, 0.08) 100%)",
          }}
        >
          <div className="flex items-center gap-2 mb-5 ">
            <div className="flex">
              <div className="w-[22.8px] h-[22.8px] lg:w-[48px] lg:h-[48px] bg-[#92EA5B] rounded-full overflow-hidden ">
                <Image
                  src={arabi1.src}
                  alt="arabi1"
                  width={45.28}
                  height={22.18}
                  className="object-cover"
                />
              </div>
              <div className="w-[22.8px] h-[22.8px] lg:w-[48px] lg:h-[48px] bg-[#FFA142] rounded-full overflow-hidden ">
                <Image
                  src={arabi2.src}
                  alt="arabi2"
                  width={45.28}
                  height={22.18}
                  className="object-cover"
                />
              </div>
              <div className="w-[22.8px] h-[22.8px] lg:w-[48px] lg:h-[48px] bg-[#AE78D8] rounded-full overflow-hidden ">
                <Image
                  src={arabi3.src}
                  alt="arabi3"
                  width={45.28}
                  height={22.18}
                  className=" object-cover"
                />
              </div>
            </div>
            <div>
              <h1 className="text-[11.09px] lg:text-2xl font-bold text-secondary leading-4 lg:leading-6 ">
                5K+
              </h1>
              <p className="text-[5.54px] lg:text-xs font-semibold text-secondary leading-2 lg:leading-4 ">
                Happy <br />
                Clients
              </p>
            </div>
          </div>
          <h1 className="text-[16px] lg:text-5xl font-semibold text-secondary leading-[23px] lg:leading-[54px] mb-2 lg:mb-5">
            Advanced & Gentle Dental Care You Can Trust
          </h1>

          <p className="text-[12px] text-lg lg:text-xl font-normal text-secondary leading-[17px] lg:leading-[22px] mb-5 lg:mb-8">
            Experienced specialists providing safe, comfortable, and
            personalized dental treatments.
          </p>

          <button className="h-9 lg:h-auto flex items-center justify-center rounded-full bg-primary text-white lg:text-xl px-1.5 lg:px-5 lg:py-2">
            Contact Us
          </button>
        </div>
        <div className=" rounded-[26px] overflow-hidden w-[149px] h-[250px] lg:h-[610px] lg:w-1/2">
          <Image
            src={heroImage.src}
            alt="heroImage"
            width={149}
            height={250}
            className="object-contain lg:object-fill lg:object-bottom lg:w-full lg:h-auto"
          />
        </div>
      </section>

      <section className="block lg:flex lg:justify-between items-center lg:mb-[72px]">
        <div className="hidden lg:block w-[437px]">
          <h1 className="text-[28px] font-semibold text-secondary leading-[40px] mb-5">Your Comfort and Safety <br />
            Come First</h1>
          <h2 className="text-[20px] font-normal text-secondary leading-[29px]">We prioritize patient comfort, clear communication, and clinical excellence for a stress-free dental experience.</h2>
        </div>

        <div className="flex justify-between gap-14 mb-7">
          <div className="lg:px-10 min-w-[85px]">
            <h1 className="text-[20px] lg:text-4xl font-semibold text-secondary leading-6 lg:leading-[52px] text-center lg:text-left">
              15+
            </h1>
            <p className="text-[12px] lg:text-xl font-normal text-secondary leading-3 lg:leading-6 text-center lg:text-left">
              Experienced <br />
              dental specialists
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
              Modern <br />
              equipment
            </p>
          </div>

          <div className="lg:px-10 min-w-[85px]">
            <h1 className="text-[20px] lg:text-4xl font-semibold text-secondary leading-6 lg:leading-[52px] text-center lg:text-left">
              5k+
            </h1>
            <p className="text-[12px] lg:text-xl font-normal text-secondary leading-3 lg:leading-6 text-center lg:text-left">
              Happy <br />
              Patients
            </p>
          </div>
        </div>
      </section>

      {/* Service Container */}
      <section
        className="p-3 lg:p-8 rounded-4xl mb-6 lg:mb-16"
        style={{
          background:
            "linear-gradient(189.57deg, rgba(36, 182, 182, 0.1) -7.79%, rgba(36, 182, 182, 0.5) 97.48%), #FFFFFF",
        }}
      >
        <div className="flex justify-between items-end mb-4 lg:mb-8">
          <div className="hidden lg:block"></div>
          <div>
            <h3 className="text-[16px] lg:text-[28px] font-semibold text-secondary leading-6 lg:leading-[40px] mb-2 lg:mb-3 lg:text-center">
              Our Dental Services
            </h3>
            <h4 className="text-[12px] lg:text-xl font-normal text-secondary leading-3 lg:text-center">
              Comprehensive dental care tailored <br className="lg:hidden" />
              for every stage of life.
            </h4>

          </div>
          <button className="px-4 py-1 h-9 rounded-full bg-primary text-white">
            View All
          </button>

        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-3 lg:p-8 rounded-4xl min-h-[174px] flex flex-col justify-between "
              style={{
                background:
                  "linear-gradient(216.46deg, #89FFFF -36.09%, #224998 110.03%)",
              }}
            >
              <div className="mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="31"
                  fill="none"
                  viewBox="0 0 33 31"
                >
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M30.495 1.56a5.327 5.327 0 1 0-7.534 7.535 5.327 5.327 0 0 0 7.534-7.535M12.091 3.296a8.7 8.7 0 0 1 1.655-.823 7.54 7.54 0 0 1 5.136-.089 7.4 7.4 0 0 1 2.037 1.094 6.106 6.106 0 0 0 2.817 7.164 7.3 7.3 0 0 1-.312 1.195 6.7 6.7 0 0 1-1.309 2.055 20 20 0 0 1-2.297 2.194 2.1 2.1 0 0 0-.778 1.672 25.2 25.2 0 0 1-1.343 8.255c-.653 1.832-1.555 3.462-2.738 4.582q.006-.41.006-.678c0-3.077-.006-5.894-.348-7.952-.37-2.23-1.145-3.598-2.715-3.523-2.51-.018-2.945 3.221-3.014 7.727-.013.92-.012 1.897-.01 2.91v.836q0 .268.005.678c-1.183-1.119-2.085-2.75-2.738-4.582a25.2 25.2 0 0 1-1.343-8.254 2.1 2.1 0 0 0-.778-1.673 20.3 20.3 0 0 1-2.297-2.193 6.7 6.7 0 0 1-1.31-2.056 7.42 7.42 0 0 1 4.546-9.454 7.3 7.3 0 0 1 3.422-.354 7.6 7.6 0 0 1 2.785.967 9.7 9.7 0 0 0-2.345 2.451.384.384 0 0 0 .64.424 8.9 8.9 0 0 1 2.626-2.573m15.556-.754V4.41h1.867v1.838h-1.867v1.867H25.81V6.247H23.94V4.409h1.868V2.54z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <h1 className="text-[16px] lg:text-[32px] font-semibold text-white leading-[17px] lg:leading-[46px] mb-2">
                  {service.title}
                </h1>
                <p className="text-[12px] lg:text-[20px] font-normal text-white/75 leading-3 lg:leading-[29px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/*Why patients choose us */}
      <section className="mb-6 lg:mb-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-tertiary text-[12px] lg:text-xl rounded-full border border-tertiary px-2 py-0.5 mb-4 inline-block">
              Why us
            </h2>

            <h2 className="text-[16px] lg:text-[48px] font-semibold text-secondary leading-6 lg:leading-[69px] mb-2">
              Why Patients Choose Us
            </h2>
          </div>

          <div className="flex flex-row lg:flex-col gap-2 mb-4 lg:max-w-[437px]">
            <p className="text-[12px] lg:text-[20px] font-normal text-[#22499899] leading-3 lg:leading-[29px]">
              Thoughtful dental care designed to make every visit comfortable,
              informed, and stress-free.
            </p>
            <button className="px-3.5 py-1 h-9 rounded-full bg-primary text-white min-w-[99px] lg:max-w-[133px] text-sm ">
              Contact Us
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
              <div key={ind} className="p-2.5 lg:p-7 rounded-3xl bg-[#24B6B614]">
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

      {/* Docters */}
      <section className="overflow-hidden mb-6 lg:mb-16">
        <h1 className="text-tertiary text-[12px] xl:text-xl rounded-full border border-tertiary px-2 py-0.5 mb-4 inline-block ">
          Doctors
        </h1>

        <h2 className="text-[16px] xl:text-[48px] font-semibold text-secondary leading-6 lg:leading-[69px] mb-4">
          Meet Our Dental Experts
        </h2>
        <div className="flex gap-2 lg:gap-6 overflow-x-scroll">
          {docterList.map((doctor, index) => (
            <div
              key={index}
              className="p-2 lg:p-5 rounded-[24px] bg-[#EEFAFA] min-w-[383px] min-h-[366px] relative lg:h-[570px] lg:w-[383px] "
            >
              <h1 className="text-[24px] font-semibold text-secondary leading-6 lg:leading-[35px] mb-2">
                {doctor.name}
              </h1>
              <p className="text-[12px] font-normal text-secondary leading-3 lg:leading-[23px] bg-[#22499814] rounded-full px-2 py-1 inline-block">
                {doctor.field}
              </p>
              <Image
                src={doctor.image}
                alt="doctor"
                className="object-fill h-[212px] rounded-[20px] absolute bottom-0 left-1/2 translate-x-[-50%]"
                width={361}
                height={212}
              />
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

export default HeroSection;


