import React from "react";
import HeaderSideBar from "./HeaderSideBar";
import MainNavigation from "./MainNavigation";

type TProps = {
   isOpenSidebar: boolean;
   setIsOpenSidebar: (isOpen: boolean) => void;
};

const SideBar = ({ isOpenSidebar, setIsOpenSidebar }: TProps) => {
   return (
      <aside id="sidebar" className={`bg-gray-900 text-white w-64 min-h-screen overflow-y-auto md:translate-x-0 transition-all duration-300 ease-in-out ${isOpenSidebar ? "-translate-x-full" : ""} `}>
         <HeaderSideBar isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />
         {/* Main Navigation */}
         <MainNavigation />
      </aside>
   );
};

export default SideBar;
