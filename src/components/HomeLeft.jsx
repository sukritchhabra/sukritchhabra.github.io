import React from 'react';
import PropTypes from 'prop-types';
import Rotator from 'components/Rotator';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { selectCurrentJob, selectJobTitles } from 'state/jobs';
import { show, slideInFromLeft } from 'styles/animations';

const StyledWrapper = styled.div`
  margin: 5em 2em;
  .name {
    margin: 0;
    font-size: 3rem;
    animation:
      ${slideInFromLeft} 1.5s ease-out,
      ${show} 3s ease-out;
  }

  .title-rotator {
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

const RotatorWrapper = styled.div`
  margin: 1em 0;
  width: 100%;
  height: 50px;
  font-size: 1.3rem;
`;

const HomeLeft = ({ currentJob, jobTitles }) => (
  <StyledWrapper>
    <h1 className="name">Sukrit Chhabra</h1>
    <RotatorWrapper className="title-rotator">
      <Rotator sides={jobTitles} sideCss="border: none" delay={2000} />
    </RotatorWrapper>
    <h3 className="company">{currentJob.company}</h3>
  </StyledWrapper>
);

HomeLeft.propTypes = {
  currentJob: PropTypes.shape({}).isRequired,
  jobTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  currentJob: selectCurrentJob(state),
  jobTitles: selectJobTitles(state),
});

export default connect(mapStateToProps)(HomeLeft);
