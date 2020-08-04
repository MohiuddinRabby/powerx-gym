import React from "react";
import about from "../../assets/img/about.jpg";
const Service = () => {
  return (
    <div className="py-5">
      <div className="row">
        <div className="col-md-6">
          <img src={about} className="img-fluid" alt="" />
        </div>
        <div className="col-md-6 py-5">
          <h3>WE ARE HERE TO DREAM</h3>
          <h3>OUR TEAM IS HERE TO SERVE YOU</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            accusamus fugiat aliquid voluptates debitis magni sunt placeat,
            eligendi, officia tempore corporis neque quisquam itaque nam,
            incidunt nobis eveniet? Alias, ut.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
