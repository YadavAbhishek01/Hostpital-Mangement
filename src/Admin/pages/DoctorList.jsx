import React, { useContext, useEffect, useState } from 'react'
import DoctorContext from '../../contextApi/DoctorContext'
import { Link, useNavigate } from 'react-router-dom'

const DoctorList = () => {
    // const {doctordata}=useContext(DoctorContext)
    const doctordata=JSON.parse(localStorage.getItem('DoctorData')) || []
    const [latestdoctor,setLatestDoctor]=useState([])
    const naviget=useNavigate()
    if(!localStorage.getItem('DoctorData'))
    {
      naviget('/login/:admin')
    }
    const handeldelete=(id)=>{
      if(window.confirm("Are you Sure to delete "))
      {
         const deletedoctor=doctordata.filter((doc)=>doc.id!==id)
      setLatestDoctor(deletedoctor)
      localStorage.setItem("DoctorData",JSON.stringify(deletedoctor))
      }
     
    }
  return (
       <div className="container mx-auto px-4 py-8">

      <div className=" relative  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        { doctordata && doctordata.length >0 ?( doctordata?.map((item, i) => (
        <div
            key={i}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden  cursor-pointer"
          >
         
            <img
              src={item.image}
              alt={item.name}
              className=" w-[100%] h-80 object-cover bg-gray-100 hover:shadow-xl transform-3d"
            />
          
         
            <div className="p-4 text-center relative ">
              <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
              <p className="text-sm text-indigo-600 font-medium">{item.specialty}</p>
              <p className="text-gray-500 text-sm mt-1">{item.experience}</p>
              <p className="text-gray-700 font-semibold mt-2">
                ${item.appointmentFees}{" "}
                <span className="text-sm text-gray-500">/ appointment</span>
              </p>

         
              <span
                className={`mt-3 inline-block px-3 py-1 rounded-full text-xs font-bold ${
                  item.isActive ? "bg-green-100 text-green-500" : "bg-red-100 text-red-500"
                }`}
              >
                
                {item.isActive ? "Available" : "Not Available"}
               
              </span>
            
              <div className='flex  items-center justify-center mt-5'>
               <Link to={`edit-doctordetails/${item.id}`}><button className='bg-sky-500 py-1 px-3 rounded-2xl hover:bg-sky-400'>Edit Details</button></Link>
                 <button className='bg-red-600  hover:text-white py-1 px-3 rounded-2xl ml-1' onClick={()=>handeldelete(item.id)}>Delete</button>
              </div>
               
                
            </div>
              
          </div>
        ))): (<div>
          <p>Doctor Not Availabel</p>
        </div>)}
       
      </div>
    </div>
  )
}

export default DoctorList
