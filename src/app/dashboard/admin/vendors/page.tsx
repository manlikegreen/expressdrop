import Vendors from "@/components/Dashboard/AdminDash/AdminVendors/Vendors";
import ButtonFilter from "@/components/Dashboard/ButtonFilters";
import React from "react";

const AdminVendorPage = () => {
  return (
    <>
      <div className="mb-8 flex justify-between">
        <h1 className="lg:mt-[7rem] font-bold text-2xl lg:text-5xl">Vendors</h1>
        <div className="lg:mt-[7rem]">
          <ButtonFilter />
        </div>
      </div>
      <div>
        <Vendors />
      </div>
    </>
  );
};

export default AdminVendorPage;
