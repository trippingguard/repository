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
    <header>
      <nav className="flex items-center justify-center gap-3 p-2 pl-5 bg-red-400">
        <img src={logo} className="size-16" alt="" />
        <div className="text-2xl font-bold text-center text-slate-100">
          <h1 className="">Judiciary of Tanzania</h1>
          <h2>High Court - Commercial Division</h2>
        </div>
        <img src={logo} className="size-16" alt="" />
        <div></div>
      </nav>
      <ul className="flex justify-center w-full gap-3 bg-red-700 shadow">
        {menus.map((menu) => (
          // eslint-disable-next-line react/jsx-key
          <li className="p-2 text-base cursor-pointer text-slate-200">
            {menu}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
