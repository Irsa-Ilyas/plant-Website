import React from "react";
import Image from "next/image";

function Cards() {
  return (
    <div className="w-full">
      <div className="mt-4 w-full text-center text-4xl font-semibold">
        <h1>
          Our Top <span className="text-[#23A204] ">Categories</span>
        </h1>
      </div>
      <div className="mt-6 flex flex-wrap justify-around gap-4">
        {/* Card 1 */}
        <div className="w-full lg:w-[25%] md:w-[75%] sm:w-full h-40 flex items-center bg-[#b7e6a3] hover:bg-white rounded border transition-all duration-300 ease-in-out">
          <Image
            className="rounded-full mt-[-65px]"
            src="/assets/Cactus.png"
            alt="Garden Care"
            width={80}
            height={80}
            style={{ maxWidth: "100%" }}
          />
          <div className=" pl-4 flex flex-col justify-center items-center">
            <p className="text-lg ">Garden Care</p>
            <button className="p-2 bg-[#23A204] rounded text-white hover:opacity-75">
              Shop Now
            </button>
          </div>
        </div>
        {/* Card 2 */}
        <div className="w-full lg:w-[25%] md:w-[75%] sm:w-full h-40 flex items-center bg-[#b7e6a3] hover:bg-white rounded border transition-all duration-300 ease-in-out">
          <Image
            className="rounded-full mt-[-65px]"
            src="/assets/plant2.png"
            alt="Indoor Plants"
            width={80}
            height={80}
            style={{ maxWidth: "100%" }}
          />
          <div className="pl-4 flex flex-col justify-center items-center">
            <p className="   text-lg">Indoor Plants</p>
            <button className="p-2 bg-[#23A204] rounded text-white hover:opacity-75">
              Shop Now
            </button>
          </div>
        </div>
        {/* Card 3 */}
        <div className="w-full lg:w-[25%] md:w-[75%] sm:w-full h-35 flex items-center bg-[#b7e6a3] hover:bg-white rounded border transition-all duration-300 ease-in-out">
          <Image
            className="rounded-full mt-[-65px]"
            src="/assets/indoor.png"
            alt="Indoor Plants"
            width={80}
            height={80}
          />
          <div className="pl-4 flex flex-col justify-center items-center">
            <p className="text-lg">Indoor Plants</p>
            <button className="p-2 bg-[#23A204] rounded text-white hover:opacity-75">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
