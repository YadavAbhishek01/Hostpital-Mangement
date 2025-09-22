import React, { useEffect, useState } from "react";

const AllAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const appoint = JSON.parse(localStorage.getItem("Appoinments")) || [];
    setAppointments(appoint);
  }, []);

  const handlecancel=(id)=>{

    const cancelappoin=appointments.filter((doc)=>(doc.id)!==id)
    setAppointments(cancelappoin)
    localStorage.setItem("Appoinments",JSON.stringify(cancelappoin))
       

  } 
  return (
    <div className="p-6 ">
  
   <div className="flex items-center justify-center gap-3.5">
        <img src="https://img.icons8.com/?size=100&id=QTADNrdh5I0o&format=png&color=000000" alt=""  className="w-8"/>
      <h1 className="text-2xl font-semibold text-gray-700 mb-6  flex items-center justify-center  mt-6 ">
        All Appointments
      </h1>
   </div>

      <div className="overflow-hidden rounded-lg shadow-md">
  
        <div className="grid grid-cols-7 text-sm font-semibold text-gray-600 bg-gray-100 px-4 py-3">
          <p>#</p>
          <p>Patient Name</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p className="text-center">Action</p>
        </div>

    
        {appointments.length > 0 ? (
          <div className="divide-y">
            {appointments.reverse().map((doc, i) => (
              <div
                key={i}
                className="grid grid-cols-7 items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition"
              >
                <p className="font-medium">{i + 1}</p>
                <p className="truncate">{doc.Patient_details?.PatientsName}</p>
                <p>{doc.Patient_details?.Age || "-"}</p>
                <p>
                  {doc.Date} <span className="text-gray-500">{doc.Time}</span>
                </p>
              <div className="flex items-center justify-center  w-full rounded-full"> 
                  <img src={doc.image} alt="" className="w-10 rounded-full" />
                <p>{doc.name}</p> 
              </div>
                <p className="text-green-600 font-semibold">
                  ${doc.Fees || "0"}
                </p>
                <div className="flex justify-center">
                  <button className="px-3 py-1 text-xs rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition" onClick={()=>handlecancel(doc.id)}>
                    Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-gray-50 text-gray-500 flex items-center justify-center gap-3">
              <img src="https://img.icons8.com/?size=100&id=igRGF9zPpSqN&format=png&color=000000" alt="" className="w-8" />
          <p>
            No appointments available
          </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllAppointments;
