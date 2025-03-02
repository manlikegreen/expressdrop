// import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useEffect } from "react";
import { useStateContext } from "../Contexts/ContextProvider";
import Search from "../Search";
import UserProfile from "./UserProfile";
// import { Tooltip } from "react-tooltip";

interface HeaderButtonProps {
  title: string;
  customFunc: () => void; // Adjust the function signature if needed
  icon: React.ReactNode | null;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ customFunc, icon }) => (
  <button
    type="button"
    onClick={customFunc}
    className="relative text-3xl p-3 rounded-full"
  >
    <span className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
    {icon}
  </button>
);

const Header = () => {
  const {
    // activeMenu,
    setActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize !== undefined && screenSize <= 1100) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize, setActiveMenu]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative w-full">
      {/* Menu Button */}

      <HeaderButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        icon={<AiOutlineMenu className="pt-2" />}
      />

      <Search />

      {/* Profile Section */}
      <div className="flex items-center gap-4">
        <div
          className="flex items-center gap-2 cursor-pointer p-4 rounded-lg pe-10"
          onClick={() => handleClick("userProfile")}
        >
          {/* Profile Icon */}
          <span className="w-10 h-10 flex justify-center items-center rounded-full font-bold bg-brand">
            E
          </span>
          {/* Greeting */}
          <p>
            <span className="text-[1rem]">Hi, </span>
            <span className="text-[1rem] font-semibold">Eric</span>
          </p>
          {/* Dropdown Arrow */}
          <MdKeyboardArrowDown className="text-[1rem]" />
        </div>
      </div>

      {/* Render UserProfile Conditionally */}
      {isClicked.userProfile && (
        <div className="absolute top-20 right-10 bg-brand-bg p-4 shadow-2xl rounded-lg dark:bg-brand-dark dark:shadow-[0_0_10px_0_#fff]">
          <UserProfile />
        </div>
      )}
    </div>
  );
};

export default Header;
