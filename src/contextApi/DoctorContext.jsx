import { createContext, useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";

export const DoctorContext = createContext();

export const DoctorContextProvider = ({ children }) => {
  const [doctordata, setDoctorData] = useState([]);
  const [Admindata, setAdmin] = useState([]);
  const [loadingDoctors, setLoadingDoctors] = useState(false);
  const [loadingAdmins, setLoadingAdmins] = useState(false);
  const [error, setError] = useState(null);

  // Doctors
  useEffect(() => {
    const getDoctors = async () => {
      try {
        setLoadingDoctors(true);

        const stored = JSON.parse(localStorage.getItem("DoctorData"));
        if (stored && stored.length > 0) {
          setDoctorData(stored);
          return;
        }

        const res = await fetch("/DoctorData/db.json");
        if (!res.ok) throw new Error("Failed to fetch doctors");
        const data = await res.json();
        setDoctorData(data);
        localStorage.setItem("DoctorData", JSON.stringify(data));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoadingDoctors(false);
      }
    };
    getDoctors();
  }, []);

  // Admins
  useEffect(() => {
    const getAdmin = async () => {
      try {
        setLoadingAdmins(true);

        const stored = JSON.parse(localStorage.getItem("AdminData"));
        if (stored && stored.length > 0) {
          setAdmin(stored);
          return;
        }

        const res = await fetch("/Admindata/admins.json");
        if (!res.ok) throw new Error("Failed to fetch admins");
        const data = await res.json();
        setAdmin(data);
        localStorage.setItem("AdminData", JSON.stringify(data));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoadingAdmins(false);
      }
    };
    getAdmin();
  }, []);

  const isLoading = loadingDoctors || loadingAdmins;

  return (
    <DoctorContext.Provider value={{ doctordata, Admindata, setDoctorData }}>
      {isLoading ? (
        <div className="flex w-full items-center justify-center h-screen">
          <MoonLoader size={50} color="#0ea5e9" />
          Please wait...
        </div>
      ) : error ? (
        <div className="text-red-500 text-center">{error}</div>
      ) : (
        children
      )}
    </DoctorContext.Provider>
  );
};

export default DoctorContext;
