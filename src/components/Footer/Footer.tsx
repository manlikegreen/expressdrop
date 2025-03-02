import React from "react";
import { Button } from "../UI/Button";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/Logo/android-chrome-512x512.png";

const Footer = () => {
  return (
    <section className="bg-black">
      <div className="container flex flex-col-reverse md:flex-row justify-between items-center py-8 gap-4">
        <div className="text-brand-ash pt-6 md:pt-0 text-left w-full md:w-1/2 flex gap-8">
          <div className="flex-col gap-4 flex items-center justify-center">
            <Link href="/">
              <div className="flex-row gap-4">
                <Image
                  src={logo}
                  alt=""
                  width={80}
                  height={80}
                  className="mx-auto"
                />
                <div className="hidden md:flex font-bold uppercase justify-center items-center">
                  <p className="text-2xl">Express Drop</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="mx-auto md:mx-0">
            <p className="font-semibold">Feel free to reach us on:</p>
            <p>+234 812 394 5335</p>
            <p>info@expressdrop.com</p>
            <div className="flex gap-2 pt-4 items-center">
              <p>
                <FaInstagramSquare />
              </p>
              <p>
                <FaLinkedin />
              </p>
              <p>
                <FaFacebook />
              </p>
              <p className="font-bold text-lg">expressdrop</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 ">
          <p className="font-bold text-lg uppercase text-brand-ash">
            Subscribe
          </p>
          <div className="text-brand-ash">
            <form action="">
              <label htmlFor="name" className="text-base block mb-2">
                Email Address
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Email Address"
                className="w-full p-4 border border-brand-ash focus:border-brand rounded-2xl mb-4 placeholder-brand-bg bg-inherit text-xs"
              />
              <Button variant={"default"}>Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
      <div className="px-4">
        <div className="container font-semibold flex justify-between text-sm md:text-base lg:text-lg py-4 text-brand-ash">
          <p>@ 2025 All Copyrights Reserved</p>
          <p className="uppercase">Express Drop</p>
        </div>
      </div>
      <div className="px-4">
        <div className="text-sm md:text-base lg:text-lg py-4 text-brand-ash text-right">
          <p>
            Powered by{" "}
            <span className="text-brand font-bold text-base md:text-lg lg:text-xl">
              LODIM Global Services
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
