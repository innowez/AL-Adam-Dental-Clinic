import Footer from "@/components/app_components/footer";
import Header from "@/components/app_components/header";
import HeroSection from "@/components/app_components/landingArea/heroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}
