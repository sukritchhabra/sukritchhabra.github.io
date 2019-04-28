import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const FlexDiv = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
`;

const Flex = ({ children, ...rest }) => (
  <FlexDiv className="flex" {...rest}>
    {children}
  </FlexDiv>
);

Flex.propTypes = {
  justifyContent: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Flex.defaultProps = {
  justifyContent: 'space-between',
};

export default Flex;

