import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BrowserActions from 'state/browser';
import { utils } from 'utils/index';

import Home from 'components/Home';

class App extends Component {
  browserResized = utils.debounce(({ target: { innerWidth } }) => {
    const { updateBrowserWidth } = this.props;
    updateBrowserWidth(innerWidth);
  }, 200);

  componentDidMount() {
    window.addEventListener('resize', this.browserResized);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.browserResized);
  }

  render() {
    return (
      <div className="app-container">
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  updateBrowserWidth: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  updateBrowserWidth: width => dispatch(BrowserActions.updateBrowserWidth(width)),
});

export default withRouter(connect(null, mapDispatchToProps)(App));
