import React from "react";
import { Button, Divider, Form, Header, Segment } from "semantic-ui-react";
import RadioInput from "../../atoms/RadioInput";
import InputField from "../../atoms/InputField";
import SelectField from "../../atoms/SelectField";
import TextareaField from "../../atoms/TextareaField";
import PlaceInput from "../../atoms/PlaceInput";
import { Formik } from "formik";

const interests = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" }
];

const AboutPage = ({ profile, handleUpdateProfile }) => {
  const initialValues = {
    status: profile.status || "",
    about: profile.about || '',
    interests: profile.interests || [],
    occupation: profile.occupation || '',
    country: profile.country || ''
  };
  return (
    <Segment>
      <Header dividing size="large" content="About Me" />
      <p>Complete your profile to get the most out of this site</p>
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
        }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group inline>
              <label>Tell us your status:</label>
              <RadioInput
                name="status"
                type="radio"
                value="single"
                label="Single"
                checked={values.status === "single"}
                handleChange={handleChange}
              />
              <RadioInput
                name="status"
                type="radio"
                value="relationship"
                label="Relationship"
                checked={values.status === "relationship"}
                handleChange={handleChange}
              />
              <RadioInput
                name="status"
                type="radio"
                value="married"
                label="Married"
                checked={values.status === "married"}
                handleChange={handleChange}
              />
            </Form.Group>
            <Divider />
            <label>Tell us about yourself</label>
            <TextareaField
              touched={touched.about}
              error={errors.about}
              placeholder="Tell us about your event"
              name="about"
              handleChange={handleChange}
              rows={8}
              value={values.about}
              handleBlur={handleBlur}
            />
            <SelectField
              touched={touched.interests}
              error={errors.interests}
              placeholder="What is your event about"
              name="interests"
              handleChange={setFieldValue}
              value={values.interests}
              handleBlur={handleBlur}
              options={interests}
              multiple
            />
            <InputField
              touched={touched.occupation}
              error={errors.occupation}
              placeholder="Occupation"
              name="occupation"
              handleChange={handleChange}
              value={values.occupation}
              handleBlur={handleBlur}
              type="text"
            />
            <PlaceInput
              touched={touched.country}
              error={errors.country}
              input={{
                placeholder: "Country Of Origin",
                name: "country",
                onBlur: handleBlur
              }}
              handleChange={setFieldValue}
              value={values.country}
              searchOptions={{ types: ["(regions)"] }}
            />
            <Divider />
            <Button
              size="large"
              positive
              content="Update Profile"
              type="submit"
            />
          </Form>
        )}
      />
    </Segment>
  );
};

export default AboutPage;
