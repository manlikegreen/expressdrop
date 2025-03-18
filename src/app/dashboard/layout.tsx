"use client";

import { useStateContext } from "@/components/Contexts/ContextProvider";
import Header from "@/components/Dashboard/DashboardHeader";
import Sidebar from "@/components/Dashboard/Sidebar";
import RiderSidebar from "@/components/Dashboard/RiderDash/RiderSidebar";
import AdminSidebar from "@/components/Dashboard/AdminDash/AdminSidebar";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { activeMenu, setActiveMenu } = useStateContext();
  const pathname = usePathname();

  let SidebarComponent = Sidebar;

  if (pathname.startsWith("/dashboard/rider")) {
    SidebarComponent = RiderSidebar;
  } else if (pathname.startsWith("/dashboard/admin")) {
    SidebarComponent = AdminSidebar;
  }

  return (
    <div className="flex relative min-h-screen w-full overflow-x-auto">
      {/* Sidebar + Overlay */}
      {activeMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setActiveMenu(false)}
        ></div>
      )}
      <div
        className={`fixed left-0 top-0 h-screen z-50 transition-all duration-300 bg-white/100 dark:bg-brand-bgdark shadow-2xl ${
          activeMenu ? "w-72" : "w-0"
        }`}
      >
        <SidebarComponent />
      </div>

      {/* Main Content */}
      <div
        className={`flex flex-col flex-1 min-h-screen w-full ${
          activeMenu ? "ml-[285px]" : "ml-0"
        } transition-all duration-300`}
      >
        {/* Header */}
        <div className="sticky top-3 w-full">
          <Header />
        </div>

        {/* Page Content */}
        <main className="pt-28 px-4 md:px-8 lg:px-12 w-full">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
