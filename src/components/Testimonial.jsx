import React from "react";
import plant from "../images/plant.png";
import lady from "../images/lady.jpg";
import q from "../images/q.png";
import star from "../images/star.png";
export default function Testimonial() {
  return (
    <div className="testimonial">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <img className="quote-img" src={q} alt="q" />
        <div class="carousel-inner mt-max">
          <div class="carousel-item active">
            <div className="d-flex my-4 justify-content-center">
              <img className="lady-img mx-auto" src={lady} alt="lady" />
            </div>
            <h4 className="text-center my-4">Jane Doe</h4>
            <div className="star">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <p className="text-center mx-auto w-50">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div class="carousel-item">
            <div className="d-flex my-4 justify-content-center">
              <img className="lady-img mx-auto" src={lady} alt="lady" />
            </div>
            <h4 className="text-center my-4">Jane Doe</h4>
            <div className="star">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <p className="text-center mx-auto w-50">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div class="carousel-item">
            <div className="d-flex my-4 justify-content-center">
              <img className="lady-img mx-auto" src={lady} alt="lady" />
            </div>
            <h4 className="text-center my-4">Jane Doe</h4>
            <div className="star">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <p className="text-center mx-auto w-50">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div className="subscribe mt-max d-flex flex-column align-items-center">
        <h2>Subscribe to Our Newsletter</h2>
        <p className="text-center w-50 my-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <div className="newsletter">
          <input
            type="text"
            className="px-5 py-2"
            placeholder="Enter your email address"
          />
          <button className=" px-2 py-2">submit</button>
        </div>
      </div>
      <img className="plant" src={plant} alt="plant" />
    </div>
  );
}
