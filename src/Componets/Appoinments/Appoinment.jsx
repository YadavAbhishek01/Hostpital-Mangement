import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { message } from "antd";
const Appoinment = ({ filderdata, Fees }) => {
  const [value, setValue] = useState(new Date());
  const [time, setTime] = useState("8:00");
  const [slote,setslote]=useState([])
  const navigator = useNavigate();
  const [Patientsname, setPatientsName] = useState(null);
  const [Signupdata, setSignUpData] = useState([]);
  const [timer,settimer]=useState([])


 
  const [appoinment, setAppoinment] = useState(() =>
    JSON.parse(localStorage.getItem("Appoinments") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("Appoinments", JSON.stringify(appoinment));
  }, [appoinment]);

  useEffect(() => {
    const patiets = JSON.parse(localStorage.getItem("LoginUser"));
    setPatientsName(patiets);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("singupData")) || [];
    setSignUpData(data);
  }, []);

  const Patientsdetails = Signupdata.find(
    (user) => user.Email === Patientsname
  );

  const handelappoinment = () => {
    const user = JSON.parse(localStorage.getItem("role"));
    if (!user) {
      window.alert("If you want to book an appointment, please login.");
      navigator("/login");
      return;
    }

    const calculateAge = (birthdate) => {
      if (!birthdate) return "-";
      const today = new Date();
      const dob = new Date(birthdate);
      let age = today.getFullYear() - dob.getFullYear();
      const monthdiff = today.getMonth() - dob.getMonth();
      if (monthdiff < 0 || (monthdiff === 0 && today.getDate() < dob.getDate()))
        age--;
      return age;
    };

    const doctordatas = Array.isArray(filderdata) ? filderdata[0] : filderdata;
    const newAppointment = {
      ...doctordatas,
      Date: value.toDateString(),
      Time: time,
      Fees: Fees[0],
      Patient_details: {
        PatientsName: Patientsdetails?.FullName || "-",
        Gender: Patientsdetails?.Gender || "-",
        Age: calculateAge(Patientsdetails?.Birthdate),
        Email: Patientsdetails?.Email || "-",
      },
    };

    setAppoinment((prev) => [...prev, newAppointment]);
    message.success("Appointment successfully submitted");
    navigator("/my-appoinment");
  };

  const handeltime = (time) => {
    setTime(time);
  };

  const generateslote=()=>{
    const[h,m]=time.split(":").map(Number)
    let start=new Date()
    start.setHours(h,m,0,0)


    let result=[];
    for(let i=0;i<10;i++)
    {
      let hours=start.getHours().toString().padStart(2,"0");
      let Minutes=start.getMinutes().toString().padStart(2,"0");
      result.push(`${hours}:${Minutes}`)
      start.setMinutes(start.getMinutes()+30);
    }
   
    setslote(result)
  }

 
   
  useEffect(()=>{
      generateslote()
     
  },[])
     const afternoon=(time)=>{
    const [h,m]=time.split(":").map(Number)
    return h > 12 ||(h ===12 &&  m>=0) ? "PM":"AM"
     }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center gap-6 w-full">
      <h3 className="text-xl font-semibold text-red-700">Select a Time</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 w-full">

        {slote.map((slote, i) => (
          <div key={i} className="flex">
            <p
              className={`flex-1 text-center text-sm px-2 py-2 cursor-pointer rounded-lg shadow-md ${
                time === slote ? "bg-sky-500 text-white" : "bg-gray-50"
              }`}
              onClick={() => handeltime(slote)}
            >
              {slote}{" "}{afternoon(time)}
            </p>
          </div>
        ))}
      </div>

      <p className="text-gray-600 font-medium">
        Selected Time: <span className="text-indigo-600"> {time}{" "}{afternoon(time)}</span>
      </p>

      <div className="w-full mt-4">
        <h3 className="text-xl font-semibold text-red-700 text-center mb-2">
          Select a Date
        </h3>
        <div className="flex justify-center">
          <Calendar onChange={setValue} value={value} className="react-calendar" />
        </div>
        <p className="mt-4 text-gray-600 font-medium text-center">
          Selected Date:{" "}
          <span className="text-indigo-600">{value.toDateString()}</span>
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-5 w-full">
        {filderdata.map((user, id) => {
          const isDisabled = !user.isActive;
          return (
            <div key={id} className="flex flex-col w-full sm:w-auto">
              <button
                onClick={handelappoinment}
                disabled={isDisabled}
                className={`py-2 px-6 rounded-2xl font-semibold w-full sm:w-auto ${
                  isDisabled
                    ? "cursor-not-allowed bg-sky-200"
                    : "bg-sky-500 text-white hover:bg-sky-600"
                }`}
              >
                Book Appointment
              </button>
              {isDisabled && (
                <span className="text-red-500 mt-1 text-center sm:text-left">
                  {user.name} is not Available
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
