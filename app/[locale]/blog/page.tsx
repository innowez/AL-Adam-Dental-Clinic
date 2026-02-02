import Artical from "@/components/app_components/blog/artical";
import HeroSection from "@/components/app_components/blog/herosection";
import VideoSection from "@/components/app_components/blog/videoSection";
import Contactus from "@/components/app_components/contactus";

export default function page() {
  return (
    <div>
      <HeroSection />
      <VideoSection />
      <Artical />
      <div className="px-4 lg:px-12">
        <Contactus />
      </div>
    </div>
  );
}
