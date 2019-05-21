import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { media } from 'utils/media';

const FlexDiv = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};

  ${media.phone`
    flex-direction: ${({ flexDirectionMobile }) => flexDirectionMobile};
  `}
`;

const Flex = ({ children, ...rest }) => (
  <FlexDiv className="flex" {...rest}>
    {children}
  </FlexDiv>
);

Flex.propTypes = {
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  flexDirection: PropTypes.string,
  flexDirectionMobile: PropTypes.string,
  flexWrap: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Flex.defaultProps = {
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
  flexDirectionMobile: 'column',
  flexWrap: 'wrap',
  width: 'auto',
  height: 'auto',
};

export default Flex;
