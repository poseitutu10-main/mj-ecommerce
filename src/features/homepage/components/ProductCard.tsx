import { Product } from "@/types";
import Image from "next/image";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div key={product.id} className=" rounded-lg flex flex-col">
      <div className="w-full relative mb-3">
        <Image
          src={product.image}
          alt={product.title}
          width={100}
          height={150}
          className="w-full h-[30vh] md:h-[40vh]"
        />
      </div>
      <h3 className="text-sm text-gray-800 font-semibold">{product.title}</h3>
      <p className="text-sm font-medium  mt-1">
        GHS {product.price.toLocaleString()}
      </p>
    </div>
  );
};

export default ProductCard;
