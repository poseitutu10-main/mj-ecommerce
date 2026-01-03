"use client";
import Button from "@/components/common/Button";
import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";

const details = {
  id: 1,
  title: "Official shirt",
  image: ["/detail1.jpg", "/detail3.jpg", "/detail2.jpg", "/detail3.jpg"],
  category: "Fashion",
  price: 400,
  description:
    "A classic official shirt with a clean, tailored fit, breathable fabric, and a structured collar for a sharp, professional look.",
};

const features = [
  "Worldwide shipping",
  "Fast delivery",
  "Secure payment",
  "Quality guaranteed",
  "Easy returns",
  "Authentic product",
];

const ProductDetail = () => {
  const [activeImage, setActiveImage] = useState(details.image[0]);

  const handleActiveImage = (imgSrc: string) => {
    setActiveImage(imgSrc);
  };

  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div className="left w-full md:w-1/2 relative h-[40vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-md">
        <Image
          src={activeImage}
          width={100}
          height={100}
          alt={details.title}
          className="w-full h-full"
          priority
        />

        <div className="image-collection absolute bottom-4 left-4 flex flex-row items-center justify-center w-full">
          {details.image.map((imgSrc, index) => (
            <div
              key={index}
              className="inline-block m-2 w-12 h-12 md:w-20 md:h-20"
            >
              <Image
                src={imgSrc}
                width={50}
                height={50}
                alt={`${details.title} - ${index + 1}`}
                className={`w-full h-full object-cover rounded-2xl cursor-pointer ${
                  activeImage === imgSrc ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => handleActiveImage(imgSrc)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="right w-full  md:w-1/2 space-y-2">
        <span className="border border-gray-500 px-2 py-1 rounded-full text-xs text-gray-500">
          {details.category}
        </span>
        <h2 className="text-2xl md:text-4xl font-semibold text-[#D9B899]">
          {details.title}
        </h2>
        <span className="flex text-gray-500 text-sm md:text-base gap-2">
          <FaStar size={20} color="#DCAA53" />
          5-star ratings (250 reviews)
        </span>

        <span className="text-green-500 font-semibold">In stock</span>

        <p className="text-gray-400">
          A classic official shirt with a clean, tailored fit, breathable
          fabric, and a structured collar for a sharp, professional look.
        </p>

        <h2 className="text-3xl font-medium  my-2 ">GHS {details.price}</h2>

        <div className="w-full flex gap-5">
          <Button
            label="Add to Cart"
            styles="border border-[#D9B899] text-[#D9B899] px-4 py-2 rounded-md w-1/2 cursor-pointer hover-bg-[#f3e1d6]"
          />
          <Button
            label="Buy now"
            styles="bg-[#D9B899] text-white px-4 py-2 rounded-md w-1/2 cursor-pointer hover:bg-[#cfa880]"
          />
        </div>

        <div className="features mt-5 grid grid-cols-2 gap-2">
          {features.map((feature, index) => (
            <p key={index} className="text-gray-500 text-sm my-1 flex items-center gap-2">
              <IoCheckmark size={20} color="black" />
              {feature}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
