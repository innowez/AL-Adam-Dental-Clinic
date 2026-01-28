import LandingSection from "@/components/app_components/aboutus/landingSection";
import OurFacilities from "@/components/app_components/aboutus/OurFacilities";
import OurMissionVision from "@/components/app_components/aboutus/ourMissionVision";
import OurValue from "@/components/app_components/aboutus/ourValue";
import WhoWeAre from "@/components/app_components/aboutus/whoweare";
import Contactus from "@/components/app_components/contactus";
import React from "react";

export default function AboutPage() {
  return (
    <div className="mt-[76px] lg:mt-[126px] px-4 lg:px-12 overflow-x-hidden">
      <LandingSection />
      <WhoWeAre />
      <OurMissionVision />
      <OurValue />
      <OurFacilities />

      <Contactus />
    </div>
  );
}
