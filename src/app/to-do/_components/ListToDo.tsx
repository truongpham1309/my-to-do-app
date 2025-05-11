import React from "react";

const ListToDo = () => {
   return (
      <>
         <div className="px-6 py-3 flex justify-between items-center bg-gray-50 border-b">
            <div className="text-sm font-medium text-gray-500">
               <span id="tasks-count">0</span> công việc
            </div>
            <div className="flex space-x-2 text-sm">
               <button className="px-2 py-1 rounded hover:bg-gray-200 font-medium filter-btn active" data-filter="all">
                  Tất cả
               </button>
               <button className="px-2 py-1 rounded hover:bg-gray-200 font-medium filter-btn" data-filter="active">
                  Chưa hoàn thành
               </button>
               <button className="px-2 py-1 rounded hover:bg-gray-200 font-medium filter-btn" data-filter="completed">
                  Đã hoàn thành
               </button>
            </div>
         </div>
         <div className="divide-y divide-gray-100">
            <ul id="task-list" className="max-h-80 overflow-y-auto"></ul>
         </div>
      </>
   );
};

export default ListToDo;
