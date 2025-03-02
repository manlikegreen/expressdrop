"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";
import AnimatedGif from "../Home/AnimatedGif";
import gif from "@/assets/ContactUs/contactUsGif.gif";
import { useTheme } from "next-themes";
import { Button } from "../UI/Button";

const ContactUs = () => {
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

  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    comment: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("API Response:", data); // Log full API response

      if (data.success) {
        setMessage("Message sent successfully!");
        setFormData({ name: "", email: "", phoneNumber: "", comment: "" }); // Clear form
      } else {
        setMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="md:pt-[8rem] pt-[10rem]">
      <div className="container">
        <div className="h-5/6 flex flex-col py-8">
          <div>
            <p id="hero" className="hero-title pb-4">
              Reach out to us
            </p>
            <div className="hero-content flex-col gap-2 w-fit bg-brand-ash rounded-lg">
              <p className="p-6 text-brand-dark">Contact Us</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row mt-12 mb-12">
          <div className="justify-center lg:justify-start items-center w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-xl md:text-4xl rounded-lg font-semibold w-fit lg:mx-0">
              Send us a message{" "}
              <span className="text-brand uppercase font-bold">today!</span> 🙃
            </p>
            <div className="mt-[3.5rem] w-full">
              <h2 className="text-2xl font-semibold pb-8">Add a comment</h2>
              <form onSubmit={handleSubmit}>
                <label htmlFor="name" className="text-base block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="What is your name?"
                  className="w-full p-4 border rounded-2xl mb-4"
                  required
                />
                <label htmlFor="email" className="text-base block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="What is your email?"
                  className="w-full p-4 border rounded-2xl mb-4"
                  required
                />
                <label htmlFor="phoneNumber" className="text-base block mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="w-full p-4 border rounded-2xl mb-4"
                  required
                />
                <label htmlFor="comment" className="text-base block mb-2">
                  Comment
                </label>
                <textarea
                  id="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full p-4 border rounded-2xl mb-4"
                  required
                ></textarea>

                <div className="text-center pt-5 md:text-[0.75rem] w-full">
                  {theme === "light" ? (
                    <Button
                      variant="alternate"
                      className="max-w-[17em] px-12 mx-auto"
                    >
                      {loading ? "Sending..." : "Submit"}
                    </Button>
                  ) : (
                    <Button
                      variant="default"
                      className="max-w-[17em] px-12 mx-auto"
                    >
                      {loading ? "Sending..." : "Submit"}
                    </Button>
                  )}
                </div>
                {message && <p className="text-center mt-4">{message}</p>}
              </form>
            </div>
          </div>
          <div className="mx-auto w-full lg:w-1/2 flex justify-center mb-12 lg:mb-0">
            <AnimatedGif src={gif} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
