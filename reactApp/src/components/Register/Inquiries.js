import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import './Registration.css';

const Inquiries = () => {
    return (<Formik
      initialValues={{ inquiry: ""}}
      validate={(values) => {
        const errors = {};
        if (!values.serviceName) {
          errors.serviceName = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
      }}
    >
      {({ isSubmitting }) => (
      <div class="orderForm">
          <div class="heading">
              <h1>Enter Inquiry Details</h1>
          </div>
        <Form>
          <Field type="text" name="inquiry" value="" placeholder="Inquiry/ Comment" class="input"/>
          <ErrorMessage name="serviceName" component="div" />
          
          <button type="submit" disabled={isSubmitting} class="btn">
          Register
          </button>
        </Form>
      </div>
      )}
    </Formik>
    );
  }
  
  export default Inquiries;