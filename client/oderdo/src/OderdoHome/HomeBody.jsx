import React from "react";
import Laundry from "../assets/LaundryDelivery.jpg";
import Food from "../assets/FoodDelivery.jpg";
import Grocery from "../assets/GroceryDelivery.jpg";
import Courier from "../assets/CourierDelivery.jpg";
import Pharma from "../assets/PharmaDelivery.jpg";
import Ecommerce from "../assets/E-commerceDelivery.jpg";
import Flower from "../assets/FlowerDelivery.jpg";
import { motion } from "framer-motion";

function HomeBody() {
  return (
    <div className="mt-40">
      {/* <img src={oderdoBody} alt="oderdoBody.jpg" /> */}
      <div className="p-8 bg-gray-100">
        <div className="text-center mt- space-y-8">
          <div className="bg-gray-200 p-6 rounded-lg mb-[14rem]">
            <h1 className="pb-5 font-bold"></h1>
            <div className="flex flex-wrap justify-evenly space-y-4 lg:space-y-0">
              <motion.div
                className="relative bg-[url('../src/assets/Partnership.jpg')] bg-cover bg-center w-full lg:w-1/4 h-[25rem] rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
                <div className="relative z-10 flex items-center justify-center h-full text-white">
                  <div>
                    <h5 className="text-2xl font-bold mb-2">
                      Join Partnership
                    </h5>
                    <p className="text-center px-4">
                      Join Oderdo to connect with more clients than ever. You
                      concentrate on the business because we manage delivery
                    </p>
                    <motion.button
                      className="mt-4 bg-pink-500 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-pink-600 transition-colors duration-300 ease-in-out"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      MORE
                    </motion.button>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="relative bg-[url('../src/assets/Delivery.jpg')] bg-cover bg-center w-full lg:w-1/4 h-[25rem] rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
                <div className="relative z-10 flex items-center justify-center h-full text-white">
                  <div>
                    <h5 className="text-2xl font-bold mb-2">Join Delivery</h5>
                    <p className="text-center px-4">
                      {" "}
                      The flexibility to suit your life around your career. also
                      fantastic costs, benefits, and savings
                    </p>
                    <motion.button
                      className="mt-4 bg-pink-500 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-pink-600 transition-colors duration-300 ease-in-out"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      MORE
                    </motion.button>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="relative bg-[url('../src/assets/Reward.jpg')] bg-cover bg-center w-full lg:w-1/4 h-[25rem] rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
                <div className="relative z-10 flex items-center justify-center h-full text-white">
                  <div>
                    <h5 className="text-2xl font-bold mb-2">Rewards Card</h5>
                    <p className="text-center px-4">
                      Looking for a simple method to treat your loved ones? With
                      a oderdo gift card, you can give the gift of delicious
                      meals.
                    </p>
                    <motion.button
                      className="mt-4 bg-pink-500 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-pink-600 transition-colors duration-300 ease-in-out"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      MORE
                    </motion.button>
                  </div>{" "}
                </div>
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mt-[4rem] w-full">
            <div className="w-4/5">
              <h3 className="w-full bg-blue-900 text-white text-center text-xl py-2">
                ODERDO Covered Industries
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={Laundry}
                    alt="LaundryDelivery.jpg"
                    className="rounded-lg h-64 sm:h-80 w-full object-cover"
                  />
                  <h4 className="mt-2 font-bold">Laundry Delivery</h4>
                  <p className="mt-2">
                    By implementing laundry delivery software, you can expand
                    your business and connect with more potentil clients.
                  </p>
                  <motion.button
                    className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    See More
                  </motion.button>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={Food}
                    alt="FoodDelivery.jpg"
                    className="rounded-lg h-64 sm:h-80 w-full object-cover"
                  />
                  <h4 className="mt-2 font-bold">Food Delivery</h4>
                  <p className="mt-2">
                    With our personalized food delivery software solutions, you
                    can start your food delivery service in a matter of minutes.
                  </p>
                  <motion.button
                    className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    See More
                  </motion.button>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={Grocery}
                    alt="GroceryDelivery.jpg"
                    className="rounded-lg h-64 sm:h-80 w-full object-cover"
                  />
                  <h4 className="mt-2 font-bold">Grocery Delivery</h4>
                  <p className="mt-2">
                    With our complete customized application, you can launch
                    your grocery delivery business quickly.
                  </p>
                  <motion.button
                    className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    See More
                  </motion.button>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={Courier}
                    alt="CourierDelivery.jpg"
                    className="rounded-lg h-64 sm:h-80 w-full object-cover"
                  />
                  <h4 className="mt-2 font-bold">Courier Delivery</h4>
                  <p className="mt-2">
                    With our courier delivery application, you could begin with
                    speedy delivery and grow your courier delivery business to
                    new heights.
                  </p>
                  <motion.button
                    className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    See More
                  </motion.button>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={Pharma}
                    alt="PharmaDelivery.jpg"
                    className="rounded-lg h-64 sm:h-80 w-full object-cover"
                  />
                  <h4 className="mt-2 font-bold">Pharma Delivery</h4>
                  <p className="mt-2">
                    With our complete, customized Pharma delivery application,
                    you can quickly launch your pharmacy delivery business.
                  </p>
                  <motion.button
                    className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    See More
                  </motion.button>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={Ecommerce}
                    alt="E-commerceDelivery.jpg"
                    className="rounded-lg h-64 sm:h-80 w-full object-cover"
                  />
                  <h4 className="mt-2 font-bold">E-commerce Delivery</h4>
                  <p className="mt-2">
                    E-commerce delivery application is a valuable tool for
                    businesses of all sizes that sell products online.
                  </p>
                  <motion.button
                    className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    See More
                  </motion.button>
                </motion.div>
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={Flower}
                    alt="FlowerDelivery.jpg"
                    className="rounded-lg h-64 sm:h-80 w-full object-cover"
                  />
                  <h4 className="mt-2 font-bold">Flower Delivery</h4>
                  <p className="mt-2">
                    Create strong predefined applications for your flower shop
                    so you can easily start selling customers fresh flowers.
                  </p>
                  <motion.button
                    className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    See More
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBody;

// <div className="flex flex-col items-center justify-center mt-[4rem] w-full">
//   <div className="w-4/5">
//     <h3 className="w-full bg-blue-900 text-white text-center text-xl py-2">
//       ODERDO Covered Industries
//     </h3>
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
//       <div className="text-center">
//         <img
//           src={Laundry}
//           alt="LaundryDelivery.jpg"
//           className="rounded-lg h-64 sm:h-80 w-full object-cover"
//         />
//         <h4 className="mt-2 font-bold">Laundry Delivery</h4>
//         <p className="mt-2">Fresh clothes are just a tap away.</p>
//         <button className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg">
//           See More
//         </button>
//       </div>
//       <div className="text-center">
//         <img
//           src={Food}
//           alt="FoodDelivery.jpg"
//           className="rounded-lg h-64 sm:h-80 w-full object-cover"
//         />
//         <h4 className="mt-2 font-bold">Food Delivery</h4>
//         <p className="mt-2">
//           Discover a world of delicious meals delivered right to your doorstep. Order now and satisfy your cravings with ease!
//         </p>
//         <button className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg">
//           See More
//         </button>
//       </div>
//       <div className="text-center">
//         <img
//           src={Grocery}
//           alt="GroceryDelivery.jpg"
//           className="rounded-lg h-64 sm:h-80 w-full object-cover"
//         />
//         <h4 className="mt-2 font-bold">Grocery Delivery</h4>
//         <p className="mt-2">
//           Fresh groceries delivered to your door. Save time, shop smart, and enjoy more free moments.
//         </p>
//         <button className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg">
//           See More
//         </button>
//       </div>
//       <div className="text-center">
//         <img
//           src={Courier}
//           alt="CourierDelivery.jpg"
//           className="rounded-lg h-64 sm:h-80 w-full object-cover"
//         />
//         <h4 className="mt-2 font-bold">Courier Delivery</h4>
//         <p className="mt-2">
//           Reliable and efficient courier services at your fingertips. Send and receive packages with ease.
//         </p>
//         <button className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg">
//           See More
//         </button>
//       </div>
//       <div className="text-center">
//         <img
//           src={Pharma}
//           alt="PharmaDelivery.jpg"
//           className="rounded-lg h-64 sm:h-80 w-full object-cover"
//         />
//         <h4 className="mt-2 font-bold">Pharma Delivery</h4>
//         <p className="mt-2">
//           Get your medications delivered quickly and safely. Your health, our priority.
//         </p>
//         <button className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg">
//           See More
//         </button>
//       </div>
//       <div className="text-center">
//         <img
//           src={Ecommerce}
//           alt="E-commerceDelivery.jpg"
//           className="rounded-lg h-64 sm:h-80 w-full object-cover"
//         />
//         <h4 className="mt-2 font-bold">E-commerce Delivery</h4>
//         <p className="mt-2">
//           Shop from the comfort of your home and get your orders delivered hassle-free.
//         </p>
//         <button className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg">
//           See More
//         </button>
//       </div>
//       <div className="text-center">
//         <img
//           src={Flower}
//           alt="FlowerDelivery.jpg"
//           className="rounded-lg h-64 sm:h-80 w-full object-cover"
//         />
//         <h4 className="mt-2 font-bold">Flower Delivery</h4>
//         <p className="mt-2">
//           Express your love with beautiful blooms. Order fresh flowers for any occasion.
//         </p>
//         <button className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg">
//           See More
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
