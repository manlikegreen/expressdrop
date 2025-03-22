"use client";

import React, { useState, useEffect } from "react";
import RiderHomeCards from "@/components/Dashboard/RiderDash/RiderHomePage/RiderCards";
import RiderHomePage from "@/components/Dashboard/RiderDash/RiderHomePage/RiderHome";
import RiderPendingModal from "@/components/Dashboard/RiderDash/RiderPendingModal";

const RidersHomePage = () => {
  const [isPending, setIsPending] = useState(true); // Default to pending

  useEffect(() => {
    // Simulate fetching rider approval status (replace with actual API call)
    const riderStatus = localStorage.getItem("riderStatus"); // Example: "approved" or "pending"
    if (riderStatus === "approved") {
      setIsPending(false);
    }
  }, []);

  return (
    <>
      {isPending && <RiderPendingModal isOpen={true} onClose={() => {}} />}

      {!isPending && (
        <>
          <div className="mb-8">
            <RiderHomeCards />
          </div>
          <div>
            <h1 className="mt-[3rem] lg:mt-[7rem] font-bold text-2xl lg:text-5xl container">
              Ongoing Orders
            </h1>
          </div>
          <div className="mb-[4rem]">
            <RiderHomePage />
          </div>
        </>
      )}
    </>
  );
};

export default RidersHomePage;
