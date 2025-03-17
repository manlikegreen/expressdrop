"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import img from "@/assets/guest.png";
import { MdOutlineCancel } from "react-icons/md";

// Dummy data for vendors
interface VendorInformation {
  name: string;
  vendorID: string;
  image: StaticImageData;
  role?: string;
  phoneNumber?: string;
  email?: string;
  address?: string;
}

const VendorsInformation: Array<VendorInformation> = [
  { name: "John Doe", vendorID: "3439723", image: img },
  { name: "GHOST", vendorID: "00001", image: img },
  { name: "Big Smoke", vendorID: "029384394", image: img },
  { name: "The Rvbbies", vendorID: "100002324", image: img },
  { name: "Lyrical Priest", vendorID: "0010236", image: img },
  { name: "ODUMODUBLVCK", vendorID: "12332223", image: img },
  { name: "Ricardo Valentine", vendorID: "123453545", image: img },
  { name: "Adonis Morrisette", vendorID: "12342323", image: img },
];

// Table Headers
const TABLEHEADERS = ["Vendor Name", "Vendor ID", "Vendor Details"];

const Vendors = () => {
  const [filteredVendors] = useState(VendorsInformation);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVendor, setSelectedVendor] =
    useState<VendorInformation | null>(null);

  // Open Modal for Viewing Vendor Details
  const handleViewDetailsClick = (vendor: VendorInformation) => {
    setSelectedVendor(vendor);
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVendor(null);
  };

  return (
    <div className="container mt-10 px-10 py-6">
      {/* Page Title */}
      <div className="text-5xl font-extrabold mb-6">Vendors</div>

      {/* Vendors Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-5">
          <thead>
            <tr>
              {TABLEHEADERS.map((header, index) => (
                <th
                  key={header}
                  className={`py-4 bg-gray-200 dark:bg-brand-bgdark uppercase font-bold border-y-2 border-gray-700 dark:border-brand-bg text-left ps-4 ${
                    index === 0
                      ? "rounded-l-xl"
                      : index === TABLEHEADERS.length - 1
                      ? "rounded-r-xl"
                      : ""
                  }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredVendors.map((vendor) => (
              <tr
                key={vendor.vendorID}
                className="bg-gray-100 dark:bg-brand-bgdark text-left"
              >
                <td className="py-4 rounded-l-xl">
                  <div className="pl-3">
                    <div className="flex justify-start items-center left-0">
                      <Image
                        src={vendor.image}
                        alt={vendor.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="pl-4">{vendor.name}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4">{vendor.vendorID}</td>
                <td className="py-4 rounded-r-xl">
                  <button
                    onClick={() => handleViewDetailsClick(vendor)}
                    className="text-blue-500 hover:underline font-bold uppercase"
                  >
                    View More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Vendor Information Modal */}
      {isModalOpen && selectedVendor && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-black bg-opacity-50">
          <div className="bg-brand-bg dark:bg-brand-bgdark rounded-lg p-6 w-1/3 shadow-xl">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-xl font-bold pt-4 mb-4">
                View {`${selectedVendor?.name}'s`} details
              </h3>
              <button onClick={closeModal}>
                <MdOutlineCancel className="text-2xl hover:shadow-[0_0_10px_0_#fff] rounded-full" />
              </button>
            </div>

            {/* Vendor Image */}
            <div className="flex justify-center mb-4">
              <Image
                src={selectedVendor.image}
                alt={selectedVendor.name}
                className="w-24 h-24 rounded-full"
              />
            </div>

            {/* VENDOR INFO */}
            <div className="grid grid-cols-2 gap-6 mb-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">VENDOR INFO</h3>
                <p>
                  <strong>Name:</strong> {selectedVendor.name}
                </p>
                <p>
                  <strong>Number:</strong> {selectedVendor.phoneNumber}
                </p>
                <p>
                  <strong>Email:</strong> {selectedVendor.email}
                </p>
                <p>
                  <strong>Address:</strong> {selectedVendor.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vendors;
