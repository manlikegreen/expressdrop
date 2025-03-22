import { PaystackButton } from "react-paystack";
import React from "react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  totalPrice: number;
  customerDetails: {
    fullName: string;
    email: string;
    phoneNumber: string;
  };
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  totalPrice,
  customerDetails,
}) => {
  const publicKey = "pk_test_2c4c533ecf0d51d66f1a14beccc79a0239edda84";

  const paymentProps = {
    email: customerDetails.email,
    amount: totalPrice * 100, // Convert to Kobo
    metadata: {
      custom_fields: [
        {
          display_name: "Name",
          variable_name: "name",
          value: customerDetails.fullName,
        },
        {
          display_name: "Phone",
          variable_name: "phone",
          value: customerDetails.phoneNumber,
        },
      ],
    },
    publicKey,
    text: "Pay Now",
    onSuccess: onSubmit,
    onClose: onClose,
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-lg bg-black/50 z-50">
      <div className="bg-white dark:bg-brand-bgdark rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Complete Your Payment</h2>
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
        <div className="flex justify-between">
          <button className="bg-red-500 p-3 rounded mt-4" onClick={onClose}>
            Cancel
          </button>
          <PaystackButton
            {...paymentProps}
            className="bg-green-500 p-3 rounded mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
