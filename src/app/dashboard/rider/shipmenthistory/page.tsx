// import ButtonFilters from "@/components/Dashboard/ButtonFilters";
import RiderHistory from "@/components/Dashboard/RiderDash/RiderHistory/RiderHistory";
import React from "react";

const RiderShipmentPage = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-5xl">Shipment History</h1>
      </div>
      <div className="">
        {/* <div>
          <ButtonFilters />
        </div> */}
        <RiderHistory />
      </div>
    </>
  );
};

export default RiderShipmentPage;
