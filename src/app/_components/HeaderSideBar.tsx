import React from "react";

type TProps = {
   isOpenSidebar: boolean;
   setIsOpenSidebar: (isOpen: boolean) => void;
};

const HeaderSideBar = ({ isOpenSidebar, setIsOpenSidebar }: TProps) => {
   return (
      <div className="p-4 border-b border-gray-800 flex items-center justify-between">
         <div className="flex items-center space-x-2">
            <div className="bg-blue-500 rounded-lg w-8 h-8 flex items-center justify-center">
               <i className="fas fa-th text-white" />
            </div>
            <span className="font-bold text-xl">AppDock</span>
         </div>
         <button id="toggle-sidebar" onClick={() => setIsOpenSidebar(!isOpenSidebar)} className="md:hidden text-gray-400 hover:text-white">
            <i className="fas fa-times" />
         </button>
      </div>
   );
};

export default HeaderSideBar;
