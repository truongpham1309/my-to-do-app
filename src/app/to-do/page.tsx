import React from "react";

const TodoAppNext = () => {
   return (
      <>
         {/* Filters */}
         <div className="bg-white rounded-lg shadow-md p-4 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
               <h2 className="text-lg font-semibold text-gray-700 mb-4 md:mb-0">Bộ lọc</h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Mức độ quan trọng</label>
                     <select className="w-full border border-gray-300 rounded-md shadow-sm py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">Tất cả</option>
                        <option value="high">Cao</option>
                        <option value="medium">Trung bình</option>
                        <option value="low">Thấp</option>
                     </select>
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Trạng thái</label>
                     <select className="w-full border border-gray-300 rounded-md shadow-sm py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">Tất cả</option>
                        <option value="completed">Đã hoàn thành</option>
                        <option value="pending">Chưa hoàn thành</option>
                        <option value="overdue">Quá hạn</option>
                     </select>
                  </div>
                  <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Tag</label>
                     <select className="w-full border border-gray-300 rounded-md shadow-sm py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <option value="">Tất cả</option>
                        <option value="work">Công việc</option>
                        <option value="personal">Cá nhân</option>
                        <option value="urgent">Khẩn cấp</option>
                        <option value="study">Học tập</option>
                     </select>
                  </div>
               </div>
            </div>
         </div>
         {/* Main Table */}
         <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="overflow-x-auto">
               <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                     <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                           STT
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                           Tên công việc
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                           Ngày bắt đầu
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                           Tag
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                           Mức độ quan trọng
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                           Trạng thái
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                           Tiến độ
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                           Thao tác
                        </th>
                     </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                     {/* Task 1 */}
                     <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <div className="flex items-center">
                              <div>
                                 <div className="text-sm font-medium text-gray-900">Hoàn thành báo cáo doanh số quý 1</div>
                                 <div className="text-sm text-gray-500">Hạn: 15/05/2025</div>
                              </div>
                           </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10/05/2025</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Công việc</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              <i className="fas fa-exclamation-circle mr-1" /> Cao
                           </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <div className="flex items-center">
                              <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                              <span className="ml-2 text-sm text-gray-500">Chưa hoàn thành</span>
                           </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Đang thực hiện</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                           <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-900">
                                 <i className="fas fa-edit" />
                              </button>
                              <button className="text-red-600 hover:text-red-900">
                                 <i className="fas fa-trash" />
                              </button>
                           </div>
                        </td>
                     </tr>
                     {/* Task 2 */}
                     <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <div className="flex items-center">
                              <div>
                                 <div className="text-sm font-medium text-gray-900">Nghiên cứu thị trường mới</div>
                                 <div className="text-sm text-gray-500">Hạn: 20/05/2025</div>
                              </div>
                           </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">05/05/2025</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">Nghiên cứu</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                              <i className="fas fa-exclamation-triangle mr-1" /> Trung bình
                           </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <div className="flex items-center">
                              <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                              <span className="ml-2 text-sm text-gray-500">Chưa hoàn thành</span>
                           </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Đang thực hiện</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                           <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-900">
                                 <i className="fas fa-edit" />
                              </button>
                              <button className="text-red-600 hover:text-red-900">
                                 <i className="fas fa-trash" />
                              </button>
                           </div>
                        </td>
                     </tr>
                     {/* Task 3 (Completed and On time) */}
                     <tr className="bg-green-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <div className="flex items-center">
                              <div>
                                 <div className="text-sm font-medium text-gray-500 line-through">Chuẩn bị slide thuyết trình</div>
                                 <div className="text-sm text-gray-500">Hạn: 08/05/2025</div>
                              </div>
                           </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">03/05/2025</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Thuyết trình</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              <i className="fas fa-info-circle mr-1" /> Thấp
                           </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <div className="flex items-center">
                              <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                              <span className="ml-2 text-sm text-green-600">Đã hoàn thành</span>
                           </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              <i className="fas fa-check-circle mr-1" /> Đúng hạn
                           </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                           <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-900">
                                 <i className="fas fa-edit" />
                              </button>
                              <button className="text-red-600 hover:text-red-900">
                                 <i className="fas fa-trash" />
                              </button>
                           </div>
                        </td>
                     </tr>
                     {/* Task 4 (Completed but Late) */}
                     <tr className="bg-yellow-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <div className="flex items-center">
                              <div>
                                 <div className="text-sm font-medium text-gray-500 line-through">Phỏng vấn ứng viên</div>
                                 <div className="text-sm text-gray-500">Hạn: 01/05/2025</div>
                              </div>
                           </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">28/04/2025</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Nhân sự</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              <i className="fas fa-exclamation-circle mr-1" /> Cao
                           </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <div className="flex items-center">
                              <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                              <span className="ml-2 text-sm text-green-600">Đã hoàn thành</span>
                           </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                              <i className="fas fa-exclamation-triangle mr-1" /> Trễ hạn
                           </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                           <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-900">
                                 <i className="fas fa-edit" />
                              </button>
                              <button className="text-red-600 hover:text-red-900">
                                 <i className="fas fa-trash" />
                              </button>
                           </div>
                        </td>
                     </tr>
                     {/* Task 5 (Overdue) */}
                     <tr className="bg-red-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <div className="flex items-center">
                              <div>
                                 <div className="text-sm font-medium text-gray-900">Nộp báo cáo thuế</div>
                                 <div className="text-sm text-red-500 font-medium">Hạn: 01/05/2025 (Quá hạn)</div>
                              </div>
                           </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">25/04/2025</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800">Tài chính</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              <i className="fas fa-exclamation-circle mr-1" /> Cao
                           </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <div className="flex items-center">
                              <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                              <span className="ml-2 text-sm text-red-500 font-medium">Quá hạn</span>
                           </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              <i className="fas fa-times-circle mr-1" /> Quá hạn
                           </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                           <div className="flex space-x-2">
                              <button className="text-blue-600 hover:text-blue-900">
                                 <i className="fas fa-edit" />
                              </button>
                              <button className="text-red-600 hover:text-red-900">
                                 <i className="fas fa-trash" />
                              </button>
                           </div>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
         {/* Pagination */}
         <div className="flex items-center justify-between">
            <div className="flex-1 flex justify-between sm:hidden">
               <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Trước
               </a>
               <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Tiếp
               </a>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
               <div>
                  <p className="text-sm text-gray-700">
                     Hiển thị
                     <span className="font-medium">1</span>
                     đến
                     <span className="font-medium">5</span>
                     trong số
                     <span className="font-medium">12</span>
                     công việc
                  </p>
               </div>
               <div>
                  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                     <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span className="sr-only">Trang trước</span>
                        <i className="fas fa-chevron-left" />
                     </a>
                     <a href="#" aria-current="page" className="z-10 bg-blue-50 border-blue-500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                        1
                     </a>
                     <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                        2
                     </a>
                     <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
                        3
                     </a>
                     <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">...</span>
                     <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                        8
                     </a>
                     <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span className="sr-only">Trang tiếp</span>
                        <i className="fas fa-chevron-right" />
                     </a>
                  </nav>
               </div>
            </div>
         </div>
      </>
   );
};

export default TodoAppNext;
