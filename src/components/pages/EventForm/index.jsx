import React from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import Template from "../../templates/Template";
const emptyEvent = {
  title: "",
  date: "",
  city: "",
  venue: "",
  hostedBy: ""
};
class EventForm extends React.Component {
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
    const { handleFormClose } = this.props;
    const { event } = this.state;
    return (
      <Template>
        <Segment>
          <Form onSubmit={this.HanldeFormSubmit}>
            <Form.Field>
              <label>Event Title</label>
              <input
                placeholder="First Name"
                value={event.title}
                name="title"
                onChange={this.handleInputChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Event Date</label>
              <input
                type="date"
                value={event.date}
                placeholder="Event Date"
                name="date"
                onChange={this.handleInputChange}
              />
            </Form.Field>
            <Form.Field>
              <label>City</label>
              <input
                placeholder="City event is taking place"
                value={event.city}
                name="city"
                onChange={this.handleInputChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Venue</label>
              <input
                placeholder="Enter the Venue of the event"
                value={event.venue}
                name="venue"
                onChange={this.handleInputChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Hosted By</label>
              <input
                placeholder="Enter the name of person hosting"
                value={event.hostedBy}
                name="hostedBy"
                onChange={this.handleInputChange}
              />
            </Form.Field>
            <Button positive type="submit">
              Submit
            </Button>
            <Button type="button" onClick={handleFormClose}>
              Cancel
            </Button>
          </Form>
        </Segment>
      </Template>
    );
  }
}

export default EventForm;
