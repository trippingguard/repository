// eslint-disable-next-line no-unused-vars
import React from "react";
//import "./Navbar.css";
import logo from "../../assets/logo_bl.png";

const Navbar = () => {
  const menus = [
    "Home",
    "About Us",
    "Causelist",
    "Publications",
    "Legislation",
    "Judgment & Ruling",
    "Forms",
    "Public Notice",
  ];
  return (
    <header className="mb-10 md:mb-24">
      <div className="bg-red-900">
        <nav className="px-2">
          <div className="flex md:justify-between items-center p-2 w-[980px] mx-auto">
            <img src={logo} className="size-14 md:size-24" alt="" />
            <div className="text-slate-100 text-center md:text-2xl font-bold">
              <h1 className="">High Court of Tanzania</h1>
              <h2>Commercial Division</h2>
            </div>
            <img src={logo} className="size-24 hidden md:block" alt="" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="size-8 md:hidden fill-slate-100"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
            </svg>
          </div>
        </nav>
        <ul className="hidden md:flex justify-center w-full gap-3 bg-red-700 shadow">
          {menus.map((menu) => (
            // eslint-disable-next-line react/jsx-key
            <li className="p-2 text-base cursor-pointer text-slate-200 hover:text-orange-200 hover:underline hover:underline-offset-4">
              {menu}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
