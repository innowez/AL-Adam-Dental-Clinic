"use client";

import Image from "next/image";
import arabi1 from "@/assets/landing/arabi1.png";
import arabi2 from "@/assets/landing/arabi2.png";
import arabi3 from "@/assets/landing/arabi3.png";
import heroImage from "@/assets/landing/hero_Image.png";
import smileFace from "@/assets/landing/smileFace.png";

import Contactus from "../contactus";
import Testmonies from "../testmonies";
import Doctors from "./doctors";

function HeroSection() {
  const services = [
    {
      title: "General Dentistry",
      description:
        "Regular check-ups and cleanings to keep your teeth and gums healthy.",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="31"
          fill="none"
          viewBox="0 0 33 31"
          className="lg:w-[57px] lg:h-[55px]"
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M30.495 1.56a5.327 5.327 0 1 0-7.534 7.535 5.327 5.327 0 0 0 7.534-7.535M12.091 3.296a8.7 8.7 0 0 1 1.655-.823 7.54 7.54 0 0 1 5.136-.089 7.4 7.4 0 0 1 2.037 1.094 6.106 6.106 0 0 0 2.817 7.164 7.3 7.3 0 0 1-.312 1.195 6.7 6.7 0 0 1-1.309 2.055 20 20 0 0 1-2.297 2.194 2.1 2.1 0 0 0-.778 1.672 25.2 25.2 0 0 1-1.343 8.255c-.653 1.832-1.555 3.462-2.738 4.582q.006-.41.006-.678c0-3.077-.006-5.894-.348-7.952-.37-2.23-1.145-3.598-2.715-3.523-2.51-.018-2.945 3.221-3.014 7.727-.013.92-.012 1.897-.01 2.91v.836q0 .268.005.678c-1.183-1.119-2.085-2.75-2.738-4.582a25.2 25.2 0 0 1-1.343-8.254 2.1 2.1 0 0 0-.778-1.673 20.3 20.3 0 0 1-2.297-2.193 6.7 6.7 0 0 1-1.31-2.056 7.42 7.42 0 0 1 4.546-9.454 7.3 7.3 0 0 1 3.422-.354 7.6 7.6 0 0 1 2.785.967 9.7 9.7 0 0 0-2.345 2.451.384.384 0 0 0 .64.424 8.9 8.9 0 0 1 2.626-2.573m15.556-.754V4.41h1.867v1.838h-1.867v1.867H25.81V6.247H23.94V4.409h1.868V2.54z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
    },
    {
      title: "Cosmetic Dentistry",
      description: "Safe and effective treatments to enhance your smile.",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          fill="none"
          viewBox="0 0 56 56"
          className="w-[38px] h-[38px] lg:w-[56px] lg:h-[56px]"
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M28 0C12.536 0 0 12.536 0 28s12.536 28 28 28 28-12.536 28-28S43.464 0 28 0M12 28c0 1.657-1.79 3-4 3s-4-1.343-4-3 1.79-3 4-3 4 1.343 4 3m36 3c2.21 0 4-1.343 4-3s-1.79-3-4-3-4 1.343-4 3 1.79 3 4 3m-9-16c-1.88 0-3.67.9-4.8 2.4-.33.44-.24 1.07.2 1.4s1.07.24 1.4-.2c.75-1 1.95-1.6 3.2-1.6s2.45.6 3.2 1.6c.2.26.5.4.8.4.21 0 .42-.07.6-.2.44-.33.53-.96.2-1.4A6.04 6.04 0 0 0 39 15m-18.8 3.6c-.75-1-1.95-1.6-3.2-1.6s-2.45.6-3.2 1.6c-.33.44-.96.53-1.4.2s-.53-.96-.2-1.4c1.13-1.5 2.92-2.4 4.8-2.4s3.67.9 4.8 2.4c.33.44.24 1.07-.2 1.4-.18.13-.39.2-.6.2-.3 0-.6-.14-.8-.4M39 30H17c-1.65 0-3 1.35-3 3 0 2.97.93 5.73 2.52 8 2.53 3.62 6.73 6 11.48 6s8.95-2.38 11.481-6a13.9 13.9 0 0 0 2.52-8c0-1.65-1.35-3-3-3M18.68 40.56C20.89 43.27 24.24 45 28 45s7.11-1.73 9.32-4.44C34.76 38.25 31.48 37 28 37s-6.76 1.25-9.32 3.56"
            clipRule="evenodd"
          ></path>
          <path
            fill="#fff"
            d="M28 0C12.56 0 0 12.56 0 28s12.56 28 28 28 28-12.56 28-28S43.44 0 28 0m0 54C13.66 54 2 42.34 2 28S13.66 2 28 2s26 11.66 26 26-11.66 26-26 26"
          ></path>
        </svg>
      ),
    },
    {
      title: "Orthodontics",
      description:
        "Teeth alignment solutions to improve function and appearance for all age groups.",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="57"
          fill="none"
          viewBox="0 0 54 57"
          className="w-[36] h-[39] lg:w-[54px] lg:h-[57px] "
        >
          <path
            fill="#fff"
            d="M13.016 25.55a2.5 2.5 0 0 0 1.613 1.896 12.34 12.34 0 0 0 8.716.006 2.51 2.51 0 0 0 1.626-1.947q.31-1.862.354-3.748c-.951.065-2.359.142-4.1.187v.02a1.67 1.67 0 0 1-1.67 1.669h-1.193a1.67 1.67 0 0 1-1.67-1.67c-1.291-.026-2.673-.07-4.107-.154.058 1.255.202 2.505.431 3.74M25.222 18.538c-.026-.322-.064-.65-.11-.971a8 8 0 0 0-2.307-4.654c-2.108-2.056-4.467-2.056-7.096.065a8.39 8.39 0 0 0-3.02 5.598c1.4.084 2.744.129 4.004.148v-.287a1.67 1.67 0 0 1 1.669-1.669h1.193a1.67 1.67 0 0 1 1.67 1.67v.273c1.722-.045 3.104-.116 3.997-.173M1.73 23.77a3.61 3.61 0 0 0 2.564 2.641 12.36 12.36 0 0 0 6.383.09 5 5 0 0 1-.123-.508 30 30 0 0 1-.469-4.357c-.643-.058-1.292-.123-1.947-.187v.16a1.343 1.343 0 0 1-1.344 1.344H5.168a1.344 1.344 0 0 1-1.343-1.343v-.746a71 71 0 0 1-2.552-.476c.046 1.14.2 2.271.456 3.381M10.406 11.596q-3.48-1.447-6.967.765a3.5 3.5 0 0 0-1.517 2.082q-.35 1.322-.514 2.68 1.204.27 2.416.463a1.343 1.343 0 0 1 1.344-1.343h1.626a1.344 1.344 0 0 1 1.343 1.343v.61c.695.078 1.382.142 2.057.2.2-1.923.9-3.76 2.031-5.328a4.2 4.2 0 0 0-1.819-1.472M21.224 39.896a1.71 1.71 0 0 1-1.71 1.711h-1.11a1.71 1.71 0 0 1-1.711-1.71c-1.28-.02-2.642-.071-4.063-.155a33 33 0 0 0 .316 3.03 3.24 3.24 0 0 0 1.84 2.451c3.06 1.411 5.879 1.273 8.437.012a3.15 3.15 0 0 0 1.725-2.311q.252-1.605.332-3.227c-.951.064-2.34.142-4.056.186zM25.055 33.038A3.25 3.25 0 0 0 22.51 30.3a17 17 0 0 0-7.11 0 3.24 3.24 0 0 0-2.538 2.738 33 33 0 0 0-.27 3.465c1.433.09 2.809.135 4.1.16v-.21a1.71 1.71 0 0 1 1.712-1.71h1.11a1.71 1.71 0 0 1 1.71 1.71v.197a90 90 0 0 0 4.101-.186 32 32 0 0 0-.27-3.426M1.292 38.328q.065 1.735.328 3.452a3.15 3.15 0 0 0 1.787 2.384c2.68 1.234 5.161 1.247 7.45.335a5.3 5.3 0 0 1-.386-1.35 33 33 0 0 1-.347-3.58 74 74 0 0 1-1.987-.187A1.41 1.41 0 0 1 6.73 40.79H5.232a1.41 1.41 0 0 1-1.408-1.408v-.585a70 70 0 0 1-2.532-.469M10.895 29.696a16.6 16.6 0 0 0-6.897 0 3.14 3.14 0 0 0-2.462 2.654c-.115.855-.199 1.761-.238 2.687.836.186 1.685.353 2.527.488v-.038a1.41 1.41 0 0 1 1.407-1.408H6.73a1.41 1.41 0 0 1 1.407 1.408v.65c.656.076 1.312.134 1.954.185a36 36 0 0 1 .29-3.618 5.73 5.73 0 0 1 1.189-2.79 3 3 0 0 0-.675-.219M28.07 25.505a2.51 2.51 0 0 0 1.626 1.947 12.34 12.34 0 0 0 8.716-.006 2.5 2.5 0 0 0 1.613-1.896 27.5 27.5 0 0 0 .43-3.741 108 108 0 0 1-4.107.154 1.67 1.67 0 0 1-1.669 1.67h-1.193a1.67 1.67 0 0 1-1.67-1.67v-.02a100 100 0 0 1-4.1-.186c.03 1.256.147 2.509.354 3.748M40.353 18.576a8.39 8.39 0 0 0-3.022-5.598c-2.628-2.121-4.987-2.121-7.096-.065a8 8 0 0 0-2.307 4.654c-.045.321-.084.65-.11.97.894.058 2.276.13 3.999.174v-.274a1.67 1.67 0 0 1 1.669-1.669h1.193a1.67 1.67 0 0 1 1.67 1.67v.286a91 91 0 0 0 4.004-.148M49.216 20.864v.746a1.343 1.343 0 0 1-1.343 1.343h-1.626a1.343 1.343 0 0 1-1.343-1.343v-.16c-.656.063-1.305.128-1.948.186a30 30 0 0 1-.47 4.358q-.046.256-.121.507c2.098.53 4.3.499 6.382-.09a3.61 3.61 0 0 0 2.565-2.642c.257-1.11.41-2.242.456-3.38-.848.173-1.703.334-2.552.475M49.602 12.36q-3.48-2.217-6.968-.764a4.2 4.2 0 0 0-1.819 1.472 11.06 11.06 0 0 1 2.032 5.328 83 83 0 0 0 2.056-.2v-.61a1.344 1.344 0 0 1 1.344-1.343h1.626a1.344 1.344 0 0 1 1.343 1.343 39 39 0 0 0 2.417-.462q-.164-1.359-.514-2.68a3.5 3.5 0 0 0-1.517-2.083M27.761 39.697q.08 1.622.332 3.227a3.15 3.15 0 0 0 1.725 2.31c2.558 1.262 5.377 1.4 8.436-.01a3.24 3.24 0 0 0 1.841-2.452c.148-.959.251-1.981.316-3.03-1.42.084-2.784.135-4.063.154a1.71 1.71 0 0 1-1.71 1.711h-1.11a1.71 1.71 0 0 1-1.711-1.71v-.014a99 99 0 0 1-4.056-.186M31.817 36.65v-.197a1.71 1.71 0 0 1 1.71-1.71h1.11a1.71 1.71 0 0 1 1.711 1.71v.21a95 95 0 0 0 4.101-.16 33 33 0 0 0-.27-3.465A3.24 3.24 0 0 0 37.64 30.3a17 17 0 0 0-7.109 0 3.25 3.25 0 0 0-2.545 2.738 32 32 0 0 0-.27 3.426c.887.064 2.307.142 4.1.186M49.634 44.165a3.15 3.15 0 0 0 1.787-2.385q.262-1.717.328-3.452a70 70 0 0 1-2.533.47v.584a1.41 1.41 0 0 1-1.407 1.408H46.31a1.41 1.41 0 0 1-1.407-1.408q-1.003.108-1.987.187a33 33 0 0 1-.347 3.58c-.067.465-.197.919-.385 1.35 2.288.912 4.769.9 7.45-.335M51.743 35.037a29 29 0 0 0-.238-2.687 3.14 3.14 0 0 0-2.462-2.655 16.6 16.6 0 0 0-6.897 0q-.35.07-.675.219c.64.806 1.05 1.77 1.19 2.79q.236 1.802.289 3.618a53 53 0 0 0 1.954-.186v-.65a1.41 1.41 0 0 1 1.407-1.407h1.498a1.41 1.41 0 0 1 1.408 1.408v.038c.842-.135 1.69-.302 2.526-.488"
          ></path>
          <path
            fill="#fff"
            d="M49.071 2.733a94.4 94.4 0 0 0-45.1 0A5.164 5.164 0 0 0 0 7.74V9.19a1.335 1.335 0 0 0 2.087 1.092l.027-.017c2.982-1.89 6.183-2.224 9.243-.951a6.54 6.54 0 0 1 2.571 1.94c.077-.063.148-.14.231-.205 3.574-2.88 7.354-2.847 10.368.084a10.3 10.3 0 0 1 1.993 2.738 10.4 10.4 0 0 1 1.986-2.738c3.02-2.931 6.8-2.963 10.374-.084.084.064.154.142.231.206a6.54 6.54 0 0 1 2.572-1.941c3.06-1.273 6.26-.945 9.243.957l.032.021a1.335 1.335 0 0 0 2.082-1.096V7.741a5.164 5.164 0 0 0-3.97-5.008M51.083 46.202a6 6 0 0 1-.414.212 12.4 12.4 0 0 1-5.206 1.208 11.3 11.3 0 0 1-4.191-.823l-.604-.237a6 6 0 0 1-1.382.912 12.7 12.7 0 0 1-5.342 1.24 11.7 11.7 0 0 1-5.167-1.233 5.7 5.7 0 0 1-2.257-1.986 5.7 5.7 0 0 1-2.256 1.986 11.7 11.7 0 0 1-5.167 1.234 12.7 12.7 0 0 1-5.342-1.24 5.8 5.8 0 0 1-1.382-.913l-.604.237a11.3 11.3 0 0 1-4.19.823 12.4 12.4 0 0 1-5.207-1.208 6 6 0 0 1-.414-.212A1.338 1.338 0 0 0 0 47.4v1.859a5.164 5.164 0 0 0 3.97 5.008 94.4 94.4 0 0 0 45.1 0 5.164 5.164 0 0 0 3.97-5.008V47.4a1.335 1.335 0 0 0-1.957-1.198"
          ></path>
        </svg>
      ),
    },
    {
      title: "Pediatric Dentistry",
      description:
        "Gentle and friendly dental care tailored specifically for children",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="52"
          fill="none"
          viewBox="0 0 52 52"
          className="w-[36] h-[39] lg:w-[52px] lg:h-[52px]"
        >
          <path
            fill="#fff"
            d="M11.485 2.851c-1.527-.024-3.093.276-4.608 1.155C1.48 7.136 0 14.106 0 20.18c0 6.082 1.442 20.365 8.325 29.46.885 1.167 1.548 1.958 2.695 2.283.574.16 1.316.07 1.826-.258.51-.324.797-.755 1.01-1.173.867-1.675 1.027-3.893 1.483-6.42.458-2.53 1.098-5.233 2.202-7.142 1.105-1.909 2.415-3.024 4.91-3.024s3.808 1.115 4.91 3.024c1.104 1.909 1.744 4.612 2.2 7.142.455 2.53.618 4.748 1.481 6.42.218.419.501.849 1.011 1.173s1.256.418 1.829.258c1.144-.325 1.808-1.116 2.692-2.282 6.693-8.847 8.238-22.58 8.317-28.921a18 18 0 0 0-1.51 2.893c-.566 1.427-.856 2.542-.856 2.542a3.96 3.96 0 0 1-3.808 2.958 3.96 3.96 0 0 1-3.809-2.958h.003v-.003s-.29-1.115-.854-2.542c-.549-1.385-1.563-3.118-2.016-3.57-.45-.454-2.175-1.469-3.554-2.023a23 23 0 0 0-2.532-.858 3.97 3.97 0 0 1-2.948-3.824 3.97 3.97 0 0 1 2.948-3.824s1.11-.29 2.532-.857c1.379-.552 3.099-1.57 3.555-2.021.45-.452 1.466-2.188 2.015-3.573q.031-.076.058-.151c-1.723-.067-3.428.318-4.976.788-2.728.827-5.23 1.87-6.69 1.87-1.446 0-3.887-1.064-6.597-1.913-1.355-.424-2.84-.775-4.367-.8z"
          ></path>
          <path
            fill="#fff"
            d="M38.722 0c-.685 0-1.282.464-1.454 1.127 0 0-.326 1.26-.95 2.836-.625 1.573-1.585 3.418-2.554 4.394-.971.972-2.809 1.936-4.375 2.563s-2.822.955-2.822.955h-.003a1.51 1.51 0 0 0-1.122 1.46c0 .685.462 1.285 1.122 1.458 0 0 1.256.327 2.822.954s3.404 1.59 4.375 2.564c.969.975 1.929 2.82 2.553 4.393a27 27 0 0 1 .95 2.836h.004c.172.664.77 1.127 1.454 1.127.682 0 1.28-.463 1.452-1.127 0 0 .326-1.26.95-2.836.625-1.573 1.585-3.418 2.553-4.393.972-.973 2.81-1.937 4.376-2.564a26 26 0 0 1 2.822-.954l.002.003A1.51 1.51 0 0 0 52 13.336c0-.689-.462-1.289-1.123-1.461 0 0-1.255-.328-2.821-.955s-3.404-1.59-4.376-2.566c-.971-.973-1.928-2.821-2.553-4.394a27 27 0 0 1-.95-2.833l-.003.003A1.5 1.5 0 0 0 38.722 0"
          ></path>
        </svg>
      ),
    },
    {
      title: "Root Canal Treatment",
      description:
        "Regular check-ups and cleanings to keep your teeth and gums healthy.",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="62"
          fill="none"
          viewBox="0 0 41 62"
          className="w-[36] h-[48] lg:w-[41px] lg:h-[62px]"
        >
          <path
            fill="#fff"
            d="M12.024 26.453a.788.788 0 0 0 .754 1.005h.005a.784.784 0 0 0 .752-.567 44 44 0 0 1 3.292-8.12l4.401-8.304 3.21 1.675c.384.199.859.048 1.058-.336a.785.785 0 0 0-.33-1.061l-.84-.438 2.693-5.168.84.438v.002a.786.786 0 0 0 .725-1.396L20.727.088a.793.793 0 0 0-1.06.333A.786.786 0 0 0 20 1.482l.84.438-2.694 5.168-.84-.438a.8.8 0 0 0-.6-.054.8.8 0 0 0-.463.387.787.787 0 0 0 .338 1.063l3.253 1.694-4.396 8.3a46 46 0 0 0-3.414 8.413"
          ></path>
          <path
            fill="#fff"
            d="M28.939 19.828h-.046a8.03 8.03 0 0 0-4.436 1.2 8.06 8.06 0 0 1-4.326 1.299h-.03a7.9 7.9 0 0 1-3.306-.74 43 43 0 0 0-2.1 5.645 2.01 2.01 0 0 1-1.912 1.436h-.005a1.996 1.996 0 0 1-1.915-2.555 47 47 0 0 1 2.273-6.122 9.4 9.4 0 0 0-1.796-.163h-.046A11.397 11.397 0 0 0 .002 31.337a9.24 9.24 0 0 0 2.75 6.414 13.06 13.06 0 0 1 3.82 9.238v6.796a7.91 7.91 0 0 0 6.615 7.803.376.376 0 0 0 .433-.37v-4.433a23 23 0 0 1 1.513-8.251l.008-.02v-.002a4.44 4.44 0 0 1 4.143-2.827h1.665a4.44 4.44 0 0 1 4.143 2.827l.008.02v.002a23 23 0 0 1 1.513 8.25v4.434a.376.376 0 0 0 .433.37 7.91 7.91 0 0 0 6.616-7.803v-6.796a13.06 13.06 0 0 1 3.82-9.238 9.24 9.24 0 0 0 2.75-6.691 11.4 11.4 0 0 0-11.293-11.232"
          ></path>
        </svg>
      ),
    },
    {
      title: "Dental Implants",
      description:
        "Permanent tooth replacement solutions that restore comfort and confidence.",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="54"
          fill="none"
          viewBox="0 0 38 54"
          className="w-[36] h-[48] lg:w-[38px] lg:h-[54px]"
        >
          <path
            fill="#fff"
            d="m23.122 48.556-4.233 5.02-4.304-5.02v-5.2l8.537 1.37zM11.448 39.628l-.267 1.662 14.908 2.388.266-1.662zM23.122 39.96l-8.537-1.371v-3.155l8.537 1.37zM11.442 31.697l-.266 1.662 14.908 2.385.266-1.662zM14.585 30.667v-2.51h8.537v3.88zM36.98 16.084a45 45 0 0 1-2.187 10.36H2.4a45 45 0 0 1-2.187-10.36C-.21 11.216-.351 5.723 3.237 2.296s10.703-2.72 14.453.162c.393.292.765.604 1.148.917A21 21 0 0 0 21.67 5.44a6.4 6.4 0 0 0 5.201.796.767.767 0 0 0-.494-1.451 5.04 5.04 0 0 1-3.95-.676 20 20 0 0 1-2.58-1.904c4.676-2.379 10.652-3.215 14.11.12 3.456 3.337 3.386 8.89 3.023 13.758"
          ></path>
        </svg>
      ),
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

  const handleScroll = () => {
    window.scrollTo({
      top: document.getElementById("contact")?.offsetTop || 0,
      behavior: "smooth",
    });
  };

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
            <div className="flex -space-x-2 lg:-space-x-5">
              <div className="w-[22.8px] h-[22.8px] lg:w-[48px] lg:h-[48px] bg-[#FFA142] rounded-full overflow-hidden ">
                <Image
                  src={arabi2.src}
                  alt="arabi2"
                  width={45.28}
                  height={22.18}
                  className="object-cover"
                />
              </div>
              <div className="w-[22.8px] h-[22.8px] lg:w-[48px] lg:h-[48px] bg-[#92EA5B] rounded-full overflow-hidden ">
                <Image
                  src={arabi1.src}
                  alt="arabi1"
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

          <button
            className="h-9 lg:h-auto text-[14px] flex items-center justify-center rounded-full bg-primary text-white lg:text-xl px-4 lg:px-5 lg:py-2"
            onClick={() => handleScroll()}
          >
            Contact Us
          </button>
        </div>
        <div className="relative rounded-[26px] overflow-hidden w-[149px] min-h-[250px] lg:h-[610px] lg:w-1/2">
          <Image
            src={heroImage.src}
            alt="heroImage"
            fill
            className="object-cover lg:object-center lg:w-full lg:h-auto"
          />
        </div>
      </section>

      <section className="block lg:flex lg:justify-between items-center lg:mb-[72px]">
        <div className="hidden lg:block w-[437px]">
          <h1 className="text-[28px] font-semibold text-secondary leading-[40px] mb-5">
            Your Comfort and Safety <br />
            Come First
          </h1>
          <h2 className="text-[20px] font-normal text-secondary leading-[29px]">
            We prioritize patient comfort, clear communication, and clinical
            excellence for a stress-free dental experience.
          </h2>
        </div>

        <div className="flex justify-between lg:gap-14 mb-7">
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
              className="p-3 lg:p-8 rounded-4xl min-h-[174px] lg:min-h-[342px] flex flex-col lg:justify-between "
              style={{
                background:
                  "linear-gradient(216.46deg, #89FFFF -36.09%, #224998 110.03%)",
              }}
            >
              <div className="mb-2">{service.icon?.()}</div>
              <div>
                <h1 className="text-[16px] lg:text-[32px] font-semibold text-white leading-[17px] lg:leading-[46px] mb-2">
                  {service.title}
                </h1>
                <p className="text-[12px] lg:text-[20px] font-normal text-white/75 leading-[17px] lg:leading-[29px]">
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
            <h2 className="text-tertiary text-[12px] lg:text-xl rounded-full border border-tertiary px-4 py-0.5 mb-4 inline-block">
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
            <button
              className="px-3.5 py-1 h-9 rounded-full bg-primary text-white min-w-[99px] lg:max-w-[133px] text-sm "
              onClick={() => handleScroll()}
            >
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
              <div
                key={ind}
                className="p-2.5 lg:p-7 rounded-3xl bg-[#24B6B614] flex flex-col justify-between "
              >
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
      <Doctors />

      {/* Testimonials */}
      <Testmonies />

      {/* Contact Us */}
      <Contactus />
    </div>
  );
}

export default HeroSection;
