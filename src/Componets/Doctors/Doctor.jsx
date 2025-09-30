import React, { useContext, useEffect, useState } from 'react'
import DoctorContext from "../../contextApi/DoctorContext";
import { useNavigate } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';


const Doctor = () => {
  const { doctordata = [] } = useContext(DoctorContext);
  const navigate=useNavigate()
// const doctordata=JSON.parse(localStorage.getItem("DoctorData"))



  return (
    <div className="px-4 md:px-12 py-8 mt-10">
      
      {location.pathname==="/all-doctor" ? '' :(  <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Top Doctors to Book</h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>)}
    

 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  "   onClick={()=>navigate('/all-doctor')}>
        {doctordata.length===0 ?"not Doctor Availabel":''}
        {/* {location.pathname==="/all-doctor" ?   doctordata?.map((doctor, i) => (
          <div 
            key={i} 
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
         >
             <div className='flex items-center justify-center'>
              <img 
              src={doctor.image} 
              alt={doctor.name} 
              className="w-[70%]  bg-sky-200 object-center rounded-full "
            />
              </div>
            

      
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-800">{doctor.name}</h2>
              <p className="text-sm text-indigo-600 font-medium">{doctor.specialty}</p>
              <p className="text-gray-500 text-sm mt-1">{doctor.experience}</p>
              <p className="text-gray-700 font-semibold mt-2">
                ${doctor.appointmentFees} <span className="text-sm text-gray-500">/appointment</span>
              </p>

            
              <span 
                className={`mt-3 inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  doctor.isActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                }`}
              >
                {doctor.isActive ? "Available" : "Not Available"}
              </span>
            </div>
          </div>
        )):   */
          doctordata?.slice(0,8).map((doctor, i) => (
          <div 
            key={i} 
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
              <div className='flex items-center justify-center'>
              <img 
              src={doctor.image} 
              alt={doctor.name} 
              className="w-[70%]  bg-gray-100 object-center rounded-full "
            />
              </div>
        

         
            <div className="p-4 text-center ">
              <h2 className="text-lg font-semibold text-gray-800">{doctor.name}</h2>
              <p className="text-sm text-indigo-600 font-medium">{doctor.specialty}</p>
              <p className="text-gray-500 text-sm mt-1">{doctor.experience}</p>
              <p className="text-gray-700 font-semibold mt-2">
                ${doctor.appointmentFees} <span className="text-sm text-gray-500">/appointment</span>
              </p>

             
              <span 
                className={`mt-3 inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  doctor.isActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                }`}
              >
                {doctor.isActive ? "Available" : "Not Available"}
              </span>
            </div>
          </div>
        ))
        }
       
      
      </div>
      {location.pathname==='/all-doctor' ? '' :( <div className='flex items-center justify-center  mt-10'>
       <button className='bg-sky-300 py-2 px-5 rounded-2xl  cursor-pointer' onClick={()=>navigate("/all-doctor")}>View All Doctors</button>
      </div>) }
     
    </div>
  )
}

export default Doctor
