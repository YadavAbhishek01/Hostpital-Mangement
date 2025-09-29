import React, { useEffect, useState } from 'react'
import { FaRegUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Profilepage = () => {
  const navigate=useNavigate()
  const [profiledata,setProfileData]=useState([])
  const [singupData,setSignupData]=useState([])
  const [currentuserprofileData,setCurrentuserprofileDdata]=useState([])
  useEffect(()=>{
  
       const data=JSON.parse(localStorage.getItem("LoginUser"))
       setProfileData(data)
       setSignupData(JSON.parse(localStorage.getItem("singupData")))
   
  },[])
 
  
  useEffect(()=>{
   const user=singupData.filter((user)=>user.Email===profiledata)
  setCurrentuserprofileDdata(user)
  },[singupData,profiledata])

  
  return (
    <>
   <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 flex-col">
  <div className="bg-zinc-200 w-full md:w-3/5 rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center gap-6">
    

   


    <div className="flex-1 flex flex-col gap-4 w-[100%]">
      {currentuserprofileData.map((user, id) => (
        <div key={id} className="bg-white p-4 rounded-lg shadow-md w-full">
       
        <div className="flex-shrink-0">
      <img src={user.Image} alt=""  className='rounded-full w-20'/>
    </div>
          <h1 className="text-2xl font-bold text-gray-700 capitalize">{user.FullName}</h1>
          <p className="text-gray-500">{user.Email}</p>


          <div className="mt-2 text-gray-600 flex justify-between flex-col gap-3" >
            <p className='capitalize flex items-center '><FaLocationDot className='text-red-500 text-2xl mr-2'/>{user.Address} </p>
            <div className='flex items-center'>
              <FaPhoneAlt className='text-xl mr-2'/>
                {user.Phone.length===10 ? <span className=''>+91-</span> :''}
            <p className='flex items-center justify-centers'>{user.Phone}</p>
            </div>
          
          </div>

        
          <div className="mt-4 border-t border-gray-200 pt-3 flex flex-col md:flex-row gap-6">
            <div>
              <p className="text-gray-500 font-semibold">Basic Information</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 text-gray-600">
              <p>Gender:{user.Gender}</p>
              <p>Birthday:{user.Birthdate} </p>
            </div>
          </div>
         <div className='mt-5'>
            <button className='flex items-center bg-sky-500 px-5 py-2 rounded-full' onClick={()=> navigate(`/edit-profile/${user.id}`)}>Edit Details</button>
  </div>
        </div>
      ))}
    </div>
    
  </div>
   
</div>

</>

  )
}

export default Profilepage
