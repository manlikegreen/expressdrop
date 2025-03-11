import React from "react";
import { Button } from "@/components/UI/Button";
import Image from "next/image";
import mailConfirmation from "../../assets/mailConfirmation.png";

interface MailConfirmationModalProps {
  onClose: () => void;
}

function MailConfirmationModal({ onClose }: MailConfirmationModalProps) {
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
      <div className="bg-[#222222] text-center relative lg:w-[890px] md:w-3/4 sm:w-1/3 mx-auto my-auto rounded-lg py-14">
        <div className="justify-center mx-auto w-[250px] h-[250px]">
          <Image src={img} alt="" />
        </div>
        <div className="w-[600px] mx-auto">
          <p className="text-brand-ash text-base md:px-6">
            A confirmation mail was sent to your email address. Kindly click the
            link on it to continue. This process is just for security purposes,
            we just need to confirm the email address and lead you to a perfect
            experience with Afrocarb.
          </p>
          <Button type="submit" className="mt-10 lg:w-full md:w-3/4">
            Go to my mail
          </Button>
        </div>
      </div>
    </div>
  );
}

const img = mailConfirmation;

export default MailConfirmationModal;
