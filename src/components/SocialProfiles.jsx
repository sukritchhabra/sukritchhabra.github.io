import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flex from 'components/Flex';
import Link from 'components/Link';

import { selectSocial } from 'state/info';
import { show, slideInFromRight } from 'styles/animations';

import { media, sizes } from 'utils/media';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin: 5em auto;

  .profile-wrapper {
    animation:
      ${slideInFromRight} 1.5s ease-out,
      ${show} 3s ease-out;
  }
`;

const ProfileWrapper = styled.div`
  margin: 0 0 2em;
  width: 25%;
  font-size: 1rem;
  text-align: center;

  ${media.phone`
    width: 50%;
  `}

  .icon {
    font-size: 3rem;
  }
`;

const StyledFlex = styled(Flex)`
  margin: 0 auto;
  max-width: ${sizes.phone}px;
`;

const SocialProfiles = ({ socialProfiles }) => (
  <StyledWrapper>
    <StyledFlex flexDirectionMobile="row">
      { socialProfiles.map(({ icon, link }, idx) => (
        <ProfileWrapper className="profile-wrapper" key={`profile-wrapper-${idx}`}>
          <Link href={link}>
            <div className="icon"><FontAwesomeIcon icon={icon} /></div>
          </Link>
        </ProfileWrapper>
      ))}
    </StyledFlex>
  </StyledWrapper>
);

SocialProfiles.propTypes = {
  socialProfiles: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

const mapStateToProps = state => ({
  socialProfiles: selectSocial(state),
});

export default connect(mapStateToProps)(SocialProfiles);
