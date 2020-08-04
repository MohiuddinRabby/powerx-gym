import React from "react";
import "./Home.css";
import Motiv from "../Motiv/Motiv";
import Service from "../Service/Service";
const Home = () => {
  return (
    <section>
      <div className="home-banner py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 description">
              <h1>THE BEST FITNESS</h1>
              <h1>STUDIO IN TOWN</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptates minus esse iste eum itaque vero exercitationem
                necessitatibus, ullam libero animi.
              </p>
              <button className="btn btn-warning">JOIN US</button>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <Motiv></Motiv>
        <Service></Service>
      </div>
    </section>
  );
};

export default Home;
