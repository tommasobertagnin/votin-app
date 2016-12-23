import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import Navigation from '../components/Navigation';

const App = (props) => (
  <div>
    <div className="section">
      <Navigation />
    </div>
    <div className="section">
      {props.main}
    </div>
  </div>
);

export default AppContainer = createContainer( (props) => {
  // props here will have `main`, passed from the router
  // anything we return from this function will be *added* to it
  return {
    user: Meteor.user(),
  };
}, App);
