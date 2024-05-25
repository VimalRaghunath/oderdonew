import React from "react";
import oderdoLogo from "../assets/oderdoLogo.jpg";
import NavBar from "./NavBar";
import HomeBody from "./HomeBody";
import FooterOderdo from "./FooterOderdo";
// import { Data } from './App'

function Home() {
  // const {logindetails}=useContext(Data)
  // console.log(logindetails,'dataaaaaaaaaa')

  return (
    <>
      <NavBar />
      <div className="bg-[url('../src/assets/oderdoHome.jpg')] bg-cover bg-center h-[65rem] w-full flex items-center justify-center text-white">
        <div className="p-6 rounded-lg sm:mx-auto sm:w-full sm:max-w-lg text-white">
          <div className="flex flex-col items-center">
            <img
              className="absolute top-0 left-0 w-40 h-auto mb-40 mr-35 rounded-lg max-w-lg"
              src={oderdoLogo}
              alt="oderdoLogo.jpg"
            />
          </div>
          <h1 className="ml-[-27rem] text-black text-8xl font-extrabold text-opacity-50 mb-60 "> Pick Up & Delivery Software </h1>
          <h6 className="ml-[-27rem] text-white text-lg font-bold text-opacity-70 mt-[-14rem]">Modern solutions like Oderdo pickup and delivery software are made to simplify and improve the logistics of companies in the transportation and delivery sector.</h6>
        </div>
      </div>
      <div>
        <HomeBody />
      </div>
      <div>
        <FooterOderdo/>
      </div>
    </>
  );
}

export default Home;
