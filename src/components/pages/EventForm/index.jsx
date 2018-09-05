import React from "react";
import { Segment, Form, Button, Header } from "semantic-ui-react";
import Template from "../../templates/Template";
import { Formik } from "formik";
import * as Yup from 'yup'
import InputField from '../../atoms/InputField'
import TextareaField from '../../atoms/TextareaField'

const EventForm = ({ formItem }) => {  
  return (
    <Template>
      <Formik
        initialValues={formItem.toJS()}
        validationSchema={Yup.object().shape({
          title: Yup.string().required('Title field is required'),
          date: Yup.string().required('Date field is required'),
          city: Yup.string().required('city field is required'),
          venue: Yup.string().required('venue field is required'),
          hostedBy: Yup.string().required('hostedBy field is required')
        })}
        onSubmit={values => console.log(values)}
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
              <Header sub color="teal" content="Event Details"/>
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
              <InputField
                touched={touched.category}
                error={errors.category}
                placeholder="What is your event about"
                name="category"
                handleChange={handleChange}
                value={values.category}
                handleBlur={handleBlur}
                type="text"
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

              <Header sub color="teal" content="Event Location Details"/>
              <InputField
                touched={touched.date}
                error={errors.date}
                placeholder="Event date"
                name="date"
                handleChange={handleChange}
                value={values.date}
                handleBlur={handleBlur}
                type="date"
              />
              <InputField
                touched={touched.city}
                error={errors.city}
                placeholder="Event city"
                name="city"
                handleChange={handleChange}
                value={values.city}
                handleBlur={handleBlur}
                type="text"
              />
              <InputField
                touched={touched.venue}
                error={errors.venue}
                placeholder="Event venue"
                name="venue"
                handleChange={handleChange}
                value={values.venue}
                handleBlur={handleBlur}
                type="text"
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
};

/* class EventForm extends React.Component {
  state = {
    event: emptyEvent
  };
  componentDidMount() {
    if (this.props.selectedEvent)
      this.setState({ event: this.props.selectedEvent });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.selectedEvent !== this.props.selectedEvent) {
      this.setState({
        event: this.props.selectedEvent || emptyEvent
      });
    }
  }
  HanldeFormSubmit = e => {
    e.preventDefault();
    this.state.event.id
      ? this.props.handleUpdateEvent(this.state.event)
      : this.props.handleCreateEvent(this.state.event);
  };
  handleInputChange = e => {
    e.persist();
    this.setState(state => ({
      event: { ...state.event, [e.target.name]: e.target.value }
    }));
  };
  render() {
    const { formItem } = this.props;    
    return (
      <Template>
        
      </Template>
    );
  }
}
 */
export default EventForm;
