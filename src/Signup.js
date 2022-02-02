import React, { Fragment } from "react";
import "./signup.css";
import { useFormik } from "formik";
import * as Yup from "yup";
const Signup = (props) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Exceeds character limit")
        .required("Required"),
      lastName: Yup.string()
        .max(15, "Exceeds character limit")
        .required("Required"),
      email: Yup.string().email("Invalid Email Address").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik.touched);

  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-container">
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <p>{formik.errors.firstName}</p>
          )}
        </div>
        <div className="input-container">
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <p>{formik.errors.lastName}</p>
          )}
        </div>
        <div className="input-container">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <p>{formik.errors.email}</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </Fragment>
  );
};
export default Signup;
