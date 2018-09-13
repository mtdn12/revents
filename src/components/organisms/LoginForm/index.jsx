import React from "react";
import { Segment, Form, Button, Header } from "semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";
import InputField from "../../atoms/InputField";

class LoginForm extends React.Component {
  render() {
    const { formItem, handleClose } = this.props;
    return (
      <Formik
        initialValues={formItem.toJS()}
        validationSchema={Yup.object().shape({
          email: Yup.string().required("Email field is required"),
          password: Yup.string().required("Password field is required")
        })}
        onSubmit={values => console.log(values)}
        enableReinitialize
        render={({
          values,
          handleChange,
          handleSubmit,
          handleBlur,
          errors,
          touched
        }) => (
          <Segment>
            <Form onSubmit={handleSubmit}>
              <InputField
                touched={touched.email}
                error={errors.email}
                placeholder="email"
                name="email"
                handleChange={handleChange}
                value={values.email}
                handleBlur={handleBlur}
                type="text"
              />
              <InputField
                touched={touched.password}
                error={errors.password}
                placeholder="Give your event a name"
                name="password"
                handleChange={handleChange}
                value={values.password}
                handleBlur={handleBlur}
                type="password"
              />
              <Button positive type="submit">
                Login
              </Button>
              <Button type="button" onClick={handleClose}>Cancel</Button>
            </Form>
          </Segment>
        )}
      />
    );
  }
}
export default LoginForm;
