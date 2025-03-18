import CompletedOrders from "@/components/Dashboard/CompletedOrders/CompletedOrders";
import React from "react";

const page = () => {
  return (
    <>
      <div className="mb-8">
        <h1 className="lg:mt-[7rem] font-bold text-2xl lg:text-5xl">
          Completed Orders
        </h1>
      </div>
      <div className="">
        <CompletedOrders />
      </div>
    </>
  );
};

export default page;
