import AdminOngoingOrders from "@/components/Dashboard/AdminDash/AdminOngoingOrders/AdminOngoingOrders";
import ButtonFilter from "@/components/Dashboard/ButtonFilters";
import React from "react";

const AdminOngoingOrdersPage = () => {
  return (
    <>
      <div className="mb-8 flex justify-between">
        <h1 className="lg:mt-[7rem] font-bold text-2xl lg:text-5xl">
          Ongoing Orders
        </h1>
        <div className="lg:mt-[7rem]">
          <ButtonFilter />
        </div>
      </div>
      <div>
        <AdminOngoingOrders />
      </div>
    </>
  );
};

export default AdminOngoingOrdersPage;
