import Image from "next/image";
import testimonial1 from "@/assets/landing/testm1.png";
import testimonial2 from "@/assets/landing/testm2.png";
import testimonial3 from "@/assets/landing/testm3.png";

export default function Testmonies() {
  return (
    <section className="mb-6 lg:mb-16">
      <div className="flex flex-col items-center gap-2 mb-4 lg:mb-12">
        <h1 className="text-tertiary text-[12px] lg:text-[20px] lg:leading-[29px] rounded-full border border-tertiary px-2 py-0.5 lg:mb-2 inline-block ">
          Testimonials
        </h1>

        <h2 className="text-[16px] lg:text-[48px] font-semibold text-secondary leading-6 lg:leading-[69px] lg:mb-4">
          What Our Patients Say
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:justify-center gap-3 lg:gap-6">
        <div className="py-[18px] lg:py-0 ">
          <div
            className="rounded-[44px] py-[51px] px-[24px] lg:h-[332px] flex items-end relative"
            style={{
              background:
                "linear-gradient(216.46deg, #89FFFF -36.09%, #224998 110.03%), #224998",
            }}
          >
            <div className="absolute top-0 left-[30px] lg:hidden">
              <UpperQuote />
            </div>
            <div className="absolute bottom-0 right-[45px] lg:hidden">
              <DownQuote />
            </div>
            <span className="hidden lg:block absolute top-[64px] left-[30px] font-[aboreto] text-[60px] text-white ">
              “
            </span>
            <p className="text-[14px] lg:text-[20px] font-normal text-white leading-5 lg:leading-[29px] text-center">
              From the first consultation, the team was professional and
              reassuring. The dentist explained everything clearly and made me
              feel comfortable throughout the treatment.
            </p>
          </div>
        </div>

        <div className="rounded-[44px] overflow-hidden relative min-h-[172px]">
          <Image
            src={testimonial1.src}
            alt="testimonial1"
            fill
            className="object-cover max-h-[172px] lg:max-h-[332px] lg:w-[432px]"
          />
          <div
            className="absolute top-0 left-0 w-full h-full z-10 "
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0) 73.8%, #FFFFFF 100%)",
            }}
          ></div>
        </div>

        <div className="py-[18px] lg:py-0 ">
          <div
            className="rounded-[44px] py-[51px] px-[24px] lg:h-[332px] flex items-end relative"
            style={{
              background:
                "linear-gradient(216.46deg, #89FFFF -36.09%, #224998 110.03%), #224998",
            }}
          >
            <div className="absolute top-0 left-[30px] lg:hidden">
              <UpperQuote />
            </div>
            <div className="absolute bottom-0 right-[45px] lg:hidden">
              <DownQuote />
            </div>
            <span className="hidden lg:block absolute top-[64px] left-[30px] font-[aboreto] text-[60px] text-white ">
              “
            </span>
            <p className="text-[14px] lg:text-[20px] font-normal text-white leading-5 lg:leading-[29px] text-center">
              I was nervous before my visit, but the doctors and staff were very
              patient and supportive. The treatment was smooth and handled with
              great care.
            </p>
          </div>
        </div>

        <div className="rounded-[44px] overflow-hidden relative min-h-[172px]">
          <Image
            src={testimonial2.src}
            alt="testimonial2"
            fill
            className="object-cover object-bottom max-h-[172px] lg:max-h-[332px] lg:w-full"
          />
          <div
            className="absolute top-0 left-0 w-full h-full z-10 "
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0) 73.8%, #FFFFFF 100%)",
            }}
          ></div>
        </div>

        <div className="py-[18px] lg:py-0">
          <div
            className="rounded-[44px] py-[51px] px-[24px] lg:h-[332px] flex items-end relative"
            style={{
              background:
                "linear-gradient(216.46deg, #89FFFF -36.09%, #224998 110.03%), #224998",
            }}
          >
            <div className="absolute top-0 left-[30px] lg:hidden">
              <UpperQuote />
            </div>
            <div className="absolute bottom-0 right-[45px] lg:hidden">
              <DownQuote />
            </div>
            <span className="hidden lg:block absolute top-[64px] left-[30px] font-[aboreto] text-[60px] text-white ">
              “
            </span>
            <p className="text-[14px] lg:text-[20px] font-normal text-white leading-5 lg:leading-[29px] text-center">
              The clinic is clean, well-organized, and the doctors are highly
              experienced. I’m satisfied with the care I received and would
              recommend them to others.
            </p>
          </div>
        </div>

        <div className="rounded-[44px] overflow-hidden relative min-h-[172px]">
          <Image
            src={testimonial3.src}
            alt="testimonial3"
            fill
            className="object-cover max-h-[172px] lg:max-h-[332px] lg:w-full"
          />
          <div
            className="absolute top-0 left-0 w-full h-full z-10 "
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0) 73.8%, #FFFFFF 100%)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}

const UpperQuote = () => {
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="16"
        fill="none"
        viewBox="0 0 35 16"
      >
        <path
          fill="#fff"
          d="M34.2 8.92q0 2.76-1.8 4.56-1.8 1.68-4.68 1.68-3.36 0-5.16-2.52-1.68-2.52-1.68-6.96 0-5.88 2.88-10.92 3-5.16 8.28-8.76l1.2 1.8q-8.28 6.24-8.76 17.52 1.44-2.28 4.2-2.28 2.52 0 3.96 1.68 1.56 1.68 1.56 4.2m-20.88 0q0 2.76-1.8 4.56-1.8 1.68-4.68 1.68-3.36 0-5.16-2.52Q0 10.12 0 5.68 0-.2 2.88-5.24q3-5.16 8.28-8.76l1.2 1.8Q4.08-5.96 3.6 5.32q1.44-2.28 4.2-2.28 2.52 0 3.96 1.68 1.56 1.68 1.56 4.2"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="30"
        fill="none"
        viewBox="0 0 35 30"
        className="absolute top-[-14px] left-0 -z-10"
      >
        <path
          fill="#224998"
          d="M34.2 22.92q0 2.76-1.8 4.56-1.8 1.68-4.68 1.68-3.36 0-5.16-2.52-1.68-2.52-1.68-6.96 0-5.88 2.88-10.92 3-5.16 8.28-8.76l1.2 1.8q-8.28 6.24-8.76 17.52 1.44-2.28 4.2-2.28 2.52 0 3.96 1.68 1.56 1.68 1.56 4.2m-20.88 0q0 2.76-1.8 4.56-1.8 1.68-4.68 1.68-3.36 0-5.16-2.52Q0 24.12 0 19.68 0 13.8 2.88 8.76q3-5.16 8.28-8.76l1.2 1.8Q4.08 8.04 3.6 19.32q1.44-2.28 4.2-2.28 2.52 0 3.96 1.68 1.56 1.68 1.56 4.2"
        ></path>
      </svg>
    </div>
  );
};

const DownQuote = () => {
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="30"
        fill="none"
        viewBox="0 0 35 30"
        className="absolute bottom-[-18px] right-0 -z-10"
      >
        <path
          fill="#224998"
          d="M0 22.92q0 2.76 1.8 4.56 1.8 1.68 4.68 1.68 3.36 0 5.16-2.52 1.68-2.52 1.68-6.96 0-5.88-2.88-10.92Q7.44 3.6 2.16 0L.96 1.8q8.28 6.24 8.76 17.52-1.44-2.28-4.2-2.28-2.52 0-3.96 1.68Q0 20.4 0 22.92m20.88 0q0 2.76 1.8 4.56 1.8 1.68 4.68 1.68 3.36 0 5.16-2.52 1.68-2.52 1.68-6.96 0-5.88-2.88-10.92-3-5.16-8.28-8.76l-1.2 1.8q8.28 6.24 8.76 17.52-1.44-2.28-4.2-2.28-2.52 0-3.96 1.68-1.56 1.68-1.56 4.2"
        ></path>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="11"
        fill="none"
        viewBox="0 0 35 11"
      >
        <path
          fill="#fff"
          d="M0 22.92q0 2.76 1.8 4.56 1.8 1.68 4.68 1.68 3.36 0 5.16-2.52 1.68-2.52 1.68-6.96 0-5.88-2.88-10.92Q7.44 3.6 2.16 0L.96 1.8q8.28 6.24 8.76 17.52-1.44-2.28-4.2-2.28-2.52 0-3.96 1.68Q0 20.4 0 22.92m20.88 0q0 2.76 1.8 4.56 1.8 1.68 4.68 1.68 3.36 0 5.16-2.52 1.68-2.52 1.68-6.96 0-5.88-2.88-10.92-3-5.16-8.28-8.76l-1.2 1.8q8.28 6.24 8.76 17.52-1.44-2.28-4.2-2.28-2.52 0-3.96 1.68-1.56 1.68-1.56 4.2"
        ></path>
      </svg>
    </div>
  );
};
