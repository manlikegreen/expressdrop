import React from "react";
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
}

const AdminOrderDetailsModal: React.FC<OrderDetailsProps> = ({
  order,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-xl flex justify-center items-center">
      <div className="bg-white dark:bg-brand-bgdark p-6 rounded-lg w-3/4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-xl font-bold uppercase">Order Details</h2>
          <button className="" onClick={onClose}>
            <MdOutlineCancel className="text-2xl hover:shadow-[0_0_10px_0_#fff] rounded-full" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-4">
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
              <strong>Email:</strong> {order.CustomerEmail}
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

          {/* RIDER INFO */}
          <div>
            <h3 className="font-semibold text-lg mb-2">RIDER INFO</h3>
            <p>
              <strong>Name:</strong> {order.RiderName}
            </p>
            <p>
              <strong>Number:</strong> {order.RiderPhoneNumber}
            </p>
            <p>
              <strong>Email:</strong> {order.RiderEmail}
            </p>
            <p>
              <strong>Address:</strong> {order.RiderAddress}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDetailsModal;
