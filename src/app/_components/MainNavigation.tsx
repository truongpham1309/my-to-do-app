import { pinnedData } from "@/data/sidebar";
import Link from "next/link";
import React from "react";
import Categories from "./Categories";

const MainNavigation = () => {
   return (
      <nav className="mt-2">
         <div className="px-4 py-2">
            <h2 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Ứng dụng gần đây</h2>
            <ul className="space-y-1">
               {pinnedData.map((item, index) => {
                console.log(item)
                  return (
                     <li key={index} className="app-item">
                        <Link href={item.href} className="flex items-center px-4 py-3 text-gray-300 hover:text-white group hover:bg-gray-800 rounded-lg">
                           <span className={`w-8 h-8 mr-3 rounded flex items-center justify-center ${item.iconBg}`}>
                              <i className={`${item.icon} text-white`} />
                           </span>
                           <span className="flex-grow">{item.label}</span>
                           {item.badge && <span className={`text-xs px-2 py-1 rounded-full ${item.badgeColor}`}>{item.badge}</span>}
                        </Link>
                     </li>
                  );
               })}
            </ul>
         </div>
         <Categories />
         {/* Section: All Apps */}
         <div className="mt-6 px-4 py-2">
            <h2 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2 flex justify-between items-center">
               <span>Tất cả ứng dụng</span>
               <button id="toggle-apps" className="text-gray-500 hover:text-white text-sm">
                  <i className="fas fa-chevron-down" />
               </button>
            </h2>
            <div id="apps-container">
               <ul className="grid grid-cols-2 gap-2 mt-2">
                  <li>
                     <a href="#" className="app-card block text-center p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                        <div className="w-10 h-10 mx-auto mb-2 rounded bg-indigo-500 flex items-center justify-center">
                           <i className="fas fa-envelope text-white" />
                        </div>
                        <span className="text-xs text-gray-300">Mail</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" className="app-card block text-center p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                        <div className="w-10 h-10 mx-auto mb-2 rounded bg-blue-500 flex items-center justify-center">
                           <i className="fas fa-file-alt text-white" />
                        </div>
                        <span className="text-xs text-gray-300">Tài liệu</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" className="app-card block text-center p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                        <div className="w-10 h-10 mx-auto mb-2 rounded bg-green-500 flex items-center justify-center">
                           <i className="fas fa-table text-white" />
                        </div>
                        <span className="text-xs text-gray-300">Bảng tính</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" className="app-card block text-center p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                        <div className="w-10 h-10 mx-auto mb-2 rounded bg-red-500 flex items-center justify-center">
                           <i className="fas fa-images text-white" />
                        </div>
                        <span className="text-xs text-gray-300">Hình ảnh</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" className="app-card block text-center p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                        <div className="w-10 h-10 mx-auto mb-2 rounded bg-yellow-500 flex items-center justify-center">
                           <i className="fas fa-sticky-note text-white" />
                        </div>
                        <span className="text-xs text-gray-300">Ghi chú</span>
                     </a>
                  </li>
                  <li>
                     <a href="#" className="app-card block text-center p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                        <div className="w-10 h-10 mx-auto mb-2 rounded bg-purple-500 flex items-center justify-center">
                           <i className="fas fa-wallet text-white" />
                        </div>
                        <span className="text-xs text-gray-300">Tài chính</span>
                     </a>
                  </li>
               </ul>
               <div className="text-center mt-3">
                  <button id="show-more-apps" className="text-sm text-blue-400 hover:text-blue-300">
                     Xem thêm ứng dụng
                  </button>
               </div>
            </div>
         </div>
         {/* Section: Settings Link */}
         <div className="mt-6 px-4 py-2 border-t border-gray-800">
            <a href="#" className="flex items-center px-4 py-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg">
               <i className="fas fa-cog mr-3" />
               <span>Cài đặt &amp; Tùy chọn</span>
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg">
               <i className="fas fa-question-circle mr-3" />
               <span>Trợ giúp &amp; Hỗ trợ</span>
            </a>
         </div>
      </nav>
   );
};

export default MainNavigation;
