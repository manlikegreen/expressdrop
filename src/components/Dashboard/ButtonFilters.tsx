"use client";

import { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ButtonFilter = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;

  // Close dropdown and date picker on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowDropdown(false);
        setShowDatePicker(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative">
      {/* Filter Button */}
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center justify-center p-3 rounded-lg bg-brand-bgdark text-brand-bg dark:bg-brand-bg dark:text-brand-dark shadow-md"
      >
        <FaFilter className="text-xl" />
      </button>

      {/* Dropdown Menu */}
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-56 bg-card dark:bg-card border border-brand-ash dark:border-brand-bg-dark rounded-lg shadow-lg z-50">
          <ul className="py-2">
            <li
              onClick={() => {
                setShowDatePicker(!showDatePicker);
                setShowDropdown(false);
              }}
              className="px-4 py-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              Filter by Date
            </li>
          </ul>
        </div>
      )}

      {/* Date Picker */}
      {showDatePicker && (
        <div className="absolute right-0 mt-2 p-4 w-64 bg-card dark:bg-card border border-brand-ash dark:border-brand-bg-dark rounded-lg shadow-lg z-50">
          <h3 className="text-sm font-semibold text-brand-secondary dark:text-brand-bg mb-2">
            Select Date Range
          </h3>
          <DatePicker
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={(update) =>
              setDateRange(update as [Date | null, Date | null])
            }
            isClearable
            className="w-full p-2 border border-brand-ash rounded-md text-brand-secondary dark:text-brand-bg dark:bg-brand-dark"
          />
          <button
            className="mt-6 w-full bg-brand py-2 rounded-md hover:bg-opacity-80 transition"
            onClick={() => {
              console.log("Selected Date Range:", dateRange);
              setShowDatePicker(false);
            }}
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default ButtonFilter;
