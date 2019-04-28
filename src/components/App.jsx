import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Home from 'components/Home';
import Navbar from 'components/Navbar';
import { connect } from 'react-redux';
import BrowserActions from 'state/browser';
import { utils } from 'utils/index';

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
        <Navbar />
        <Home />
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

export default connect(null, mapDispatchToProps)(App);
