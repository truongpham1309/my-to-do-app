import React from "react";

const Form = () => {
   return (
      <div className="p-6 border-b">
         <form id="todo-form" className="flex items-center space-x-2">
            <input type="text" id="task-input" className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Thêm công việc mới..." required />
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
               <i className="fas fa-plus mr-1" /> Thêm
            </button>
         </form>
      </div>
   );
};

export default Form;
