"use client";

import { useState } from "react";
import { StaticImageData } from "next/image";
import img from "@/assets/guest.png";
import { Button } from "@/components/UI/Button";
import AddStaff from "./AddStaff";

// Dummy data for users
interface UsersInformation {
  name: string;
  userID: string;
  image: StaticImageData;
  role?: string;
}

const UsersInformation: Array<UsersInformation> = [
  { name: "John Doe", userID: "3439723", image: img },
  { name: "GHOST", userID: "00001", image: img },
  { name: "Big Smoke", userID: "029384394", image: img },
  { name: "The Rvbbies", userID: "100002324", image: img },
  { name: "Lyrical Priest", userID: "0010236", image: img },
  { name: "ODUMODUBLVCK", userID: "12332223", image: img },
  { name: "Ricardo Valentine", userID: "123453545", image: img },
  { name: "Adonis Morrisette", userID: "12342323", image: img },
];

// Table Headers
const TABLEHEADERS = ["User Name", "User ID", "User Role"];

// Role colors
const roleColors: Record<string, string> = {
  Admin: "bg-green-500 text-white",
  Rider: "bg-blue-500 text-white",
  Vendor: "bg-gray-300 text-gray-700",
};

const AdminUsers = () => {
  const [filteredUsers, setFilteredUsers] = useState(UsersInformation);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UsersInformation | null>(
    null
  );
  const [roleInput, setRoleInput] = useState({ role: "" });

  const [isAddStaffModalOpen, setIsAddStaffModalOpen] = useState(false);

  // Open Modal for Assigning Role
  const handleAssignRoleClick = (user: UsersInformation) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setRoleInput({ role: "" });
    setSelectedUser(null);
  };

  // Handle Role Assignment
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedUser) {
      setFilteredUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.userID === selectedUser.userID
            ? { ...user, role: roleInput.role }
            : user
        )
      );
    }
    closeModal();
  };

  return (
    <div className="container mt-10 px-10 py-6">
      {/* Page Title */}
      <div className="flex justify-between">
        <div className="text-5xl font-extrabold mb-6">Users</div>
        <Button
          variant={"default"}
          onClick={() => setIsAddStaffModalOpen(true)}
        >
          Add User
        </Button>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-5">
          <thead>
            <tr>
              {TABLEHEADERS.map((header, index) => (
                <th
                  key={header}
                  className={`py-4 bg-gray-200 dark:bg-brand-bgdark uppercase font-bold border-y-2 border-brand-secondary dark:border-brand-bg text-left ps-4 ${
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
            {filteredUsers.map((user) => (
              <tr
                key={user.userID}
                className="bg-gray-100 dark:bg-brand-bgdark text-left"
              >
                <td className="py-4 rounded-l-xl">
                  {/* <Image
                    src={user.image}
                    alt={user.name}
                    className="w-10 h-10 rounded-full"
                  /> */}
                  <div className="pl-4">{user.name}</div>
                </td>
                <td className="py-4">{user.userID}</td>
                <td className="py-4 rounded-r-xl">
                  {user.role ? (
                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-bold ${
                        roleColors[user.role]
                      }`}
                    >
                      {user.role}
                    </span>
                  ) : (
                    <button
                      onClick={() => handleAssignRoleClick(user)}
                      className="text-blue-500 hover:underline font-bold uppercase"
                    >
                      Assign Role
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Role Assignment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-black bg-opacity-50">
          <div className="bg-brand-bg dark:bg-brand-bgdark rounded-lg p-6 w-1/3 shadow-xl">
            <h3 className="text-xl font-bold mb-4">
              Assign Role to {selectedUser?.name}
            </h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <select
                className="w-full p-3 rounded-md bg-gray-100 dark:bg-brand-bgdark border border-gray-300 focus:outline-none"
                value={roleInput.role}
                onChange={(e) => setRoleInput({ role: e.target.value })}
                required
              >
                <option value="" disabled>
                  Select Role
                </option>
                <option value="Admin">Admin</option>
                <option value="Vendor">Vendor</option>
                <option value="Rider">Rider</option>
              </select>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={closeModal}
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

      {/* Add Staff Modal */}
      {isAddStaffModalOpen && (
        <AddStaff onClose={() => setIsAddStaffModalOpen(false)} />
      )}
    </div>
  );
};

export default AdminUsers;
