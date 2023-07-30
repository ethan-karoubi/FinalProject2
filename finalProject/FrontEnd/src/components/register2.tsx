import React from "react";
import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import User from "../interfaces/User";
import { checkUser } from "../services/usersService";
import { successMsg } from "../services/feedbacks";

interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().required().email().min(5),
      password: yup.string().required().min(8),
    }),
    onSubmit: (values: User) => {
      checkUser(values)
        .then((res) => {
          navigate("/home");
          sessionStorage.setItem(
            "userData",
            JSON.stringify({ isLoggedIn: true })
          );
          successMsg("you logged in succesfully");
        })
        .catch((err) => console.log(err));
    },
  });
  return (
    <>
      <div className="container mt-3 col-md-4">
        <h3>REGISTER</h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="exampleInputEmail1">Email address</label>
            {formik.touched.email && formik.errors.email && (
              <p className="text-danger">{formik.errors.email}</p>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
          </div>
          <label htmlFor="exampleInputPassword1">Password</label>
          {formik.touched.password && formik.errors.password && (
            <p className="text-danger">{formik.errors.password}</p>
          )}

          <button
            type="submit"
            className="btn btn-secondary w-100 mt-3"
            disabled={!formik.dirty || !formik.isValid}
          >
            Login
          </button>
        </form>
        <Link className="mt-3" to="/login">
          Already have user? Login here
        </Link>
      </div>
    </>
  );
};

export default Register;
