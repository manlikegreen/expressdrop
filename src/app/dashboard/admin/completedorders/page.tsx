import AdminCompletedOrders from "@/components/Dashboard/AdminDash/AdminCompletedOrders/AdminCompletedOrders";
import React from "react";

const AdminCompletedOrdersPage = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-5xl">Completed Orders</h1>
      </div>
      <div>
        <AdminCompletedOrders />
      </div>
    </>
  );
};

export default AdminCompletedOrdersPage;
