import React from "react";
import "./Pwn.css";
import pwnOne from "../../img/Group 80.png";
import pwnTwo from "../../img/Group 81.png";
import pwnThree from "../../img/Group 82.png";
const Pwn = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 py-5" id="pwn1">
            <div className=" text-center">
              <div className="text-center">
                <img src={pwnOne} alt="" />
              </div>
              <h2>Progression</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Recusandae enim molestiae consequuntur explicabo nulla corporis?
              </p>
            </div>
          </div>
          <div className="col-md-4 py-5" id="pwn2">
            <div className=" text-center">
              <div className="text-center">
                <img src={pwnTwo} alt="" />
              </div>
              <h2>Progression</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Recusandae enim molestiae consequuntur explicabo nulla corporis?
              </p>
            </div>
          </div>
          <div className="col-md-4 py-5" id="pwn3">
            <div className=" text-center">
              <div className="text-center">
                <img src={pwnThree} alt="" />
              </div>
              <h2>Progression</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Recusandae enim molestiae consequuntur explicabo nulla corporis?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pwn;
