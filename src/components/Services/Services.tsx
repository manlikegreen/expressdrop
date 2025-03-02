"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { VanIcon } from "../Icons";
import SvgCourierIcon from "../Icons/CourierIcon";
import CustomSolutionsIcon from "../Icons/CustomSolutionsIcon";

const Services = () => {
  const servicesRef = useRef(null);
  const pThreeRef = useRef(null);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1,
    });

    gsap.fromTo(
      ".hero-content",
      {
        opacity: 0,
        y: -10,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1.5,
      }
    );
    gsap.fromTo(
      "#pOne",
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

    gsap.fromTo(
      "#pTwo",
      {
        opacity: 0,
        x: 10,
      },
      {
        opacity: 1,
        x: 0,
        delay: 1.8,
      }
    );

    gsap.fromTo(
      pThreeRef.current,
      { opacity: 0, x: -10 },
      { opacity: 1, x: 0, delay: 2 }
    );
    gsap.to(gsap.utils.toArray("#services") as HTMLElement[], {
      delay: 2.5,
      opacity: 1,
      y: 0,
      stagger: 1,
    });
  }, []);

  return (
    <section className="pt-[8rem] lg:pt-[10rem]">
      <div className="container">
        <div className="h-5/6 flex flex-col lg:py-8">
          <div>
            <p id="hero" className="hero-title pb-4">
              What we <span className="text-brand text-3xl">do</span>
            </p>
            <div className="hero-content flex-col gap-2 w-fit bg-brand-ash rounded-lg">
              <p className="p-6 text-brand-dark">Our Services</p>
            </div>
          </div>
        </div>
        <section className="my-[3rem] lg:my-[4rem]">
          <div className="flex flex-col gap-4">
            <h1 id="pOne" className="text-2xl lg:text-4xl font-semibold">
              At{" "}
              <span
                id="pTwo"
                className="text-brand text-3xl lg:text-5xl font-bold uppercase"
              >
                Express Drop
              </span>
              ,{" "}
            </h1>
            <h1
              id="pThree"
              ref={pThreeRef}
              className="text-2xl lg:text-4xl font-semibold pb-12"
            >
              we offer the following services
              <span className="text-brand">;</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                ref={servicesRef}
                id="services"
                className="flex flex-col items-center justify-between h-full p-6 border-4 border-black/5 dark:border-white/10 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 duration-500 bg-transparent/20 dark:bg-transparent/40 backdrop:blur-xl opacity-0"
              >
                <div className="p-4 rounded-full">
                  {
                    <service.icon className="text-brand transform hover:rotate-12 transition duration-300" />
                  }
                </div>
                <h3 className="text-lg lg:text-xl font-bold mt-4 uppercase">
                  {service.title}
                </h3>
                <p className="pt-4 text-center flex-grow">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

interface Services {
  title: string;
  description: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
}

const SERVICES: Services[] = [
  {
    title: "Courier Services",
    description:
      "Get your packages delivered in no time, guaranteed to be delivered swiftly and in pristine condition.",
    icon: VanIcon,
  },
  {
    title: "Logistics",
    description:
      "Our Domestic Logistics service has been specifically designed to suit both individual and corporate organisations, ensuring smooth and seamless transportation from one place to another.",
    icon: SvgCourierIcon,
  },
  {
    title: "Custom Solutions",
    description:
      "Every business has different supply chain challenges; we think outside the box to provide solutions that are effective irrespective of the situation.",
    icon: CustomSolutionsIcon,
  },
];

export default Services;
