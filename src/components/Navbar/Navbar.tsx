"use client";

import Link from "next/link";
import React, { ReactNode } from "react";
import { MdMenu } from "react-icons/md";
import Image from "next/image";
import logo from "@/assets/Logo/android-chrome-512x512.png";
import ResponsiveMenu from "./ResponsiveNav";
// import ResponsiveMenu from "./ResponsiveMenu";

interface NavbarProps {
  children?: ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <nav className="bg-brand-secondary">
        <div className="container flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex gap-2 text-brand-bg">
            <Image src={logo} alt="" width={50} height={50} />
            <div className="flex font-bold uppercase justify-center items-center">
              <p className="text-2xl">Express Drop</p>
            </div>
          </div>
          {/* Menu/Links Section */}
          <div className="hidden lg:block text-brand-bg">
            <ul className="flex items-center gap-6">
              {Nav_Items.map((item) => (
                <li key={item.name} className="">
                  <Link
                    href={item.link}
                    className="inline-block py-1 px-3 hover:text-brand transition-all duration-500 font-medium"
                  >
                    <p>{item.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Mobile Hamburger Section */}
          <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <MdMenu className="text-4xl text-brand-bg hover:text-brand" />
          </div>

          {/* Mobile Sidebar Section */}
          <ResponsiveMenu open={isOpen} />
        </div>
      </nav>
      {children}
    </>
  );
};

interface NAV_ITEM {
  name: string;
  link: string;
  icon?: () => React.JSX.Element | null;
}

const Nav_Items: Array<NAV_ITEM> = [
  {
    name: "Home",
    link: "/",
    // icon: HomeIcon,
  },
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "Services",
    link: "/services",
    // icon: ExploreIcon,
  },
  {
    name: "Contact Us",
    link: "/contact",
    // icon: BlogIcon,
  },
  {
    name: "Dashboard",
    link: "/dashboard",
    // icon: BlogIcon,
  },
  {
    name: "Register",
    link: "/auth",
    // icon: BlogIcon,
  },
];

export default Navbar;
