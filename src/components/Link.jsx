import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Tag = styled.a``;

const Link = ({ children, ...rest }) => (
  <Tag className="link" {...rest}>
    {children}
  </Tag>
);

Link.propTypes = {
  target: PropTypes.string,
  rel: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Link.defaultProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
};

export default Link;
