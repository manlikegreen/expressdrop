import AlertBanner from "@/components/UI/AlertBanner";
import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

interface OrderDetails {
  OrderCode: string;
  PickupLocation: string;
  Destination: string;
  Timestamp?: string;
  Price?: string;
  NoOfItems: string;
  VendorName: string;
  VendorPhoneNumber?: string;
  VendorEmail?: string;
  CustomerName?: string;
  CustomerPhoneNumber?: string;
  CustomerEmail?: string;
  CustomerAddress?: string;
  RiderName?: string;
  RiderPhoneNumber?: string;
  RiderEmail?: string;
  RiderAddress?: string;
  DeliveryStatus?: string;
}

interface OrderDetailsProps {
  order: OrderDetails;
  onClose: () => void;
  onAcceptRide: () => void;
  onRejectRide: () => void;
}

const RiderOrderDetailsModal: React.FC<OrderDetailsProps> = ({
  order,
  onClose,
  onAcceptRide,
  onRejectRide,
}) => {
  const [showInput, setShowInput] = useState(false);
  const [orderCode, setOrderCode] = useState("");
  const [alert, setAlert] = useState<{
    type: "success" | "error" | "info";
    message: string;
  } | null>(null);

  const handleAcceptClick = () => {
    setShowInput(true); // Show input field when "Accept" is clicked
  };

  const handleRejectClick = () => {
    onRejectRide();
  };

  const handleConfirmClick = () => {
    if (orderCode.trim() === order.OrderCode) {
      setAlert({ type: "success", message: "Order accepted successfully!" });
      onAcceptRide();
      onClose(); // Close modal
    } else {
      setAlert({
        type: "error",
        message: "Incorrect Order Code! Please try again.",
      });
      setOrderCode(""); // Clear input field
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-xl flex justify-center items-center">
        {/* Alert Banner inside modal */}
        {alert && (
          <div className="absolute top-5 w-3/4">
            <AlertBanner type={alert.type} message={alert.message} />
          </div>
        )}
        <div className="bg-white dark:bg-brand-bgdark p-6 rounded-lg w-3/4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-xl font-bold uppercase">Order Details</h2>
            <button onClick={onClose}>
              <MdOutlineCancel className="text-2xl hover:shadow-[0_0_10px_0_#fff] rounded-full" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            {/* ORDER INFO */}
            <div>
              <h3 className="font-semibold text-lg mb-2">ORDER INFO</h3>
              <p>
                <strong>Code:</strong> {order.OrderCode}
              </p>
              <p>
                <strong>Pickup Location:</strong> {order.PickupLocation}
              </p>
              <p>
                <strong>Destination:</strong> {order.Destination}
              </p>
              <p>
                <strong>Timestamp:</strong> {order.Timestamp}
              </p>
              <p>
                <strong>Price:</strong> {order.Price}
              </p>
            </div>

            {/* CUSTOMER INFO */}
            <div>
              <h3 className="font-semibold text-lg mb-2">CUSTOMER INFO</h3>
              <p>
                <strong>Name:</strong> {order.CustomerName}
              </p>
              <p>
                <strong>Number:</strong> {order.CustomerPhoneNumber}
              </p>
              <p>
                <strong>Address:</strong> {order.CustomerAddress}
              </p>
            </div>

            {/* VENDOR INFO */}
            <div>
              <h3 className="font-semibold text-lg mb-2">VENDOR INFO</h3>
              <p>
                <strong>Name:</strong> {order.VendorName}
              </p>
              <p>
                <strong>Number:</strong> {order.VendorPhoneNumber}
              </p>
              <p>
                <strong>Email:</strong> {order.VendorEmail}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 my-8 items-center">
            {/* Reject Button */}
            <button
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg w-1/2"
              onClick={handleRejectClick}
            >
              Reject
            </button>

            {/* Accept Button */}
            {!showInput ? (
              <button
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg w-1/2"
                onClick={handleAcceptClick}
              >
                Accept
              </button>
            ) : (
              <div className="flex flex-col gap-10">
                {/* Order Code Input */}
                <input
                  type="text"
                  placeholder="Enter Order Code"
                  value={orderCode}
                  onChange={(e) => setOrderCode(e.target.value)}
                  className="border p-2 rounded w-full dark:bg-gray-700"
                />

                {/* Confirm Button */}
                <button
                  className={`px-4 py-2 rounded-lg ${
                    orderCode.trim()
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                  onClick={handleConfirmClick}
                  disabled={!orderCode.trim()}
                >
                  Confirm
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RiderOrderDetailsModal;
