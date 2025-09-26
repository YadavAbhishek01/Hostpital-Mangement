import { createContext, useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";

export const DoctorContext = createContext();

export const DoctorContextProvider = ({ children }) => {
  const [doctordata, setDoctorData] = useState([]);
  const [Admindata, setAdmin] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);

        // Check localStorage first (optional)
        const stored = JSON.parse(localStorage.getItem("DoctorData"));
        if (stored && stored.length > 0) {
          setDoctorData(stored);
          setAdmin(stored.filter(item => item.role === "admin")); // if role is admin
          setLoading(false);
          return;
        }

        // Fetch db.json from public folder
        const res = await fetch("/db.json");
        const data = await res.json();

        // Assuming your db.json has doctors and admins
        const doctors = data.filter(item => item.role === "doctor");
        const admins = data.filter(item => item.role === "admin");

        setDoctorData(doctors);
        setAdmin(admins);

        // Save to localStorage
        localStorage.setItem("DoctorData", JSON.stringify(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  // Keep localStorage updated
  useEffect(() => {
    if (doctordata && doctordata.length > 0) {
      const combinedData = [...doctordata, ...Admindata];
      localStorage.setItem("DoctorData", JSON.stringify(combinedData));
    }
  }, [doctordata, Admindata]);

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
