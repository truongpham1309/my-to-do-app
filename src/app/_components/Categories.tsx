import { appData } from "@/data/sidebar";
import { useState } from "react";

const Categories = () => {
   const [isOpencategories, setIsOpenCategories] = useState(false);
   const [selectedItem, setSelectedItem] = useState<number>(0);
   
   return (
      <div className="mt-6 px-4 py-2">
         <h2 onClick={() => setIsOpenCategories(!isOpencategories)} className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2 flex justify-between items-center">
            <span>Danh mục</span>
            <button id="toggle-categories" className="text-gray-500 hover:text-white text-sm">
               <i className={`fas ${isOpencategories ? "" : "-rotate-90"} fa-chevron-down ease-in-out duration-300`} />
            </button>
         </h2>
         <div id="categories-container" className={`transition-all duration-300 ${isOpencategories ? "max-h-screen" : "max-h-0 overflow-hidden"}`}>
            <ul className="space-y-1">
               {appData.map((item, index) => (
                  <li key={index}>
                     <button onClick={() => setSelectedItem(item.id === selectedItem ? 0 : item.id)} className="category-btn w-full text-left flex items-center justify-between px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg">
                        <div className="flex items-center">
                           <i className={`${item.icon} ${item.iconBg} mr-3`} />
                           <span>{item.label}</span>
                        </div>
                        <span className="text-gray-500 text-sm transition-transform duration-200">
                           <i className={`fas fa-chevron-right ease-in-out duration-200 ` + (selectedItem === item.id ? "rotate-90" : " ")} />
                        </span>
                     </button>
                     <ul className={`subcategory ml-5 mt-1 space-y-1 ` + (selectedItem === item.id ? " " : " hidden")}>
                        {item.children.map((child) => (
                            <li key={child.id} >
                                <a href="#" className="flex items-center px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg">
                                    <i className={`${child.icon} ${child.iconBg} mr-3 text-xs`} />
                                    <span>{child.label}</span>
                                </a>
                            </li>
                        ))}
                     </ul>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};

export default Categories;
