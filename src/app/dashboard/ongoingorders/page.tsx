import OngoingOrders from "@/components/Dashboard/OngoingOrders/OngoingOrders";
import React from "react";

const page = () => {
  return (
    <>
      <div className="mb-[4rem]">
        <h1 className="font-bold text-5xl">Ongoing Orders</h1>
      </div>
      <div className="">
        <OngoingOrders />
      </div>
    </>
  );
};

export default page;
