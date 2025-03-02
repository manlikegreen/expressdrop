import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import HomeIcon from "../Icons/HomeIcon";
import DashboardIcon from "../Icons/DashboardIcon";
import UserIcon from "../Icons/UserIcon";
import Contact from "../Icons/Contact";
import Services from "../Icons/Services";
import About from "../Icons/About";

interface ResponsiveMenuProps {
  open: boolean;
}

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ open }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full h-auto z-20"
          >
            <div className="bg-brand py-10 m-6 rounded-3xl">
              <ul>
                {Nav_Items.map((item) => (
                  <li key={item.name} className="text-center">
                    <Link
                      href={item.link}
                      className="inline-block py-1 px-3 hover:text-brand-bg transition-all duration-500 font-medium"
                    >
                      <div className="flex gap-2">
                        <div>{item.icon({})}</div>
                        <p>{item.name}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

interface NAV_ITEM {
  name: string;
  link: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
}

const Nav_Items: Array<NAV_ITEM> = [
  {
    name: "Home",
    link: "/",
    icon: HomeIcon,
  },
  {
    name: "About Us",
    link: "/about",
    icon: About,
  },
  {
    name: "Services",
    link: "/services",
    icon: Services,
  },
  {
    name: "Contact Us",
    link: "/contact",
    icon: Contact,
  },
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: DashboardIcon,
  },
  {
    name: "Register",
    link: "/auth",
    icon: UserIcon,
  },
];

export default ResponsiveMenu;
