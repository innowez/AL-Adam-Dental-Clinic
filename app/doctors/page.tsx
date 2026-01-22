import Contactus from "@/components/app_components/contactus";
import DoctorsList from "@/components/app_components/doctors/doctorsList";
import HeroSection from "@/components/app_components/doctors/heroSection";
import Testmonies from "@/components/app_components/testmonies";

export default function page() {
  return (
    <div className="mt-[76px] lg:mt-[126px] px-4 lg:px-12">
      <HeroSection />
      <DoctorsList />
      <Testmonies />
      <Contactus />
    </div>
  );
}
