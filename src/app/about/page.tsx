import BrandValues from "@/components/About/BrandValues";
import MeetTheTeam from "@/components/About/MeetTheTeam";
import WhoWeAre from "@/components/About/WhoWeAre";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <div className="">
        <WhoWeAre />
        <BrandValues />
        <MeetTheTeam />
      </div>
    </>
  );
};

export default AboutPage;
