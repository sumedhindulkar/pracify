import React from "react";
import logo from "../images/logo.png";
import fb from "../images/fb.png";
import insta from "../images/insta.png";
import linkedin from "../images/linkedin.png";
export default function Footer() {
  return (
    <div>
      <div className="footer mt-max d-flex align-items-center">
        <div className="container ">
          <div className="row gx-0 gy-0">
            <div className="col-lg-5 footerL ">
              <img src={logo} alt="logo" />
              <p className="text-white my-5 ">
                Lorem Ipsum is simply dummy text of the printing and
                <br /> typesetting industr idustry's standard.
              </p>
              <hr />
              <h5 className="text-white ">&#169; Copyright 2020 Sumedh</h5>
            </div>
            <div className="col-lg-7 row footerR">
              <div className=" col-6 col-md-3 col-lg-3">
                <ul>
                  <li>
                    <h4 className="text-white">Information</h4>
                  </li>
                  <hr />
                  <li>About Us</li>
                  <li>Products</li>
                  <li>Contact Us</li>
                  <li>Terms of service</li>
                </ul>
              </div>
              <div className=" col-6 col-md-4 col-lg-3">
                <ul>
                  <li>
                    <br />
                    <br />
                    <br />
                    About Us
                  </li>
                  <li>Products</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h3 className="text-white mb-3">Follow Us</h3>
                <hr />
                <img src={fb} alt="facebook" />
                <img className="px-3" src={linkedin} alt="facebook" />
                <img src={insta} alt="facebook" />
                <img className="px-3" src={linkedin} alt="facebook" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
