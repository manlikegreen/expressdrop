import AdminOngoingOrders from "@/components/Dashboard/AdminDash/AdminOngoingOrders/AdminOngoingOrders";
import React from "react";

const AdminOngoingOrdersPage = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-5xl">Ongoing Orders</h1>
      </div>
      <div>
        <AdminOngoingOrders />
      </div>
    </>
  );
};

export default AdminOngoingOrdersPage;
