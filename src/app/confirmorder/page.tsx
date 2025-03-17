"use client";

import React from "react";
import OrderConfirmation from "@/components/Dashboard/SelectRider/OrderConfirmation";
import john from "@/assets/Riders/GHOST.jpg";

const Page = () => {
  // Mock data for testing
  const selectedRider = {
    name: "John Doe",
    rating: 4.8,
    img: john,
  };

  const customerDetails = {
    fullName: "Jane Smith",
    phoneNumber: "+234 801 234 5678",
    email: "jane@example.com",
    address: "123 Main Street, Lagos",
  };

  const totalPrice = 50.0;
  const pickupLocation = "Lekki Phase 1";
  const destination = "Victoria Island";

  // Handlers
  const handleConfirm = () => {
    console.log("Order confirmed!");
  };

  const handleGoBack = () => {
    console.log("Going back to rider selection...");
  };

  return (
    <div className="mb-[9rem]">
      <OrderConfirmation
        selectedRider={selectedRider}
        totalPrice={totalPrice}
        pickupLocation={pickupLocation}
        destination={destination}
        customerDetails={customerDetails}
        onConfirm={handleConfirm}
        onEdit={handleGoBack}
      />
    </div>
  );
};

export default Page;
