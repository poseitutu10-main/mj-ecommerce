import React from "react";

const CategoryNav = ({ nav }: { nav: string }) => {
  return (
    <nav className="bg-gray-200 px-4 sm:px-6 py-2 rounded-full text-gray-700 cursor-pointer text-xs sm:text-sm whitespace-nowrap inline-flex items-center">
      {nav}
    </nav>
  );
};

export default CategoryNav;
