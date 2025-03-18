import AdminCompletedOrders from "@/components/Dashboard/AdminDash/AdminCompletedOrders/AdminCompletedOrders";
import React from "react";

const AdminCompletedOrdersPage = () => {
  return (
    <>
      <div className="mb-8">
        <h1 className="lg:mt-[7rem] font-bold text-2xl lg:text-5xl">
          Completed Orders
        </h1>
      </div>
      <div>
        <AdminCompletedOrders />
      </div>
    </>
  );
};

export default AdminCompletedOrdersPage;
