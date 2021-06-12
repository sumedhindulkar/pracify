import React from "react";
import b1 from "../images/b1.png";
import b2 from "../images/b2.png";
import b3 from "../images/b3.png";
export default function Brands() {
  return (
    <div>
      <div className="brand py-5">
        <div className=" container d-flex flex-column align-items-center">
          <h3>Proudly presented by</h3>
          <p className="w-50 text-center my-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div
            d="carouselExampleIndicators"
            data-ride="carousel"
            className="carousel slide row gx-0 gy-0 my-5 w-100 text-center"
          >
            <div className=" col">
              <img src={b1} alt="food" />
            </div>
            <div className=" col">
              <img src={b2} alt="food" />
            </div>
            <div className=" col ">
              <img src={b3} alt="food" />
            </div>
            <div className=" col">
              <img src={b2} alt="food" />
            </div>
            <div className=" col">
              <img src={b1} alt="food" />
            </div>
          </div>
          <div className="my-4">
            <a href="#">
              <span class="dot"></span>
            </a>
            <a href="#">
              <span class="dot"></span>
            </a>
            <a href="#">
              <span class="dot"></span>
            </a>
            <a href="#">
              <span class="dot"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
