import React from "react";
import Image from "next/image";
import whoWeAre1 from "@/assets/aboutus/wwa1.png";
import whoWeAre2 from "@/assets/aboutus/wwa2.png";
import whoWeAre3 from "@/assets/aboutus/wwa3.png";
import whoWeAre4 from "@/assets/aboutus/wwa4.png";
import whoWeAre5 from "@/assets/aboutus/wwa5.png";

function WhoWeAre() {
  return (
    <section className="">
      <div className="mb-7 lg:mb-10">
        <h1 className="text-base sm:text-[32px] font-semibold text-center lg:text-[64px] leading-[27px] sm:leading-[46px] lg:leading-[69px] text-secondary mb-2">
          Who We Are
        </h1>
        <p className="text-[12px] sm:text-[20px] font-normal text-center lg:text-[20px] leading-[17px] sm:leading-[29px] lg:leading-[29px] text-secondary/60">
          Al Adam Specialty Dental Clinic is a modern dental care center focused
          on <br className="hidden lg:block" /> delivering safe, reliable, and
          patient-centered treatments using advanced{" "}
          <br className="hidden lg:block" />
          technology and experienced specialists.
        </p>
      </div>

      <div className="flex justify-center gap-2 isolate relative h-[190px] xl:h-[340px] mb-8 xl:mb-40">
        <div className="w-[245px] h-[340px] absolute top-[59px] left-[calc(50%-470px)] transform -translate-x-1/2 -rotate-12 hidden lg:block">
          <Image
            src={whoWeAre1.src}
            alt=""
            fill
            className="object-cover rounded-2xl "
          />
        </div>
        <div className="h-[164px] w-[119px] xl:w-[245px] xl:h-[340px] absolute top-[10px] xl:top-[19px] left-[calc(50%-115px)] xl:left-[calc(50%-238px)] transform -translate-x-1/2 rotate-[-5deg] ">
          <Image
            src={whoWeAre2.src}
            alt=""
            fill
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="h-[164px] w-[119px] xl:w-[245px] xl:h-[340px] absolute top-0 left-1/2 transform -translate-x-1/2 z-50">
          <Image
            src={whoWeAre3.src}
            alt=""
            fill
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="h-[164px] w-[119px] xl:w-[245px] xl:h-[340px] absolute top-[9px] xl:top-[20px] left-1/2 transform -translate-x-[calc(50%-115px)] xl:-translate-x-[calc(50%-240px)] rotate-[5deg] z-40">
          <Image
            src={whoWeAre4.src}
            alt=""
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        <div className="w-[245px] h-[340px] absolute top-[59px] left-1/2 transform -translate-x-[calc(50%-470px)] rotate-12 z-30 hidden lg:block">
          <Image
            src={whoWeAre5.src}
            alt=""
            fill
            className="object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
