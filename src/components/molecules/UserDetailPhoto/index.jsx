import React from "react";
import { Segment, Image, Header } from "semantic-ui-react";


const UserDetailPhoto = ({ photos }) => {
  return (
    <Segment attached>
      <Header icon="image" content="Photos" />
      <Image.Group size="small">
        {photos.map(photo => (
          <Image src={photo.url} key={photo.id} />
        ))}       
      </Image.Group>
    </Segment>
  );
};

export default UserDetailPhoto;
