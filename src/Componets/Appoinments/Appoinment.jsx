import React, { useCallback, useEffect, useMemo, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Appoinment = ({ doctorId, filderdata,Fees }) => {
  const [value, setValue] = useState(new Date());
  const [time, setTime] = useState("10:00");
  const [msg, setMsg] = useState(false);
  const [disable, setDisable] = useState(false);
  const navigator = useNavigate();
  const [Patientsname,setPatientsName]=useState(null)
  const [Signupdata,setSignUpData]=useState([])
  const [appoinment, setAppoinment] = useState(() =>
    JSON.parse(localStorage.getItem("Appoinments") || "[]")
  );
  const formatTime = (time24) => {
    const [hourStr, minute] = time24.split(":");
    let hour = parseInt(hourStr, 10);
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    if (hour === 0) hour = 12;
    return `${hour}:${minute} ${ampm}`;
  };

  useEffect(() => {
    localStorage.setItem("Appoinments", JSON.stringify(appoinment));
  }, [appoinment]);


  useEffect(()=>{
    const patiets=JSON.parse(localStorage.getItem("LoginUser"))
    setPatientsName(patiets)
  },[])

  useEffect(()=>{
    const data=JSON.parse(localStorage.getItem("singupData"))|| []
    setSignUpData(data);
  },[])

   const Patientsdetails=Signupdata.find((user)=>user.Email===Patientsname)
   console.log(Patientsdetails)

  const handelappoinment = () => {
    const user = JSON.parse(localStorage.getItem("role"));
    if (!user) {
      window.alert("if You Want to Book Appoinment Please Login");
      navigator("/login");
    } else {
      navigator("/");
    }

   
    const calculateAge=(birthdate)=>{
      if(!birthdate)
      {
        return "-";
      }
      const today=new Date();
      const dob=new Date(birthdate);

      let age=today.getFullYear()-dob.getFullYear()
      const monthdiff=today.getMonth()-dob.getMonth()

      if(monthdiff <0 || (monthdiff ===0 && today.getDate()<dob.getDate()))
      {
        age--;
      }
      return age;
    }
    if (user) {
      const doctordatas = Array.isArray(filderdata)
        ? filderdata[0]
        : filderdata;
      const newAppointment = {
        ...doctordatas,
        Date: value.toDateString(),
        Time: formatTime(time),
        Fees:Fees[0],
        Patient_details:{
           PatientsName:Patientsdetails.FullName,
        Gender:Patientsdetails.Gender,
        Age: calculateAge(Patientsdetails.Birthdate),
        Email:Patientsdetails.Email

        }       
       
      };

      setAppoinment((prev) => [...prev, newAppointment]);

      toast.success("Appointment successfully submitted");
      navigator("/my-appoinment");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Book Your Appointment
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            Select a Date
          </h3>
          <Calendar
            onChange={setValue}
            value={value}
            className="react-calendar border-none"
          />
          <p className="mt-4 text-gray-600 font-medium text-center">
            Selected Date:{" "}
            <span className="text-indigo-600">{value.toDateString()}</span>
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center gap-4">
          <h3 className="text-xl font-semibold text-gray-700">Select a Time</h3>
          <TimePicker
            onChange={setTime}
            value={time}
            format="h:mm a"
            className="text-center  h-30 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <p className="text-gray-600 font-medium">
            Selected Time: <span className="text-indigo-600">{time}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center  mt-5">
        {filderdata.map((user, id) => {
          const isDisabled = !user.isActive;
       
          return (
            <div key={id} className="flex flex-col">
              <button
                onClick={handelappoinment}
                disabled={isDisabled}
                className={`py-2 px-10 rounded-2xl font-semibold 
          ${
            isDisabled
              ? "cursor-not-allowed bg-sky-200"
              : "bg-sky-500 text-white hover:bg-sky-600"
          }`}
              >
                Book Appointment
              </button>
              {isDisabled && (
                <span className="text-red-500">
                  {" "}
                  {user.name} is not Availabel
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Appoinment;
