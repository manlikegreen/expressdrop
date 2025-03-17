"use client";

import { useState } from "react";
import {
  IoMdCheckmarkCircle,
  IoMdCloseCircle,
  IoMdInformationCircle,
} from "react-icons/io";

interface AlertBannerProps {
  type: "success" | "error" | "info";
  message: string;
}

const AlertBanner: React.FC<AlertBannerProps> = ({ type, message }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const alertStyles = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    info: "bg-blue-500 text-white",
  };

  const icons = {
    success: <IoMdCheckmarkCircle className="text-xl" />,
    error: <IoMdCloseCircle className="text-xl" />,
    info: <IoMdInformationCircle className="text-xl" />,
  };

  return (
    <div
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-6 py-6 rounded-lg shadow-md flex items-center gap-3 ${alertStyles[type]}`}
    >
      {icons[type]}
      <span className="font-semibold">{message}</span>
      <button onClick={() => setIsVisible(false)} className="ml-auto text-lg">
        &times;
      </button>
    </div>
  );
};

export default AlertBanner;
