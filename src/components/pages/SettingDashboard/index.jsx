import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";

import { Grid } from "semantic-ui-react";
import SettingNav from "../../organisms/SettingNav";
import Template from "../../templates/Template";
import Basic from "../../organisms/Basic";
import About from "../../organisms/About";
import Photos from "../../organisms/Photos";
import Account from "../../organisms/Account";

const SettingDashboard = ({
  handleResetPassword,
  resetPasswordItem,
  handleSetPasswordItem,
  providerId,
  profile,
  handleUpdateProfile,
  handleUploadImage,
  photos,
  handleDeleteImage,
  handleSetProfileImage,
  isUploadImage,
}) => {
  return (
    <Template>
      <Grid>
        <Grid.Column width={12}>
          <Switch>
            <Redirect exact from="/settings" to="/settings/basic" />
            <Route
              path="/settings/basic"
              render={() => (
                <Basic
                  profile={profile}
                  handleUpdateProfile={handleUpdateProfile}
                />
              )}
            />
            <Route
              path="/settings/about"
              render={() => (
                <About
                  profile={profile}
                  handleUpdateProfile={handleUpdateProfile}
                />
              )}
            />
            <Route
              path="/settings/photos"
              render={() => (
                <Photos
                  handleUploadImage={handleUploadImage}
                  photos={photos}
                  profile={profile}
                  handleDeleteImage={handleDeleteImage}
                  handleSetProfileImage={handleSetProfileImage}
                  isUploadImage={isUploadImage}
                />
              )}
            />
            <Route
              path="/settings/account"
              render={() => (
                <Account
                  handleResetPassword={handleResetPassword}
                  resetPasswordItem={resetPasswordItem}
                  handleSetPasswordItem={handleSetPasswordItem}
                  providerId={providerId}
                />
              )}
            />
          </Switch>
        </Grid.Column>
        <Grid.Column width={4}>
          <SettingNav />
        </Grid.Column>
      </Grid>
    </Template>
  );
};

SettingDashboard.propTypes = {};

export default SettingDashboard;
