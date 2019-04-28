import React from 'react';
import Flex from 'components/Flex';
import Divider from 'components/Divider';

import HomeLeft from 'components/HomeLeft';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  &.home {
    .left, .right {
      flex: 1;
      text-align: center;
    }
  }
`;

const Home = () => (
  <HomeWrapper className="home">
    <Flex>
      <div className="left"><HomeLeft /></div>

      <Divider vertical size="95" />

      <div className="right">Right</div>
    </Flex>
  </HomeWrapper>
);

export default Home;
