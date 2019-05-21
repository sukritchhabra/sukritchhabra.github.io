import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { bgColorDefault, fontColorDefault } from 'styles/variables';

const AnchorTag = styled.a`
  display: inline-block;
  color: ${fontColorDefault};
  background-color: ${bgColorDefault};

  transition: background-color 0.2s ease-out,
              color 0.2s ease-out;


  ${({ isIcon }) => (
    !isIcon ? `
      padding: 0.6em 2em;
      border: solid 1px ${fontColorDefault};

      &:hover {
        color: ${bgColorDefault};
        background-color: ${fontColorDefault};
      }
    ` : '')}
`;

const ReactTag = styled(Link)`
  display: inline-block;
  color: ${fontColorDefault};
  background-color: ${bgColorDefault};

  transition: background-color 0.2s ease-out,
              color 0.2s ease-out;


  ${({ isIcon }) => (
    !isIcon ? `
      padding: 0.6em 2em;
      border: solid 1px ${fontColorDefault};

      &:hover {
        color: ${bgColorDefault};
        background-color: ${fontColorDefault};
      }
    ` : '')}
`;

const LinkComp = ({
  children,
  className,
  isRouterLink,
  ...rest,
}) => {
  const Tag = isRouterLink ? ReactTag : AnchorTag;
  return (
    <Tag className={`link ${className}`} {...rest}>
      {children}
    </Tag>
  );
};

LinkComp.propTypes = {
  target: PropTypes.string,
  className: PropTypes.string,
  rel: PropTypes.string,
  children: PropTypes.node.isRequired,
  isRouterLink: PropTypes.bool,
};

LinkComp.defaultProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
  className: '',
  isRouterLink: false,
};

export default LinkComp;
