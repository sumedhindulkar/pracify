import React from "react";
import flower from "../images/top-flower.png";
import design from "../images/top-design.png";
export default function Header() {
  return (
    <div className=" main-section d-flex justify-content-center align-items-center">
      <div className="header container">
        <div className="row gy-0 gx-0">
          <div className="col left">
            <h2>Healthy life with</h2>
            <h1>Nature Organic</h1>
            <p className="my-4">
              Vegetables are the edible parts of plant <br /> that is used in
              cooking or can be eaten now.
            </p>
            <button type="button" class="btn px-4 py-2">
              <h5 className="text-white">Explore now</h5>
            </button>
          </div>
          <div className="col right d-flex justify-content-center align-items-center mt-md-4">
            <img src={flower} class="flower" alt="flower" />
            <img src={design} class="design" alt="design" />
          </div>
        </div>
      </div>
    </div>
  );
}
