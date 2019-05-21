import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectIsMobile } from 'state/browser';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;

  .divider {
    background-color: ${({ color }) => color};
  }

  .horizontal {
    width: ${({ size }) => `${size}%`};
    height: ${({ thickness }) => `${thickness}px`};
    min-width: ${({ minLength }) => `${minLength}px`};
    margin: 0 auto;
  }

  .vertical {
    margin: auto 0;
    width: ${({ thickness }) => `${thickness}px`};
    height: ${({ size }) => `${size}%`};
    min-height: ${({ minLength }) => `${minLength}px`};
  }
`;

const Divider = (props) => {
  const {
    horizontal,
    vertical,
    isMobile,
    horizontalWhenMobile,
  } = props;

  let className = '';
  className = vertical ? 'vertical' : className;
  className = horizontal || (horizontalWhenMobile && isMobile) ? 'horizontal' : className;

  return (
    <StyledDiv className="divider-wrapper" {...props}>
      <div className={`divider ${className}`} />
    </StyledDiv>
  );
};

Divider.propTypes = {
  horizontal: PropTypes.bool,
  vertical: PropTypes.bool,
  thickness: PropTypes.string,
  minLength: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  isMobile: PropTypes.bool.isRequired,
  horizontalWhenMobile: PropTypes.bool,
};

Divider.defaultProps = {
  horizontal: false,
  vertical: false,
  thickness: '2',
  minLength: '10',
  size: '100',
  color: '#909090',
  horizontalWhenMobile: true,
};

const mapStateToProps = state => ({
  isMobile: selectIsMobile(state),
});

export default connect(mapStateToProps)(Divider);
