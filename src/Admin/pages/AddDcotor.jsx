import React, { useContext, useEffect, useState } from "react";
import DoctorContext from "../../contextApi/DoctorContext";

import { toast } from "react-toastify";
import { nanoid } from "nanoid";
const AddDoctor = () => {
    const [id,setId]=useState(null)
    const[Doctorname,setDoctorName]=useState('')
    const[Speciality,setSpeciality]=useState('')
    const[Phone,setPhone]=useState('')
    const[Experiance,setExperiance]=useState('')
    const[About,setAbout]=useState('')
    const[Fees,setFees]=useState('')
    const[image,setImage]=useState(null)
    const[Status,setStatus]=useState(false)
    const [store,setstore]=useState([])
    const [DoctoreData,setDoctorData]=useState([])

    const {doctordata}=useContext(DoctorContext)
    const [validPhone,setvalidPhone]=useState(false)
    const [phonetouch,setPhonetouch]=useState(false)
    const phoneregex=/^[6-9]\d{9}$/

    useEffect(() => {
  const stored = JSON.parse(localStorage.getItem("DoctorData"));

  if (stored && stored.length > 0) {

    setDoctorData(stored);
  } else {
  
    localStorage.setItem("DoctorData", JSON.stringify(doctordata));
    setDoctorData(doctordata);
  }
}, [doctordata]); 

    const handlesubmit=(e)=>{
        e.preventDefault();
        const isphonevalid=phoneregex.test(Phone)
        setvalidPhone(isphonevalid)
      const Id=DoctoreData.length>0 ?Number(DoctoreData[DoctoreData.length-1].id)+1:1;
        const newDoctor={
          id:nanoid(),
          name:Doctorname,
          specialty:Speciality,
          phone:Phone,
          experience:Experiance,
          appointmentFees:Fees,
          about:About,
          isActive:Status,
          image:image
        }
      
          const updatedDoctor=[...doctordata,newDoctor]
          setDoctorData(updatedDoctor)
          localStorage.setItem("DoctorData",JSON.stringify(updatedDoctor))
       setAbout('')
       setDoctorName('')
       setExperiance('')
       setFees('')
       setImage('')
       setPhone('')
       setSpeciality('')
       setStatus('')

       toast.success("Doctor added")
    }
    const handlerimage=(e)=>{
        const file=e.target.files[0];
        if(file)
        {
          const reader=new FileReader();
          reader.onloadend=()=>{
            setImage(reader.result);
          }
          reader.readAsDataURL(file)
        }
        
    } 
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        Add New Doctor
      </h2>

      <form className="space-y-5" onSubmit={handlesubmit}>
        {/* Doctor Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Doctor Name
          </label>
          <input
          value={Doctorname}
          onChange={(e)=>setDoctorName(e.target.value)}
            type="text"
            placeholder="Dr. Alice Smith"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none"
            required
          />
        </div>

        {/* Specialty */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Specialty
          </label>
          <input
            value={Speciality}
          onChange={(e)=>setSpeciality(e.target.value)}
            type="text"
            placeholder="Cardiology"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Phone
          </label>
          <input
            value={Phone}
          onChange={(e)=>{setPhone(e.target.value)
           setvalidPhone(phoneregex.test(e.target.value))
          }}
            type="tel"
            maxLength={10}
            placeholder="9599562615"
            onBlur={()=>setPhonetouch(true)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none"
            required
          />
        {phonetouch && (
    validPhone
      ? <span className="text-green-500">✅ Valid Phone</span>
      : <span className="text-red-500">❌ Invalid Phone</span>
  )}
        </div>

        {/* Experience */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Experience
          </label>
          <input
            value={Experiance}
          onChange={(e)=>setExperiance(e.target.value)}
            type="text"
            placeholder="12 years"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none"
            required
          />
        </div>

        {/* Appointment Fees */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Appointment Fees ($)
          </label>
          <input
            value={Fees}
          onChange={(e)=>setFees(e.target.value)}
            type="number"
            placeholder="150"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none"
            required
          />
        </div>

        {/* About */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            About
          </label>
          <textarea
            value={About}
          onChange={(e)=>setAbout(e.target.value)}
            placeholder="Experienced cardiologist specializing in heart diseases..."
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none"
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Image URL
          </label>
          <input
          // value={image}
          onChange={handlerimage}
            type="file"
            accept="image/*"
            placeholder="https://raw.githubusercontent.com/.../doc1.png"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none"
           />
        </div>

        {/* Active Status */}
        <div className="flex items-center gap-2">
          <input type="checkbox" id="isActive" className="w-4 h-4"
          checked={Status} 
           onChange={(e)=>setStatus(e.target.checked)}/>
       
          <label htmlFor="isActive" className="text-sm text-gray-600">
            Active Doctor
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-sky-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-sky-600 transition"
        >
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;
