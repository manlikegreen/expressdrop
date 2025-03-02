"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import VanIcon from "../Icons/VanIcon";
import SvgCourierIcon from "../Icons/CourierIcon";
import CustomSolutionsIcon from "../Icons/CustomSolutionsIcon";
import { Button } from "../UI/Button";
import Link from "next/link";

const WhoWeAre = () => {
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1,
    });

    gsap.fromTo(
      ".hero-content",
      {
        opacity: 0,
        x: -10,
      },
      {
        opacity: 1,
        x: 0,
        delay: 1.5,
      }
    );
  }, []);

  return (
    <>
      <section className="md:pt-[8rem] pt-[10rem]">
        <div className="container">
          <div className="h-5/6 flex flex-col py-8">
            <div>
              <p id="hero" className="hero-title pb-4">
                Who We Are
              </p>
              <div className="hero-content flex-col gap-2 w-fit bg-brand-ash rounded-lg">
                <p className="p-6 text-brand-dark">About Us</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[3rem] lg:py-[5rem]">
        <div className="container">
          <p className="text-2xl md:text-4xl font-semibold">
            <span
              id="pOne"
              className="text-brand text-4xl md:text-6xl uppercase font-bold"
            >
              Quality Service{" "}
            </span>{" "}
            and
          </p>
          <p className="text-2xl md:text-4xl font-semibold">
            <span className="text-brand text-4xl md:text-6xl uppercase font-bold">
              committed employees
            </span>
            .
          </p>
          <p className="text-2xl md:text-4xl mt-6 font-semibold pb-[3rem]">
            How do we do it?
          </p>
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 pb-8 md:pb-12">
            <div className="flex flex-col gap-6 md:gap-8 md:pt-8 pb-8 md:pb-12 w-full lg:w-2/3">
              <p>
                Express Drop is a homegrown Nigerian logistics and distribution
                services company, founded in 2009 and later acquired in 2012 by
                Superflux Group of companies. We are the fourth largest courier
                company in Nigeria and intend to become –in the near future– the
                go-to courier company throughout Africa.
              </p>
              <p>
                We offer a wide array of express, courier and logistic support
                solutions aimed at helping customers re-engineer and re-invent
                their businesses to compete successfully in an ever-changing
                marketplace, with the final objective of safely and promptly
                delivering all our customers consignments as expected.
              </p>
              <p>
                With staff strength of over 300 highly skilled personnel, we
                have excellent competencies in striving sectors such as
                Financial Services, Manufacturing, Telecommunications,
                Government Agencies, and Oil & Gas/Utilities.
              </p>
            </div>
            <div className="flex items-center gap-[0.69rem] md:mb-7">
              <div
                aria-hidden
                className="w-full h-[0.125rem] lg:w-[0.125rem] bg-black dark:bg-brand-ash lg:h-full"
              ></div>
            </div>
            <div className="flex flex-col gap-6 md:gap-8 md:pt-8 pb-8 md:pb-12 w-full lg:w-1/3">
              <div className="flex">
                <h1 className="text-brand font-semibold text-3xl items-center justify-center mx-auto lg:mx-14 uppercase">
                  Services
                </h1>
              </div>
              <div>
                {SERVICES.map((service, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start justify-between p-6 font-light"
                  >
                    <Link href={"/services"}>
                      <Button variant={"link"}>
                        <div className="flex items-center gap-4">
                          {<service.icon className="" width={50} height={50} />}
                          {service.title}
                        </div>
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

interface Services {
  title: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
}

const SERVICES: Services[] = [
  {
    title: "Courier Services",
    icon: VanIcon,
  },
  {
    title: "Logistics",
    icon: SvgCourierIcon,
  },
  {
    title: "Custom Solutions",
    icon: CustomSolutionsIcon,
  },
];

export default WhoWeAre;
