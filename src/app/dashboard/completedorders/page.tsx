import CompletedOrders from "@/components/Dashboard/CompletedOrders/CompletedOrders";
import React from "react";

const page = () => {
  return (
    <>
      <div className="">
        <h1 className="font-bold text-5xl">Completed Orders</h1>
      </div>
      <div className="">
        <CompletedOrders />
      </div>
    </>
  );
};

export default page;
