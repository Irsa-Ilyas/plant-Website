/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-[#777777] font-bold  mt-3  text-justify">
      <div className="flex flex-wrap  justify-center gap-2 text-center w-full pt-6 ">
        <h6 className="hover:text-white">About Us</h6>
        <h6 className="hover:text-white">Gardening Tips</h6>
        <h6 className="hover:text-white">FAQ</h6>
        <h6 className="hover:text-white">Contact Us</h6>
        <h6 className="hover:text-white">Privacy Policy</h6>
        <h6 className="hover:text-white">Refund And Return Policy</h6>
        <h6 className="hover:text-white">Shipping Policy</h6>
        <h6 className="hover:text-white">Payment Policy</h6>
        <h6 className="hover:text-white">Order Cancellation Policy</h6>
        <h6 className="hover:text-white">Business Name</h6>
      </div>
      <br />
      <div className="flex flex-wrap justify-center  gap-2 w-full text-center">
        <h6 className="hover:text-white">Customer Service</h6>
        <h6 className="hover:text-white">Email: abc@gmail.com</h6>
        <h6 className="hover:text-white">
          WhatsApp Helpline: +92 322 33 38733
        </h6>
        <hr className="w-[100%] border-t border-gray-600 " />
        <h6 className="pb-4 hover:text-white text-center">
          © 2024 PlantBuddy.pk
        </h6>
      </div>
    </footer>
  );
}

export default Footer;
