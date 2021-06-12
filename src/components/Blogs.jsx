import React from "react";
import leaf from "../images/leaf.png";
import food from "../images/food.png";
import food2 from "../images/food2.png";
function Blogs() {
  return (
    <div className="blogs mt-max">
      <div className="products mt-max">
        <div className="my-4 container d-flex flex-column align-items-center">
          <img src={leaf} alt="leaf" />
          <h3>Read Our Blogs</h3>
          <p className="w-50 text-center my-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="row gx-0 gy-0 my-5 w-100">
            <div className=" col-lg-4  ">
              <div className="blog">
                <img
                  className="blog-img"
                  src="https://images.unsplash.com/photo-1618840152526-92682643af2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                  alt="soap"
                />
                <h3 className="mt-3">Blog Post one</h3>
                <p className="p-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum industry's standard.
                </p>
                <p>
                  <a link="#">Read More </a>
                </p>
                <hr className="mx-auto" />
              </div>
            </div>
            <div className=" col-lg-4  ">
              <div className="blog">
                <img
                  className="blog-img"
                  src="https://images.unsplash.com/photo-1617394382964-61da0bbfcff7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="soap"
                />
                <h3 className="mt-3">Blog Post one</h3>
                <p className="p-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum industry's standard.
                </p>
                <p>
                  <a link="#">Read More </a>
                </p>
                <hr className="mx-auto" />
              </div>
            </div>
            <div className=" col-lg-4  ">
              <div className="blog">
                <img
                  className="blog-img"
                  src="https://images.unsplash.com/photo-1598561222812-63429c3eee2f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="soap"
                />
                <h3 className="mt-3">Blog Post one</h3>
                <p className="p-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum industry's standard.
                </p>
                <p>
                  <a link="#">Read More </a>
                </p>
                <hr className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
