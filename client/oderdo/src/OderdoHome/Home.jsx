import React from "react";
import oderdoLogo from "../assets/oderdoLogo.jpg";
import NavBar from "./NavBar";
import HomeBody from "./HomeBody";
import FooterOderdo from "./FooterOderdo";
import MobileCustomizable from "./MobileCustomizable";
import { motion } from "framer-motion";
import SliderHome from "./SliderHome";
import CalltoAction from "./CalltoAction";
import oderdoHome from "../assets/pickupnew.jpg";

function Home() {
  return (
    <>
      <NavBar />
      <div className="bg-[url('')] bg-cover bg-center h-[34rem] w-full flex items-center justify-center text-white">
        <div className="p-16 rounded-lg sm:mx-auto sm:w-full sm:max-w-lg text-white">
          <div className="flex flex-col items-center">
            <img
              className="absolute top-0 left-0 w-40 h-auto mb-40 mr-35 rounded-lg max-w-lg"
              src={oderdoLogo}
              alt="oderdoLogo.jpg"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-1 space-y-4 lg:space-y-0">
            <div>
              <img src={oderdoHome} alt="oderdoHome.jpg" />
            </div>
            <div className="">
              <motion.h1
                initial={{ fontSize: "0rem" }} // Initial font size
                animate={{ fontSize: "5rem" }} // Final font size
                transition={{ duration: 1 }} // Duration of the animation
                className="ml-[-27rem] text-blue-900 font-bold text-opacity-70 mb-60"
              >
                Pickup and Delivery Application
              </motion.h1>
              <h6 className="ml-[-27rem] text-pink-500 text-lg font-bold text-opacity-70 mt-[-14rem]">
                Made to simplify and improve the logistics of companies in the
                transportation and delivery sector.
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SliderHome />
      </div>
      <div>
        <HomeBody />
      </div>
      <div>
        <MobileCustomizable />
      </div>
      <div>
        <CalltoAction />
      </div>
      <div>
        <FooterOderdo />
      </div>
    </>
  );
}

export default Home;
