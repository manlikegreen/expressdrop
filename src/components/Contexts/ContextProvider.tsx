"use client";

import React, { createContext, useContext, useState } from "react";

interface StateContextType {
  activeMenu: boolean | string | number;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isClicked: { userProfile: boolean };
  setIsClicked: React.Dispatch<React.SetStateAction<{ userProfile: boolean }>>;
  handleClick: (clicked: keyof typeof initialState) => void;
  screenSize: number | undefined; // Assuming screen size is a number
  setScreenSize: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const StateContext = createContext<StateContextType | undefined>(undefined);

const initialState = {
  userProfile: false,
};

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeMenu, setActiveMenu] = useState<boolean>(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const handleClick = (clicked: keyof typeof initialState) => {
    setIsClicked((prevState) => ({
      ...prevState,
      [clicked]: !prevState[clicked],
    }));
  };

  const [screenSize, setScreenSize] = useState<number | undefined>(undefined);

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error("useStateContext must be used within a ContextProvider");
  }

  return context;
};
