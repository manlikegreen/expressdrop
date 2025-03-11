// import ButtonFilters from "@/components/Dashboard/ButtonFilters";
import RiderCompletedOrders from "@/components/Dashboard/RiderDash/RidersCompletedOrders/RiderCompletedOrder";
import React from "react";

const RiderCompletedOrdersPage = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-5xl">Completed Orders</h1>
      </div>
      <div className="my-[4rem]">
        <RiderCompletedOrders />
      </div>
    </>
  );
};

export default RiderCompletedOrdersPage;
