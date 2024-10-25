import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { CiUser } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="w-[60%] mx-auto h-[500px] my-auto">
      <form className="">
        <div className="relative w-[50%]">
          <span className="absolute inset-y-0 left-2 flex items-center text-gray-500">
          <CiUser />
          </span>
          <input
            type="text"
            className="pl-8 w-full h-[60px] border-b-2 border-[#888] bg-transparent placeholder:italic"
            placeholder="Name"
          />
        </div>
        <div className="relative w-[50%]">
          <span className="absolute inset-y-0 left-2 flex items-center text-gray-500">
            <TfiEmail />
          </span>
          <input
            type="text"
            className="pl-8 w-full h-[60px] border-b-2 border-[#888] bg-transparent placeholder:italic"
            placeholder="E-Mail"
          />
        </div>

        <textarea
          className="w-[85%] h-[250px] mt-3 border border-[#888] bg-transparent placeholder:italic placeholder:pl-4"
          placeholder="Your Comment"></textarea>
          <br/>
          <button className="leading-normal mb-3 text-sm bg-[#23a204] rounded  px-32 py-2 mt-5 text-white  hover:opacity-75">
       Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
