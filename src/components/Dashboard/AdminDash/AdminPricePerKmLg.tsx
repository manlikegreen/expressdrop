"use client";

import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const AdminPricePerKmLg = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [price, setPrice] = useState(1500); // Default price
  const [newPrice, setNewPrice] = useState(price);

  const handleOpenModal = () => {
    setNewPrice(price); // Set initial value in modal
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSavePrice = () => {
    setPrice(newPrice); // Update price on save
    handleCloseModal();
  };

  return (
    <div className="dark:bg-brand-dark shadow-2xl dark:shadow-[0_0_10px_0_#fff] p-5 w-fit mt-4 rounded-xl">
      <div className="flex flex-col gap-4 mx-auto items-center p-4">
        <div className="text-4xl">₦ {price}</div>
        <p className="text-brand-ash text-base">For large items</p>
        <div className="group relative">
          <button
            onClick={handleOpenModal}
            className="relative group-hover:text-brand group-hover:scale-105 transition-all duration-500 flex items-center"
          >
            Change Price
            <FaChevronRight className="ml-2" />
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-transparent group-hover:bg-brand transition-all duration-500" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-xl flex justify-center items-center z-50">
          <div className="dark:bg-brand-dark bg-white rounded-lg w-4/5 md:w-1/3 p-8 max-h-[75vh] overflow-y-auto shadow-2xl dark:shadow-[0_0_10px_0_#fff]">
            {/* Close Button */}
            <div className="flex justify-end">
              <button onClick={handleCloseModal} className="text-3xl">
                &times;
              </button>
            </div>

            {/* Modal Title */}
            <h2 className="text-3xl font-bold text-center mb-4">Edit Price</h2>

            {/* Input Field */}
            <div className="mb-6">
              <label className="block text-lg mb-2">Enter New Price (₦):</label>
              <input
                type="number"
                className="w-full p-3 rounded-lg border border-gray-300 dark:bg-inherit dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-brand"
                value={newPrice}
                onChange={(e) => setNewPrice(Number(e.target.value))}
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between">
              <button
                onClick={handleCloseModal}
                className="px-6 py-3 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleSavePrice}
                className="px-6 py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition-all"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPricePerKmLg;
