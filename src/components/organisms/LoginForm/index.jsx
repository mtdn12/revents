import React from "react";
import { Segment, Form, Button, Divider } from "semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";
import InputField from "../../atoms/InputField";
import SocialLogin from '../SocialLogin'

class LoginForm extends React.Component {
  render() {
    const { formItem, handleLogin, handleSocialLogin } = this.props;
    return (
      <Formik
        initialValues={formItem}
        validationSchema={Yup.object().shape({
          email: Yup.string().required("Email field is required").email("Please input a real email"),
          password: Yup.string().required("Password field is required")
        })}
        onSubmit={values => handleLogin(values)}
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
              <Button positive type="submit" fluid>
                Login
              </Button>
              <Divider horizontal>
                Or
              </Divider>
              <SocialLogin handleSocialLogin={handleSocialLogin}/>
            </Form>
          </Segment>
        )}
      />
    );
  }
}
export default LoginForm;
