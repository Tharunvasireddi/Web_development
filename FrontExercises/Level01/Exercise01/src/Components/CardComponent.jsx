import React from "react";
import logo1 from "../assets/logo1.png";

const CardComponent = ({ title, description, logo, link }) => {
  return (
    <div className="flex p-10 m-10 items-center justify-between space-x-8">
      <div>
        <img src={logo} alt="" className="size-24" />
      </div>
      <div className="flex flex-col space-y-4 flex-1">
        <h1 className="font-bold text-Black text-2xl">{title}</h1>
        <p className="font-medium text-xl">{description}</p>
        <a href="" className="text-2xl hover:underline text-Blue">
          {link}→
        </a>
      </div>
    </div>
  );
};

export default CardComponent;
