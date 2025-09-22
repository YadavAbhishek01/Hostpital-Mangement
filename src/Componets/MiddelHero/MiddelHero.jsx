import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
const MiddelHero = () => {
    const[role,setRole]=useState('')
    useEffect(()=>{
        const user=JSON.parse(localStorage.getItem("role"))
        setRole(user)
    },[])
  return (
    <div className="px-4 md:px-18 h-full  mt-10">
      <div className="container relative mx-auto bg-sky-500 rounded-lg p-6 md:p-12 flex flex-col md:flex-row items-center gap-8 overflow-hidden">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
          <p className="text-white text-4xl md:text-6xl font-bold">
            Book Appointment
            <span className="block text-2xl md:text-3xl mt-2">
             With 100+ Trusted Doctors
            </span>
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            {/* <img
              src="https://prescripto.vercel.app/assets/group_profiles-BCL6AVF5.png"
              alt="Doctors"
              className="w-3/4 md:w-auto rounded-lg"
            /> */}
            <p className="text-white text-lg md:text-base max-w-md">
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
          </div>

                {role ? ( <NavLink to='/all-doctor'><button className="bg-white text-zinc-900 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition w-48 mx-auto md:mx-0">
                Book Appoinment
          </button></NavLink> ):( <NavLink to='/signup'><button className="bg-white text-zinc-900 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition w-48 mx-auto md:mx-0">
               create account
          </button></NavLink>)}
        
        </div>

     {/* Right Image */}
<div className="flex-1  flex justify-center md:justify-end mt-8 md:mt-18 px-4 overflow-hidden">
  <img
    src="https://prescripto.vercel.app/assets/appointment_img-DzbZlMsi.png"
    alt="Doctor Illustration"
    className="  w-[25%] object-contain drop-shadow-md absolute top-0 right-0 "
  />
</div>


      </div>
    </div>
  )
}

export default MiddelHero
