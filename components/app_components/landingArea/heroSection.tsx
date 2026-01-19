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
import testimonial1 from "@/assets/landing/testm1.png";
import testimonial2 from "@/assets/landing/testm2.png";
import testimonial3 from "@/assets/landing/testm3.png";
import mapImage from "@/assets/landing/mapImg.png";

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
    <div className="mt-[60px] p-4 ">
      <div className="flex mb-7">
        <div
          className="px-2 py-2.5 rounded-[26px] w-[200px] "
          style={{
            background:
              "linear-gradient(180deg, rgba(36, 182, 182, 0.016) 0%, rgba(36, 182, 182, 0.08) 100%)",
          }}
        >
          <div className="flex items-center gap-2 mb-5">
            <div className="flex">
              <div className="w-[22.8px] h-[22.8px] bg-[#92EA5B] rounded-full overflow-hidden ">
                <Image
                  src={arabi1.src}
                  alt="arabi1"
                  width={45.28}
                  height={22.18}
                />
              </div>
              <div className="w-[22.8px] h-[22.8px] bg-[#FFA142] rounded-full overflow-hidden ">
                <Image
                  src={arabi2.src}
                  alt="arabi2"
                  width={45.28}
                  height={22.18}
                />
              </div>
              <div className="w-[22.8px] h-[22.8px] bg-[#AE78D8] rounded-full overflow-hidden ">
                <Image
                  src={arabi3.src}
                  alt="arabi3"
                  width={45.28}
                  height={22.18}
                />
              </div>
            </div>
            <div>
              <h1 className="text-[11.09px] font-bold text-secondary leading-4 ">
                5K+
              </h1>
              <p className="text-[5.54px] font-semibold text-secondary leading-2 ">
                Happy <br />
                Clients
              </p>
            </div>
          </div>
          <h1 className="text-[16px] font-semibold text-secondary leading-6 mb-2">
            Advanced & Gentle Dental Care You Can Trust
          </h1>

          <p className="text-[12px] font-normal text-secondary leading-3 mb-5">
            Experienced specialists providing safe, comfortable, and
            personalized dental treatments.
          </p>

          <button className="w-28 h-9 flex items-center justify-center rounded-full bg-primary text-white">
            Contact Us
          </button>
        </div>
        <div className=" rounded-[26px] overflow-hidden w-[149px] h-[250px]">
          <Image
            src={heroImage.src}
            alt="heroImage"
            width={149}
            height={250}
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex justify-between mb-7">
        <div>
          <h1 className="text-[20px] font-semibold text-secondary leading-6 text-center">
            15+
          </h1>
          <p className="text-[12px] font-normal text-secondary leading-3 text-center">
            Experienced <br />
            dental specialists
          </p>
        </div>
        <div>
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="25"
              fill="none"
              viewBox="0 0 26 29"
            >
              <path
                fill="#224998"
                d="M23.174 22.604a.273.273 0 0 0 .36-.145l.289-.7a2.6 2.6 0 0 0 .008-1.98 2.6 2.6 0 0 0-1.376-1.417l-3.282-1.438V7.519c0-2.301-1.868-4.173-4.164-4.173a4.173 4.173 0 0 0-4.164 4.173h1.36a2.81 2.81 0 0 1 2.804-2.81 2.81 2.81 0 0 1 2.803 2.81V11.2h-4.545v1.364h4.545v3.764l-.76-.332a.3.3 0 0 0-.108-.023H9.852l-3.263-3.27a2.27 2.27 0 0 0-1.212-.636c.462-.36.76-.92.76-1.55v-.872a1.964 1.964 0 0 0-1.96-1.964l-1.361.001a.273.273 0 0 0-.273.273v4.253a.274.274 0 0 0 .273.273h.794a2.5 2.5 0 0 0-.255.221l-.519.52a.576.576 0 0 0 0 .811L7.9 19.107c.214.215.479.36.769.425l-.002 4.758H2.816v1.364h20.903V24.29h-4.546v-3.446zm-13.146 1.687v-4.31h2.558v4.31zm7.784 0h-3.865v-4.719h2.335l1.53.674z"
              ></path>
            </svg>
          </div>
          <p className="text-[12px] font-normal text-secondary leading-3 text-center">
            Modern <br />
            equipment
          </p>
        </div>
        <div>
          <h1 className="text-[20px] font-semibold text-secondary leading-6 text-center">
            5k+
          </h1>
          <p className="text-[12px] font-normal text-secondary leading-3 text-center">
            Experienced <br />
            dental specialists
          </p>
        </div>
      </div>

      {/* Service Container */}
      <div
        className="p-3 rounded-4xl mb-6"
        style={{
          background:
            "linear-gradient(189.57deg, rgba(36, 182, 182, 0.1) -7.79%, rgba(36, 182, 182, 0.5) 97.48%), #FFFFFF",
        }}
      >
        <div className="flex justify-between items-end mb-4">
          <div>
            <h3 className="text-[16px] font-semibold text-secondary leading-6 mb-2">
              Our Dental Services
            </h3>
            <h4 className="text-[12px] font-normal text-secondary leading-3">
              Comprehensive dental care tailored <br />
              for every stage of life.
            </h4>
          </div>
          <button className="px-4 py-1 h-9 rounded-full bg-primary text-white">
            View All
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-3 rounded-4xl"
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
              <h1 className="text-[16px] font-semibold text-white leading-6 mb-2">
                {service.title}
              </h1>
              <p className="text-[12px] font-normal text-white/75 leading-3">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/*Why patients choose us */}
      <section className="mb-6">
        <span className="text-[#2C2E83] text-[12px] rounded-full border border-[#2C2E83] px-2 py-0.5 mb-4 ">
          Why us
        </span>

        <h2 className="text-[16px] font-semibold text-secondary leading-6 mb-2">
          Why Patients Choose Us
        </h2>
        <div className="flex gap-2 mb-4">
          <p className="text-[12px] font-normal text-secondary leading-3">
            Thoughtful dental care designed to make every visit comfortable,
            informed, and stress-free.
          </p>
          <button className="px-3.5 py-1 h-9 rounded-full bg-primary text-white min-w-[99px] text-sm">
            Contact Us
          </button>
        </div>
        <div className="mb-3">
          <Image
            src={smileFace.src}
            alt="smileFace"
            className="object-cover w-full rounded-[20px] h-[212px]"
            width={361}
            height={212}
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          {whyChoose.map((item, ind) => (
            <div key={ind} className="p-2 rounded-3xl bg-[#24B6B614]">
              <div className="flex justify-end w-full pr-2 pt-2 mb-6 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  fill="none"
                  viewBox="0 0 21 21"
                >
                  <path
                    fill="#224998"
                    d="M19.31 0c.762-.011 1.39.59 1.402 1.342L21 19.049a1.37 1.37 0 0 1-1.358 1.383 1.374 1.374 0 0 1-1.403-1.341l-.234-14.42L2.372 20.586c-.53.54-1.404.553-1.952.03a1.35 1.35 0 0 1-.031-1.927L16.022 2.774 1.41 2.991A1.374 1.374 0 0 1 .008 1.65 1.37 1.37 0 0 1 1.366.267z"
                  ></path>
                </svg>
              </div>
              <h1 className="text-[16px] font-semibold text-secondary leading-6 mb-2">
                {item.title}
              </h1>
              <p className="text-[12px] font-normal text-secondary leading-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Docters */}
      <section className="overflow-hidden mb-6">
        <h1 className="text-[#2C2E83] text-[12px] rounded-full border-[1px] border-[#2C2E83] px-2 py-0.5 mb-4 inline-block ">
          Doctors
        </h1>

        <h2 className="text-[16px] font-semibold text-secondary leading-6 mb-4">
          Meet Our Dental Experts
        </h2>
        <div className="flex overflow-x-scroll">
          {docterList.map((doctor, index) => (
            <div
              key={index}
              className="p-2 rounded-[24px] bg-[#EEFAFA] min-w-[383px] min-h-[366px] relative"
            >
              <h1 className="text-[24px] font-semibold text-secondary leading-6 mb-2">
                {doctor.name}
              </h1>
              <p className="text-[12px] font-normal text-secondary leading-3 bg-[#22499814] rounded-full px-2 py-1 inline-block">
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
      <section className="mb-6">
        <div className="flex flex-col items-center gap-2 mb-4">
          <h1 className="text-[#2C2E83] text-[12px] rounded-full border border-[#2C2E83] px-2 py-0.5 mb-2 inline-block ">
            Testimonials
          </h1>

          <h2 className="text-[16px] font-semibold text-secondary leading-6 mb-4">
            What Our Patients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <div
            className="rounded-[44px] py-[51px] px-[24px]"
            style={{
              background:
                "linear-gradient(216.46deg, #89FFFF -36.09%, #224998 110.03%), #224998",
            }}
          >
            <p className="text-[14px] font-normal text-white leading-5 text-center">
              I was nervous before my visit, but the doctors and staff were very
              patient and supportive. The treatment was smooth and handled with
              great care.
            </p>
          </div>

          <div className="rounded-[44px] overflow-hidden">
            <Image
              src={testimonial1.src}
              alt="testimonial1"
              width={361}
              height={172}
              className="object-fit max-h-[172px]"
            />
          </div>

          <div
            className="rounded-[44px] py-[51px] px-[24px]"
            style={{
              background:
                "linear-gradient(216.46deg, #89FFFF -36.09%, #224998 110.03%), #224998",
            }}
          >
            <p className="text-[14px] font-normal text-white leading-5 text-center">
              I was nervous before my visit, but the doctors and staff were very
              patient and supportive. The treatment was smooth and handled with
              great care.
            </p>
          </div>

          <div className="rounded-[44px] overflow-hidden">
            <Image
              src={testimonial2.src}
              alt="testimonial2"
              width={361}
              height={172}
              className="object-cover object-bottom max-h-[172px]"
            />
          </div>

          <div
            className="rounded-[44px] py-[51px] px-[24px]"
            style={{
              background:
                "linear-gradient(216.46deg, #89FFFF -36.09%, #224998 110.03%), #224998",
            }}
          >
            <p className="text-[14px] font-normal text-white leading-5 text-center">
              I was nervous before my visit, but the doctors and staff were very
              patient and supportive. The treatment was smooth and handled with
              great care.
            </p>
          </div>

          <div className="rounded-[44px] overflow-hidden">
            <Image
              src={testimonial3.src}
              alt="testimonial3"
              width={361}
              height={172}
              className="object-cover max-h-[172px]"
            />
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section>
        <div className="bg-[#EEFAFA] rounded-[16px] p-2 mb-4 ">
          <h1 className="text-[16px] font-semibold text-secondary leading-6 mb-2">
            We are here to Help You
          </h1>
          <h2 className="text-[12px] font-normal text-secondary leading-4">
            Have a question or need a consultation? Get in touch with our team
            and we’ll guide you with the right dental care.
          </h2>
          <div>
            <Image
              src={mapImage.src}
              alt="mapImage"
              width={345}
              height={228}
              className="rounded-[16px]"
            />
          </div>
        </div>
        <div className="bg-[#EEFAFA] rounded-[16px] py-4 px-4">
          <form action="" className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-[16px] font-normal text-secondary leading-6"
              >
                Name
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
                Email
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
                Phone Number
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
                Message
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
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
