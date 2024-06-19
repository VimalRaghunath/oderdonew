import React from "react";
import FullSupport from "../assets/Aboutus/24Support.jpg";
import Secured from "../assets/Aboutus/Secured.jpg";
import POS from "../assets/Aboutus/POS.jpg";
import OurGoal from "../assets/Aboutus/OurGoal.jpg";
import PartnershipOppertunities from "../assets/Aboutus/PartnershipOppertunities.jpg";
import MovedTechnology from "../assets/Aboutus/MovedTechnology.jpg";
import DoRide from "../assets/Aboutus/DoRide.jpg";


function AboutusBody() {
  return (
    <div>
      <div className="bg-gray-200 p-6 rounded-lg mb-[14rem]">
        <h1 className="pb-5 font-bold"></h1>
        <div className="flex flex-wrap justify-center gap-1 space-y-4 lg:space-y-0">
          <div className="relative bg-[url()] bg-cover bg-center w-full lg:w-1/4 h-[25rem] rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gray-900 opacity-50 rounded-3xl"></div>
            <div className="relative z-10 flex items-center justify-center h-full text-white">
              <div className="flex flex-col items-center justify-center gap-2">
                <img
                  src={POS}
                  alt="POS.jpg"
                  className="h-[9rem] w-auto mt-[1rem]"
                />
                <div>
                  <h5 className="flex justify-center text-2xl font-bold mb-2">
                    POS
                  </h5>
                  <p className="text-center px-4">
                    We provide you the best post integration after a deep study
                    of laundry cleaning business management
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative bg-[url()] bg-cover bg-center w-full lg:w-1/4 h-[25rem] rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gray-900 opacity-50 rounded-3xl"></div>
            <div className="relative z-10 flex items-center justify-center h-full text-white">
              <div className="flex flex-col items-center justify-center gap-1">
                <img
                  src={Secured}
                  alt="Secured.jpg"
                  className="h-[9rem] w-auto"
                />
                <div>
                  <h5 className="flex text-2xl justify-center font-bold mb-2">
                    Secured
                  </h5>
                  <p className="text-center px-4">
                    {" "}
                    We give you optimum to impress peoples your services
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative bg-[url()] bg-cover bg-center w-full lg:w-1/4 h-[25rem] rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gray-900 opacity-50 rounded-3xl"></div>
            <div className="relative z-10 flex items-center justify-center h-full text-white">
              <div className="flex flex-col items-center justify-center gap-7">
                <img
                  src={FullSupport}
                  alt="24Support.jpg"
                  className="h-[7rem] w-auto mt-[1rem]"
                />
                <div>
                  <h5 className="flex text-2xl justify-center font-bold mb-2">
                    24/7 Support
                  </h5>
                  <p className="text-center px-4">
                    We support our clients as well as partners through a live
                    cabin
                  </p>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-[2rem] bg-gray-50">
        <div className="flex justify-center w-[80rem] bg-blue-900 text-white text-center text-2xl py-2 shadow-md" >
          What We Do
        </div>
      </div>
      <div className="m-10 mt-[4rem] ml-[8rem] text-light-blue-900 text-2xl font-serif font-bold font underline ">
        Our Goal
      </div>
      <div className="flex flex-col md:flex-row items-start p-8 rounded-lg ">
        <img
          src={OurGoal}
          alt="OurGoal.jpg"
          className="md:ml-[8rem] h-[30rem] rounded-lg mb-4 md:mb-0"
        />
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide md:ml-8">
          Our goal is to provide outstanding service to our partners and clients
          by utilizing a strong platform that serves a wide range of industries.
          We help businesses of all kinds provide dependable and effective
          services. Whether you're running a restaurant, laundry service,
          grocery store, courier service, e-commerce platform, flower shop,
          pharmacy, or any other type of business, Oderdo gives you the tools
          you need to succeed. By accomplishing our goals, we clear the path for
          a time when people and businesses will benefit from easy and reliable
          access to basic services.
        </p>
      </div>
      <div className="m-10 mt-[4rem] ml-[8rem] text-light-blue-900 text-2xl font-serif font-bold font underline ">
        Partnership Opportunities
      </div>
      <div className="flex flex-col md:flex-row items-start p-8 rounded-lg ">
        <img
          src={PartnershipOppertunities}
          alt="PartnershipOppertunities.jpg"
          className="md:ml-[8rem] h-[30rem] rounded-lg mb-4 md:mb-0"
        />
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide md:ml-8">
          We take great satisfaction in having a wide range of partners. By
          joining forces with restaurants, laundry services, grocery stores,
          courier services, e-commerce platforms, flower shops, pharmacies, and
          more, we ensure that our customers have access to diverse services in
          one place. This integrated approach allows us to provide unparalleled
          convenience and reliability. Oderdo provides full partnership
          services, such as help, marketing, and promotion, in addition to our
          delivery services. By boosting their visibility, encouraging consumer
          interaction, and giving them the resources they need to succeed in a
          competitive marketplace, we assist our partners in expanding their
          companies.
        </p>
      </div>
      <div className="m-10 mt-[4rem] ml-[8rem] text-light-blue-900 text-2xl font-serif font-bold font underline ">
        Moved by Technology
      </div>
      <div className="flex flex-col md:flex-row items-start p-8 rounded-lg ">
        <img
          src={MovedTechnology}
          alt="MovedTechnology.jpg"
          className="md:ml-[8rem] h-[30rem] rounded-lg mb-4 md:mb-0"
        />
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide md:ml-8">
          Fueled by cutting-edge technology, Oderdo has developed a simple and
          dependable system to fulfill hundreds of thousands of requests
          concurrently across the globe. Our technology has opened new
          opportunities for laundry, grocery, food delivery, pharmacy delivery,
          e-commerce, flower delivery, car washing services, and more to expand
          their operations through delivery, often for the first time. This
          innovation has provided riders with flexible employment options and
          ultimately delivered an exceptional experience for our customers.
          Based on sophisticated machine learning, Oderdo’s logistics technology
          continuously improves delivery operations, neighborhood by
          neighborhood. Our proprietary Frank algorithm determines the optimal
          way to connect riders, businesses, and customers, ensuring a
          best-in-class logistical solution. As Frank evolves, our efficiency
          and effectiveness will only get better.
        </p>
      </div>
      <div className="m-10 mt-[4rem] ml-[8rem] text-light-blue-900 text-2xl font-serif font-bold font underline ">
        Do Ride
      </div>
      <div className="flex flex-col md:flex-row items-start p-8 rounded-lg ">
        <img
          src={DoRide}
          alt="DoRide.jpg"
          className="md:ml-[8rem]  w-[44rem] rounded-lg mb-4 md:mb-0"
        />
        <p className="text-gray-800 text-lg leading-relaxed tracking-wide md:ml-8">
          We base our offering to riders on the qualities they identify as being
          most important. Our ability to prioritise the things that riders care
          about most—flexible work, good pay, and security—has been made
          possible by our understanding of what matters most to riders. Among
          the first delivery services to offer free third-party liability and
          personal injury insurance to all self-employed riders worldwide was
          oderdo. Riders are covered by this complimentary cover as soon as they
          place their first order with Oderdo.
        </p>
      </div>
      <div>
        <h4>Innovation, Delivered in Business</h4>
      </div>
    </div>
  );
}

export default AboutusBody;
