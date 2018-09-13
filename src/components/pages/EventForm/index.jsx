
import React from "react";
import { Segment, Form, Button, Header } from "semantic-ui-react";
import Template from "../../templates/Template";
import { Formik } from "formik";
import * as Yup from "yup";
import InputField from "../../atoms/InputField";
import TextareaField from "../../atoms/TextareaField";
import SelectField from "../../atoms/SelectField";
import DateInput from "../../atoms/DateInput";
import PlaceInput from "../../atoms/PlaceInput";

const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" }
];

class EventForm extends React.Component {
  state = {
    cityLatLng: {},
    venueLatLng: {}
  };
  handleSetCityLatLng = cor => {
    this.setState({ cityLatLng: cor });
  };
  render() {
    const { formItem } = this.props;
    return (
      <Template>
        <Formik
          initialValues={formItem.toJS()}
          validationSchema={Yup.object().shape({
            title: Yup.string().required("Title field is required"),
            category: Yup.string().required("category field is required"),
            description: Yup.string().required("description field is required"),
            date: Yup.string().required("Date field is required"),
            city: Yup.string().required("city field is required"),
            venue: Yup.string().required("venue field is required"),
            hostedBy: Yup.string().required("hostedBy field is required")
          })}
          onSubmit={values => console.log(values)}
          enableReinitialize
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
            <Segment>
              <Form onSubmit={handleSubmit}>
                <Header sub color="teal" content="Event Details" />
                <InputField
                  touched={touched.title}
                  error={errors.title}
                  placeholder="Give your event a name"
                  name="title"
                  handleChange={handleChange}
                  value={values.title}
                  handleBlur={handleBlur}
                  type="text"
                />
                <SelectField
                  touched={touched.category}
                  error={errors.category}
                  placeholder="What is your event about"
                  name="category"
                  handleChange={setFieldValue}
                  value={values.category}
                  handleBlur={handleBlur}
                  options={category}
                />
                <TextareaField
                  touched={touched.description}
                  error={errors.description}
                  placeholder="Tell us about your event"
                  name="description"
                  handleChange={handleChange}
                  rows={3}
                  value={values.description}
                  handleBlur={handleBlur}
                />
                <Header sub color="teal" content="Event Location Details" />
                <DateInput
                  touched={touched.date}
                  error={errors.date}
                  placeholder="Date and Time of event"
                  name="date"
                  handleChange={setFieldValue}
                  value={values.date}
                  handleBlur={setFieldTouched}
                  type="date"
                />
                <PlaceInput
                  touched={touched.city}
                  error={errors.city}
                  value={values.city}
                  input={{
                    placeholder: "Event city",
                    name: "city",
                    onBlur: handleBlur
                  }}
                  handleChange={setFieldValue}
                  handleSetCityLatLng={this.handleSetCityLatLng}
                  // handleBlur={handleBlur}
                />
                <PlaceInput
                  touched={touched.venue}
                  error={errors.venue}
                  input={{
                    placeholder: "Event venue",
                    name: "venue",
                    onBlur: handleBlur
                  }}
                  handleChange={setFieldValue}
                  value={values.venue}
                  searchLocation={this.state.cityLatLng}
                />
                <InputField
                  touched={touched.hostedBy}
                  error={errors.hostedBy}
                  placeholder="Event hosted By"
                  name="hostedBy"
                  handleChange={handleChange}
                  value={values.hostedBy}
                  handleBlur={handleBlur}
                  type="text"
                />
                <Button positive type="submit">
                  Submit
                </Button>
                <Button type="button">Cancel</Button>
              </Form>
            </Segment>
          )}
        />
      </Template>
    );
  }
}
export default EventForm;
