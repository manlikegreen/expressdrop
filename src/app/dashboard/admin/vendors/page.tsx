import Vendors from "@/components/Dashboard/AdminDash/AdminVendors/Vendors";
import React from "react";

const AdminVendorPage = () => {
  return (
    <>
      <div className="mb-8">
        <h1 className="lg:mt-[7rem] font-bold text-2xl lg:text-5xl">Vendors</h1>
      </div>
      <div>
        <Vendors />
      </div>
    </>
  );
};

export default AdminVendorPage;
