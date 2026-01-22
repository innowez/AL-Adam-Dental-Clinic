import dotr1 from "@/assets/doctors/dotr1.png";
import dotr2 from "@/assets/doctors/dotr2.png";
import dotr3 from "@/assets/doctors/dotr3.png";
import dotr4 from "@/assets/doctors/dotr4.png";
import dotr5 from "@/assets/doctors/dotr5.png";
import dotr6 from "@/assets/doctors/dotr6.png";
import Image from "next/image";

export default function DoctorsList() {
  const doctorsList = [
    {
      image: dotr1,
      name: "Dr. Ahmed Al-Harthy (MBBS) ",
      specialization: "General & Cosmetic Dentistry",
    },
    {
      image: dotr2,
      name: "Dr. Amina Al-Harthy (MBBS)",
      specialization: "Oral & Maxillofacial Surgery",
    },
    {
      image: dotr3,
      name: "Dr. Fatima Al-Balushi (MBBS)",
      specialization: "Orthodontics",
    },
    {
      image: dotr4,
      name: "Dr. Mohammed (MBBS)",
      specialization: "Pediatric Dentist",
    },
    {
      image: dotr5,
      name: "Dr. Ahmed Al-Harthy (MBBS) ",
      specialization: "General & Cosmetic Dentistry",
    },
    {
      image: dotr6,
      name: "Dr. Amina Al-Harthy (MBBS)",
      specialization: "Oral & Maxillofacial Surgery",
    },
  ];
  return (
    <section className="mb-7">
      <div className="flex justify-between items-end mb-4">
        <div className="hidden lg:block"></div>
        <div>
          <h1 className="lg:text-center text-[16px] lg:text-[48px] lg:leading-[69px] font-semibold text-secondary">
            Our Dental Specialists
          </h1>
          <p className="lg:text-center text-[12px] lg:text-[20px] lg:leading-[29px] font-normal leading-[17px] text-secondary/75">
            Meet our dedicated dental team, focused on delivering{" "}
            <br className="lg:hidden" />
            safe and comfortable <br className="hidden lg:block" /> care using
            modern techniques and <br className="lg:hidden" />
            best practices.
          </p>
        </div>
        <div className="w-9 h-9 lg:w-12 lg:h-12 rounded-[8px] lg:rounded-[12px] border border-primary flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
            className="lg:w-8 lg:h-8"
          >
            <path
              stroke="#24B6B6"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m17.5 17.5-3.617-3.617M9.167 15.833a6.667 6.667 0 1 0 0-13.333 6.667 6.667 0 0 0 0 13.333"
            ></path>
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {doctorsList.map((doctor, index) => (
          <div
            key={index}
            className="h-[433px] lg:h-[520px] rounded-[24px] p-4 bg-[#EEFAFA] relative overflow-hidden"
          >
            <Image
              src={doctor.image}
              alt={doctor.name}
              className="absolute -bottom-14"
            />
            <h3 className="lg:text-2xl text-base font-semibold text-secondary lg:leading-[35px] leading-[23px] mb-2">
              {doctor.name}
            </h3>

            <p className="lg:text-base text-[12px] font-medium text-secondary lg:leading-[23px] leading-[17px] bg-secondary/8 rounded-full px-2 py-1 lg:px-3 lg:py-1 inline-block">
              {doctor.specialization}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
