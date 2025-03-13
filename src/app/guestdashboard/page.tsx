"use client";

import React, { useState } from "react";
import Image from "next/image";
import guest from "@/assets/guest.png";
import { Button } from "@/components/UI/Button";
import RiderProfile from "@/components/Auth/RiderProfileModal";
import VendorProfile from "@/components/Auth/VendorProfile";

const GuestDashboardPage = () => {
  const [isRiderModalOpen, setIsRiderModalOpen] = useState(false);
  const [isVendorModalOpen, setIsVendorModalOpen] = useState(false);

  return (
    <div className="container mt-[5rem] lg:mt-[8rem]">
      <header>
        <h1 className="text-[1.5rem] md:text-[2.5rem] lg:text-[3.3rem] font-semibold">
          Dashboard
        </h1>
        <p className="text-[0.75rem] md:text-[1.25rem] text-gray-600 dark:text-brand-ash font-medium">
          See how amazingly far you have gone 😊
        </p>
      </header>
      <div className="flex items-center justify-center z-50 mt-20">
        <div className="text-center relative lg:w-[1200px] md:w-3/4 sm:w-1/3 mx-auto pt-8 pb-16">
          <div className="justify-center mx-auto w-[270px] h-[270px] mb-16">
            <Image src={img} alt="" />
          </div>
          <div className="w-[600px] mx-auto">
            <p className="text-gray-600 dark:text-brand-ash text-base">
              We noticed you have not signed up on Express Drop, we employ you
              to sign up. We want to make sure you have a perfect experience
              with Express Drop
            </p>
            <div className="flex justify-evenly">
              <Button
                variant={"alternate"}
                type="submit"
                className="mt-10"
                onClick={() => setIsRiderModalOpen(true)}
              >
                Create Rider Profile
              </Button>
              <Button
                type="submit"
                className="mt-10"
                onClick={() => setIsVendorModalOpen(true)}
              >
                Create Vendor Profile
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Rider Profile Modal */}
      {isRiderModalOpen && (
        <RiderProfile onClose={() => setIsRiderModalOpen(false)} />
      )}

      {isVendorModalOpen && (
        <VendorProfile onClose={() => setIsVendorModalOpen(false)} />
      )}
    </div>
  );
};

const img = guest;

export default GuestDashboardPage;
