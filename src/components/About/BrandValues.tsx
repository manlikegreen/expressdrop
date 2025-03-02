import React from "react";
import { FaChevronRight } from "react-icons/fa";

const BrandValues = () => {
  return (
    <section>
      <div className="container">
        <div className="text-brand items-center justify-center text-4xl lg:text-6xl font-bold text-center py-6 uppercase">
          Mission, Vision & Core Values
        </div>
        <section className="my-[2rem] lg:my-[3rem] py-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {VALUES.map((values, index) => (
              <div
                key={index}
                id="services"
                className="flex flex-col items-center justify-between h-full p-6 border-4 border-black/5 dark:border-white/10 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 duration-500 bg-transparent/20 dark:bg-transparent/40 backdrop:blur-xl"
              >
                {/* <div className="p-4 rounded-full">
                        {
                          <values.image className="text-brand transform hover:rotate-12 transition duration-300" />
                        }
                      </div> */}
                <h1 className="text-xl font-bold mt-4 uppercase">
                  {values.title}
                </h1>
                <p className="pt-4 text-center flex-grow">
                  {values.description}
                </p>
                <div className="group relative bottom-1 mt-4">
                  <button className="relative group-hover:text-brand group-hover:scale-105 transition-all duration-500 flex items-center">
                    View More
                    <FaChevronRight className="ml-2" />
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-transparent group-hover:bg-brand transition-all duration-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

interface Values {
  title: string;
  description: string;
  image?: string;
}

const VALUES: Values[] = [
  {
    title: "Vision Statement",
    description:
      "To achieve leadership in the African courier and logistics market by creating solutions that improve performances and enable its people and business partners.",
  },
  {
    title: "Mission Statement",
    description:
      "To be the reference point of excellence for Courier and Logistics solutions with cost-efficient express deliveries to our clients in all business sectors.",
  },
  {
    title: "Core Values",
    description:
      "Our values guide how we behave. Our brand values are: Innovation, Customer Centricity, Community, Excellence, Integrity, Respect and Commitment",
  },
];

export default BrandValues;
