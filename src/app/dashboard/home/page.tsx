import History from "@/components/Dashboard/History/History";
import HomeCards from "@/components/Dashboard/Home/HomeCards";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-2xl lg:text-5xl">Welcome Eric 👋</h1>
      </div>
      <div className="my-8 lg:my-[4rem]">
        <div className="">
          <div>
            <HomeCards />
          </div>
          <div className="mt-12 lg:mt-[5rem] flex flex-col">
            <h1 className="font-semibold text-xl lg:text-2xl">
              Shipment History
            </h1>
            <History />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
