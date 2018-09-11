import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { Form, Label } from "semantic-ui-react";

import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({
  name,
  handleChange,
  value,
  touched,
  error,
  handleBlur,
  placeholder,  
}) => {
  return (
    <Form.Field error={touched && Boolean(error)}>
      <DatePicker
        name={name}
        placeholderText={placeholder}
        selected={value ? moment(value) : null}
        onChange={date => date && handleChange(name, date.format())}
        onBlur={() => handleBlur(name, true, true)}
        dateFormat = 'YYYY-MM-DD  HH:mm'
        showTimeSelect
        timeFormat ='HH:mm' 
      />
      {touched &&
        Boolean(error) && <Label style={{ color: "red" }}>{error}</Label>}
    </Form.Field>
  );
};

export default DateInput;
