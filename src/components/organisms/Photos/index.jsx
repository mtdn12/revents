import React, { Component } from "react";
import moment from 'moment'
import {
  Image,
  Segment,
  Header,
  Divider,
  Grid,
  Button,
  Card,
  Icon
} from "semantic-ui-react";
import { toastr } from "react-redux-toastr";
import DropZone from "react-dropzone";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.min.css";


class PhotosPage extends Component {
  state = {
    files: [],
    fileName: "",
    cropResult: null,
    image: {}
  };
  onDrop = files => {
    this.setState({
      files,
      fileName: files[0].name + moment().format('YYYY-MM-DD HH:mm:ss:S')
    });
  };
  uploadImage = async () => {
    try {
      let payload = {
        file: this.state.image,
        fileName: this.state.fileName
      }
      let test = await this.props.handleUploadImage(payload);
      console.log(test)
      console.log('upload xong roi ne')
      this.cancelCrop();
      toastr.success("Success!", "Photo has been uploaded");
    } catch (error) {
      toastr.error("Ops", error.message);
    }
  };
  cancelCrop = () => {
    this.setState({
      files: [],
      image: {},
      fileName: "",
      cropResult: null
    });
  };
  cropImage = () => {
    if (typeof this.refs.cropper.getCroppedCanvas() === "undefined") {
      return;
    }

    this.refs.cropper.getCroppedCanvas().toBlob(blob => {
      if (blob) {
        let imageUrl = URL.createObjectURL(blob);
        this.setState({
          cropResult: imageUrl,
          image: blob
        });
      }
    }, "image/jpeg");
  };
  render() {
    const { profile, photos, handleDeleteImage, handleSetProfileImage, isUploadImage } = this.props;
    console.log(isUploadImage)
    return (
      <Segment>
        <Header dividing size="large" content="Your Photos" />
        <Grid>
          <Grid.Row />
          <Grid.Column width={4}>
            <Header color="teal" sub content="Step 1 - Add Photo" />
            <DropZone onDrop={this.onDrop} multiple={false}>
              <div
                style={{
                  paddingTop: 30,
                  textAlign: "center"
                }}
              >
                <Icon name="upload" size="huge" />
                <Header content="Drop image here or click image to add" />
              </div>
            </DropZone>
          </Grid.Column>
          <Grid.Column width={1} />
          <Grid.Column width={4}>
            <Header sub color="teal" content="Step 2 - Resize image" />
            {this.state.files[0] && (
              <Cropper
                style={{ height: 200, width: "100%" }}
                ref="cropper"
                src={this.state.files[0].preview}
                aspectRatio={1}
                viewMode={0}
                dragMode="move"
                guides={false}
                scalable={true}
                cropBoxMovable={true}
                cropBoxResizeable={true}
                crop={this.cropImage}
              />
            )}
          </Grid.Column>
          <Grid.Column width={1} />
          <Grid.Column width={4}>
            <Header sub color="teal" content="Step 3 - Preview and Upload" />
            {this.state.files[0] && (
              <div>
                <Image
                  style={{
                    minHeight: 200,
                    minWidth: 200
                  }}
                  src={this.state.cropResult}
                />
                <Button.Group>
                  <Button
                    onClick={this.uploadImage}
                    style={{ width: 100 }}
                    positive
                    icon="check"
                    loading={isUploadImage}
                  />
                  <Button
                    onClick={this.cancelCrop}
                    style={{ width: 100 }}
                    icon="close"
                    disabled={isUploadImage}
                  />
                </Button.Group>
              </div>
            )}
          </Grid.Column>
        </Grid>
        <Divider />
        <Header sub color="teal" content="All Photos" />
        <Card.Group itemsPerRow={5}>
          <Card>
            <Image src={profile.photoURL || '/assets/user.png'} />
            <Button positive>Main Photo</Button>
          </Card>
          {photos &&
            photos
              .filter(photo => photo.url !== profile.photoURL)
              .map(photo => (
                <Card key={photo.id}>
                  <Image src={photo.url} />
                  <div className="ui two buttons">
                    <Button basic color="green" onClick={() => handleSetProfileImage(photo)}>
                      Main
                    </Button>
                    <Button basic icon="trash" color="red" onClick={() => handleDeleteImage(photo)} />
                  </div>
                </Card>
              ))}
        </Card.Group>
      </Segment>
    );
  }
}

export default PhotosPage;
