import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditDoctorDetails = () => {
  const [doctor, setDoctor] = useState([]);
  const [currentitem, setCurrentitem] = useState(null);
  const { id } = useParams();
  // console.log(Number(id))
   const navigator= useNavigate()

   const [Id,setId]=useState(null)
  const [Doctorname, setDoctorName] = useState("");
  const [Speciality, setSpeciality] = useState("");
  const [Phone, setPhone] = useState("");
  const [Experiance, setExperiance] = useState("");
  const [About, setAbout] = useState("");
  const [Fees, setFees] = useState("");
  const [image, setImage] = useState("");
  const [Status, setStatus] = useState(false);


  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("DoctorData"));
    console.log(data)
    setDoctor(data);
  }, []);

  useEffect(() => {
    const currentitem = doctor.find((doc) => doc.id ===id);
    if (currentitem) {
    setId(currentitem.id)
      setDoctorName(currentitem.name);
      setSpeciality(currentitem.specialty);
      setPhone(currentitem.phone);
      setExperiance(currentitem.experience);
      setAbout(currentitem.about);
      setFees(Number(currentitem.appointmentFees));
      setImage(currentitem?.image);
      setStatus(currentitem.isActive);
    }
  }, [doctor, id]);
  const handlesubmit = (e) => {
    e.preventDefault();
    const updateddata = {
        id:id,
      name: Doctorname,
      specialty: Speciality,
      phone: Phone,
      experience: Experiance, 
      appointmentFees: Fees,
      about: About,
      isActive: Status,
      image: image
    };

    toast.success("Details are Updated Succefully")
    setTimeout(() => {
        navigator('/doctor-list')
    }, 1000);


  setDoctor((prev) => {
  const updatedDoctors = prev.map((doc) =>
    Number(doc.id) === Number(updateddata.id) ? updateddata : doc
  );
  localStorage.setItem("DoctorData", JSON.stringify(updatedDoctors));
  return updatedDoctors;
});
 

  };
  const handelcancel=()=>{
    if(window.confirm("Are sure want to discard"))
    {
         navigator('/doctor-list')
    }
    
  }
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-2xl">
         <img src="https://img.icons8.com/?size=100&id=26191&format=png&color=000000" alt="Back"  className="w-8" onClick={()=>{
            navigator('/doctor-list')
         }}/>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        Edit-Doctor-Details
      </h2>
     

      <form className="space-y-5" onSubmit={handlesubmit}>
        {/* Doctor Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Doctor Name
          </label>
          <input
            value={Doctorname}
            onChange={(e) => setDoctorName(e.target.value)}
            type="text"
            placeholder="Dr. Alice Smith"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none"
          />
        </div>
        {/* Specialty */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Specialty
          </label>
          <input
            value={Speciality}
            onChange={(e) => setSpeciality(e.target.value)}
            type="text"
            placeholder="Cardiology"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none"
          />
        </div>
        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Phone
          </label>
          <input
            value={Phone}
            onChange={(e) => setPhone(e.target.value)}
            type="telno"
            maxLength={10}
            placeholder="555-1234"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none"
          />
        </div>
        {/* Experience */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Experience
          </label>
          <input
            value={Experiance}
            onChange={(e) => setExperiance(e.target.value)}
            type="text"
            placeholder="12 years"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none"
          />
        </div>
        {/* Appointment Fees */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Appointment Fees ($)
          </label>
          <input
            value={Fees}
            onChange={(e) => setFees(e.target.value)}
            type="number"
            placeholder="150"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none"
          />
        </div>
        {/* About */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            About
          </label>
          <textarea
            value={About}
            onChange={(e) => setAbout(e.target.value)}
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
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="text"
            placeholder="https://raw.githubusercontent.com/.../doc1.png"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none"
          />
        </div>
        Active Status
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="isActive"
            className="w-4 h-4"
            checked={Status}
            onChange={(e) => setStatus(e.target.checked)}
          />

          <label htmlFor="isActive" className="text-sm text-gray-600">
            Active Doctor
          </label>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-sky-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-sky-600 transition"
        >
          Save Doctor Details
        </button>
        <button
          type="button"
          className="w-full bg-red-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-red-600 transition"
       onClick={handelcancel}  >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditDoctorDetails;
