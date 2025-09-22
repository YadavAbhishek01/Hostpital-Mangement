import { Routes, Route, useParams } from "react-router-dom";
import Main from "./MainLayout/Main";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ContactUs from "./Pages/ContactUs";
import Profilepage from "./Pages/Profilepage";
import NotFound from "./Pages/NotFound";
import AllDoctorDetails from "./Pages/AllDoctorDetails";
import DoctorDetails from "./Pages/DoctorDetails";
import MyAppoinments from "./Pages/MyAppoinments";
import EditProfile from "./Pages/EditProfile";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DoctorList from "./Admin/pages/DoctorList";
import Hero from "./Admin/Componets/Hero/Hero";
import AllAppointments from "./Admin/pages/AllAppointments";
import AddDcotor from "./Admin/pages/AddDcotor";
import EditDoctorDetails from "./Admin/pages/EditDoctorDetails";
import Dashboard from "./Admin/Componets/Hero/Hero";




function App() {


  
  return (
 <>
 <ToastContainer position="top-center" autoClose={3000} />
   
    <Routes>
     
      <Route path="/" element={<Main />}>

          <Route index element={<Home />} />
       
        <Route path="about" element={<About />}  />
     
        <Route path="/login" element={<Login/>}/>     
        <Route path={`/login/:admin`} element={<Login/>}/> 
           <Route path="/signup" element={<Signup/>}/>    
            
               <Route path="/contact" element={<ContactUs/>}/>  
                <Route path="/profile" element={<Profilepage/>}/>   
                <Route path="/all-doctor" element={<AllDoctorDetails/>}/>
                <Route path="/appoinment/:id" element={<DoctorDetails/>}/>
                <Route path="/my-appoinment"  element={<MyAppoinments/>}/>
                <Route path="/edit-profile/:id" element={<EditProfile/>}/>
                <Route path="/doctor-list" element={<DoctorList/>}/>
                <Route path="/" element={<Dashboard/>}/>
                <Route path='/all-appointment' element={<AllAppointments/>}/>
                <Route path='/add-doctor' element={<AddDcotor/>}/>
                  <Route path='/doctor-list/edit-doctordetails/:id' element={<EditDoctorDetails/>}/>
                  <Route path="*" element={<NotFound/>}/>    
      </Route>
      
    </Routes>

</>
  );
}

export default App;
