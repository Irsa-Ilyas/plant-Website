import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="w-full flex justify-around items-center flex-wrap">
      <div className="w-1/2">
        <button className="bg-[#ccdfc7] rounded px-5 py-2">Oxygen Plant</button>
        <h1 className="text-7xl font-bold  leading-relaxed text-green-600  ">
          Keep Your <span>Plants Healthy</span>
        </h1>
        <p className="leading-normald">
          Plants Reduce Stress Level And Boost Your Mood - Making <br />
          Them Perfect For Your Home And Your Workspace, Too
        </p>
        <button className="leading-normal mb-3 text-sm bg-[#23a204] rounded px-5 py-2 mt-5 text-white">
          See More
        </button>
      </div>
      <div className="rounded-full bg-[rgba(184,212,168,255)] md:mt-10 sm:mt-5">
        <Image
          className="rounded-full"
          src="/assets/onboarding1.png"
          alt="hero"
          width={350}
          height={350}
        />
      </div>
    </div>
  );
}

export default Hero;
