// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Courts.css";
import court_img from "../../assets/crt_red.png";

const Courts = () => {
  return (
    <div className="court container mb-16">
      <ul>
        <li>
          <div className="court-text">
            <button className="btn">
              <img src={court_img} alt="" />
            </button>
          </div>
        </li>
        <li>
          <div className="court-text">
            <button className="btn">
              <img src={court_img} alt="" />
            </button>
          </div>
        </li>
        <li>
          <div className="court-text">
            <button className="btn">
              <img src={court_img} alt="" />
            </button>
          </div>
        </li>
        <li>
          <div className="court-text">
            <button className="btn">
              <img src={court_img} alt="" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Courts;
