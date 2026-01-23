import docter1 from "@/assets/landing/docter1.png";
import docter2 from "@/assets/landing/docter2.png";
import docter3 from "@/assets/landing/docter3.png";
import docter4 from "@/assets/landing/docter4.png";
import Image from "next/image";

export default function Doctors() {
  const docterList = [
    {
      name: "Dr. Ahmed Al-Harthy (MBBS) ",
      field: "General & Cosmetic Dentistry",
      image: docter1,
      pos: "",
    },
    {
      name: "Fatima Al-Balushi (MBBS)",
      field: "Orthodontics",
      image: docter2,
    },
    {
      name: "Dr. Ahmed Al-Harthy (MBBS) ",
      field: "Oral & Maxillofacial Surgery",
      image: docter3,
    },
    {
      name: "Dr. Mohammed (MBBS)",
      field: "Pediatric Dentistry",
      image: docter4,
    },
  ];
  return (
    <section className="overflow-hidden mb-6 lg:mb-16">
      <h1 className="text-tertiary text-[12px] xl:text-xl rounded-full border border-tertiary px-2 py-0.5 mb-4 inline-block ">
        Doctors
      </h1>

      <h2 className="text-[16px] xl:text-[48px] font-semibold text-secondary leading-6 lg:leading-[69px] mb-4">
        Meet Our Dental Experts
      </h2>
      <div className="flex gap-2 lg:gap-6 overflow-x-scroll no-scrollbar">
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
      </div>
    </section>
  );
}
