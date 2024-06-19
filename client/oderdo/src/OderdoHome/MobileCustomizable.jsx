import React from "react";
import MobileMap from "../assets/MobileeMap.jpg";
import CustomApps from "../assets/CustomApps.jpg";
import Custom24 from "../assets/Custom24.jpg";
import CustomCoast from "../assets/CustomCoast.jpg";
import CustomPersonalization from "../assets/CustomPersonalization.jpg";
import CustomYourApp from "../assets/CustomYourApp.jpg";
import CustomSmartWorker from "../assets/CustomSmartWorker.jpg";
import { motion } from "framer-motion";

function MobileCustomizable() {
  return (
    <div className="flex flex-col items-center justify-center mt-[4rem] w-full">
      <div className="w-4/5">
        <div>
          <h1 className="w-full bg-blue-900 text-white text-center text-xl py-2">
            Fully Customizable
          </h1>
          <div className="flex lg:flex-row items-start justify-center gap-[1rem] mt-20">
            <div className="mr-0 lg:mr-20">
              <motion.img
                className="max-w-xs md:max-w-sm lg:max-w-md h-auto"
                src={MobileMap}
                alt="Mobile Map"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            </div>
            <div className="flex flex-col gap-16 mb-[5rem]">
              <div className="flex justify-center gap-[2rem]">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    className="h-[5rem] w-auto"
                    src={CustomApps}
                    alt="CustomApps.jpg"
                  />
                  <h4 className="text-2xl font-bold">User App</h4>
                  <p className="">
                    The Pickup and Delivery app allows users to track their
                    orders in real-time and receive SMS updates, ensuring they
                    are always informed about their order status.
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    className="h-[5rem] w-auto"
                    src={Custom24}
                    alt="Custom24.jpg"
                  />
                  <h4 className="text-2xl font-bold">24/7 Assistance</h4>
                  <p className="">
                    Offer assistance 24/7, contact us at any moment if you have
                    any problems with pickup or delivery.
                  </p>
                </motion.div>
              </div>
              <div className="flex justify-center gap-[13rem]">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    className="h-[5rem] w-auto"
                    src={CustomCoast}
                    alt="CustomCoast.jpg"
                  />
                  <h4 className="text-2xl font-bold">Cost Effective</h4>
                  <p className="">
                    Receive affordable solutions and the newest features added
                    to your application.
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    className="h-[5rem] w-auto"
                    src={CustomPersonalization}
                    alt="CustomPersonalization.jpg"
                  />
                  <h4 className="text-2xl font-bold">Personalization</h4>
                  <p className="">
                    Make an impression on your competitors by modifying the
                    application to your needs.
                  </p>
                </motion.div>
              </div>
              <div className="flex justify-center gap-[14rem]">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    className="h-[5rem] w-auto"
                    src={CustomYourApp}
                    alt="CustomYourApp.jpg"
                  />
                  <h4 className="text-2xl font-bold">Smart Admin Panel</h4>
                  <p className="">
                    The Pickup app provides real-time performance data for
                    pickup and delivery operations, allowing users to monitor
                    key metrics from the dashboard.
                  </p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    className="h-[5rem] w-auto"
                    src={CustomSmartWorker}
                    alt="CustomSmartWorker.jpg"
                  />
                  <h4 className="text-2xl font-bold">Dispatch Team</h4>
                  <p className="">
                    The Pickup app's live chat feature enables instant
                    communication to resolve issues quickly. It supports the
                    transfer of unexpected orders, ensuring flexibility and
                    reliability.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // {/* <div className="flex flex-col space-y-4 mr-[18rem]">
    //   <div className="flex justify-between items-center w-full">
    //     <img
    //       className="h-[5rem] w-auto"
    //       src={CustomApps}
    //       alt="CustomApps.jpg"
    //     />
    //     <img
    //       className="h-[5rem] w-auto"
    //       src={Custom24}
    //       alt="Custom24.jpg"
    //     />
    //   </div>
    //   <div className="flex justify-between items-center w-full">
    //     <img
    //       className="h-[5rem] w-auto"
    //       src={CustomCoast}
    //       alt="CustomCoast.jpg"
    //     />
    //     <img
    //       className="h-[5rem] w-auto"
    //       src={CustomPersonalization}
    //       alt="CustomPersonalization.jpg"
    //     />
    //   </div>
    //   <div className="flex justify-between items-center w-full">
    //     <img
    //       className="h-[5rem] w-auto"
    //       src={CustomYourApp}
    //       alt="CustomYourApp.jpg"
    //     />
    //     <img
    //       className="h-[5rem] w-auto"
    //       src={CustomSmartWorker}
    //       alt="CustomSmartWorker.jpg"
    //     />
    //   </div>
    // </div> */}
  );
}

export default MobileCustomizable;
