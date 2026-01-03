import React from "react";
import { categoryNav } from "../constants";
import CategoryNav from "./CategoryNav";

const CategoryHeader = () => {
  return (
    <header className="flex gap-3 my-5 overflow-x-auto scroll-smooth snap-x snap-mandatory">
      {categoryNav.map((nav: string, index: number) => (
        <CategoryNav key={index} nav={nav} />
      ))}
    </header>
  );
};

export default CategoryHeader;
