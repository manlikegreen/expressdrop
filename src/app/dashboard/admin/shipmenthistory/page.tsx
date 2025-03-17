import AdminHistory from "@/components/Dashboard/AdminDash/AdminHistory/AdminHistory";
import React from "react";

const AdminShipmentPage = () => {
  return (
    <>
      <div className="mb-[5rem]">
        <h1 className="font-bold text-5xl">Shipment History</h1>
      </div>
      <div>
        <AdminHistory />
      </div>
    </>
  );
};

export default AdminShipmentPage;
