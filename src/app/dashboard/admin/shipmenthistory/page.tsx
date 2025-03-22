import AdminHistory from "@/components/Dashboard/AdminDash/AdminHistory/AdminHistory";
import ButtonFilter from "@/components/Dashboard/ButtonFilters";
import React from "react";

const AdminShipmentPage = () => {
  return (
    <>
      <div className="mb-8 flex justify-between">
        <h1 className="lg:mt-[7rem] font-bold text-2xl lg:text-5xl">
          Shipment History
        </h1>
        <div className="lg:mt-[7rem]">
          <ButtonFilter />
        </div>
      </div>
      <div>
        <AdminHistory />
      </div>
    </>
  );
};

export default AdminShipmentPage;
