import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.svg";
import { Search, AlignJustify, X } from "lucide-react";
import MenuComponent from "./MenuComponent";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-Black w-full h-20 p-4 flex justify-between items-center relative">
      {/* Left Section */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="logo of the web" className="size-8" />
        <span className="text-white text-2xl font-serif mt-2 ">Abstract</span>
        <span className="text-white font-serif text-2xl hover:underline mt-2 ">
          | Help Center
        </span>
      </div>

      {/* Right Section */}
      <div className="flex space-x-2 ">
        <Search className="text-white md:hidden size-8 font-bold hover:scale-110" />
        {isMenuOpen ? (
          <X
            className="text-white md:hidden size-8 font-bold cursor-pointer"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
        ) : (
          <AlignJustify
            className="text-white md:hidden size-8 font-bold cursor-pointer"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
        )}
        <button className="border border-white rounded-lg px-4 py-2 text-white font-serif text-2xl hidden md:block">
          Submit a request
        </button>
        <button className="bg-Blue px-4 py-2 text-2xl font-serif text-white rounded-lg hidden md:block hover:bg-white hover:text-Black">
          Sign in
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-50 md:hidden"></div>
          <div ref={menuRef} className="absolute top-20 left-0 w-full z-50">
            <MenuComponent />
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
