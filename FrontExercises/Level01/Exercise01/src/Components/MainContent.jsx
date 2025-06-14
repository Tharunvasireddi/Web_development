import React from "react";
import { MoveRight } from "lucide-react";

const MainContent = () => {
  return (
    <div className="bg-gray flex flex-col items-center justify-center p-10 h-96 space-y-3">
      <h1 className="text-Black text-8xl font-sans  font-semibold ">
        How can we help?
      </h1>
      <div className="relative inline-block mt-4">
        <input
          type="text"
          placeholder="Search"
          className=" text-xl text-Black rounded-lg  border inline border-b-Black p-7 h-10 w-[800px] mx-auto "
        />
        <MoveRight className="absolute bottom-4 right-4 inline" />
      </div>
    </div>
  );
};

export default MainContent;
