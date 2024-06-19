import React from "react";
import NavBar from "../OderdoHome/NavBar";
import oderdoLogo from "../assets/oderdoLogo.jpg";
import AboutUs from "../assets/Aboutus/AboutusHome.jpg";
import AboutusBody from "./AboutusBody";
import FooterOderdo from "../OderdoHome/FooterOderdo";
import { motion } from "framer-motion";

function OderdoAboutUs() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="flex flex-col items-center">
        <img
          className="absolute top-0 left-0 w-40 h-auto mb-40 mr-35 rounded-lg max-w-lg"
          src={oderdoLogo}
          alt=" "
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-[4rem] w-full">
        <div className="flex items-center justify-center gap-[10rem] mt-[2rem]">
          <div className="">
            <img
              className="h-[40rem] w-auto py-10 ml-[5rem]"
              src={AboutUs}
              alt="AboutusHome.jpg"
            />
          </div>
          <div className="w-[40rem]">
            <motion.h1
              className="flex justify-center text-light-blue-700 text-4xl font-bold"
              initial={{ fontSize: "1rem" }}
              animate={{ fontSize: "2rem" }}
              transition={{ duration: 1 }}
            >
              Welcome to Oderdo!
            </motion.h1>
            <motion.p className="flex flex-col text-lg" initial={{ fontSize: "0rem" }} 
            animate={{ fontSize: "2rem" }} 
            transition={{ duration: 1 }}>
              At Oderdo, our mission is to revolutionize the offering of
              services and improve everyone's quality of life. Our cutting-edge
              software is made to simplify pickup and delivery so that you can
              get whatever you need quickly and easily. Oderdo isn't just
              software for pickup and delivery. Our all-inclusive platform links
              companies with riders, optimizing workflows and promoting a smooth
              experience for everyone involved.
            </motion.p>
          </div>
        </div>
      </div>
      <div>
        <AboutusBody />
      </div>
      <div>
        <FooterOderdo />
      </div>
    </div>
  );
}

export default OderdoAboutUs;
