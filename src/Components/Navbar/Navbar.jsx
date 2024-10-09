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
    <header className="mb-24">
      <nav className="bg-red-900">
        <div className="flex items-center justify-between w-9/12 gap-3 p-3 mx-auto">
         <div><img src={logo} className="size-16" alt="" /></div> 
          <div className="text-2xl font-bold text-center text-slate-100">
            <h1 className="">High Court of Tanzania</h1>
            <h2>Commercial Division</h2>
          </div>
          <div> <img src={logo} className="size-16" alt="" /></div>
        </div>
      </nav>
      <ul className="flex justify-center w-full gap-3 bg-red-700 shadow">
        {menus.map((menu) => (
          // eslint-disable-next-line react/jsx-key
          <li className="p-2 text-base cursor-pointer text-slate-200 hover:text-orange-200 hover:underline hover:underline-offset-4">
            {menu}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
