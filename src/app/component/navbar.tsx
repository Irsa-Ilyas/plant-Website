import Image from "next/image";
import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div>
      <div className="w-full flex justify-around  flex-wrap items-center py-5 text-sm">
        <div className="flex items-center">
          <Image src="/assets/logo1.png" alt="hero" width={80} height={80} />
          <p className="font-bold text-sm ml-[-17px]">Plant Buddy</p>
        </div>
        <div>
          <ul className="flex gap-6">
            <li>
              <Link href={"#"}>Home</Link>
            </li>
            <li>
              <Link href={"#"}>About us</Link>
            </li>
            <li>
              <Link href={"#"}>Our Products</Link>
            </li>
            <li>
              <Link href={"#"}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
