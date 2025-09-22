import React, { useCallback, useEffect, useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { toast } from 'react-toastify';
const Hero = () => {
  const navigate=useNavigate()
  const[error,setError]=useState(false)
const [roledata,setRoleData]=useState(null)

    useEffect(()=>{
       const role=JSON.parse(localStorage.getItem("role"))
      setRoleData(role)
    },[]) 

 
    const hadelappoinment=()=>{
    
      if(roledata)
      {
        navigate('/all-doctor')
      
      }
      else{
      setError(true)
        
            toast.error("Please login to get Appoinment")
            navigate('/')
  
    
      }
    }
  return (

    <div className="px-4 md:px-18 h-full ">
      <div className="container mx-auto bg-sky-500 rounded-lg p-6 md:p-12 flex flex-col md:flex-row items-center gap-8">
        
      
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
          <p className="text-white text-4xl md:text-6xl font-bold">
            Book Appointment
            <span className="block text-2xl md:text-3xl mt-2">
              With Trusted Doctors
            </span>
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <img
              src="https://prescripto.vercel.app/assets/group_profiles-BCL6AVF5.png"
              alt="Doctors"
              className="w-3/4 md:w-auto rounded-lg"
            />
            <p className="text-white text-lg md:text-base max-w-md">
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
          </div>

      <button onClick={hadelappoinment}  className="bg-white text-zinc-900 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition w-48 mx-auto md:mx-0">
            Book Appointment
           </button>
        </div>

      
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="https://prescripto.vercel.app/assets/header_img-DhAi3lLA.png"
            alt="Doctor Illustration"
            className="w-full md:w-auto max-w-sm "
          />
        </div>
      </div>
     
    </div>
  )
}

export default Hero
