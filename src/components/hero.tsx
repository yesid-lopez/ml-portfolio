import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="grid md:grid-cols-3 p-5 gap-4 h-[95vh]">
      <div className="grid place-items-center">
        <Image src="/hero.png" width={400} height={400} alt=""></Image>
      </div>
      <div className="md:col-span-2">
        <div className="flex flex-col space-y-4 h-full justify-center">
          <span className="font-medium">Hello World,</span>
          <span className="text-4xl">I am AI Engineer</span>
          <span className="font-medium pr-16">
            I'm skilled in web app development, needs-based testing, and MLOps,
            including deploying and scaling models. I thrive in environments
            that foster growth, innovation, and research. Passionate about
            teaching and leveraging cutting-edge devices for inference when
            required.
          </span>
          <span>I love cats</span>
        </div>
      </div>
    </div>
  );
}
