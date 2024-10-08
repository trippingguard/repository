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
    <header className="mb-16">
      <nav className="bg-red-900 w-full">
        <div className="flex p-2 gap-3 justify-center pl-5 items-center w-full">
          <img src={logo} className="size-16 self-start" alt="" />
          <div className="text-slate-100 text-center text-2xl font-bold">
            <h1 className="">Judiciary of Tanzania</h1>
            <h2>High Court - Commercial Division</h2>
          </div>
          <img src={logo} className="size-16 self-end" alt="" />
          <div></div>
        </div>
      </nav>
      <ul className="bg-red-700 shadow w-full flex gap-3 justify-center">
        {menus.map((menu) => (
          <li
            key={menu}
            className="text-base p-2 cursor-pointer text-slate-200"
          >
            {menu}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
