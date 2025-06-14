import React from "react";

function Header() {
  return (
    <div>
      <nav className="flex justify-around items-center p-8 ">
        <h1 className="text-4xl font-extrabold">
          <span className="text-white bg-normal rounded-sm px-2 ">T</span>harun
        </h1>
        <ul className="flex gap-10 text-2xl  justify-between items-center ">
          <li className="cursor-pointer ">
            <a href="">Home</a>
          </li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">Testimonials</li>
          <li className="cursor-pointer">Contact Us</li>
          <button className="bg-normal rounded-lg text-white text-center px-4 py-2">
            Download CV
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
