import React from 'react';
import PropTypes from 'prop-types';
import Rotator from 'components/Rotator';
import { connect } from 'react-redux';

import { selectJobTitles } from 'state/jobs';
import { show, slideInFromLeft } from 'styles/animations';

import Flex from 'components/Flex';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin: 5em auto;
  width: 100%;
  text-align: center;

  .name {
    margin: 0;
    font-size: 3.5rem;
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
  font-size: 1.5rem;
`;

const Landing = ({ jobTitles }) => (
  <Flex width="100%" height="75%" flexDirectionMobile="row">
    <StyledWrapper>
      <h1 className="name">Sukrit Chhabra</h1>
      <RotatorWrapper className="title-rotator">
        <Rotator sides={jobTitles} sideCss="border: none" delay={2000} />
      </RotatorWrapper>
    </StyledWrapper>
  </Flex>
);

Landing.propTypes = {
  jobTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = state => ({
  jobTitles: selectJobTitles(state),
});

export default connect(mapStateToProps)(Landing);
