import React from "react";
import leaf from "../images/leaf.png";
import food from "../images/food.png";
import food2 from "../images/food2.png";
export default function Products() {
  return (
    <div>
      <div className="products main-products mt-max">
        <div className=" container d-flex flex-column align-items-center">
          <img src={leaf} alt="leaf" />
          <h3>Welcome to Nature</h3>
          <p className="w-50 text-center my-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="row gx-0 gy-0 my-5 w-100 text-center">
            <div className="col-lg-3 col-md-6">
              <img src={food} alt="food" />
            </div>
            <div className="col-lg-3 col-md-6">
              <img src={food2} alt="food" />
            </div>
            <div className="col-lg-3 col-md-6">
              <img src={food} alt="food" />
            </div>
            <div className="col-lg-3 col-md-6">
              <img src={food} alt="food" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
