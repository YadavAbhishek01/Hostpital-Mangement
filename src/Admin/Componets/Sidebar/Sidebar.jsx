import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
const Sidebar = () => {
  const [isActive,setIsActive]=useState(true)
  return (
    <div className="w-64 bg-zinc-50 shadow-md py-6 flex flex-col p-4 h-[calc(100vh-64px)] sticky top-[80px] mt-20">
      <nav className="flex flex-col gap-3 text-gray-600 text-base ">
        <NavLink to={"/"} className={({ isActive }) =>
                    `px-3 py-1 rounded-lg font-medium transition ${
                      isActive
                        ? "text-white bg-sky-500"
                        : "text-gray-600 hover:text-sky-500"
                    }`
                  }>
          {" "}
          <div className="flex items-center   hover:text-sky-600 transition justify-center">
            {/* <LuLayoutDashboard /> */} 
            <img src="https://img.icons8.com/?size=100&id=S5D5w5vFLhYp&format=png&color=000000"  className="w-8" alt="" />
            <p className="cursor-pointer px-3 py-2 rounded-md ">
              Dashboard
            </p>
          </div>
        </NavLink>

        <NavLink to={"/all-appointment"} className={({ isActive }) =>
                    `px-3 py-1 rounded-lg font-medium transition ${
                      isActive
                        ? "text-white bg-sky-500"
                        : "text-gray-600 hover:text-sky-500"
                    }`
                  }>
     
          <div className="flex items-center hover:text-sky-600 transition  justify-center">
           <img src="https://img.icons8.com/?size=100&id=QTADNrdh5I0o&format=png&color=000000" alt=""  className="w-8"/>
          <p className="cursor-pointer px-3 py-2 rounded-md">
            Appointments
          </p>
          </div>
         
        </NavLink>
        <NavLink to={"/add-doctor"} className={({ isActive }) =>
                    `px-3 py-1 rounded-lg font-medium transition ${
                      isActive
                        ? "text-white bg-sky-500"
                        : "text-gray-600 hover:text-sky-500"
                    }`
                  }>
          {" "}
          <div className="flex items-center hover:text-sky-600 transition  justify-center">
            <img src="https://img.icons8.com/?size=100&id=CMoTVZV8TzBH&format=png&color=000000" alt=""  className="w-8"/>
               <p className="cursor-pointer px-5 py-2 rounded-md ">
            Add Doctor
          </p>
          </div>
       
        </NavLink>
        <NavLink to={"/doctor-list"} className={({ isActive }) =>
                    `px-3 py-1 rounded-lg font-medium transition ${
                      isActive
                        ? "text-white bg-sky-500"
                        : "text-gray-600 hover:text-sky-500"
                    }`
                  }>
        <div  className="flex items-center hover:text-sky-600 transition  justify-center">
          <img src="https://img.icons8.com/?size=100&id=InPEs3rVsarN&format=png&color=000000" alt="" className="w-8" />
           <p className="cursor-pointer px-5 py-2 rounded-md ">
            Doctor List
          </p>
        </div>
         
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
