import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
import BasicAlerts from "../Componets/Succesmessage/Alerts";

function Signup() {
  const navigate = useNavigate();
  const [signupData, setSignData] = useState([]);

  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [Address, setAddress] = useState("");
  const [Phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [Birthdate, setBirthdate] = useState("");
  const [submit, setSubmit] = useState(false);

  // touched states
  const [nametouch, setNameTouch] = useState(false);
  const [emailtouch, setEmailTouch] = useState(false);
  const [passwordtouch, setPasswordTouch] = useState(false);
  const [confirmpasswordtouch, setConfirmPasswordTouch] = useState(false);
  const [phonetouch, setPhoneTouch] = useState(false);

  // validation states
  const [Validname, setValidName] = useState(null);
  const [Validemail, setValidEmail] = useState(null);
  const [Validpassword, setValidPassword] = useState(null);
  const [validconfirmpassword, setValidConfirmPassword] = useState(null);
  const [ValidPhone, setValidPhone] = useState(null);

  // regex
  const nameregex = /^[A-Za-z]+([ '-][A-Za-z]+)*$/;
  const emailregex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const passwordregex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const phoneregex = /^[6-9]\d{9}$/;

  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem("singupData")) || [];
    setSignData(existingData);
  }, []);

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const isvalidname = nameregex.test(fullname);
    const isvalidemail = emailregex.test(email);
    const isvalidpassword = passwordregex.test(password);
    const isConfirmPassword = password === confirmpassword;
    const isvalidPhone = phoneregex.test(Phone);

    setValidName(isvalidname);
    setValidEmail(isvalidemail);
    setValidPassword(isvalidpassword);
    setValidConfirmPassword(isConfirmPassword);
    setValidPhone(isvalidPhone);

    if (
      isvalidname &&
      isvalidemail &&
      isvalidpassword &&
      isConfirmPassword &&
      isvalidPhone
    ) {
      const user = {
        id: nanoid(),
        FullName: fullname,
        Email: email.toLowerCase(),
        Password: password,
        Confirm_Password: confirmpassword,
        Phone: Phone,
        Gender: gender,
        Address: Address.toUpperCase(),
        Birthdate: Birthdate,
      };

      setSignData((prev) => {
        const updatedData = [...prev, user];
        localStorage.setItem("singupData", JSON.stringify(updatedData));
        return updatedData;
      });

      toast.success("Signup Successfully!");
      setSubmit(true);

      // reset fields
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAddress("");
      setPhone("");
      setGender("");
      setBirthdate("");

      // reset touched and validation
      setNameTouch(false);
      setEmailTouch(false);
      setPasswordTouch(false);
      setConfirmPasswordTouch(false);
      setPhoneTouch(false);
      setValidName(null);
      setValidEmail(null);
      setValidPassword(null);
      setValidConfirmPassword(null);
      setValidPhone(null);

      navigate("/login");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
        {submit && <BasicAlerts />}

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Full Name</label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => {
                setFullName(e.target.value);
                setValidName(nameregex.test(e.target.value));
                if (!nametouch) setNameTouch(true);
              }}
              onBlur={() => setNameTouch(true)}
              placeholder="Enter your full name"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
            {nametouch && fullname !== "" && Validname !== null && (
              Validname ? (
                <div className="flex gap-1.5 mt-2">
                  <img
                    src="https://img.icons8.com/?size=100&id=63312&format=png&color=000000"
                    className="w-5"
                  />
                  <span className="text-green-500">Valid Name</span>
                </div>
              ) : (
                <div className="flex gap-1.5 mt-2">
                  <img
                    src="https://img.icons8.com/?size=100&id=11997&format=png&color=000000"
                    className="w-5"
                  />
                  <span className="text-red-500">Invalid Name</span>
                </div>
              )
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setValidEmail(emailregex.test(e.target.value));
                if (!emailtouch) setEmailTouch(true);
              }}
              onBlur={() => setEmailTouch(true)}
              placeholder="Enter your email"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
            {emailtouch && email !== "" && Validemail !== null && (
              Validemail ? (
                <div className="flex gap-1.5 mt-2">
                  <img
                    src="https://img.icons8.com/?size=100&id=63312&format=png&color=000000"
                    className="w-5"
                  />
                  <span className="text-green-500">Valid Email</span>
                </div>
              ) : (
                <div className="flex gap-1.5 mt-2">
                  <img
                    src="https://img.icons8.com/?size=100&id=11997&format=png&color=000000"
                    className="w-5"
                  />
                  <span className="text-red-500">Invalid Email</span>
                </div>
              )
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Password</label>
            <span className="text-zinc-500">Password must be at least 8 characters</span>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setValidPassword(passwordregex.test(e.target.value));
                if (!passwordtouch) setPasswordTouch(true);
              }}
              onBlur={() => setPasswordTouch(true)}
              placeholder="Enter your password"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
            {passwordtouch && password !== "" && Validpassword !== null && (
              Validpassword ? (
                <div className="flex gap-1.5 mt-2">
                  <img
                    src="https://img.icons8.com/?size=100&id=63312&format=png&color=000000"
                    className="w-5"
                  />
                  <span className="text-green-500">Valid Password</span>
                </div>
              ) : (
                <div className="flex gap-1.5 mt-2">
                  <img
                    src="https://img.icons8.com/?size=100&id=11997&format=png&color=000000"
                    className="w-5"
                  />
                  <span className="text-red-500">Invalid Password</span>
                </div>
              )
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block mb-1 font-semibold">Confirm Password</label>
            <input
              type="password"
              value={confirmpassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setValidConfirmPassword(e.target.value === password);
                if (!confirmpasswordtouch) setConfirmPasswordTouch(true);
              }}
              onBlur={() => setConfirmPasswordTouch(true)}
              placeholder="Confirm your password"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
            {confirmpasswordtouch &&
              confirmpassword !== "" &&
              validconfirmpassword !== null && (
                validconfirmpassword ? (
                  <div className="flex gap-1.5 mt-2">
                    <img
                      src="https://img.icons8.com/?size=100&id=63312&format=png&color=000000"
                      className="w-5"
                    />
                    <span className="text-green-500">Password Match</span>
                  </div>
                ) : (
                  <div className="flex gap-1.5 mt-2">
                    <img
                      src="https://img.icons8.com/?size=100&id=11997&format=png&color=000000"
                      className="w-5"
                    />
                    <span className="text-red-500">Password Not Match</span>
                  </div>
                )
              )}
          </div>

          {/* Address */}
          <div className="mb-6">
            <label className="block mb-1 font-semibold">Address</label>
            <textarea
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label className="block mb-1 font-semibold">Phone no:</label>
            <input
              type="tel"
              value={Phone}
              maxLength={10}
              onChange={(e) => {
                setPhone(e.target.value);
                setValidPhone(phoneregex.test(e.target.value));
                if (!phonetouch) setPhoneTouch(true);
              }}
              onBlur={() => setPhoneTouch(true)}
              placeholder="91+ 1234567890"
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
            {phonetouch && Phone !== "" && ValidPhone !== null && (
              ValidPhone ? (
                <div className="flex gap-1.5 mt-2">
                  <img
                    src="https://img.icons8.com/?size=100&id=63312&format=png&color=000000"
                    className="w-5"
                  />
                  <span className="text-green-500">Valid Phone Number</span>
                </div>
              ) : (
                <div className="flex gap-1.5 mt-2">
                  <img
                    src="https://img.icons8.com/?size=100&id=11997&format=png&color=000000"
                    className="w-5"
                  />
                  <span className="text-red-500">Invalid Phone Number</span>
                </div>
              )
            )}
          </div>

          {/* Gender */}
          <div className="mb-6">
            <label className="block mb-1 font-semibold">Gender</label>
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  required
                />
                <span>Male</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  required
                />
                <span>Female</span>
              </label>
            </div>
          </div>

          {/* Birthdate */}
          <div className="mb-6">
            <label className="block mb-1 font-semibold">Birthdate</label>
            <input
              type="date"
              value={Birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
          >
            Sign Up
          </button>
        </form>

        <p
          onClick={() => navigate("/login")}
          className="mt-4 text-center text-gray-500 text-sm"
        >
          Already have an account?{" "}
          <span className="text-blue-500 cursor-pointer">Login</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
