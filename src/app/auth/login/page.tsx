"use client";

import Link from "next/link";
import Image from "next/image";

import fb from "@/assets/facebook.png";
import google from "@/assets/google.png";
import twitter from "@/assets/twitter.png";
import LoginForm from "@/components/Auth/LoginForm";
// import unstoppableIcon from "@/assets/unstoppable.png";
import { useState } from "react";
import PasswordChangedModal from "@/components/Auth/PasswordChangedModal";

function LoginPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="container mt-[9rem]">
      <div className="w-full max-w-[27rem] md:max-w-[32rem] lg:max-w-full pb-16">
        <header className="text-center">
          <h1 className="text-[1.5rem] md:text-[2.5rem] lg:text-[3.3rem] font-semibold">
            Login
          </h1>
          <p className="text-[0.75rem] md:text-[1.25rem] dark:text-brand-ash font-medium">
            Welcome back, we are delighted to have you
          </p>
        </header>
        <div className="flex flex-col gap-6 md:gap-8 pt-7 md:pt-10 pb-8 md:pb-12">
          {/* <button className="flex items-center gap-4 justify-center w-full text-[0.875rem] md:text-[1.25rem] text-[#2FE9FF] font-medium border-[2px] border-[#4C47F7] rounded-[10px] capitalize px-2 py-4">
            <Image src={unstoppableIcon} alt="" />
            Continue with unstoppable domain
          </button> */}
          <div className="flex gap-4 justify-between">
            <div className="flex gap-4 md:gap-6 xl:gap-12 justify-between">
              <button className="bg-brand-dark dark:bg-white w-10 md:w-14 h-10 md:h-14 p-[0.62rem] rounded-[8px]">
                <Image src={google} alt="" />
              </button>
              <button className="bg-brand-dark dark:bg-white w-10 md:w-14 h-10 md:h-14 p-[0.62rem] rounded-[8px]">
                <Image src={fb} alt="" />
              </button>
              <button className="bg-brand-dark dark:bg-white w-10 md:w-14 h-10 md:h-14 p-[0.62rem] rounded-[8px]">
                <Image src={twitter} alt="" />
              </button>
            </div>
            <button className="text-[0.75rem] md:text-[1.25rem] bg-white/85 dark:bg-inherit text-[#368994] dark:text-[#2FE9FF] font-medium border-[2px] border-[#368994] dark:border-[#2FE9FF]  rounded-[10px] px-4 py-[0.69rem]">
              Continue as Guest
            </button>
          </div>
        </div>
        <div className="flex items-center gap-[0.69rem] md:mb-7">
          <div aria-hidden className="h-[0.125rem] bg-[#527c887f] w-full"></div>
          <p className="text-brand-ash">or</p>
          <div aria-hidden className="h-[0.125rem] bg-[#527c887f] w-full"></div>
        </div>
        <LoginForm />
        <div className="text-center dark:text-brand-ash mt-6 md:mt-5 md:text-[1.25rem]">
          <p>
            Forgot Password?{" "}
            <Link
              href=""
              className="dark:text-white font-semibold uppercase"
              onClick={() => setShowModal(true)}
            >
              Reset
            </Link>
          </p>
          <p className="mt-6 md:mt-5">
            You don&apos;t have an account with us?{" "}
            <Link
              className="dark:text-white font-semibold uppercase"
              href="/auth/register"
            >
              Sign UP
            </Link>
          </p>
        </div>

        {showModal && (
          <PasswordChangedModal onClose={() => setShowModal(false)} />
        )}
      </div>
    </section>
  );
}

export default LoginPage;
