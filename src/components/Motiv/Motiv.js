import React from "react";
import motiv1 from "../../assets/img/motiv1.jpg";
import motiv2 from "../../assets/img/motiv2.jpg";
import motiv3 from "../../assets/img/motiv3.jpg";
const Motiv = () => {
  return (
    <div>
      <div className="row py-5">
        <div className="col-md-4">
          <img src={motiv1}  style={{ width: "100%", height: "300px" }} alt="" />
        </div>
        <div className="col-md-4">
          <img src={motiv2} style={{ width: "100%", height: "300px" }} alt="" />
        </div>
        <div className="col-md-4">
          <img src={motiv3} style={{ width: "100%", height: "300px" }} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Motiv;
