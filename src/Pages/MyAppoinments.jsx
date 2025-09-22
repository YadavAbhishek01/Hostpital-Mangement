import React, { useEffect, useState } from 'react'

const MyAppoinments = () => {
  const [appoinmentdata, setAppoinmentData] = useState([])
  const [Loginuser,setLoginUser]=useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('Appoinments'))||[]
    setAppoinmentData(data)
    console.log(data)
  }, [])

  useEffect(()=>{
    const loginuserdata=JSON.parse(localStorage.getItem("LoginUser"))
    setLoginUser(loginuserdata)
    console.log(loginuserdata)
    },[])

    const hadlecancel=(index)=>{
        if(window.confirm("YOu want to cancel this Appoinments"))
        {
            const updatedata= appoinmentdata.filter((doc)=>doc.id!==index)
       setAppoinmentData(updatedata)
       localStorage.setItem("Appoinments",JSON.stringify(updatedata))
        }
        else{
          return null
        }
     
    }

    const currentuserappointment=appoinmentdata.filter((user)=>user.Patient_details.Email===Loginuser)
   
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">My Appointments</h2>
      {currentuserappointment.length === 0 && (
        <p className="text-center text-gray-500">No appointments booked yet.</p>
      )}
      <div className="grid gap-6 md:grid-cols- lg:grid-cols-3">
        {currentuserappointment.map((doc, i) => (
          <div key={i} className="bg-white shadow-md rounded-lg p-2 flex flex-col md:flex-row items-center gap-4">
            <img 
              src={doc.image} 
              alt={doc.name} 
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
            />
            <div className="flex-1 text-gray-700">
              <p><span className="font-semibold">Name:</span> {doc.name}</p>
              <p><span className="font-semibold">Specialty:</span> {doc.specialty}</p>
              <p><span className="font-semibold">Phone:</span> {doc.phone}</p>
              <p><span className="font-semibold">Date:</span> {doc.Date}</p>
              <p><span className="font-semibold">Time:</span> {doc.Time}</p>
                 <hr />
              <p className='text-center'>Patient Detials</p>
               <p><span className="font-semibold">Patient Name:</span> {doc.Patient_details?.PatientsName}</p>
                <p><span className="font-semibold">Patient Gender:</span> {doc.Patient_details?.Gender}</p>
            </div>
            <button onClick={()=>hadlecancel(doc.id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mt-2 md:mt-0">
              Cancel
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppoinments
