import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useNavigation, useParams } from "react-router-dom";
import "@ant-design/v5-patch-for-react-19";
import { message } from "antd";
import { toast } from "react-toastify";
import DoctorContext from "../contextApi/DoctorContext";

function Login() {
  const {admin}=useParams()
  const {Admindata}=useContext(DoctorContext)
  const [error,setError]=useState(false)
    const navigate=useNavigate();
    const [localData,setLocalData]=useState([])
    const [Admin,setAdmin]=useState([])
    const [passsword,setPasswprd]=useState('')
    const [email,setEmail]=useState('')
    const [role,setRole]=useState('')
    const [loginUser,setLoginUser]=useState('')


    useEffect(()=>{
     
        const data= JSON.parse(localStorage.getItem("singupData"))||[]
        setLocalData(data)
       
    },[])

useEffect(() => {
  const stored = JSON.parse(localStorage.getItem("AdminData"));
  if (stored && stored.length > 0) {
    setAdmin(stored);
  }
}, []);
// useEffect(() => {
//   if (Admindata && Admindata.length > 0) {
//     localStorage.setItem("Admindata", JSON.stringify(Admindata));
//   }
// }, [Admindata]);
  


    const handleSubmit=(e)=>{
        e.preventDefault();
      
        if(!localData)
        {
          message.error("Email or Password not found please register!!")
        }
       const user= localData.find((data)=>data.Email=== email  && data.Password===passsword)
       
    
       if(user)
        {
          
          
            message.success("Succefully login")
        
            localStorage.setItem("role",JSON.stringify("User"))
            setRole("User")
            localStorage.setItem("LoginUser",JSON.stringify(email))
            setLoginUser(email)
            setTimeout(() => {
                navigate('/')
                window.location.reload();
            }, 1000);
        }  
      
    
     else if(Admindata)

      {
         const admin= Admindata.find((data)=>(data.email===email && data.password===passsword));
         if(admin)
         {
           message.success("Succefully login")
        
            localStorage.setItem("role",JSON.stringify("Admin"))
            setRole("Admin")
            localStorage.setItem("Admin",JSON.stringify(email))
            setLoginUser(email)
            setTimeout(() => {
                navigate('/')
                window.location.reload();
            }, 1000);
         }
         else
         {
            setError(true);
             message.error("Invalid Credetials")
         }
          
      }
        else{
          message.error("Invalid Credetials")
          
        }

          
    }
 
  

  return (
  <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-10">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className={`text-2xl font-bold mb-6 text-center ${admin ?'text-sky-800  font-bold ':''}`}>{admin?'Admin Login':'Login'}</h2>
        
        <form onSubmit={handleSubmit}>
          
 
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Email</label>
            <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
              type="email"
              
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder={admin? 'emily.carter@gmail.com':'Enter Email'}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 font-semibold">Password</label>
            <input
            value={passsword}
            onChange={(e)=>setPasswprd(e.target.value)}
              type="password"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
               placeholder={admin? 'admin123':'Enter Password'}
            />
            
          
          </div>

          <button 
            type="submit"
            
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
          {/* {error ? <span className="text-red-600">!email or password not found please register</span> :''} */}
        </form>
   

        <p className="mt-4 text-center text-gray-500 text-sm">
          Forgot your password?
        </p>
        <p
          onClick={() =>{admin ? navigate('/login'):navigate('/signup')}}
          className="mt-2 text-center text-gray-600 text-sm"
        >

          
          {admin? 'Doctor Login' :' Create a new account?  '}
         
          <span className="text-blue-500 cursor-pointer">Click Here</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
