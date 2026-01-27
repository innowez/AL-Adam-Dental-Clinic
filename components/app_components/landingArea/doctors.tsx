"use client";
import docter1 from "@/assets/landing/docter1.png";
import docter2 from "@/assets/landing/docter2.png";
import docter3 from "@/assets/landing/docter3.png";
import docter4 from "@/assets/landing/docter4.png";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export default function Doctors() {
  const t = useTranslations("doctors");
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());

    api.on("select", () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    });
  }, [api]);
  const docterList = [
    {
      name: t("dr1"),
      field: t("dr1Field"),
      image: docter1,
      pos: "",
    },
    {
      name: t("dr2"),
      field: t("dr2Field"),
      image: docter2,
    },
    {
      name: t("dr3"),
      field: t("dr3Field"),
      image: docter3,
    },
    {
      name: t("dr4"),
      field: t("dr4Field"),
      image: docter4,
    },
  ];
  return (
    <section className="overflow-hidden mb-6 lg:mb-16">
      <div className="flex items-end justify-between mb-4">
        <div className="">
          <h1 className="text-tertiary text-[12px] xl:text-xl rounded-full border border-tertiary px-2 py-0.5 mb-4 inline-block ">
            {t("title")}
          </h1>

          <h2 className="text-[16px] sm:text-[24px] lg:text-[32px] xl:text-[48px] font-semibold text-secondary leading-6 lg:leading-[48px] xl:leading-[69px]">
            {t("description")}
          </h2>
        </div>
        <div className="hidden md:block">
          <div className="flex gap-2 xl:gap-6">
            <button
              onClick={() => api?.scrollPrev()}
              disabled={!canScrollPrev}
              className={`${!canScrollPrev ? "bg-primary/40" : "bg-primary"} flex items-center justify-center rounded-full xl:w-[51px] xl:h-[51px] w-[40px] h-[40px]`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                fill="none"
                viewBox="0 0 21 21"
              >
                <path
                  fill="#fff"
                  d="M.313 9.68a1.04 1.04 0 0 0-.031 1.457l9.121 9.555c.388.406 1.03.412 1.436.013s.419-1.051.031-1.457l-7.427-7.78 16.52.15A1.04 1.04 0 0 0 21 10.597a1.007 1.007 0 0 0-.993-1.04l-16.52-.15 7.765-7.642c.406-.399.42-1.05.032-1.457A1.004 1.004 0 0 0 9.85.295z"
                ></path>
              </svg>
            </button>
            <button
              onClick={() => api?.scrollNext()}
              disabled={!canScrollNext}
              className={`${!canScrollNext ? "bg-primary/40" : "bg-primary"} flex items-center justify-center rounded-full xl:w-[51px] xl:h-[51px] w-[40px] h-[40px]`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                fill="none"
                viewBox="0 0 21 21"
              >
                <path
                  fill="#fff"
                  d="M20.687 9.68c.405.4.419 1.051.031 1.457l-9.121 9.555a1.004 1.004 0 0 1-1.436.013 1.04 1.04 0 0 1-.031-1.457l7.427-7.78-16.52.15A1.04 1.04 0 0 1 0 10.597a1.007 1.007 0 0 1 .993-1.04l16.52-.15-7.765-7.642A1.04 1.04 0 0 1 9.716.308 1.004 1.004 0 0 1 11.15.295z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="gap-2 lg:gap-6 ml-1 lg:ml-4 ">
          {docterList.map((doctor, index) => (
            <CarouselItem
              key={index}
              className="p-2 sm lg:p-5 pb-0 lg:pb-0 rounded-[24px] bg-[#EEFAFA] w-[234px] min-h-[366px] lg:min-w-[383px] lg:min-h-[366px] relative lg:h-[570px] lg:w-[383px] overflow-hidden basis-full sm:basis-1/2 lg:basis-1/3 "
            >
              <h1 className="text-[16px] lg:text-[24px] font-semibold text-secondary leading-6 lg:leading-[35px] mb-2">
                {doctor.name}
              </h1>
              <p className="text-[12px] lg:text-[16px] font-normal text-secondary leading-3 lg:leading-[23px] bg-[#22499814] rounded-full px-2 py-1 inline-block">
                {doctor.field}
              </p>
              <div
                className={`absolute bottom-0 w-full min-h-[300px] max-h-[313px] lg:max-h-[500px] lg:min-h-[475px]  left-0 ${index === 0 ? "left-[-6px]" : ""}`}
              >
                <Image
                  src={doctor.image}
                  alt="doctor"
                  className={`object-cover object-top ${index === 0 ? "" : "saturate-0 absolute "} `}
                  //   width={400}
                  //   height={550}
                  fill
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

// Legas Curosol
{
  /* <div className="flex gap-2 lg:gap-6 overflow-x-scroll no-scrollbar">
        {docterList.map((doctor, index) => (
          <div
            key={index}
            className="p-2 lg:p-5 pb-0 lg:pb-0 rounded-[24px] bg-[#EEFAFA] min-w-[234px] min-h-[366px] lg:min-w-[383px] lg:min-h-[366px] relative lg:h-[570px] lg:w-[383px] overflow-hidden "
          >
            <h1 className="text-[16px] lg:text-[24px] font-semibold text-secondary leading-6 lg:leading-[35px] mb-2">
              {doctor.name}
            </h1>
            <p className="text-[12px] lg:text-[16px] font-normal text-secondary leading-3 lg:leading-[23px] bg-[#22499814] rounded-full px-2 py-1 inline-block">
              {doctor.field}
            </p>
            <div
              className={`absolute h-full w-full min-h-[366px] min-w-[236px] lg:max-h-[475px] lg:max-w-[500px] left-0 ${index === 0 ? "left-[-6px]" : ""}`}
            >
              <Image
                src={doctor.image}
                alt="doctor"
                className={`object-cover ${index === 0 ? "" : "saturate-0 absolute "} `}
                //   width={400}
                //   height={550}
                fill
              />
            </div>
          </div>
        ))}
      </div> */
}
