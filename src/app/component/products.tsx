import Image from "next/image";
import React from "react";

function Products() {
  return (
    <div>
      <div className="mt-4 w-full text-center text-4xl">
        <h1 className="font-semibold">
          Our <span className="text-green-600 font-semibold">Products</span>
        </h1>
      </div>
      <div className="w-full flex flex-wrap justify-around items-center gap-4 mt-6">
        {/* Product 1 */}
        <div className="w-full sm:w-[48%] md:w-[22%] lg:w-[20%] bg-white hover:border-2 hover:border-[#c9c4c4] flex-shrink-0">
          <Image
            className="mx-auto pt-3"
            src="/assets/product1.webp"
            width={270}
            height={200}
            alt="product1"
          />
          <div className="text-center">
            <p className="text-[#777777] font-semibold">Flowering Plants</p>
            <p className="">Lavender Plant - Imported</p>
            <p className="text-black font-semibold">Rs-1100.00</p>
            <button className="p-1 mt-2 mb-2 bg-[#23A204] text-white hover:opacity-75">
              Add To Cart
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div className="w-full sm:w-[48%] md:w-[22%] lg:w-[20%] bg-white hover:border-2 hover:border-[#c9c4c4] flex-shrink-0">
          <Image
            className="mx-auto pt-3"
            src="/assets/product2.jpeg"
            width={270}
            height={200}
            alt="product2"
          />
          <div className="text-center">
            <p className="text-[#777777] font-semibold">Flowering Plants</p>
            <p className="">Lavender Plant - Imported</p>
            <p className="text-black font-semibold">Rs-2000.00</p>
            <button className="p-1 mt-2 mb-2 bg-[#23A204] text-white hover:opacity-75">
              Add To Cart
            </button>
          </div>
        </div>

        {/* Product 3 */}
        <div className="w-full sm:w-[48%] md:w-[22%] lg:w-[20%] bg-white hover:border-2 hover:border-[#c9c4c4] flex-shrink-0">
          <Image
            className="mx-auto pt-3"
            src="/assets/productid3.jpg"
            width={270}
            height={200}
            alt="product3"
          />
          <div className="text-center">
            <p className="text-[#777777] font-semibold">Flowering Plants</p>
            <p className="">Lavender Plant - Imported</p>
            <p className="text-black font-semibold">Rs-900.00</p>
            <button className="p-1 mt-2 mb-2 bg-[#23A204] text-white hover:opacity-75">
              Add To Cart
            </button>
          </div>
        </div>

        {/* Product 4 */}
        <div className="w-full sm:w-[48%] md:w-[22%] lg:w-[20%] bg-white hover:border-2 hover:border-[#c9c4c4] flex-shrink-0">
          <Image
            className="mx-auto pt-3"
            src="/assets/productid4.jpg"
            width={270}
            height={200}
            alt="product4"
          />
          <div className="text-center">
            <p className="text-[#777777] font-semibold">Flowering Plants</p>
            <p className="">Lavender Plant - Imported</p>
            <p className="text-black font-semibold">Rs-1100.00</p>
            <button className="p-1 mt-2 mb-2 bg-[#23A204] text-white hover:opacity-75">
              Add To Cart
            </button>
          </div>
        </div>

        {/* Product 5 */}
        <div className="w-full sm:w-[48%] md:w-[22%] lg:w-[20%] bg-white hover:border-2 hover:border-[#c9c4c4] flex-shrink-0">
          <Image
            className="mx-auto pt-3"
            src="/assets/productid8.webp"
            width={270}
            height={200}
            alt="product5"
          />
          <div className="text-center">
            <p className="text-[#777777] font-semibold">Flowering Plants</p>
            <p className="">Lavender Plant - Imported</p>
            <p className="text-black font-semibold">Rs-800.00</p>
            <button className="p-1 mt-2 mb-2 bg-[#23A204] text-white hover:opacity-75">
              Add To Cart
            </button>
          </div>
        </div>

        {/* Product 6 */}
        <div className="w-full sm:w-[48%] md:w-[22%] lg:w-[20%] bg-white hover:border-2 hover:border-[#c9c4c4] flex-shrink-0">
          <Image
            className="mx-auto pt-3"
            src="/assets/unpro.webp"
            width={270}
            height={200}
            alt="product6"
          />
          <div className="text-center">
            <p className="text-[#777777] font-semibold">Flowering Plants</p>
            <p className="">Lavender Plant - Imported</p>
            <p className="text-black font-semibold">Rs-1200.00</p>
            <button className="p-1 mt-2 mb-2 bg-[#23A204] text-white hover:opacity-75">
              Add To Cart
            </button>
          </div>
        </div>

        {/* Product 7 */}
        <div className="w-full sm:w-[48%] md:w-[22%] lg:w-[20%] bg-white hover:border-2 hover:border-[#c9c4c4] flex-shrink-0">
          <Image
            className="mx-auto pt-3"
            src="/assets/productid2.webp"
            width={270}
            height={200}
            alt="product7"
          />
          <div className="text-center">
            <p className="text-[#777777] font-semibold">Flowering Plants</p>
            <p className="">Lavender Plant - Imported</p>
            <p className="text-black font-semibold">Rs-750.00</p>
            <button className="p-1 mt-2 mb-2 bg-[#23A204] text-white hover:opacity-75">
              Add To Cart
            </button>
          </div>
        </div>

        {/* Product 8 */}
        <div className="w-full sm:w-[48%] md:w-[22%] lg:w-[20%] bg-white hover:border-2 hover:border-[#c9c4c4] flex-shrink-0">
          <Image
            className="mx-auto pt-3"
            src="/assets/productid7.jpg"
            width={270}
            height={200}
            alt="product8"
          />
          <div className="text-center">
            <p className="text-[#777777] font-semibold">Flowering Plants</p>
            <p className="">Lavender Plant - Imported</p>
            <p className="text-black font-semibold">Rs-1320.00</p>
            <button className="p-1 mt-2 mb-2 bg-[#23A204] text-white hover:opacity-75">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
