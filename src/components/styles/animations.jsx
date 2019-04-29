import { keyframes } from 'styled-components';

export const slideInFromLeft = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
`;

export const show = keyframes`
  0% {
    visibility: hidden;
    opacity: 0;
  }

  100% {
    visibility: visible;
    opacity: 1;
  }
`;

export default {
  slideInFromLeft,
  show,
};
