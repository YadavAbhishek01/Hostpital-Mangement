import React from "react";
import Navbar from "../Componets/Header/Navbar";
import Footer from "../Componets/Footer/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "../Admin/Componets/Sidebar/Sidebar";

const Main = () => {
  const admin = JSON.parse(localStorage.getItem("role"));

  return (
    <div className="flex flex-col min-h-screen">
   
      <Navbar />

      <div className="flex flex-1 w-full">
   
        {admin === "Admin" && (
          <aside className="w-64">
            <Sidebar />
          </aside>
        )}

     
        <main className="flex-1 px-6 py-6 overflow-y-auto mt-20">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Main;
