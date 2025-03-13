import History from "@/components/Dashboard/History/History";
import HomeCards from "@/components/Dashboard/Home/HomeCards";
import OngoingOrders from "@/components/Dashboard/OngoingOrders/OngoingOrders";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-5xl">Welcome Eric 👋</h1>
      </div>
      <div className="my-[4rem] flex flex-col lg:flex-row">
        <div className="flex flex-col w-11/12">
          <div>
            <HomeCards />
          </div>
          <div>
            <History />
          </div>
        </div>
        <div>
          <OngoingOrders />
        </div>
      </div>
    </>
  );
};

export default page;
