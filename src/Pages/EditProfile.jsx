import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [Address, setAddress] = useState("");
  const [Phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [Birthdate, setBirthdate] = useState("");
  const [image,setImage]=useState(null)
    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState(false);
    
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("singupData"));
    if(!data)
    {
        alert("no data availabel")
        return 
    }
    const getuser = data?.find((user) => user.id === id);
    if(!getuser)
    {
          alert("user not found")
        return 
    }
    setFullName(getuser.FullName)
    setAddress(getuser.Address)
    setBirthdate(getuser.Birthdate)
    setConfirmPassword(getuser.Confirm_Password)
    setPassword(getuser.Password)
    setEmail(getuser.Email)
    setPhone(getuser.Phone)
    setGender(getuser.Gender)
    setImage(getuser.Image)
  }, [id]);



  const submithandler=(e)=>{

        e.preventDefault();
         if (password !== confirmpassword) {
      setSubmit(false);
      return;
    }
    const updateprofile={
        id:id,
         FullName: fullname,
      Email: email,
      Password: password,
      Confirm_Password: confirmpassword,
      Phone:Phone,
      Gender:gender,
      Address:Address,
      Birthdate:Birthdate,
      Image:image
    
    }

    const localdata=JSON.parse(localStorage.getItem("singupData"))
    const updatedata=localdata.map((user)=>user.id===id ?updateprofile:user)
    localStorage.setItem("singupData",JSON.stringify(updatedata))
         setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setBirthdate('')
    setAddress('')
    setGender('')
    setPhone('')

  } 
  const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result); 
    };
    reader.readAsDataURL(file);
  }
};
const handlecancel=()=>{
  if(window.confirm("you want to discard it"))
  {
    navigate("/profile")
  }
  else
  {
    return  null
  }
    
}
const handlerSave=()=>{
  if(window.confirm("You want to save the changes"))
  {
    toast.success("Profile updated")
    navigate("/profile")

  }
  else{
    navigate("/profile")
  }
}

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-lg p-8">

        <h2 className="text-3xl font-bold text-center text-sky-600 mb-8">
          Edit Profile
        </h2>
        {submit && <BasicAlerts />}
        {error && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">
              Password and ConfirmPassword Not Match.
            </Alert>
          </Stack>
        )}

        <form className="space-y-6" onSubmit={submithandler}>
     
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Full Name
            </label>
            <input
              type="text"
                value={fullname}
              onChange={(e)=>setFullName(e.target.value)}
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Enter your full name"
            />
          </div>

      
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Profile Image
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
          
            onChange={handleImageChange}
            />
          </div>

      
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
                    onChange={(e)=>setEmail(e.target.value)}
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Enter your email"
            />
          </div>

        
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Address
            </label>
            <textarea
            value={Address}
                    onChange={(e)=>setAddress(e.target.value)}
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Enter your address"
              rows={3}
            />
          </div>

 
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Phone No
            </label>
            <input
              type="tel"
           value={Phone}
           maxLength={10}
                    onChange={(e)=>setPhone(e.target.value)}
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Enter your phone number"
            />
          </div>


          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Gender
            </label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                checked={gender === "male"}
                 onChange={(e) => setGender(e.target.value)}
                  className="h-4 w-4 text-sky-600"
                />
                Male
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                   onChange={(e) => setGender(e.target.value)}
                  className="h-4 w-4 text-sky-600"
                />
                Female
              </label>
            </div>
          </div>

    
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Birthdate
            </label>
            <input
              type="date"
              value={Birthdate}
               onChange={(e) => setBirthdate(e.target.value)}
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>


          <div className="flex gap-4 mt-6">
            <button
              type="submit"
              onClick={handlerSave}
              className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
              Save
            </button>
            <button
              type="button"
              className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
              onClick={handlecancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
