import React from "react";
import {
  Segment,
  Header,
  Form,
  Divider,
  Label,
  Button,
  Icon
} from "semantic-ui-react";
import { Formik } from "formik";
import * as Yup from "yup";
import InputField from "../../atoms/InputField";

const Account = ({
  handleResetPassword,
  resetPasswordItem,
  handleSetPasswordItem,
  providerId
}) => { 
  return (
    <Segment>
      <Header dividing size="large" content="Account" />
      {providerId &&
        providerId === "password" && (
          <div>
            <Formik
              initialValues={resetPasswordItem}
              enableReinitialize
              validationSchema={Yup.object().shape({
                newPassword: Yup.string()
                  .min(6, "Password has to be longer than 6 characters!")
                  .required("Password is required!"),
                confirmPassword: Yup.string()
                  .oneOf([Yup.ref("newPassword")], "Password do not match")
                  .required("Confirm password is required")
              })}
              onSubmit={values => {
                handleSetPasswordItem(values);
                handleResetPassword(values.newPassword);
              }}
              render={({
                values,
                handleChange,
                handleSubmit,
                handleBlur,
                errors,
                touched
              }) => (
                <Form onSubmit={handleSubmit}>
                  <Header color="teal" sub content="Chage Password" />
                  <p>Use this form to update your account setting</p>
                  <InputField
                    touched={touched.newPassword}
                    error={errors.newPassword}
                    placeholder="Please input new password"
                    name="newPassword"
                    handleChange={handleChange}
                    value={values.newPassword}
                    handleBlur={handleBlur}
                    type="password"
                  />
                  <InputField
                    touched={touched.confirmPassword}
                    sa
                    error={errors.confirmPassword}
                    placeholder="Confirm your password"
                    name="confirmPassword"
                    handleChange={handleChange}
                    value={values.confirmPassword}
                    handleBlur={handleBlur}
                    type="password"
                  />
                  <Button positive type="submit">
                    Update Password
                  </Button>
                </Form>
              )}
            />
          </div>
        )}
      {providerId &&
        providerId === "facebook.com" && (
          <div>
            <Header color="teal" sub content="Facebook Account" />
            <p>Please visit Facebook to update your account settings</p>
            <Button type="button" color="facebook">
              <Icon name="facebook" />
              Go to Facebook
            </Button>
          </div>
        )}
      {providerId &&
        providerId === "google.com" && (
          <div>
            <Header color="teal" sub content="Google Account" />
            <p>Please visit Google to update your account settings</p>
            <Button type="button" color="google plus">
              <Icon name="google plus" />
              Go to Google
            </Button>
          </div>
        )}
    </Segment>
  );
};

export default Account;
