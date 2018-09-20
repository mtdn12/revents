import React from "react";
import { Form, Label } from "semantic-ui-react";

import "react-datepicker/dist/react-datepicker.css";

const RadioInput = ({ name, handleChange, value, label, type, checked }) => { 
  return (
    <Form.Field>
      <div className="ui radio">
        <input
          type={type}
          onChange={handleChange}
          name={name}
          value={value}          
          checked={checked}
        />{" "}
        <Label>{label}</Label>
      </div>
    </Form.Field>
  );
};

export default RadioInput;
