import React, { Component } from "react";
import { Form, Label } from "semantic-ui-react";
import Script from "react-load-script";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

class PlaceInput extends Component {
  state = {
    scriptLoaded: false,
    address: this.props.value,   
  };
  handleScriptLoaded = () => {
    this.setState({ scriptLoaded: true });    
  };
  handleChange = address => {
    this.setState({ address });
    this.props.handleChange(this.props.input.name, address);
  };
  handleSelect = address => {
    this.setState({ address });
    this.props.handleChange(this.props.input.name, address);
    if(this.props.input.name === 'venue'){
      geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(result => this.props.handleChange('venueLatLng', result))
    }
    if (this.props.handleSetCityLatLng) {
      geocodeByAddress(address)
        .then(results => getLatLng(results[0]))
        .then(result => this.props.handleSetCityLatLng(result))
        .catch(err => console.log(err.message));
    }
  };
  render() {
    const {
      input,
      touched,
      error,
      value,      
      searchLocation,
    } = this.props;    
    return (
      <Form.Field error={touched && Boolean(error)}>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyDh5SM4-gSFxUOytzN0YhcKmWvo70Fdcww&libraries=places"
          onLoad={this.handleScriptLoaded}
        />
        {this.state.scriptLoaded && (
          <PlacesAutocomplete
            value={value}
            onSelect={this.handleSelect}
            onChange={this.handleChange}
            debounce={1000}
            searchOptions={searchLocation && {
              location: new window.google.maps.LatLng(searchLocation),
              radius: 1000,
              types: ['establishment']
            }}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading
            }) => (
              <div>
                <input
                  {...getInputProps({
                    ...input,
                    className: "location-search-input"
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map(suggestion => {
                    const className = suggestion.active
                      ? "suggestion-item--active"
                      : "suggestion-item";
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: "#fafafa", cursor: "pointer" }
                      : { backgroundColor: "#ffffff", cursor: "pointer" };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        )}
        {touched &&
          Boolean(error) && <Label style={{ color: "red" }}>{error}</Label>}
      </Form.Field>
    );
  }
}

export default PlaceInput;
