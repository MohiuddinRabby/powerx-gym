import React from "react";
import "./Purchase.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Purchase = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
  };
  return (
    <div className="container py-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              name="firstname"
              ref={register({ required: true })}
              placeholder="FIRST NAME"
            />
            {errors.firstname && <p className="errorMsg">First Name requird</p>}
            <input
              type="text"
              name="lastname"
              ref={register({ required: true })}
              placeholder="LAST NAME"
            />
            {errors.lastname && <p className="errorMsg">Last Name requird</p>}
            <input
              type="date"
              name="dob"
              ref={register({ required: true })}
              placeholder="DATE OF BIRTH"
            />
            {errors.dob && <p className="errorMsg">Date requird</p>}
            <input
              type="text"
              name="city"
              ref={register({ required: true })}
              placeholder="CITY"
            />
            {errors.city && <p className="errorMsg">City name requird</p>}
          </div>
          <div className="col-md-6">
            <input
              type="EMAIL"
              name="email"
              ref={register({ required: true })}
              placeholder="EMAIL"
            />
            {errors.email && <p className="errorMsg">Email requird</p>}
            <input
              type="NUMBER"
              name="mobile"
              ref={register({ required: true })}
              placeholder="MOBILE NUMBER"
            />
            {errors.mobile && <p className="errorMsg">Mobile number requird</p>}
            <input
              type="NUMBER"
              name="postal"
              ref={register({ required: true })}
              placeholder="POST CODE"
            />
            {errors.postal && <p className="errorMsg">Postal code requird</p>}
          </div>
        </div>
        <Link to="/payment" className="btn btn-warning">Next</Link>
      </form>
    </div>
  );
};

export default Purchase;
