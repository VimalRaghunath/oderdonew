import React from "react";
import { motion } from "framer-motion";

function CalltoAction() {
  return (
    <div>
      <div className="bg-blue-900 text-white p-24 rounded-3xl">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl mb-8 font-bold">
            Oderdo Pickup and Delivery Application is simple to use
          </h3>
          <p className="text-center mb-8">
            Oderdo empowers businesses of all sizes to streamline their pickup
            and delivery operations. We are comprehensive software solutions
            designed to make managing deliveries efficient, cost-effective, and
            more.
          </p>
          <motion.button
            className="bg-pink-500 p-4 mt-2 w-40 rounded-xl text-lg font-bold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Try Now!
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default CalltoAction;
