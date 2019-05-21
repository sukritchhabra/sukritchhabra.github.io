import React from 'react';
import { Document, Page } from 'react-pdf';
import styled from 'styled-components';
import { media, sizes } from 'utils/media';

import Resume from 'files/Resume';
import Loading from 'components/Loading';

const StyledDoc = styled(Document)`
  width: 80%;
  max-width: ${sizes.tablet}px;
  margin: 0 auto;

  ${media.tablet`
    width: 100%;
  `}

  .page {
    > canvas {
      width: 100% !important;
      height: auto !important;
    }

    > div {
      display: none;
    }
  }
`;

const ResumeComp = () => (
  <StyledDoc file={Resume} loading={Loading()}>
    <Page className="page" pageNumber={1} />
  </StyledDoc>
);

export default ResumeComp;
