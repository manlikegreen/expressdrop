"use client";

import React, { useState } from "react";
import Image from "next/image";
import profile from "@/assets/About/Team/ip.png";
import AlertBanner from "@/components/UI/AlertBanner";

interface UserProfileData {
  name: string;
  email: string;
  phone: string;
}

const UserProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  const [userData, setUserData] = useState({
    name: "Eric Smith",
    email: "eric.smith@example.com",
    phone: "+(234)-805-521-6644",
  });

  const [formData, setFormData] = useState<UserProfileData>({ ...userData });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleSave = () => {
    // Simulate saving changes (e.g., sending to a server)
    console.log("Saved user data:", userData);
    setUserData(formData);
    setIsModalOpen(false);

    setAlertVisible(true);
  };

  const handleLogout = () => {
    console.log("User logged out!");
    // Add logout functionality here,
  };

  return (
    <div className="m-4">
      {alertVisible && (
        <AlertBanner type="success" message="Profile updated successfully" />
      )}

      <div className="flex flex-col gap-4 mx-auto">
        {/* Profile Info */}
        <div className="flex gap-3 items-center">
          <Image
            src={profile}
            alt="user profile"
            className="rounded-full"
            width={80}
            height={80}
          />
          <div className="flex flex-col">
            <p className="font-semibold">{userData.name}</p>
            <p className="text-sm">{userData.email}</p>
            <p className="text-sm">{userData.phone}</p>
          </div>
        </div>

        {/* Edit Profile Button */}
        <button
          onClick={toggleModal}
          className="mx-auto w-3/4 bg-brand p-2 rounded-lg transform transition-transform duration-300 hover:scale-105"
        >
          Edit Profile
        </button>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mx-auto w-3/4 bg-red-500 p-2 rounded-lg transform transition-transform duration-300 hover:scale-105"
        >
          Log Out
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-xl">
          <div className="bg-gray-100 dark:bg-brand-bgdark rounded-lg p-6 w-11/12 max-w-md shadow-xl dark:shadow-[0_0_10px_0_#fff]">
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
            <div className="flex flex-col gap-4">
              {/* Name Field */}
              <div>
                <label className="block pb-2 font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border bg-inherit rounded p-2 focus:outline-none"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block pb-2 font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border bg-inherit rounded p-2 focus:outline-none"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block pb-2 font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border bg-inherit rounded p-2 focus:outline-none"
                />
              </div>
            </div>

            {/* Modal Buttons */}
            <div className="flex justify-between gap-4 mt-6">
              <button
                onClick={toggleModal}
                className="bg-[#171717] px-4 py-2 rounded-lg hover:bg-black transition text-brand-bg"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
