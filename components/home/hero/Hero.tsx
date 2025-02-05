import { BaseInfo } from "@/app/data/data";
import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="w-full pt-[4vh] md:pt-[25vh] overflow-x-hidden relative pt-40 md:pt-0 md:mb-10">
      <div className="flex justify-center flex-col w-4/5 h-full m-auto  text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* content */}
          <div className="">
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold">
              Soy {BaseInfo.name}
            </h1>
            <h1 className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] xl:leading[3.5rem] xl:leading-[4rem] text-white">
              {BaseInfo.position}
            </h1>

            <p className="mt-6 text-sm md:text-base text-white text-opacity text-opacity-90">
              {BaseInfo.description}
            </p>
          </div>

          {/* image */}

          <div className="mx-auto lg:block rounded-[3rem] md:w-20 xl:w-96 aspect-square">
            <Image
              src={BaseInfo.profilePic}
              alt={BaseInfo.name}
              width={300}
              height={200}
              className="object-cover object-top rounded-full w-full h-56 w-56 md:h-96 md:w-96 "
            />
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
