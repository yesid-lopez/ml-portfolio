import React from "react";
import Image from "next/image";

export default function Project() {
  return (
    <div className="flex flex-col border">
      <div className="flex justify-center">
        <Image alt="" src={"/project.png"} width={500} height={500} />
      </div>
      <div className="px-3">
        <p className="font-bold text-left">Project title</p>
        <p className="font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          pretium maximus nibh et fringilla. Donec ut maximus purus. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Fusce mollis.
        </p>
        <button className="rounded-full bg-blue-500 px-3 p-1 font-light text-white">open project</button>
      </div>
    </div>
  );
}
