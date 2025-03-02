"use client";

import {
  MdHistory,
  MdOutlineCancel,
  MdOutlineCurrencyExchange,
  MdOutlineDashboard,
  MdOutlineDeliveryDining,
  MdOutlineDone,
  MdOutlineHome,
  MdOutlineMoney,
  MdOutlineNewReleases,
} from "react-icons/md";
import { useStateContext } from "../Contexts/ContextProvider";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/assets/Logo/android-chrome-512x512.png";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCancelIconClick = () => {
    console.log("Closing sidebar...");
    setActiveMenu(false);
    console.log("Sidebar state after closing:", activeMenu);
  };

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const pathname = usePathname();

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2 rounded-lg bg-brand-ash dark:bg-brand-secondary text-md m-2 hover:bg-brand-ash dark:hover:bg-brand-secondary";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2 rounded-lg dark:text-brand-ash text-md m-2 hover:bg-brand-ash dark:hover:bg-brand-secondary";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              href="/"
              onClick={handleCloseSidebar}
              className="pt-6 ps-4 flex gap-4"
            >
              <div className="flex gap-2">
                <Image src={logo} alt="" width={50} height={50} />
                <div className="flex font-bold uppercase justify-center items-center">
                  <p className="text-xl">Express Drop</p>
                </div>
              </div>
            </Link>
            <button
              type="button"
              onClick={handleCancelIconClick}
              className="text-xl p-3 rounded-full block pt-8"
            >
              <MdOutlineCancel className="hover:shadow-[0_0_10px_0_#fff] rounded-full" />
            </button>
          </div>
          <div className="mt-16">
            {SIDEBAR_ITEMS.map((item) => (
              <div key={item.title} className="m-3 mt-6">
                <p className="font-semibold flex gap-2 uppercase">
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </p>
                {item.subtitle?.map((subtitles, subtitleIndex) => (
                  <div key={subtitleIndex} className="ml-4 mt-4">
                    {/* Subtitle heading */}
                    <p className="uppercase text-sm font-semibold">
                      {subtitles.heading}
                    </p>

                    {/* Links under each heading */}
                    {subtitles.link?.map((linkItem, linkIndex) => (
                      <Link
                        href={linkItem.path?.toLowerCase() ?? "#"}
                        key={linkIndex}
                        onClick={handleCloseSidebar}
                        className={
                          pathname === linkItem.path?.toLowerCase()
                            ? activeLink
                            : normalLink
                        }
                      >
                        <span className="text-lg">{linkItem.icon}</span>
                        <span>{linkItem.name}</span>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

interface links {
  name?: string | null;
  icon?: React.ReactNode;
  path?: string;
}

interface item_subtitles {
  heading?: string | null;
  link?: links[] | null;
}

interface sidebar_item {
  title: string;
  icon?: React.ReactNode;
  subtitle?: item_subtitles[] | null;
}

const SIDEBAR_ITEMS: Array<sidebar_item> = [
  {
    title: "Dashboard",
    icon: <MdOutlineDashboard className="text-2xl" />,
    subtitle: [
      {
        link: [
          {
            name: "Home",
            icon: <MdOutlineHome className="text-2xl" />,
            path: "/dashboard/home",
          },
        ],
      },
    ],
  },
  {
    title: "Deliveries",
    icon: <MdOutlineDeliveryDining className="text-2xl" />,
    subtitle: [
      {
        heading: "Orders",
        link: [
          {
            name: "Ongoing Orders",
            icon: <MdOutlineNewReleases />,
            path: "/dashboard/ongoingorders",
          },
          {
            name: "Completed Orders",
            icon: <MdOutlineDone />,
            path: "/dashboard/completedorders",
          },
        ],
      },
      {
        heading: "Shipment History",
        link: [
          {
            name: "History",
            icon: <MdHistory />,
            path: "/dashboard/shipmenthistory",
          },
        ],
      },
    ],
  },
  {
    title: "Payment",
    icon: <MdOutlineMoney className="text-2xl" />,
    subtitle: [
      {
        link: [
          {
            name: "Payment",
            icon: <MdOutlineCurrencyExchange className="text-xl" />,
            path: "/dashboard/payment",
          },
        ],
      },
    ],
  },
];

export default Sidebar;
