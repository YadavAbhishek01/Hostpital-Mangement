import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
   
      <div>
        <button
        className="md:hidden fixed top-5  left-4 z-50 bg-sky-500 text-white p-2 rounded-md shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu  className =" "size={20} />}
      </button>
      </div>
    

   
      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-zinc-50 shadow-md py-6 px-4 flex flex-col transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:h-[calc(100vh-64px)] md:mt-20  md:top-[80px]`}
      >
        <nav className="flex flex-col gap-3 text-gray-600 text-base">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `px-3 py-1 rounded-lg font-medium transition ${
                isActive ? "text-white bg-sky-500" : "hover:text-sky-500"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center">
              <img
                src="https://img.icons8.com/?size=100&id=S5D5w5vFLhYp&format=png&color=000000"
                className="w-8"
                alt="Dashboard"
              />
              <p className="px-3">Dashboard</p>
            </div>
          </NavLink>

          <NavLink
            to={"/all-appointment"}
            className={({ isActive }) =>
              `px-3 py-1 rounded-lg font-medium transition ${
                isActive ? "text-white bg-sky-500" : "hover:text-sky-500"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center">
              <img
                src="https://img.icons8.com/?size=100&id=QTADNrdh5I0o&format=png&color=000000"
                className="w-8"
                alt="Appointments"
              />
              <p className="px-3">Appointments</p>
            </div>
          </NavLink>

          <NavLink
            to={"/add-doctor"}
            className={({ isActive }) =>
              `px-3 py-1 rounded-lg font-medium transition ${
                isActive ? "text-white bg-sky-500" : "hover:text-sky-500"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center">
              <img
                src="https://img.icons8.com/?size=100&id=CMoTVZV8TzBH&format=png&color=000000"
                className="w-8"
                alt="Add Doctor"
              />
              <p className="px-3">Add Doctor</p>
            </div>
          </NavLink>

          <NavLink
            to={"/doctor-list"}
            className={({ isActive }) =>
              `px-3 py-1 rounded-lg font-medium transition ${
                isActive ? "text-white bg-sky-500" : "hover:text-sky-500"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            <div className="flex items-center">
              <img
                src="https://img.icons8.com/?size=100&id=InPEs3rVsarN&format=png&color=000000"
                className="w-8"
                alt="Doctor List"
              />
              <p className="px-3">Doctor List</p>
            </div>
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
