"use client";

import React, { useRef } from "react";
import SvgArrowIcon from "../Icons/ArrowIcon";
import AnimatedGif from "./AnimatedGif";
import gif from "@/assets/Home/DeliveryTwo.gif";

const VisionxMission = () => {
  const pOneRef = useRef(null);
  const pTwoRef = useRef(null);
  const pThreeRef = useRef(null);
  return (
    <section className="container my-[5rem]">
      <div className="flex-col gap-4 font-bold">
        <p ref={pOneRef} className="text-2xl md:text-5xl">
          Between the departure and the destination,
        </p>
        <p ref={pTwoRef} className="text-2xl md:text-5xl">
          we are always there, we are;{" "}
        </p>
        <div
          ref={pThreeRef}
          className="text-brand text-4xl md:text-6xl uppercase font-bold justify-center items-center mt-4"
        >
          Express Drop
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row mt-12 mb-4">
        <div className="justify-center lg:justify-start items-center w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-xl md:text-3xl uppercase bg-brand rounded-lg p-4 font-bold w-fit mx-auto lg:mx-0">
            Key Features
          </p>
          <div className="flex flex-col gap-4 mt-[3.5rem] w-full">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex-col gap-2 mb-6">
                <div className="flex gap-2 text-2xl font-medium mb-4">
                  <p className="hidden lg:block">{f.icon({})}</p>
                  <p className="uppercase mx-auto lg:mx-0">{f.title}</p>
                </div>
                <p className="lg:ps-6">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto w-full lg:w-1/2 flex justify-center mb-12 lg:mb-0">
          <AnimatedGif src={gif} alt="" />
        </div>
      </div>
    </section>
  );
};

interface Features {
  title: string;
  description: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
}

const FEATURES: Features[] = [
  {
    title: "Reliable Delivery",
    description:
      "We pride on being the only indigenous logistics provider that has the vision, capacity and world class client service culture that can rival any international brand.",
    icon: SvgArrowIcon,
  },
  {
    title: "Express Service",
    description:
      "We understand that most times, the costs for delays in logistics far outweigh the cost of the transaction itself. Therefore, we have invested in acquiring robust technology, infrastructure and hiring people who continuously deliver on time, every time.",
    icon: SvgArrowIcon,
  },
];

export default VisionxMission;
