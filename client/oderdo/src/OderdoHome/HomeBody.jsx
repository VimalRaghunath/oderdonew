import React from "react";
import oderdoBody from "../assets/oderdoBody.jpg";
import delivermap from "../assets/delivermap.jpg";
import Laundry from "../assets/LaundryDelivery.jpg";
import Food from "../assets/FoodDelivery.jpg";
import Grocery from "../assets/GroceryDelivery.jpg";
import Courier from "../assets/CourierDelivery.jpg";
import Pharma from "../assets/PharmaDelivery.jpg";
import Ecommerce from "../assets/E-commerceDelivery.jpg";
import Flower from "../assets/FlowerDelivery.jpg";

function HomeBody() {
  return (
    <div className="mt-40">
      <img src={oderdoBody} alt="oderdoBody.jpg" />
      <div className="p-8 bg-gray-100">
        <div className="text-center mt-16 space-y-8">
          <div className="bg-gray-200 p-8 rounded-lg">
            <h1 className="pb-5 font-bold">Track Orders to Your Door</h1>
            <div className="flex justify-center">
              <img
                src={delivermap}
                alt="delivermap.jpg"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="bg-gray-200 p-8 rounded-lg">
            <h3 className="pb-4 font-bold">ODERDO Covered Industries</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <img
                  src={Laundry}
                  alt="LaundryDelivery.jpg"
                  className="rounded-lg"
                />
                <h4 className="mt-2 font-bold"> Laundry Delivery </h4>
                <p className="mt-2"> Fresh clothes are just a tap away. </p>
                <button className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg">
                  See More
                </button>
              </div>
              <div className="text-center">
                <img src={Food} alt="FoodDelivery.jpg" className="rounded-lg" />
                <h4 className="mt-2 font-bold">Food Delivery</h4>
                <p className="mt-2">
                  {" "}
                  Discover a world of delicious meals delivered right to your
                  doorstep. Order now and satisfy your cravings with ease!{" "}
                </p>
                <button className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg">
                  See More
                </button>
              </div>
              <div className="text-center">
                <img
                  src={Grocery}
                  alt="GroceryDelivery.jpg"
                  className="rounded-lg"
                />
                <h4 className="mt-2 font-bold">Grocery Delivery</h4>
                <p className="mt-2">
                  Fresh groceries delivered to your door. Save time, shop smart,
                  and enjoy more free moments.
                </p>
                <button className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg">
                  See More
                </button>
              </div>
              <div className="text-center">
                <img
                  src={Courier}
                  alt="CourierDelivery.jpg"
                  className="rounded-lg"
                />
                <h4 className="mt-2 font-bold">Courier Delivery</h4>
                <p className="mt-2">
                  {" "}
                  Reliable and efficient courier services at your fingertips.
                  Send and receive packages with ease.
                </p>
                <button className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg">
                  See More
                </button>
              </div>
              <div className="text-center">
                <img
                  src={Pharma}
                  alt="PharmaDelivery.jpg"
                  className="rounded-lg"
                />
                <h4 className="mt-2 font-bold">Pharma Delivery</h4>
                <p className="mt-2">
                  Get your medications delivered quickly and safely. Your
                  health, our priority.
                </p>
                <button className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg">
                  See More
                </button>
              </div>
              <div className="text-center">
                <img
                  src={Ecommerce}
                  alt="E-commerceDelivery.jpg"
                  className="rounded-lg"
                />
                <h4 className="mt-2 font-bold">E-commerce Delivery</h4>
                <p className="mt-2">
                  Shop from the comfort of your home and get your orders
                  delivered hassle-free.
                </p>
                <button className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg">
                  See More
                </button>
              </div>
              <div className="text-center">
                <img
                  src={Flower}
                  alt="FlowerDelivery.jpg"
                  className="rounded-lg"
                />
                <h4 className="mt-2 font-bold">Flower Delivery</h4>
                <p className="mt-2">
                  Express your love with beautiful blooms. Order fresh flowers
                  for any occasion.
                </p>
                <button className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg">
                  See More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBody;
