import Image from "next/image";
import heroImage from "@/assets/doctors/heroImage.png";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
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
            Our Doctors
          </h1>
          <p className="text-white text-[12px] lg:text-[20px] lg:leading-[29px] font-semibold flex gap-2 justify-center">
            <Link href="/" className="">
              Home
            </Link>
            /
            <Link href="/doctors" className="">
              Doctors
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
