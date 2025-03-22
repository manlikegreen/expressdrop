"use client";

import { Button } from "@/components/UI/Button";
import { MdOutlineCancel } from "react-icons/md";

interface RiderPendingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RiderPendingModal: React.FC<RiderPendingModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-xl bg-black bg-opacity-50">
      <div className="bg-brand-bg dark:bg-brand-bgdark rounded-lg p-6 w-1/3 shadow-xl">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Pending Approval</h3>
          <button
            onClick={onClose}
            className="hover:shadow-[0_0_10px_0_#fff] rounded-full"
          >
            <MdOutlineCancel className="text-2xl" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="text-center mb-6">
          <p className="text-sm dark:text-brand-ash">
            Your registration is currently under review. You will be notified
            once an admin approves your request.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center">
          <Button onClick={onClose} variant={"alternate"}>
            Okay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RiderPendingModal;
