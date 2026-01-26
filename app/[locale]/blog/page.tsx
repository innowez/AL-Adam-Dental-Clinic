import Artical from "@/components/app_components/blog/artical";
import HeroSection from "@/components/app_components/blog/herosection";
import Contactus from "@/components/app_components/contactus";
import React from "react";

export default function page() {
  return (
    <div>
      <HeroSection />
      <Artical />
      <div className="px-4 lg:px-12">
        <Contactus />
      </div>
    </div>
  );
}
