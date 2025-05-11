import React from "react";

type Tprops = {
   setIsOpenSidebar: (el: boolean) => void;
   isOpenSidebar: boolean;
};

const MainContent = ({ setIsOpenSidebar, isOpenSidebar }: Tprops) => {
   return (
      <div className="flex-1 flex flex-col w-full">
         <header className="bg-white shadow-sm p-4 flex md:hidden items-center">
            <button id="mobile-toggle" onClick={() => setIsOpenSidebar(!isOpenSidebar)} className="text-gray-600 hover:text-gray-900">
               <i className="fas fa-bars text-xl" />
            </button>
            <h1 className="text-xl font-bold text-gray-800 ml-4">AppDock</h1>
         </header>
         <main className="flex-grow bg-gray-100 p-6">
            <div className="text-center py-20">
               <div className="w-20 h-20 mx-auto bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-th text-white text-3xl" />
               </div>
               <h2 className="text-3xl font-bold text-gray-800">Chào mừng đến với AppDock</h2>
               <p className="text-gray-600 mt-4 max-w-md mx-auto">Trung tâm quản lý tất cả các ứng dụng của bạn. Sử dụng sidebar để truy cập các ứng dụng yêu thích của bạn.</p>
               <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-md">Khám phá các ứng dụng</button>
            </div>
         </main>
      </div>
   );
};

export default MainContent;
