import Riders from "@/components/Dashboard/AdminDash/AdminRiders/Riders";
import ButtonFilter from "@/components/Dashboard/ButtonFilters";
import React from "react";

const AdminRidersPage = () => {
  return (
    <>
      <div className="mb-8 flex justify-between">
        <h1 className="lg:mt-[7rem] font-bold text-2xl lg:text-5xl">Riders</h1>
        <div className="lg:mt-[7rem]">
          <ButtonFilter />
        </div>
      </div>
      <div>
        <Riders />
      </div>
    </>
  );
};

export default AdminRidersPage;
