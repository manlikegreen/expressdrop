"use client";

import { VanIcon } from "../Icons";
import CustomSolutionsIcon from "../Icons/CustomSolutionsIcon";
import SvgCourierIcon from "../Icons/CourierIcon";
import { FaChevronRight } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const OurServices = () => {
  const sectionRef = useRef(null);
  const pOneRef = useRef(null);
  const pTwoRef = useRef(null);
  const pThreeRef = useRef(null);
  const servicesRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      pOneRef.current,
      { opacity: 0, x: -10 },
      {
        opacity: 1,
        x: 0,
        delay: 0.5,
        scrollTrigger: {
          trigger: pOneRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      pTwoRef.current,
      { opacity: 0, x: 10 },
      {
        opacity: 1,
        x: 0,
        delay: 1,
        scrollTrigger: {
          trigger: pTwoRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      pThreeRef.current,
      { opacity: 0, x: -10 },
      { opacity: 1, x: 0 }
    );
    gsap.to(gsap.utils.toArray("#services") as HTMLElement[], {
      opacity: 1,
      y: 0,
      stagger: 1,
    });
  }, []);

  return (
    <section ref={sectionRef} className="container my-[5rem]">
      <div className="flex-col gap-4 font-bold">
        <p ref={pOneRef} className="text-2xl md:text-5xl">
          You have a need, we
        </p>
        <p ref={pTwoRef} className="text-2xl md:text-5xl">
          have the{" "}
          <span
            ref={pThreeRef}
            className="text-brand text-4xl md:text-6xl uppercase font-bold justify-center items-center"
          >
            Solution
          </span>
        </p>
      </div>
      <section className="my-[2rem] lg:my-[3rem] py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              ref={servicesRef}
              id="services"
              className="flex flex-col items-center justify-between h-full p-6 border-4 border-black/5 dark:border-white/10 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 duration-500 bg-transparent/20 dark:bg-transparent/40 backdrop:blur-xl"
            >
              <div className="p-4 rounded-full">
                {
                  <service.icon className="text-brand transform hover:rotate-12 transition duration-300" />
                }
              </div>
              <h3 className="text-xl font-bold mt-4 uppercase">
                {service.title}
              </h3>
              <p className="pt-4 text-center flex-grow">
                {service.description}
              </p>
              <div className="group relative bottom-1 mt-4">
                <Link href="/services">
                  <button className="relative group-hover:text-brand group-hover:scale-105 transition-all duration-500 flex items-center">
                    View More
                    <FaChevronRight className="ml-2" />
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-transparent group-hover:bg-brand transition-all duration-500" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
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

export default OurServices;
