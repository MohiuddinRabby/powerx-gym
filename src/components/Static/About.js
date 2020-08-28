import React from "react";
import aboutImg from "../../img/about.jpg";
const About = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={aboutImg}
              style={{ width: "100%", height: "600px" }}
              alt="aboutImg"
            />
          </div>
          <div className="col-md-6" id="about-des">
            <div className="py-5">
              <h1 style={{ fontWeight: "bold" }} className="text-warning">
                WE HERE TO DREAM!
              </h1>
              <h2>Our team is here to serve you</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                cumque minima debitis. Facere, repellat consequatur vero sit
                totam neque quisquam! Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Iure qui alias neque tenetur, a est obcaecati?
                At libero molestias iusto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
