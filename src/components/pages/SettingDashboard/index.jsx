import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Redirect} from 'react-router-dom'

import {Grid} from 'semantic-ui-react'
import SettingNav from '../../organisms/SettingNav'
import Template from "../../templates/Template";
import Basic from '../../pages/Basic'
import About from '../../pages/About'
import Photos from '../../pages/Photos'
import Account from '../../pages/Account'

const SettingDashboard = () => {
  return (
    <Template>
      <Grid>
        <Grid.Column width={12}>
          <Switch>
            <Redirect exact from="/settings" to="/settings/basic" />
            <Route  path="/settings/basic" component={Basic}/>
            <Route  path="/settings/about" component={About}/>
            <Route  path="/settings/photos" component={Photos}/>
            <Route  path="/settings/account" component={Account}/>
          </Switch>
        </Grid.Column>
        <Grid.Column width={4}>
          <SettingNav/>
        </Grid.Column>
      </Grid>
    </Template>
  );
};

SettingDashboard.propTypes = {};

export default SettingDashboard;
