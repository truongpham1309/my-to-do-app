import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
   title: "To do App",
   description: "Create a to do app with Next.js",
};
const LayoutTodoApp = ({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) => {
   return (
      <div className="container mx-auto px-4 py-8">
         <meta charSet="UTF-8" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
         <Header />
         {children}
         <Footer />
      </div>
   );
};

export default LayoutTodoApp;
