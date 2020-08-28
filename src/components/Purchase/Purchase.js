import React from "react";
import { useForm } from "react-hook-form";
// import { useEffect } from "react";

const Purchase = () => {
  const { register, handleSubmit, errors } = useForm();
  // useEffect(() => {
  //   fetch("https://bdgym.herokuapp.com/api/v1/catagories")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("data", data);
  //     });
  // }, []);
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="py-5 pNav">
      <div className="container py-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>FirstName</label>
                <input
                  type="text"
                  className="form-control"
                  name="fname"
                  ref={register({ required: true })}
                />
                {errors.fname && (
                  <p className="text-danger">FirstName required</p>
                )}
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  ref={register({ required: true })}
                />
                {errors.email && <p className="text-danger">email required</p>}
              </div>
              <div className="form-group">
                <label>Date of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  name="dob"
                  ref={register({ required: true })}
                />
                {errors.email && (
                  <p className="text-danger">date of birth required required</p>
                )}
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  placeholder="Street 10 road 8"
                  ref={register({ required: true })}
                />
                {errors.address && (
                  <p className="text-danger">address required required</p>
                )}
              </div>
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  ref={register({ required: true })}
                />
              </div>
              {errors.address && (
                <p className="text-danger">city required required</p>
              )}
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>LastName</label>
                <input
                  type="text"
                  className="form-control"
                  name="lname"
                  ref={register({ required: true })}
                />
              </div>
              {errors.address && (
                <p className="text-danger">last name required required</p>
              )}
              <div className="form-group">
                <label>Mobile</label>
                <input
                  type="number"
                  className="form-control"
                  name="mobile"
                  ref={register({ required: true })}
                />
                {errors.address && (
                  <p className="text-danger">mobile required required</p>
                )}
              </div>
              <div className="form-group">
                <label>Gender</label>
                <select className="form-control">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="form-group">
                <label>Postal code</label>
                <input
                  type="number"
                  className="form-control"
                  name="postal"
                  ref={register({ required: true })}
                />
              </div>
              {errors.address && (
                <p className="text-danger">postal required required</p>
              )}
              <button className="btn btn-warning">
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Purchase;
