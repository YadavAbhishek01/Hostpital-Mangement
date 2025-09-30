import React, { useEffect, useState } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { toast } from "react-toastify";
import DraggableDialog from "../DraggableDialog";


        
const Navbar = () => {
  const navigate = useNavigate();
    const [open, setOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [getrole, setRole] = useState("");
  const [toggel, settoggel] = useState(false);
  const [userinfo, setUserInfo] = useState([]);
  const [logindata, setLoginData] = useState("");
  const [CurrentLogin, setCurrentLogin] = useState([]);
  const [CurrentAdmin, setCurrentAdmin] = useState(null);
  const [Admins, setAdmis] = useState([]);
  const [adminname, setAdminName] = useState(null);
  const [isActive, setIsActive] = useState(true);
  const Admin = "admin";
  useEffect(() => {
    const roleData = JSON.parse(localStorage.getItem("role"));
    const userloginData = JSON.parse(
      localStorage.getItem("singupData") || "[]"
    );
    const Admindata = JSON.parse(localStorage.getItem("AdminData") || "[]");
    setLoginData(JSON.parse(localStorage.getItem("LoginUser")));
    setRole(roleData);
    setUserInfo(userloginData);
    setAdmis(Admindata);
  }, []);

  useEffect(() => {
    if (userinfo.length > 0 && logindata) {
      const loginuser = userinfo.find((user) => user.Email === logindata);
      setCurrentLogin(loginuser ? [loginuser] : []);
    }
  }, [userinfo, logindata]);

  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("role"));
    setCurrentAdmin(admin);
    setAdminName(JSON.parse(localStorage.getItem("Admin")));
  }, []);

   const confirmLogout=()=>{
           if (CurrentAdmin) {
      toast.success("logout succefully");
      localStorage.removeItem("role");
      localStorage.removeItem("Admin");
      localStorage.removeItem("LoginUser");
      // setTimeout(() => {
      //   navigate("/");
      //   window.location.reload();
      // }, 1000);
       setMenuOpen(false);
    } else {
      toast.success("logout succefully");
      localStorage.removeItem("role");
      localStorage.removeItem("LoginUser");
     
    }
    setOpen(false)
     setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 1000);
    }
  const handleLogout = () => {
    setOpen(true)
    
   
   
   
  };

  const handleappoinment = () => {
  
    navigate("my-appoinment");
     setMenuOpen(false);
  };

  const admindata = Admins.find((user) => user.email === adminname);

  return (
    <>
      <div className="px-20 ">
        <nav className="w-full bg-zinc-50 shadow-md px-10  fixed top-0 z-10  left-0">
          {CurrentAdmin === "Admin" ? (
            <div className="flex items-center justify-between px-6 py-3 bg-transparent rounded-lg relative">
              <div className=" flex  justify-between items-center gap-2">
                <Link
                  to="/"
                  className="flex items-center  justify-center gap-2"
                >
                  <img
                    src="https://prescripto.vercel.app/assets/logo-BNCDj_dh.svg"
                    alt="logo"
                    className="h-8 cursor-pointer"
                  />
                </Link>
                <p className=" text-gray-700 text-center mt-2 font-medium hidden sm:inline">
                  Admin
                </p>
              </div>

              <div className="flex items-center gap-4 cursor-pointer">
                {/* <CgProfile
      className="text-3xl text-sky-500 cursor-pointer hover:text-sky-600 transition"
    /> */}
                <img src={admindata.image} alt="" className="w-10" />
                <p className="text-gray-500">{admindata.name}</p>
                <button
                  className="bg-sky-500 px-5 py-1 rounded-2xl text-white hover:bg-red-500  cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between px-6 py-3 cursor-pointer">
              <Link to="/" className="flex items-center gap-2">
                <img
                  src="https://prescripto.vercel.app/assets/logo-BNCDj_dh.svg"
                  alt="logo"
                  className="h-8"
                />
              </Link>

              <div className=" relative hidden md:flex items-center gap-6 px-10">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `px-3 py-1 rounded-lg font-medium transition ${
                      isActive
                        ? "text-white bg-sky-500"
                        : "text-gray-600 hover:text-sky-500"
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/all-doctor"
                  
                  className={({ isActive }) =>
                    `px-3 py-1 rounded-lg font-medium transition ${
                      isActive
                        ? "text-white bg-sky-500"
                        : "text-gray-600 hover:text-sky-500"
                    }`
                  }
                
                >
                  All Doctor
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `px-3 py-1 rounded-lg font-medium transition ${
                      isActive
                        ? "text-white bg-sky-500"
                        : "text-gray-600 hover:text-sky-500"
                    }`
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `px-3 py-1 rounded-lg font-medium transition ${
                      isActive
                        ? "text-white bg-sky-500"
                        : "text-gray-600 hover:text-sky-500"
                    }`
                  }
                >
                  Contact Us
                </NavLink>

                {getrole === "User" ? (
                  <>
                    {CurrentLogin.map((user, ind) => (
                      <div
                        key={ind}
                        className="flex items-center justify-between"
                      >
                        {!user.Image ? (
                          <CgProfile
                            onClick={() => settoggel((prev) => !prev)}
                            className="text-2xl"
                          />
                        ) : (
                          <img
                            src={user.Image}
                            alt=""
                            className="w-10 rounded-full"
                            onClick={() => settoggel((prev) => !prev)}
                          />
                        )}

                        <p className=" flex items-center justify-center gap-2 capitalize">
                          👋 {user.FullName}
                        </p>
                      </div>
                    ))}
                  </>
                ) : (
                  <div className="cursor-pointer">
                    <button
                      className="bg-sky-400 text-black py-1 px-6 text-sm rounded-2xl hover:bg-sky-500"
                      onClick={() => navigate("/signup")}
                    >
                      Create Account
                    </button>
                    <button
                      className="bg-zinc-200 text-black py-1 px-6 text-sm rounded-xl ml-3 hover:bg-zinc-100"
                      onClick={() => navigate(`/login/${Admin}`)}
                    >
                      Admin Dashboard
                    </button>
                  </div>
                )}
                {toggel && (
                  <div className="absolute top-12 right-20 w-40 bg-white shadow-lg rounded-md border border-gray-200 flex flex-col text-sm z-10" onClick={()=>  settoggel((prev)=>!prev)}>
                    <p
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        navigate("/profile");
                        
                      }}
                    >
                      My Profile
                    </p>
                    <p
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={handleappoinment}
                    >
                      My Appointments
                    </p>
                    <p
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                      onClick={handleLogout}
                    >
                      Logout
                    </p>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}

              <button
                className="md:hidden text-2xl text-zinc-700"
                onClick={() => setMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <MdClose /> : <MdMenu />}
              </button>
            </div>
          )}

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden flex flex-col items-center gap-4 py-6 bg-white border-t shadow-lg animate-slide-down relative">
              {/* Nav Links */}
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-500 font-medium"
              >
                Home
              </Link>
              <Link
                to="/all-doctor"
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-500 font-medium"
              >
                All Doctors
              </Link>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-500 font-medium"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-500 font-medium"
              >
                Contact Us
              </Link>

              {/* User Section */}
              {getrole === "User" ? (
                CurrentLogin.map((user, ind) => (
                  <div key={ind} className="flex items-center gap-3 mt-2 cursor-pointer">
                    {!user.Image ? (
                      <CgProfile
                        onClick={() => settoggel((prev) => !prev)}
                        className="text-3xl text-sky-500 cursor-pointer hover:text-sky-600"
                      />
                    ) : (
                      <img
                        src={user.Image}
                        alt="Profile"
                        className="w-12 h-12 rounded-full border border-gray-300 cursor-pointer hover:scale-105 transition"
                        onClick={() => settoggel((prev) => !prev)}
                      />
                    )}

                    <p className="text-gray-700 font-medium flex items-center gap-1">
                      👋 {user.FullName}
                    </p>
                  </div>
                ))
              ) : (
                <button
                  className="bg-sky-500 text-white font-semibold py-2 px-6 rounded-xl hover:bg-sky-600 transition"
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/login");
                  }}
                >
                  Create Account
                </button>
              )}
              <button  className="bg-gray-400 px-5 py-1 rounded-lg text-white"    onClick={() => {
                    setMenuOpen(false);
                    navigate(`/login/${Admin}`);
                  }} >Admin Dashboard</button>
              {/* Dropdown Menu */}
              {toggel && (
                <div className="absolute top-28 right-6 w-44 bg-white shadow-xl rounded-xl border border-gray-200 flex flex-col text-sm z-20 overflow-hidden">
                  <p
                    className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      navigate("/profile");
                       setMenuOpen(false);
                      settoggel(false);
                    }}
                  >
                    My Profile
                  </p>
                  <p
                    className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                    onClick={handleappoinment}
                    
                  >
                    My Appointments
                  </p>
                  <p
                    className="px-4 py-3 hover:bg-red-50 cursor-pointer text-red-500 font-medium"
                    onClick={handleLogout}
                  >
                    Logout
                  </p>
                </div>
              )}
            </div>
          )}
        </nav>
      </div>
      {<DraggableDialog
     open={open}
        onClose={() => setOpen(false)}
        onConfirm={confirmLogout}
        title="Logout Confirmation"
        message="Are you sure you want to Logout?"
     submitBtn={"Logout"} />}
    </>
  );
};

export default Navbar;
