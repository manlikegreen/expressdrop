import React from "react";
import { Button } from "@/components/UI/Button";
// import "./MailConfirmationModal/page.module.css";
import Image from "next/image";
import passwordReset from "@/assets/Home/hero.jpg";
import { AiOutlineClose } from "react-icons/ai";

interface PasswordChangedModalProps {
  onClose: () => void;
}

function PasswordChangedModal({ onClose }: PasswordChangedModalProps) {
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
      onClick={handleBackgroundClick}
    >
      <div className="bg-[#222222] text-center relative lg:w-[800px] md:w-3/4 sm:w-1/3 mx-auto my-auto rounded-lg py-14 shadow-[0_0_14px_0_#c3ff7d3f]">
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-200"
          onClick={onClose}
        >
          <AiOutlineClose className="w-6 h-6" />
        </button>
        <div className="justify-center mx-auto w-[170px] h-[170px] mb-5">
          <Image src={img} alt="" />
        </div>
        <div className="w-[600px] mx-auto">
          <p className="text-brand-ash text-base">
            Your password was successfully changed. Keep enjoying amazing
            experiences with Afrocarb.
          </p>
          <Button type="submit" className="mt-10 lg:w-full md:w-3/4">
            Okay, Login
          </Button>
        </div>
      </div>
    </div>
  );
}

const img = passwordReset;

export default PasswordChangedModal;
