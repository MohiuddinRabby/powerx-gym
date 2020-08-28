import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <React.Fragment>
      <header id="banner" className="py-5">
        <div className="dark-overlay py-5">
          <div className="container banner-inner py-5">
            <div className="row">
              <div className="col-md-6 py-5">
                <h1>THE BEST FITNESS STUDIO</h1>
                <h1>IN TOWN</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam voluptatibus temporibus assumenda magni quibusdam,
                  cupiditate aliquam aut similique qui deleniti!
                </p>
                <Link to="/purchase" className="btn btn-warning">Join us</Link>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
