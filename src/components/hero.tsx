import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="grid md:grid-cols-3 p-10 sm:space-y-10 md:p-5 md:space-x-20 h-full md:h-[95vh]">
      <div className="grid place-items-center">
        <Image src="/hero.png" width={400} height={400} alt=""></Image>
      </div>
      <div className="md:col-span-2">
        <div className="flex flex-col space-y-4 h-full justify-center">
          <h1 className="mb-2 font-mono text-5xl text-gray-100 md:text-6xl">
            I&apos;m Yesid <span className="text-3xl md:text-5xl"></span>{" "}
            <br className="block md:hidden" />
          </h1>
          <div className="flex items-center w-max">
            <h1 className=" w-full animate-typing overflow-hidden whitespace-nowrap border-r-8 border-r-white pr-5 text-4xl text-white font-mono">
              AI Engineer
            </h1>
          </div>
          <span className="text-xl font-mono md:pr-16">
          Specializing in machine learning, I build web apps and design tailored testing strategies. 
          Passionate about continuous learning, I thrive in dynamic environments fostering 
          innovation and research. With expertise in MLOps, I deploy and scale ML models for 
          optimal performance.
          </span>
        </div>
      </div>
    </div>
  );
}
