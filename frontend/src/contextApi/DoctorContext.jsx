import { createContext, useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";

export const DoctorContext = createContext();

export const DoctorContextProvider = ({ children }) => {

  const [admintoken,setAdmintoken]=useState(() => {
   
    const savedToken = localStorage.getItem("admintoken");
    return savedToken ? JSON.parse(savedToken) : null;
  });
const backendUrl=import.meta.env.VITE_BACKEND_URL
  

  useEffect(() => {
    if (admintoken) {
      localStorage.setItem("admintoken", JSON.stringify(admintoken));
    } else {
      localStorage.removeItem("admintoken");
    }
  }, [admintoken]);

  // console.log(admintoken)


  return (
    <DoctorContext.Provider value={{ backendUrl, admintoken, setAdmintoken }}>
    
   
        {children}
    
    </DoctorContext.Provider>
  );
};

export default DoctorContext;
