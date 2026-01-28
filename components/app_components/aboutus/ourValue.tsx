import Image from "next/image";
import ourValueImg from "@/assets/aboutus/ourvalue.png";

export default function OurValue() {
  return (
    <section className="mb-10 lg:mb-20">
      <div className="relative h-[414px] lg:h-[395px] xl:h-[495px]">
        <Image
          src={ourValueImg.src}
          alt="ourValueImg"
          fill
          className="object-cover w-full h-full rounded-[24px]"
        />
        <div className="absolute top-0 left-0 w-full h-full p-4 lg:p-10 ">
          <div className="flex flex-col gap-6 lg:justify-between h-full  ">
            <div className="">
              <span className="text-[12px] lg:text-[20px] leading-[29px] text-white rounded-full border border-white px-2  lg:px-4 lg:py-0.5 inline-block mb-6">
                Our Values
              </span>
              <h2 className="text-[20px] lg:text-[48px] font-semibold leading-[29px] lg:leading-[69px] text-white">
                Principles That Shape <br />
                Our Care
              </h2>
            </div>

            <div className="ml-4 lg:ml-20">
              <ul className="text-[16px] lg:text-[20px] lg:leading-[29px] text-white list-disc ">
                <li>Patient First</li>
                <li>Clinical Excellence</li>
                <li>Transparency</li>
                <li>Comfort & Care</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-full lg:w-[60%] p-4 lg:p-10 ">
          <div className="flex flex-col lg:flex-row lg:items-end items-center justify-between gap-6 lg:gap-0 w-full ">
            <div>
              <button className="text-xs lg:text-base bg-white text-black rounded-full px-4 py-2">
                Contact us
              </button>
            </div>

            <p className="text-[12px] lg:text-[20px] leading-[17px] lg:leading-[29px] text-center lg:text-left text-white max-w-[433px]">
              Our values define how we treat our patients, how we work as a
              team, and how we deliver dental care every day. They guide our
              commitment to quality, trust, and long-term patient relationships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
