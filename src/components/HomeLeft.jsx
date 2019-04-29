import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { selectCurrentJob } from 'state/jobs';
import { show, slideInFromLeft } from 'styles/animations';

const StyledWrapper = styled.div`
  margin: 5em 0;
  .name {
    margin: 0;
    font-size: 3rem;
    animation:
      ${slideInFromLeft} 1.5s ease-out,
      ${show} 3s ease-out;
  }

  .position {
    visibility: hidden;
    animation:
      ${slideInFromLeft} 1.5s ease-out 0.5s,
      ${show} 3s ease-out 0.5s 1 normal forwards;
  }

  .company {
    visibility: hidden;
    animation:
      ${slideInFromLeft} 1.5s ease-out 1s,
      ${show} 3s ease-out 1s 1 normal forwards;
  }
`;

const HomeLeft = ({ currentJob }) => (
  <StyledWrapper>
    <h1 className="name">Sukrit Chhabra</h1>
    <h2 className="position">{currentJob.position}</h2>
    <h3 className="company">{currentJob.company}</h3>
  </StyledWrapper>
);

HomeLeft.propTypes = {
  currentJob: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  currentJob: selectCurrentJob(state),
});

export default connect(mapStateToProps)(HomeLeft);
