import History from "@/components/Dashboard/History/History";
import HomeCards from "@/components/Dashboard/Home/HomeCards";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-5xl">Welcome Eric 👋</h1>
      </div>
      <div className="my-[4rem]">
        <HomeCards />
      </div>
      <div>
        <History />
      </div>
    </>
  );
};

export default page;
