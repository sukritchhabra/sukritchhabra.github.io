import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { media } from 'utils/media';

const FlexDiv = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ flexDirection }) => flexDirection};

  ${media.phone`
    flex-direction: column;
  `}
`;

const Flex = ({ children, ...rest }) => (
  <FlexDiv className="flex" {...rest}>
    {children}
  </FlexDiv>
);

Flex.propTypes = {
  justifyContent: PropTypes.string,
  flexDirection: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Flex.defaultProps = {
  justifyContent: 'space-between',
  flexDirection: 'row',
};

export default Flex;
