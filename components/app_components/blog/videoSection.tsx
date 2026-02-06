"use client";

import Image from "next/image";
import video0 from "@/assets/blogs/video0.png";
import video1 from "@/assets/blogs/video1.png";
import video2 from "@/assets/blogs/video2.png";
import video3 from "@/assets/blogs/video3.png";
import video4 from "@/assets/blogs/video4.png";
// import video from "@/assets/blogs/blogVid.mp4";

import { CirclePause, CirclePlay, Pause, X } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function VideoSection() {
  const t = useTranslations("blogPage");
  const [image, setImage] = useState(video0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };
  return (
    <>
      <div className="px-4 lg:px-12 mb-7 lg:mb-12">
        <div className="flex items-center w-full justify-between mb-6">
          <h1 className="text-secondary text-[16px] lg:text-[48px] font-semibold leading-[23px] lg:leading-[69px] whitespace-nowrap">
            {t("realtimeupdates")}
          </h1>

          {/* <div>
            <button className=" px-4 py-1 rounded-full bg-primary text-white text-[12px] lg:text-[20px] ">
              {t("viewall")}
            </button>
          </div> */}
        </div>

        <div>
          <div className="relative isolate group w-full min-h-[162px] max-h-[544px] sm:h-[360px] lg:h-[489px] mb-4 overflow-hidden rounded-3xl">
            {/* <Image
            src={image}
            alt=""
            fill
            className="object-cover absolute top-0 left-0 rounded-3xl z-10"
          /> */}
            <video
              src={"/blogs/blogVid.mp4"}
              loop
              muted
              className="object-cover absolute top-0 left-0 rounded-3xl z-10"
              ref={videoRef}
            ></video>
            <div className="absolute top-0 left-0 bottom-0 right-0 rounded-3xl w-full h-full bg-black/20 z-20 "></div>
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
              onClick={handlePlayPause}
            >
              {!isPlaying ? (
                <CirclePlay
                  className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]"
                  color="white"
                  strokeWidth={1}
                />
              ) : (
                <CirclePause
                  className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] lg:hidden group-hover:block"
                  color="white"
                  strokeWidth={1}
                />
              )}
            </button>

            <button
              className="absolute top-4 right-4 z-20 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
              onClick={() => {
                videoRef.current?.pause();
                setOpenVideo(true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="none"
                viewBox="0 0 28 28"
                className="w-[18px] lg:w-[28px] h-[18px] lg:h-[28px]"
              >
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M0 1.126C0 .504.504 0 1.126 0h8.046a1.126 1.126 0 1 1 0 2.253H2.897a.644.644 0 0 0-.644.644v6.275a1.126 1.126 0 1 1-2.253 0zm17.701 0c0-.622.505-1.126 1.127-1.126h8.046C27.496 0 28 .504 28 1.126v8.046a1.126 1.126 0 1 1-2.253 0V2.897a.644.644 0 0 0-.644-.644h-6.275A1.126 1.126 0 0 1 17.7 1.126M1.126 17.701c.623 0 1.127.505 1.127 1.127v6.275c0 .356.288.644.644.644h6.275a1.126 1.126 0 1 1 0 2.253H1.126A1.126 1.126 0 0 1 0 26.874v-8.046c0-.622.504-1.127 1.126-1.127m25.748 0c.622 0 1.126.505 1.126 1.127v8.046c0 .622-.504 1.126-1.126 1.126h-8.046a1.126 1.126 0 1 1 0-2.253h6.275a.644.644 0 0 0 .644-.644v-6.275c0-.622.504-1.127 1.127-1.127"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div className="flex gap-2 overflow-x-scroll w-full no-scrollbar ">
            {[video0, video1, video2, video3, video4].map((video, index) => (
              <div
                key={index}
                className="relative w-[159px] h-[98px] lg:w-[270px] lg:h-[166px] group cursor-pointer"
                onClick={() => setImage(video)}
              >
                <Image
                  src={video}
                  alt=""
                  fill
                  className="object-cover absolute rounded-[12px] lg:rounded-[20px] "
                />
                <div className="hidden group-hover:block absolute top-0 left-0 bottom-0 right-0 rounded-3xl w-full h-full bg-black/20 z-20 transition-all duration-300 ease-in-out"></div>
                <button className="hidden group-hover:block cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-300 ease-in-out">
                  <CirclePlay
                    color="white"
                    className="w-[28px] h-[28px] lg:w-[30px] lg:h-[30px]"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {openVideo && (
          <div className="w-full h-full fixed top-0 left-0 right-0 bottom-0 z-50">
            <div className="w-full h-full bg-black/50 absolute top-0 left-0 right-0 bottom-0 z-50"></div>
            <motion.div
              // initial={{ opacity: 0, y: "100%" }}
              // animate={{ opacity: 1, y: 0 }}
              // exit={{ opacity: 0, y: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              // className="sticky bottom-0 left-0 z-50 w-full h-full"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[50%] z-50 min-w-[280px] min-h-[160px] sm:min-w-[320px] sm:min-h-[180px] md:min-w-[400px] md:min-h-[240px] lg:min-w-[600px] lg:min-h-[360px] xl:min-w-[800px] xl:min-h-[480px] 2xl:min-w-[1000px] 2xl:min-h-[600px] "
            >
              <X
                className="absolute top-4 right-4 z-20 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
                onClick={() => setOpenVideo(false)}
              />
              <div className="rounded-[24px] px-4 py-6 overflow-y-auto no-scrollbar">
                <video
                  src={"/blogs/blogVid.mp4"}
                  loop
                  muted
                  controls
                  className="object-cover absolute top-0 left-0 rounded-sm sm:rounded-lg md:rounded-xl lg:rounded-3xl z-10"
                ></video>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
