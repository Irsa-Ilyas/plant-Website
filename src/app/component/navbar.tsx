/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaLuggageCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";

function Navbar() {
  return (
    <div>
      <div className="w-full flex justify-around flex-wrap items-center py-1 text-lg">
        <div className="flex items-center">
          <Image src="/assets/logo1.png" alt="hero" width={100} height={100} />
          <p className="font-bold text-sm ml-[-17px]">Plant Buddy</p>
        </div>
        <div>
          <ul className="flex gap-4 text-black font-medium">
            <li className="underline underline-offset-4">
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About us</Link>
            </li>
            <li>
              <Link href={"/product"}>Our Products</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex text-3xl gap-3 text-green-600">
          <FaLuggageCart />
          <FaRegHeart />
          <IoIosContacts />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
