import React from "react";
import Image from "next/image";

function Cards() {
  return (
    <div className="mt-4 w-full h-auto flex flex-wrap justify-between pt-4 gap-4 sm:items-center">
      <div className="w-full sm:w-1/3 md:w-1/4 h-40 flex items-center hover:bg-white rounded border p-4">
        <Image
          className="rounded-full"
          src="/assets/onboarding1.png"
          alt="hero"
          width={100}
          height={100}
        />
        <div className="ml-4">
          <p className="text-lg">Garden care</p>
          <p className="text-lg">$99.00</p>
        </div>
      </div>
      <div className="w-full sm:w-1/3 md:w-1/4 h-40 flex items-center hover:bg-white rounded border p-4">
        <Image
          className="rounded-full"
          src="/assets/onboarding1.png"
          alt="hero"
          width={100}
          height={100}
        />
        <div className="ml-4">
          <p className="text-lg">Indoor Plants</p>
          <p className="text-lg">$77.00</p>
        </div>
      </div>
      <div className="w-full sm:w-1/3 md:w-1/4 h-40 flex items-center hover:bg-white rounded border p-4">
        <Image
          className="rounded-full"
          src="/assets/onboarding1.png"
          alt="hero"
          width={100}
          height={100}
        />
        <div className="ml-4">
          <p className="text-lg">Herbal Plants</p>
          <p className="text-lg">$55.00</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
