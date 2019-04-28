import React from 'react';
import PropTypes from 'prop-types';
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
  }

  .vertical {
    width: ${({ thickness }) => `${thickness}px`};
    height: ${({ size }) => `${size}%`};
    min-height: ${({ minLength }) => `${minLength}px`};
  }
`;

const Divider = (props) => {
  const { horizontal, vertical } = props;

  let className = 'divider';
  className += horizontal ? ' horizontal' : '';
  className += vertical ? ' vertical' : '';

  return (
    <StyledDiv className="divider-wrapper" {...props}>
      <div className={className} />
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
};

Divider.defaultProps = {
  horizontal: false,
  vertical: false,
  thickness: '2',
  minLength: '10',
  size: '100',
  color: '#909090'
};

export default Divider;

