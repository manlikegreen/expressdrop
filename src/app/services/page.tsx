import GetInContact from "@/components/Services/GetInContact";
import Services from "@/components/Services/Services";
import WeUnderstand from "@/components/Services/WeUnderstand";
import React from "react";

const ServicesPage = () => {
  return (
    <>
      <div className="">
        <Services />
        <WeUnderstand />
        <GetInContact />
      </div>
    </>
  );
};

export default ServicesPage;
