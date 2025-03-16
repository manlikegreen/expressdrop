import History from "@/components/Dashboard/History/History";
import HomeCards from "@/components/Dashboard/Home/HomeCards";
import NewOrders from "@/components/Dashboard/Home/NewOrders";
// import OngoingOrders from "@/components/Dashboard/OngoingOrders/OngoingOrders";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-5xl">Welcome Eric 👋</h1>
      </div>
      <div className="my-[4rem] flex flex-col lg:flex-row">
        <div className="flex flex-col w-9/12">
          <div>
            <HomeCards />
          </div>
          <div className="mt-[5rem] flex flex-col">
            <h1 className="font-semibold text-lg lg:text-2xl container -left-4">
              Shipment History
            </h1>
            <History />
          </div>
        </div>
        <div>
          <NewOrders />
        </div>
      </div>
    </>
  );
};

export default page;
