import React from "react";
import { Form, Label } from "semantic-ui-react";

const TextareaField = ({
  touched,
  error,
  value,
  handleChange,
  name,
  placeholder,
  rows,
  handleBlur
}) => (
  <Form.Field error={touched && Boolean(error)}> 
    <textarea
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={handleChange}
      rows={rows}
      onBlur={handleBlur}
    />
    {touched && Boolean(error) && <Label style={{ color: "red" }}>{error}</Label>}
  </Form.Field>
);

export default TextareaField