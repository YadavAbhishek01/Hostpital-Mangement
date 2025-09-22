// import Alert from "@mui/material/Alert";
import React, { use, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import BasicAlerts from "../Componets/Succesmessage/Alerts";
// import * as React from 'react';
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";

function Signup() {
  const navigate = useNavigate();
  const [signupdata, setSignData] = useState([]);
  const [input, setInput] = useState("");
  // const [CreateaccountData,setcreateAccountData]=useState()

  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [Address, setAddress] = useState("");
  const [Phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [Birthdate, setBirthdate] = useState("");
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(false);
  const [id,setID]=useState(null)
  const max=8;
  useEffect(() => {
    const exitingdata = JSON.parse(localStorage.getItem("singupData")) || [];
    setSignData(exitingdata);
  
  }, []);
  const handlerSubmit = (e) => {
     
    e.preventDefault(); 
  
    if (password !== confirmpassword) {
    
     toast.error("Password && Confirm-Password not match")
     setError(true)
      return;
    }
    if(password.length!==max)
    {
      setError(true)
      return;
    }
   
    const user = {
      // id:Math.random().toString(36).substr(2, 9) + Date.now().toString(36),
      id:nanoid(),
      FullName: fullname,
      Email: email.toLowerCase(),
      Password: password,
      Confirm_Password: confirmpassword,
      Phone:Phone,
      Gender:gender,
      Address:Address.toUpperCase(),
      Birthdate:Birthdate
    };
    setSignData((prev) => {
      const updateddata = [...prev, user];
      localStorage.setItem("singupData", JSON.stringify(updateddata));
      return updateddata;
    });
    toast.success("Signup Succefully!")

    setSubmit(true);
    setError(false);

    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setBirthdate('')
    setAddress('')
    setGender('')
    setPhone('')
    navigate('/login')

  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
        {submit && <BasicAlerts />}
       
     
        <form onSubmit={handlerSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Full Name</label>
            {error?   <span className="text-red-500 text-sm">Write the Full Name in Camel Case example-:"Jonh Deo"</span> :''}
         
             
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your full name"
              required
            />
          
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">Email</label>
            <input
              value={email.toLowerCase()}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">Password</label>
            {error ? <span className="text-red-500">Password must be 8 character</span>:" "}
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value) }
              type="password"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your password"
              required
              maxLength={16}
           
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 font-semibold">Confirm Password</label>
            <input
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Confirm your password"
              required
            />
            {error ? <span className="text-red-500"> Confirm-Password not match</span> :"" }
           
          </div>
          <div className="mb-6">
            <label className="block mb-1 font-semibold">Address</label>
            <textarea
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
            
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Confirm your password"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 font-semibold">Phone no:</label>
            <input
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
             maxLength={10}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="91+ 1234567890"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 font-semibold">Gender</label>
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
              checked={gender==="male"}
                 onChange={(e) => setGender(e.target.value)}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  required
                />
                <span>Male</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                   checked={gender==="female"}
                    onChange={(e) => setGender(e.target.value)}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  required
                />
                <span>Female</span>
              </label>
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-1 font-semibold">Birthdate</label>
            <input
              type="date"
              value={Birthdate}
              onChange={(e)=>setBirthdate(e.target.value)}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          >
            Sign Up
          </button>
        </form>

        <p
          onClick={() => {
            navigate("/login");
          }}
          className="mt-4 text-center text-gray-500 text-sm"
        >
          Already have an account?{" "}
          <span className="text-blue-500 cursor-pointer">Login</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
