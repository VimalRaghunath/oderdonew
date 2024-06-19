import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import playstore from "../assets/googleplay.jpg";
import appstore from "../assets/appstore.jpg";
import { motion } from "framer-motion";

function FooterOderdo() {
  return (
    <div>
      <div>
        <div className="bg-gray-100">
          <div className="bg-blue-900 p-[5rem] rounded-lg mt-[5rem]">
            <div className="flex flex-wrap justify-evenly space-y-2 lg:space-y-0">
              <div className="bg-gray-200 p-8 h-[20rem] w-[16rem] rounded-lg">
                <h3 className="text-blue-800 pb-4 font-bold font underline">
                  Industries
                </h3>
                <h5 className="text-pink-700">
                  <a href="/fooddelivery"> Food delivery </a> <br />
                  <a href="/e-commercedelivery"> E-commerce delivery </a> <br />
                  <a href="/laundrydelivery"> Laundry delivery </a> <br />
                  <a href="/pharmacydelivery"> Pharmacy delivery </a> <br />
                  <a href="/grocerydelivery"> Grocery delivery </a> <br />
                  <a href="/courierdelivery"> Courier delivery </a> <br />
                  <a href="/flowerdelivery"> Flower delivery </a> <br />
                  <a href="/carwashingservice"> Car washing service </a>
                </h5>
              </div>

              <div className="bg-gray-200 p-8 h-[20rem] w-[16rem] rounded-lg">
                <h3 className="text-blue-800 pb-4 font-bold font underline">
                  Company
                </h3>
                <h5 className="text-pink-700">
                  <a href="/aboutus"> About us </a> <br />
                  <a href="/technology"> Technology </a> <br />
                  <a href="/investors"> Investors </a> <br />
                  <a href="/doride"> Do Ride </a> <br />
                  <a href="/partnership"> Partnership </a> <br />
                  <a href="/oderdohub"> Oderdo hub </a> <br />
                  <a href="/blog"> Blog </a>
                </h5>
              </div>

              <div className="bg-gray-200 p-8 h-[20rem] w-[16rem] rounded-lg">
                <h3 className="text-blue-800 pb-4 font-bold font underline">
                  Useful links
                </h3>
                <h5 className="text-pink-700">
                  <a href="/faqs"> FAQs </a> <br />
                  <a href="/contactus"> Contact Us </a> <br />
                  <a href="/privacy&policy"> Privacy & Policy </a> <br />
                  <a href="/Terms&Conditions"> Terms & Conditions </a> <br />
                  <a href="/cookies"> Cookies </a> <br />
                </h5>
              </div>
              <div className="bg-gray-200 p-8 h-[20rem] w-[16rem] rounded-lg">
                <h3 className="text-blue-800 pb-4 font-bold font underline">
                  Download Our App
                </h3>
                <div className="flex flex-col justify-center space-x-2 mt-4">
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={playstore}
                      alt="googleplay.jpg"
                      className="h-12"
                    />
                  </a>
                  <a
                    href="https://www.apple.com/app-store/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={appstore}
                      alt="appstore.jpg"
                      className="h-[2rem] mb-3"
                    />
                    <h5 className="text-pink-700">
                      <a href="/number"> +974 5575 1323 </a> <br />
                      <a href="/info"> info@sysart.in </a> <br />
                    </h5>
                  </a>
                </div>
              </div>
            </div>

            <div className="text-pink-500 flex justify-center space-x-4 mt-[6rem]">
              <a href="www.pinterest.com">
                <motion.i
                  className="fa-brands fa-pinterest-p text-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                ></motion.i>
              </a>
              <a href="www.facebook.com">
                <motion.i
                  className="fa-brands fa-facebook text-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                ></motion.i>
              </a>
              <a href="www.instagram.com">
                <motion.i
                  className="fa-brands fa-instagram text-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                ></motion.i>
              </a>
              <a href="www.twitter.com">
                <motion.i
                  className="fa-brands fa-twitter text-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                ></motion.i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterOderdo;
