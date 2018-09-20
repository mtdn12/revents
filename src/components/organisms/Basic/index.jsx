import React, { Component } from "react";
import { Segment, Form, Header, Divider, Button } from "semantic-ui-react";

import { Formik } from "formik";
import moment from 'moment'
import InputField from "../../atoms/InputField";
import PlaceInput from "../../atoms/PlaceInput";
import DateInput from "../../atoms/DateInput";
import RadioInput from '../../atoms/RadioInput'

class BasicPage extends Component {
  render() {
    const {profile, handleUpdateProfile} = this.props;
    const initialValues = {
      displayName: profile.displayName || '',
      birthDay: (profile.birthDay && moment(profile.birthDay, 'X')) || '',
      homeTown: profile.homeTown || '',
      gender: profile.gender || ''
    }
    return (
      <Segment>
        <Header dividing size="large" content="Basics" />
        <Formik
          initialValues={initialValues}
          enableReinitialize          
          onSubmit={values => handleUpdateProfile(values)}
          render={({
            values,
            handleChange,
            handleSubmit,
            handleBlur,
            errors,
            touched,
            setFieldValue,
            setFieldTouched
          }) => (
            <Form onSubmit={handleSubmit}>
              <InputField
                touched={touched.displayName}
                error={errors.displayName}
                placeholder="Known As"
                name="displayName"
                handleChange={handleChange}
                value={values.displayName}
                handleBlur={handleBlur}
                type="text"
              />
              <Form.Group inline>
                <label>Gender:</label>
                <RadioInput
                  name='gender'
                  type='radio'
                  value='male'
                  label='Male'
                  checked={values.gender === 'male'}
                  handleChange={handleChange}            
                />
                <RadioInput
                  name="gender"
                  type="radio"
                  value="female"
                  label="Female"
                  checked={values.gender === 'female'}
                  handleChange={handleChange}
                />
              </Form.Group>
              <DateInput
                touched={touched.birthDay}
                error={errors.birthDay}
                placeholder="Date of Birth"
                name="birthDay"
                handleChange={setFieldValue}
                value={values.birthDay}
                handleBlur={setFieldTouched}
                optional={{
                  showYearDropdown :true,
                  showMonthDropdown: true,
                  dropDownMode: 'select',
                  maxDate:moment().subtract(18, 'years')
                }}               
              />
              <PlaceInput
                touched={touched.homeTown}
                error={errors.homeTown}
                input={{
                  placeholder: "Home Town",
                  name: "homeTown",
                  onBlur: handleBlur
                }}
                handleChange={setFieldValue}
                value={values.homeTown}
                searchOptions={{
                  types: ['(cities)']
                }}            
              />
              <Divider />
              <Button size="large" positive content="Update Profile"  type="submit"/>
            </Form>
          )}
        />
      </Segment>
    );
  }
}

export default BasicPage;
