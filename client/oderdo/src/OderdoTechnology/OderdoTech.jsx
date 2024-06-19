import React from "react";
import tech from "../assets/Technology/techyyy.jpg";
import NavBar from "../OderdoHome/NavBar";
import oderdoLogo from "../assets/oderdoLogo.jpg";
import TechBody from "./TechBody";
import FooterOderdo from "../OderdoHome/FooterOderdo";
import { motion } from "framer-motion";

function OderdoTech() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="flex flex-col items-center">
        <img
          className="absolute top-0 left-0 w-40 h-auto mb-40 mr-35 rounded-lg max-w-lg"
          src={oderdoLogo}
          alt="oderdoLogo.jpg"
        />
      </div>
      <div className="relative flex flex-col items-center ">
        <img
          src={tech}
          alt="Technology.jpg"
          className="h-auto w-[100rem] mb-[-5rem]"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <motion.h2
            className="text-4xl font-bold"
            initial={{ fontSize: "0rem" }} // Initial font size
            animate={{ fontSize: "3rem" }} // Final font size
            transition={{ duration: 1 }}
          >
            Our Technology
          </motion.h2>
          <motion.p
            className="text-lg mt-2 text-gray-300"
            initial={{ fontSize: "0rem" }}
            animate={{ fontSize: "1rem" }}
            transition={{ duration: 1 }}
          >
            using cutting-edge technology, streamline your operations and
            enhance your management capabilities
          </motion.p>
        </div>
        <div className="flex justify-center space-x-5 mt-8">
          <div className="bg-gray-200 p-10 border border-gray-300">
            
          </div>
          <div className="bg-gray-200 p-12 border border-gray-300 ">
            
          </div>
          <div className="bg-gray-200 p-14 border border-gray-300">   
            
          </div>
        </div>
      </div>
      <div>
        <TechBody />
      </div>
      <div>
        <FooterOderdo />
      </div>
    </div>
  );
}

export default OderdoTech;
