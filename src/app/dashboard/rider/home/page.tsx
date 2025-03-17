// import ButtonFilters from "@/components/Dashboard/ButtonFilters";
import RiderHomeCards from "@/components/Dashboard/RiderDash/RiderHomePage/RiderCards";
import RiderHomePage from "@/components/Dashboard/RiderDash/RiderHomePage/RiderHome";
import React from "react";

const RidersHomePage = () => {
  return (
    <>
      <div className="mb-8">
        <RiderHomeCards />
      </div>
      <div>
        <h1 className="mt-[3rem] lg:mt-[7rem] font-bold text-5xl container">
          Ongoing Orders
        </h1>
      </div>
      <div className="mb-[4rem]">
        <RiderHomePage />
      </div>
    </>
  );
};

export default RidersHomePage;
