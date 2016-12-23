import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import AppContainer from '../../ui/containers/AppContainer';
import VotingPageContainer from '../../ui/containers/VotingPageContainer';

import NewPollPage from '../../ui/pages/NewPollPage';

FlowRouter.route('/', {
  name: 'Home',
  action () {
    mount(AppContainer, {
      main: <VotingPageContainer />,
    });
  },
});

FlowRouter.route('/poll-new', {
  name: 'Poll.new',
  action () {
    mount(AppContainer, {
      main: <NewPollPage />,
    });
  },
});

FlowRouter.route('/polls', {
  name: 'Polls.list',
  action () {
    mount(AppContainer, {
      main: <NewPollPage />,
    });
  },
});

FlowRouter.route('/poll/:id', {
  name: 'Poll.page',
  action () {
    mount(AppContainer, {
      main: <NewPollPage />,
    });
  },
});
