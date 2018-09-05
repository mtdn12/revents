import React from "react";
import { Form, Label } from "semantic-ui-react";

const InputField = ({
  touched,
  error,
  value,
  handleChange,
  name,
  placeholder,
  handleBlur,
  type
}) => (
  <Form.Field error={touched && Boolean(error)}> 
    <input
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={handleChange}
      onBlur={handleBlur}
      type={type}
    />
    {touched && Boolean(error) && <Label style={{ color: "red" }}>{error}</Label>}
  </Form.Field>
);

export default InputField