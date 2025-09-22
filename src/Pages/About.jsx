import React from "react";
import { FaClock, FaShieldAlt, FaUserFriends } from "react-icons/fa";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 space-y-20 mt-10">

   
      <div className="text-center space-y-4">
        <p className="text-4xl font-bold text-gray-800 mb-2">About Us</p>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records. Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
        </p>
      </div>

   
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3 overflow-hidden rounded-2xl shadow-lg">
          <img 
            src="https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D" 
            alt="About Prescripto" 
            className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="md:w-2/3 space-y-4">
          <p className="text-3xl font-bold text-gray-800">Our Vision</p>
          <p className="text-gray-600 leading-relaxed">
            Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        <p className="text-3xl font-bold text-center text-gray-800">Why Choose Us</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


          <div className="bg-gradient-to-br from-sky-50 to-white rounded-xl shadow-lg p-8 text-center space-y-4
                          transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl">
            <div className="text-4xl text-sky-500 flex justify-center">
              <FaClock />
            </div>
            <p className="font-semibold text-xl text-gray-800">Efficiency</p>
            <p className="text-gray-600 leading-relaxed">
              Streamlined appointment scheduling that fits into your busy lifestyle.
            </p>
          </div>

        
          <div className="bg-gradient-to-br from-sky-50 to-white rounded-xl shadow-lg p-8 text-center space-y-4
                          transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl">
            <div className="text-4xl text-sky-500 flex justify-center">
              <FaShieldAlt />
            </div>
            <p className="font-semibold text-xl text-gray-800">Reliability</p>
            <p className="text-gray-600 leading-relaxed">
              Trusted healthcare partners and consistent service quality you can count on.
            </p>
          </div>

          <div className="bg-gradient-to-br from-sky-50 to-white rounded-xl shadow-lg p-8 text-center space-y-4
                          transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl">
            <div className="text-4xl text-sky-500 flex justify-center">
              <FaUserFriends />
            </div>
            <p className="font-semibold text-xl text-gray-800">User-Friendly</p>
            <p className="text-gray-600 leading-relaxed">
              A simple and intuitive platform designed for everyone, everywhere.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default About;
