import Image from "next/image";
import whoWeAre1 from "@/assets/aboutus/wwa1.png";
import whoWeAre2 from "@/assets/aboutus/wwa2.png";
import whoWeAre3 from "@/assets/aboutus/wwa3.png";
import whoWeAre4 from "@/assets/aboutus/wwa4.png";
import whoWeAre5 from "@/assets/aboutus/wwa5.png";
import { useTranslations } from "next-intl";

function WhoWeAre() {
  const t = useTranslations("aboutPage");
  return (
    <section className="">
      <div className="mb-7 lg:mb-10">
        <h1 className="text-base sm:text-2xl lg:text-[32px] leading-[27px] lg:leading-[46px] font-semibold text-center text-secondary mb-2">
          {t("whoWeAre")}
        </h1>
        <p className="text-[12px] sm:text-[14px] lg:text-[20px] font-normal text-center leading-[17px] lg:leading-[29px] text-secondary/60">
          {t("wwadis1")} <br className="hidden lg:block" /> {t("wwadis2")}
          <br className="hidden lg:block" />
          {t("wwadis3")}
        </p>
      </div>

      <div className="flex justify-center gap-2 isolate relative h-[190px] lg:h-[340px] mb-8 lg:mb-40">
        <div className="h-[164px] w-[119px] lg:w-[245px] lg:h-[340px] absolute top-[33px] left-[calc(50%-230px)] lg:top-[59px] lg:left-[calc(50%-470px)] transform -translate-x-1/2 -rotate-12 hidden sm:block">
          <Image
            src={whoWeAre1.src}
            alt=""
            fill
            className="object-cover rounded-2xl "
          />
        </div>
        <div className="h-[164px] w-[119px] lg:w-[245px] lg:h-[340px] absolute top-[10px] lg:top-[19px] left-[calc(50%-115px)] lg:left-[calc(50%-238px)] transform -translate-x-1/2 rotate-[-5deg] ">
          <Image
            src={whoWeAre2.src}
            alt=""
            fill
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="h-[164px] w-[119px] lg:w-[245px] lg:h-[340px] absolute top-0 left-1/2 transform -translate-x-1/2 z-50">
          <Image
            src={whoWeAre3.src}
            alt=""
            fill
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="h-[164px] w-[119px] lg:w-[245px] lg:h-[340px] absolute top-[9px] lg:top-[20px] left-1/2 transform -translate-x-[calc(50%-115px)] lg:-translate-x-[calc(50%-240px)] rotate-[5deg] z-40">
          <Image
            src={whoWeAre4.src}
            alt=""
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        <div className="h-[164px] w-[119px] lg:w-[245px] lg:h-[340px] absolute top-8 -translate-x-[calc(50%-230px)] lg:top-[59px] left-1/2 transform lg:-translate-x-[calc(50%-470px)] rotate-12 z-30 hidden sm:block">
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
