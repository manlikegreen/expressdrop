import History from "@/components/Dashboard/History/History";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-5xl">Shipment History</h1>
      </div>
      <div>
        <History />
      </div>
    </>
  );
};

export default page;
