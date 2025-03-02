"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1,
    });
  }, []);

  useGSAP(() => {
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
      "#pThree",
      {
        opacity: 0,
        y: -10,
      },
      {
        opacity: 1,
        y: 0,
        delay: 2,
      }
    );

    gsap.fromTo(
      "#pFour",
      {
        opacity: 0,
        y: 10,
      },
      {
        opacity: 1,
        y: 0,
        delay: 2.5,
      }
    );
  }, []);

  return (
    <section className="relative h-full md:pt-[8rem] pt-[10rem]">
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 bg-[url('/assets/home/hero.jpg')] bg-cover bg-center bg-no-repeat opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 container">
        <div className="h-5/6 flex flex-col py-8">
          <div>
            <p id="hero" className="hero-title pb-4">
              Express Drop
            </p>
            <div className="hero-content flex-col gap-2">
              <p id="pOne">We Solve</p>
              <p id="pTwo">Your Logistics</p>
              <p id="pThree" className="text-brand">
                Problems
              </p>
              <p id="pFour" className="text-base pt-2 lowercase font-normal">
                Bringing products straight from the vendor to your doorstep...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
