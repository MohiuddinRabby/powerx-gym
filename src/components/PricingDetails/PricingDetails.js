import React from "react";
import { Link } from "react-router-dom";

const PricingDetails = (props) => {
  console.log(props);
  const { billed, planName, price } = props.datas;
  return (
    <div>
      <h3>{billed}</h3>
      <h2>{planName}</h2>
      <h1>$ {price}</h1>
      <p>benefits</p>
      <p>benefits</p>
      <p>benefits</p>
      <p>benefits</p>
      <Link to="/purchase" className="btn btn-warning">
        PURCHASE
      </Link>
    </div>
  );
};

export default PricingDetails;
