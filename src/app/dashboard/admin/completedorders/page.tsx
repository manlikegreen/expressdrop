import AdminCompletedOrders from "@/components/Dashboard/AdminDash/AdminCompletedOrders/AdminCompletedOrders";
import ButtonFilter from "@/components/Dashboard/ButtonFilters";
import React from "react";

const AdminCompletedOrdersPage = () => {
  return (
    <>
      <div className="mb-8 flex justify-between">
        <h1 className="lg:mt-[7rem] font-bold text-2xl lg:text-5xl">
          Completed Orders
        </h1>
        <div className="lg:mt-[7rem]">
          <ButtonFilter />
        </div>
      </div>
      <div>
        <AdminCompletedOrders />
      </div>
    </>
  );
};

export default AdminCompletedOrdersPage;
