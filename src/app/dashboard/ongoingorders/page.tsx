import OngoingOrders from "@/components/Dashboard/OngoingOrders/OngoingOrders";
import React from "react";

const page = () => {
  return (
    <>
      <div className="mb-8">
        <h1 className="lg:mt-[7rem] font-bold text-2xl lg:text-5xl">
          Ongoing Orders
        </h1>
      </div>
      <div className="">
        <OngoingOrders />
      </div>
    </>
  );
};

export default page;
