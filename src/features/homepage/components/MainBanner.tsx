import Image from "next/image";
import React from "react";

const MainBanner = () => {
  return (
    <Image src="/banner.png" alt="Main Banner" width={500} height={500} className="w-full h-[25vh] md:h-[40vh] xl:h-[50vh]" />
  );
};

export default MainBanner;
