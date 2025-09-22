import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DoctorContext from '../contextApi/DoctorContext';
import Calendar from '../Componets/Appoinments/Appoinment';
import Calendars from '../Componets/Appoinments/Appoinment';
import Appoinment from '../Componets/Appoinments/Appoinment';

const DoctorDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [doctorData, setDoctorData] = useState([]);

  const doctordata=JSON.parse(localStorage.getItem("DoctorData"))||[]
const[showCalender,setShowCalender]=useState(false)
  useEffect(() => {
    const filterData = doctordata.filter((doc) => Number(doc.id) === Number(id));
    setDoctorData(filterData);
  }, []);

   
  const Appointmentsfess=doctorData.map((doc)=>{
    return doc.appointmentFees
})

  return (
    <div className="container mx-auto px-4 py-10">
      {doctorData.map((doc, i) => (
        <div
          key={i}
          className="flex flex-col md:flex-row gap-8 bg-white rounded-2xl shadow-lg p-6 md:p-10"
        >
  
          <div className="flex-shrink-0">
            <img
              src={doc.image}
              alt={doc.name}
              className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-2xl shadow-md bg-sky-800"
            />
          </div>

    
          <div className="flex-1 flex flex-col justify-between gap-6">
    
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {doc.name}
              </h2>
              <p className="text-indigo-600 font-semibold text-lg">
                {doc.specialty}
              </p>
              <p className="text-gray-500 mt-1">{doc.experience} Experience</p>
            </div>

            
            <div className="bg-gray-50 p-4 rounded-xl shadow-inner">
              <h3 className="text-lg font-semibold mb-2">About</h3>
              <p className="text-gray-700 mb-2">{doc.about}</p>
              <p className="text-gray-800 font-bold">
                Appointment Fee: <span className="text-indigo-600">${doc.appointmentFees}</span>
              </p>
              <div className='flex items-center justify-between '>
                  <p >Doctor:</p>
             <p className={`text-gray-700 mb-2 items-center mt-0.5 ${doc.isActive ? 'text-green-500':'text-red-500'}`} >{doc.isActive ? 'Availabel ':'Not availbel'}</p>
              </div>
          
            </div>


            <div className=' flex items-center justify-center'>
          <button
              onClick={() => navigate(-1)}
              className="mt-4 w-full md:w-auto bg-red-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-red-400 transition"
            >
              Go Back
            </button>
            </div>
          
          </div>
        </div>
      ))}
 
     <div className=' bg-zinc-100'>
        <Appoinment filderdata={doctorData}  Fees={Appointmentsfess} />
     </div>
    </div>
  );
};

export default DoctorDetails;
