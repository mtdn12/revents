import React from "react";
import { Form, Label, Select } from "semantic-ui-react";

const SelectField = ({
  touched,
  error,
  value,
  handleChange,
  name,
  placeholder, 
  options,
  multiple,
}) => (
  <Form.Field error={touched && Boolean(error)}> 
    <Select
      value={value || null}
      onChange={(e, data) => {handleChange(name,data.value)}}
      placeholder={placeholder}
      options={options}
      multiple={multiple}
      name={name}
    />
    {touched && Boolean(error) && <Label style={{ color: "red" }}>{error}</Label>}
  </Form.Field>
);

export default SelectField