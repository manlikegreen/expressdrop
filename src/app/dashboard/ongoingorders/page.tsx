import ButtonFilter from "@/components/Dashboard/ButtonFilters";
import OngoingOrders from "@/components/Dashboard/OngoingOrders/OngoingOrders";
import React from "react";

const page = () => {
  return (
    <>
      <div className="mb-8 flex justify-between">
        <h1 className="lg:mt-[7rem] font-bold text-2xl lg:text-5xl">
          Ongoing Orders
        </h1>
        <div className="lg:mt-[7rem]">
          <ButtonFilter />
        </div>
      </div>
      <div className="">
        <OngoingOrders />
      </div>
    </>
  );
};

export default page;
