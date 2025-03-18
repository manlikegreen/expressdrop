import History from "@/components/Dashboard/History/History";
import React from "react";

const page = () => {
  return (
    <>
      <div className="mb-8">
        <h1 className="lg:mt-[7rem] font-bold text-2xl lg:text-5xl">
          Shipment History
        </h1>
      </div>
      <div>
        <History />
      </div>
    </>
  );
};

export default page;
