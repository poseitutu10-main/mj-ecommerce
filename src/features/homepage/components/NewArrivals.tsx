import { Product } from "@/types";
import React from "react";
import ProductCard from "./ProductCard";

const products: Product[] = [
  {
    id: 1,
    title: "Executive shoe",
    image: "/product1.png",
    price: 400,
  },
  {
    id: 2,
    title: "Hoodie",
    image: "/product.png",
    price: 550,
  },
  {
    id: 3,
    title: "Casual shoe",
    image: "/product2.png",
    price: 200,
  },
  {
    id: 4,
    title: "Advanced executive shoe",
    image: "/product3.png",
    price: 500,
  },
  {
    id: 5,
    title: "Hoodie",
    image: "/product.png",
    price: 5500,
  },
  {
    id: 6,
    title: "Advanced executive shoe",
    image: "/product3.png",
    price: 1000,
  },
];

const NewArrivals = () => {
  return (
    <div className="my-5">
      <h2 className="md:text-xl font-semibold">New Arrivals</h2>
      {/* Placeholder for new arrivals products */}
      <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
