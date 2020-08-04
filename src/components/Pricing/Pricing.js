import React from "react";
import priceData from "../../priceData/priceData";
import { useState } from "react";
import PricingDetails from "../PricingDetails/PricingDetails";

const Pricing = () => {
  const data = priceData;
  const [pricingData, setPricingData] = useState(data);
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          {pricingData.map((pd) => (
            <div key={pd.id} className="col-md-4">
              <PricingDetails datas={pd}></PricingDetails>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
