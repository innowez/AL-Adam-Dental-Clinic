import Image from "next/image";
import heroImage from "@/assets/aboutus/hero.png";
import Link from "next/link";
import { useTranslations } from "next-intl";

function LandingSection() {
  const t = useTranslations("aboutPage");
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-end gap-2 justify-between mb-4 lg:mb-7">
        <h1 className="text-[20px] sm:text-2xl md:text-3xl xl:text-[48px] font-semibold leading-[29px] md:leading-9 xl:leading-[69px] text-secondary ">
          {t("title1")} <br className="hidden sm:block" />
          {t("title2")}
        </h1>

        <p className="text-[12px] md:text-[15px] xl:text-[20px] font-normal leading-[17px] xl:leading-[29px] text-secondary sm:max-w-[326px] lg:max-w-[426px] ">
          {t("description")}
        </p>
      </div>
      <section className="w-full h-[211px] lg:h-[398px] relative overflow-hidden rounded-3xl mb-7 lg:mb-16">
        <Image
          src={heroImage.src}
          alt=""
          fill
          className="object-cover absolute top-0 left-0 rounded-3xl"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-white text-[20px] sm:text-[24px] lg:text-[48px] font-bold leading-[29px] lg:leading-[69px]">
            {t("aboutUs")}
          </h1>
          <p className="text-white text-[12px] sm:text-[16px] lg:text-[20px] lg:leading-[29px] font-semibold flex gap-2 justify-center">
            <Link href="/" className="">
              {t("home")}
            </Link>
            /
            <Link href="/about" className="">
              {t("aboutUs")}
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default LandingSection;
