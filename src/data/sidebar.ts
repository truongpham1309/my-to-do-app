export const pinnedData = [
   {
      label: "Công việc",
      href: "/to-do",
      icon: "fas fa-tasks",
      iconBg: "bg-red-500",
      badge: "5 mới",
      badgeColor: "bg-gray-700 text-gray-300",
   },
   //    {
   //       label: "Thống kê",
   //       href: "#",
   //       icon: "fas fa-chart-pie",
   //       iconBg: "bg-purple-500",
   //       badge: "Mới",
   //       badgeColor: "bg-green-500 text-green-100",
   //    },
   //    {
   //       label: "Lịch",
   //       href: "#",
   //       icon: "fas fa-calendar",
   //       iconBg: "bg-blue-500",
   //    },
];

export const appData = [
   {
      id: 1,
      label: "Phát triển",
      icon: "fas fa-code",
      iconBg: "text-blue-400",
      children: [
         { id: 1, label: "Git", icon: "fas fa-code-branch", iconBg: "text-blue-400" },
         { id: 2, label: "Terminal", icon: "fas fa-terminal", iconBg: "text-blue-300" },
         { id: 3, label: "Database", icon: "fas fa-database", iconBg: "text-blue-200" },
      ],
   },
   {
      id: 2,
      label: "Thống kê & Phân tích",
      icon: "fas fa-chart-bar",
      iconBg: "text-green-500",
      children: [
         { id: 1, label: "Báo cáo", icon: "fas fa-chart-line", iconBg: "text-green-400" },
         { id: 2, label: "Biểu đồ", icon: "fas fa-chart-pie", iconBg: "text-green-300" },
      ],
   },
   {
      id: 3,
      label: "Nhóm & Liên lạc",
      icon: "fas fa-users",
      iconBg: "text-yellow-500",
      children: [
         { id: 1, label: "Chat", icon: "fas fa-comments", iconBg: "text-yellow-400" },
         { id: 2, label: "Cuộc họp", icon: "fas fa-video", iconBg: "text-yellow-300" },
         { id: 3, label: "Liên hệ", icon: "fas fa-user-friends", iconBg: "text-yellow-200" },
      ],
   },
   {
      id: 4,
      label: "Quản lý dự án",
      icon: "fas fa-tasks",
      iconBg: "text-red-500",
      children: [
         { id: 1, label: "Công việc", icon: "fas fa-tasks", iconBg: "text-red-400" },
         { id: 2, label: "Lịch", icon: "fas fa-calendar", iconBg: "text-red-300" },
      ],
   },
];
