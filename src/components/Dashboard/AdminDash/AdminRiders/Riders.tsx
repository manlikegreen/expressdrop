"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import img from "@/assets/guest.png";
import { MdOutlineCancel } from "react-icons/md";

// Dummy data for users
interface RiderInformation {
  name: string;
  riderID: string;
  image: StaticImageData;
  status?: string;
  phoneNumber?: string;
  email?: string;
  address?: string;
}

const RidersInformation: Array<RiderInformation> = [
  { name: "John Doe", riderID: "3439723", image: img },
  { name: "GHOST", riderID: "00001", image: img },
  { name: "Big Smoke", riderID: "029384394", image: img },
  { name: "The Rvbbies", riderID: "100002324", image: img },
  { name: "Lyrical Priest", riderID: "0010236", image: img },
  { name: "ODUMODUBLVCK", riderID: "12332223", image: img },
  { name: "Ricardo Valentine", riderID: "123453545", image: img },
  { name: "Adonis Morrisette", riderID: "12342323", image: img },
];

// Table Headers
const TABLEHEADERS = [
  "Rider Name",
  "Rider ID",
  "Rider Status",
  "Rider Details",
];

const Riders = () => {
  const [filteredRiders, setFilteredRiders] = useState(RidersInformation);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [selectedRider, setSelectedRider] = useState<RiderInformation | null>(
    null
  );
  const [selectedUser, setSelectedUser] = useState<RiderInformation | null>(
    null
  );
  const [statusInput, setStatusInput] = useState({
    status: "",
  });

  // Open Modal for Assigning Role
  const handleViewMoreClick = (rider: RiderInformation) => {
    setSelectedRider(rider);
    setIsModalOpen(true);
  };

  const handleAssignRoleClick = (rider: RiderInformation) => {
    setSelectedUser(rider);
    setIsStatusModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRider(null);
  };

  const closeStatusModal = () => {
    setIsStatusModalOpen(false);
    setSelectedRider(null);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedUser) {
      setFilteredRiders((prevRiders) =>
        prevRiders.map((rider) =>
          rider.riderID === selectedUser.riderID
            ? { ...rider, status: statusInput.status }
            : rider
        )
      );
    }

    closeStatusModal();
    setStatusInput({ status: "" });
  };

  const statusColors: Record<string, string> = {
    pending: "bg-amber-500 text-white",
    accepted: "bg-green-500 text-white",
    rejected: "bg-red-500 text-white",
    deactivated: "bg-black text-white",
  };

  return (
    <div className="container lg:mt-10 px-10 py-6">
      {/* Riders Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-5">
          <thead>
            <tr>
              {TABLEHEADERS.map((header, index) => (
                <th
                  key={header}
                  className={`py-4 bg-gray-200 dark:bg-brand-bgdark uppercase font-bold border-y-2 border-gray-700 dark:border-brand-bg text-sm lg:text-base text-left ps-4 ${
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
            {filteredRiders.map((rider) => (
              <tr
                key={rider.riderID}
                className="bg-gray-100 dark:bg-brand-bgdark text-left text-xs lg:text-base"
              >
                <td className="py-4 rounded-l-xl ">
                  <div className="pl-3">
                    <div className="flex justify-start items-center left-0">
                      <Image
                        src={rider.image}
                        alt={rider.name}
                        className="w-10 h-10 rounded-full hidden md:block"
                      />
                      <div className="pl-4 text-xs lg:text-base">
                        {rider.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 ps-4">{rider.riderID}</td>
                <td className="py-4 ps-4">
                  {rider.status ? (
                    <span
                      className={`px-3 py-1 rounded-md font-bold uppercase text-xs lg:text-base ${
                        statusColors[rider.status] || ""
                      }`}
                    >
                      {rider.status}
                    </span>
                  ) : (
                    <button
                      onClick={() => handleAssignRoleClick(rider)}
                      className="text-blue-500 hover:underline font-bold uppercase text-xs lg:text-base"
                    >
                      Set Status
                    </button>
                  )}
                </td>
                <td className="py-4 ps-4 rounded-r-xl">
                  <button
                    onClick={() => handleViewMoreClick(rider)}
                    className="text-blue-500 hover:underline font-bold uppercase text-xs lg:text-base"
                  >
                    View More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Rider Information Modal */}
      {isModalOpen && selectedRider && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-black bg-opacity-50">
          <div className="bg-brand-bg dark:bg-brand-bgdark rounded-lg p-6 w-1/3 shadow-xl">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-xl font-bold pt-4 mb-4">
                View {`${selectedRider?.name}'s`} details
              </h3>
              <button className="" onClick={closeModal}>
                <MdOutlineCancel className="text-2xl hover:shadow-[0_0_10px_0_#fff] rounded-full" />
              </button>
            </div>

            {/* Rider Image */}
            <div className="flex justify-center mb-4">
              <Image
                src={selectedRider.image}
                alt={selectedRider.name}
                className="w-24 h-24 rounded-full"
              />
            </div>

            {/* RIDER INFO */}
            <div className="grid grid-cols-2 gap-6 mb-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">RIDER INFO</h3>
                <p>
                  <strong>Name:</strong> {selectedRider.name}
                </p>
                <p>
                  <strong>Number:</strong> {selectedRider.phoneNumber}
                </p>
                <p>
                  <strong>Email:</strong> {selectedRider.email}
                </p>
                <p>
                  <strong>Address:</strong> {selectedRider.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {isStatusModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-lg bg-black bg-opacity-50">
          <div className="bg-brand-bg dark:bg-brand-bgdark rounded-lg p-6 w-1/3 shadow-xl">
            <h3 className="text-xl font-bold mb-4">
              Assign Status to {selectedUser?.name}
            </h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <select
                className="w-full p-2 rounded-md dark:bg-brand-dark border border-brand-ash focus:outline-none"
                value={statusInput.status}
                onChange={(e) =>
                  setStatusInput({ ...statusInput, status: e.target.value })
                }
                required
              >
                <option value="" disabled>
                  Select Role
                </option>
                <option value="pending" className="bg-transparent">
                  Pending
                </option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
                <option value="deactivated">Deactivated</option>
              </select>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={closeStatusModal}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Riders;
