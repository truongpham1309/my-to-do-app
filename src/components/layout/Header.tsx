import React from "react";

const Header = () => {
   return (
      <header className="mb-8">
         <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex items-center mb-4 md:mb-0">
               <div className="bg-blue-600 p-2 rounded-lg shadow-md mr-4">
                  <i className="fas fa-clipboard-list text-white text-2xl" />
               </div>
               <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-800">TaskMaster</h1>
                  <p className="text-gray-600">Quản lý công việc hiệu quả</p>
               </div>
            </div>
            <div className="flex items-center space-x-2">
               <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                     <i className="fas fa-search text-gray-500" />
                  </span>
                  <input type="text" placeholder="Tìm kiếm công việc..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
               </div>
               <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition-colors">
                  <i className="fas fa-plus mr-2" />
                  Thêm mới
               </button>
            </div>
         </div>
      </header>
   );
};

export default Header;
