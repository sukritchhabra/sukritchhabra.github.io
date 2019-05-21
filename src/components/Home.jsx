import React from 'react';

import Landing from 'components/Landing';
import SocialProfiles from 'components/SocialProfiles';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  &.home {
    height: 100%;
  }
`;

const Home = () => (
  <HomeWrapper className="home">
    <Landing />
    <SocialProfiles />
  </HomeWrapper>
);

export default Home;
