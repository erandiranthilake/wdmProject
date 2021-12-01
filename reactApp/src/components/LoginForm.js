import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import _ from "lodash";
import axios from "axios";

const LoginForm = () => {
  let history = useHistory();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        console.log(values);

        try {
          const res = await axios.get(
            `http://127.0.0.1:8000/api/serviceuser-email/${values.email}`
          );

          if (res.data.status === 200) {
            localStorage.setItem(
              "userRoles",
              JSON.stringify([res.data.serviceUser.Role])
            );
            localStorage.setItem("id", res.data.serviceUser.id);
            history.replace("/");
            window.location.reload();
          }
        } catch (error) {
          alert("Email or Password not valid");
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="email" name="email" class="input" placeholder="email" />
          <ErrorMessage name="email" component="div" />
          <Field
            type="password"
            name="password"
            class="input"
            placeholder="password"
          />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting} class="btn">
            LOGIN
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
