"use client";

import { useState } from "react";
import SideBar from "./_components/SideBar";
import MainContent from "./_components/MainContent";

export default function Home() {
   const [isOpenSidebar, setIsOpenSidebar] = useState(false);
   return (
      <div className="bg-gray-100 min-h-screen font-sans antialiased flex">
         <meta charSet="UTF-8" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
         <SideBar isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />
         <MainContent isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />
      </div>
   );
}
