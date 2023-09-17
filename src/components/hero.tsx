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
            I have experience building web applications and creating needs-based
            testing strategies. I enjoy working in companies that allow me to
            grow, learn, innovate and do research. I enjoy teaching others and
            learning new things. Additionally, I have experience in MLOps
            deploying models to production, scaling them, testing them, and
            using cutting-edge devices for inference when it is needed.
          </span>
        </div>
      </div>
    </div>
  );
}
