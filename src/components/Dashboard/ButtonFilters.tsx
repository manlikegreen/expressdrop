"use client";

import { useState } from "react";
import { Button } from "@/components/UI/Button";
import AlignCenterIcon from "../Icons/AlignCenterIcon";

function ButtonFilters() {
  const [filter, setFilter] = useState("all items");

  const isSelected = (option: string) => option === filter;

  // Function to get styles dynamically
  const getButtonStyles = (option: string) => {
    const baseStyles = "border-2 font-medium h-10 lg:h-12 capitalize xl:px-5";

    if (isSelected(option)) {
      // Selected: Background color + white text
      switch (option) {
        case "delivered":
          return `${baseStyles} bg-green-500 text-white border-green-500 hover:bg-green-600`;
        case "ongoing":
          return `${baseStyles} bg-amber-500 text-white border-amber-500 hover:bg-amber-600`;
        case "cancelled":
          return `${baseStyles} bg-red-500 text-white border-red-500 hover:bg-red-600`;
        default:
          return baseStyles;
      }
    } else {
      // Unselected: Transparent background, colored border + text, no hover color change
      switch (option) {
        case "delivered":
          return `${baseStyles} bg-inherit text-green-500 border-green-500 hover:bg-green-500 hover:text-white`;
        case "ongoing":
          return `${baseStyles} bg-inherit text-amber-500 border-amber-500 hover:bg-amber-500 hover:text-white`;
        case "cancelled":
          return `${baseStyles} bg-inherit text-red-500 border-red-500 hover:bg-red-500 hover:text-white`;
        default:
          return baseStyles;
      }
    }
  };

  return (
    <div className="flex gap-4 pt-[1.94rem] lg:pt-[3.65rem] pb-[0.5rem] lg:pb-[1.22rem]">
      <Button
        variant={isSelected("all items") ? "default" : "alternate"}
        className="h-10 lg:h-12 capitalize xl:px-5"
        onClick={() => setFilter("all items")}
      >
        all items
      </Button>
      {OPTIONS.map((option) => (
        <Button
          key={option}
          className={`hidden lg:block ${getButtonStyles(option)}`}
          onClick={() => setFilter(option)}
        >
          {option}
        </Button>
      ))}
      <Button variant="ghost" size="icon" className="lg:hidden">
        <AlignCenterIcon />
      </Button>
    </div>
  );
}

const OPTIONS = ["delivered", "ongoing", "cancelled"];

export default ButtonFilters;
