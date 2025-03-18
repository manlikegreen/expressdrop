import Riders from "@/components/Dashboard/AdminDash/AdminRiders/Riders";
import React from "react";

const AdminRidersPage = () => {
  return (
    <>
      <div className="mb-8">
        <h1 className="lg:mt-[7rem] font-bold text-2xl lg:text-5xl">Riders</h1>
      </div>
      <div>
        <Riders />
      </div>
    </>
  );
};

export default AdminRidersPage;
