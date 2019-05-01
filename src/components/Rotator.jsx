import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  perspective: 600px;
  margin: 0 auto;
`;

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  perspective: 600px;
  margin: 0 auto;

  .cube {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transform: translateZ(-${({ zTranslate }) => zTranslate}px);
    transition: transform ${({ delay }) => ((delay - 1000) / 1000)}s;

    &.show-1 { transform: translateZ(-${({ zTranslate }) => zTranslate}px) rotateX(0deg); }
    &.show-2 { transform: translateZ(-${({ zTranslate }) => zTranslate}px) rotateX(-90deg); }
    &.show-3 { transform: translateZ(-${({ zTranslate }) => zTranslate}px) rotateX(-180deg); }
    &.show-4 { transform: translateZ(-${({ zTranslate }) => zTranslate}px) rotateX(-270deg); }
  }

  .side {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    width: 100%;
    height: 100%;

    background-color: #1d222f;
    color: white;

    border: solid 0.5px white;
    border-radius: 3px;
  }
  .side { ${({ sideCss }) => sideCss && sideCss} }

  .side-1 { transform: rotateX(0deg) translateZ(${({ zTranslate }) => zTranslate}px); }
  .side-2 { transform: rotateX(90deg) translateZ(${({ zTranslate }) => zTranslate}px); }
  .side-3 { transform: rotateX(180deg) translateZ(${({ zTranslate }) => zTranslate}px); }
  .side-4 { transform: rotateX(-90deg) translateZ(${({ zTranslate }) => zTranslate}px); }
`;


class Rotator extends Component {
  timeoutId = null;

  constructor(props) {
    super(props);
    this.compRef = React.createRef();
  }

  state = {
    displaySide: 1,
  };

  componentDidMount() {
    const { parentNode } = this.compRef.current;
    this.parentWidth = parentNode.clientWidth;
    this.parentHeight = parentNode.clientHeight;
    this.forceUpdate();
    this.updateTimeout(false);
  }

  updateSide = () => {
    const { displaySide } = this.state;
    const { sides } = this.props;
    const newSide = displaySide === sides.length ? 1 : displaySide + 1;
    this.setState({ displaySide: newSide });
  };


  updateTimeout = (shouldUpdateSide = true) => {
    const { delay } = this.props;

    if (shouldUpdateSide) this.updateSide();
    this.timeoutId = setTimeout(() => {
      this.updateTimeout(true);
    }, delay);
  };

  render() {
    const { displaySide } = this.state;
    const { sides, sideCss, delay } = this.props;
    const halfHeight = this.parentHeight / 2;
    const sidesFour = sides.slice(0, 4);

    return (
      <StyledWrapper ref={this.compRef}>
        { halfHeight && (
          <StyledDiv zTranslate={halfHeight.toString()} sideCss={sideCss} delay={delay}>
            <div className={`cube show-${displaySide}`}>
              {sidesFour.map((content, idx) => <div className={`side side-${idx + 1}`}>{content}</div>)}
            </div>
          </StyledDiv>
        )
        }
      </StyledWrapper>
    );
  }
}

Rotator.propTypes = {
  sides: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.node.isRequired,
    ]).isRequired
  ).isRequired,
  sideCss: PropTypes.string,
  delay: PropTypes.number,
};

Rotator.defaultProps = {
  sideCss: null,
  delay: 1700,
};

export default Rotator;
