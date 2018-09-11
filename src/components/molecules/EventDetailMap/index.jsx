import React from 'react'
import {Segment, Icon} from 'semantic-ui-react'
import GoogleMapReact from 'google-map-react'

const Maker = () => <Icon name="marker" size="big" color="red"/>

const EventDetailMap = ({lat, lng}) => {
  const center = [lat, lng]
  const zoom = 14;
  return (
    <Segment attached="bottom" style={{padding: 0}}>
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDh5SM4-gSFxUOytzN0YhcKmWvo70Fdcww'}}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Maker
            lat={lat}
            lng={lng}
          />
        </GoogleMapReact>
      </div>
    </Segment>
  )
}

export default EventDetailMap