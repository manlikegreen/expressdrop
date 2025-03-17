import AdminHomeCards from "@/components/Dashboard/AdminDash/AdminHomeCards";
import AdminPricePerKm from "@/components/Dashboard/AdminDash/AdminPricePerkm";
import AdminPricePerKmLg from "@/components/Dashboard/AdminDash/AdminPricePerKmLg";
import AdminPricePerKmMd from "@/components/Dashboard/AdminDash/AdminPricePerKmMd";
import AdminUsers from "@/components/Dashboard/AdminDash/AdminUsers";
import React from "react";

const AdminHomePage = () => {
  return (
    <>
      <div className="mb-8">
        <AdminHomeCards />
      </div>
      <section className="mt-10 flex justify-center gap-10">
        <AdminPricePerKm />
        <AdminPricePerKmMd />
        <AdminPricePerKmLg />
      </section>
      <div className="pt-8">
        <AdminUsers />
      </div>
    </>
  );
};

export default AdminHomePage;
