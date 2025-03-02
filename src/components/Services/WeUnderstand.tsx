"use client";

import React, { useEffect } from "react";
import { SplitText } from "gsap-trial/SplitText";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);

const WeUnderstand = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isLargeScreen = window.innerWidth >= 768;
      const firstSplitText = new SplitText("#express", { type: "chars" });
      const chars = firstSplitText.chars;
      const secondSplitText = new SplitText("#cost", { type: "chars" });
      const secondChars = secondSplitText.chars;
      const thirdSplitText = new SplitText("#transaction", { type: "chars" });
      const thirdChars = thirdSplitText.chars;

      gsap.fromTo(
        "#content",
        {
          opacity: 0,
          y: -10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: "#content",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        chars,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          ease: "back.inOut",
          delay: 3,
          duration: 2,
          repeat: isLargeScreen ? 2 : 0,
          repeatDelay: 1.5,
          yoyo: isLargeScreen,
        }
      );

      gsap.fromTo(
        secondChars,
        {
          opacity: 0,
          x: -20,
        },
        {
          opacity: 1,
          x: 0,
          stagger: 0.05,
          ease: "back.inOut",
          delay: 4,
          duration: 2,
          repeat: isLargeScreen ? 2 : 0,
          repeatDelay: 2,
          yoyo: isLargeScreen,
        }
      );

      gsap.fromTo(
        thirdChars,
        {
          opacity: 0,
          x: 20,
        },
        {
          opacity: 1,
          x: 0,
          stagger: 0.05,
          ease: "back.inOut",
          delay: 4,
          duration: 2,
          repeat: isLargeScreen ? 2 : 0,
          repeatDelay: 2,
          yoyo: isLargeScreen,
        }
      );
    }
  }, []);

  return (
    <section
      id="content"
      className="my-[2rem] lg:my-[5rem] bg-brand-bgdark dark:bg-transparent/50"
    >
      <div className="container py-16 lg:py-24">
        <div className="flex flex-col gap-4 text-lg lg:text-4xl text-brand-bg font-semibold">
          <p>
            At{" "}
            <span
              id="express"
              className="text-xl lg:text-6xl text-brand uppercase font-bold"
            >
              Express Drop
            </span>
            ,
          </p>
          <p>
            we understand that most times, the{" "}
            <span
              id="cost"
              className="text-xl lg:text-5xl text-brand font-bold"
            >
              cost{" "}
            </span>
            of delays in logistics far
          </p>
          <p>
            outweighs the cost of the{" "}
            <span
              id="transaction"
              className="text-xl lg:text-5xl text-brand font-bold"
            >
              transaction
            </span>{" "}
            itself
          </p>
        </div>
      </div>
    </section>
  );
};

export default WeUnderstand;
