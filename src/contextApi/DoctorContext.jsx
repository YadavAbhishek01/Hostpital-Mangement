import { createContext, useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";

export const DoctorContext = createContext();

export const DoctorContextProvider = ({ children }) => {
  const [doctordata, setDoctorData] = useState([]);
  const [Admindata, setAdmin] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const getDoctors = async () => {
      try {
        setLoading(true);

    
        const stored = JSON.parse(localStorage.getItem("DoctorData"));
        if (stored && stored.length > 0) {
          setDoctorData(stored);
          setLoading(false);
          return; 
        }

   
        const res = await fetch("http://localhost:3000/doctors");
        const data = await res.json();
        setDoctorData(data);

  
        localStorage.setItem("DoctorData", JSON.stringify(data));
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false);
      }
    };

    getDoctors();
  }, []);


  useEffect(() => {
    const getAdmin = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:3000/admins");
        const data = await res.json();
        setAdmin(data);
      } catch (error) {
        console.error("Error fetching Admin", error);
      } finally {
        setLoading(false);
      }
    };
    getAdmin();
  }, []);


  useEffect(() => {
    if (doctordata && doctordata.length > 0) {
      localStorage.setItem("DoctorData", JSON.stringify(doctordata));
    }
  }, [doctordata]);

  return (
    <DoctorContext.Provider value={{ doctordata, Admindata, setDoctorData }}>
    
      {loading ? (
        <div className="flex w-full items-center justify-center h-screen">
          <MoonLoader size={50} color="#0ea5e9" />
          Please wait...
        </div>
      ) : (
        children
      )}
    </DoctorContext.Provider>
  );
};

export default DoctorContext;
