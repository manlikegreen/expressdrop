"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react"; // ✅ Import Lottie
import { Button } from "@/components/UI/Button";

interface OrderConfirmationProps {
  selectedRider: {
    name: string;
    rating: number;
    img: StaticImageData;
  };
  totalPrice: number;
  pickupLocation: string;
  destination: string;
  customerDetails: {
    fullName: string;
    phoneNumber: string;
    email: string;
    address: string;
  };
  onConfirm: () => void;
  onEdit: () => void;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
  selectedRider,
  totalPrice,
  pickupLocation,
  destination,
  customerDetails,
  onConfirm,
  onEdit,
}) => {
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  const handleConfirmClick = () => {
    setIsOrderConfirmed(true);
    onConfirm();
  };

  return (
    <div className="container mt-[5rem] lg:mt-[8rem] flex justify-center">
      <div className="max-w-2xl w-full bg-white dark:bg-brand-bgdark p-6 rounded-lg shadow-xl">
        {isOrderConfirmed ? (
          // ✅ Lottie Success Animation
          <div className="flex flex-col items-center text-center">
            <DotLottieReact
              src="https://lottie.host/0fc8877c-d811-42c9-97fa-9936b41a7e83/HygPfiGznY.lottie"
              loop={false} // ✅ Runs once for confirmation effect
              autoplay
              style={{ width: "300px", height: "300px" }}
            />
            <h2 className="text-2xl font-semibold text-green-600 mt-4">
              Order Confirmed!
            </h2>
            <p className="text-gray-700 dark:text-brand-ash mt-2">
              Your delivery has been successfully placed.
            </p>
            <p className="text-gray-700 dark:text-brand-ash mt-2">
              Your order code is <span className="text-brand">00XR9TG73</span>
            </p>
          </div>
        ) : (
          // ✅ Default order confirmation UI
          <>
            <h1 className="text-[1.5rem] md:text-[2.5rem] lg:text-[3.3rem] font-semibold text-center">
              Order Confirmation
            </h1>
            <p className="text-[0.75rem] md:text-[1.25rem] text-gray-600 dark:text-brand-ash text-center font-medium">
              Please review your details before confirming your order
            </p>

            <div className="flex flex-col items-center justify-center text-center my-6">
              <h2 className="text-xl font-semibold mb-4">Selected Rider</h2>
              <div className="flex items-center gap-4">
                <Image
                  src={selectedRider.img}
                  alt={selectedRider.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <p className="text-lg font-medium">{selectedRider.name}</p>
                  <p className="text-gray-600 dark:text-brand-ash">
                    ⭐ {selectedRider.rating} / 5
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-between mb-8">
              <div>
                <h2 className="text-xl font-semibold mt-6 mb-2">
                  Order Details
                </h2>
                <p className="text-gray-700 dark:text-brand-ash">
                  <strong>Total Price:</strong> ${totalPrice.toFixed(2)}
                </p>
                <p className="text-gray-700 dark:text-brand-ash">
                  <strong>Pickup Location:</strong> {pickupLocation}
                </p>
                <p className="text-gray-700 dark:text-brand-ash">
                  <strong>Destination:</strong> {destination}
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mt-6 mb-2">
                  Customer Details
                </h2>
                <p className="text-gray-700 dark:text-brand-ash">
                  <strong>Full Name:</strong> {customerDetails.fullName}
                </p>
                <p className="text-gray-700 dark:text-brand-ash">
                  <strong>Phone:</strong> {customerDetails.phoneNumber}
                </p>
                <p className="text-gray-700 dark:text-brand-ash">
                  <strong>Address:</strong> {customerDetails.address}
                </p>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <Button variant="alternate" onClick={onEdit}>
                Edit Details
              </Button>
              <Button onClick={handleConfirmClick}>Confirm Order</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderConfirmation;
