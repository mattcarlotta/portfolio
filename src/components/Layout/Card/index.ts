/* istanbul ignore file */
import styled from '@emotion/styled'

const Card = styled.div`
  width: 300px;
  height: 260px;
  margin: 10px 5px;
  text-align: center;
  background: transparent;
  color: #0096ff;
  position: relative;
  box-shadow: -1px -1px 24px -9px rgba(114, 158, 255, 0.5) inset;
  border: 1px solid #003366;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  overflow: hidden;

  :hover,
  :focus,
  :focus-within {
    z-index: 1;
    overflow: visible;
    border: 0;
    transform: scale(1.1);
    transition: transform 200ms ease-in-out;

    [data-placeholder='true'] {
      display: block;
    }

    [data-title='card-title'] {
      background: #0080ff;
    }

    .panel-container {
      background: #00020e;
      top: 0;
      left: 0;
      height: auto;
      opacity: 1;
      position: absolute;
      width: 100%;
      box-shadow: inset -1px -1px 24px -9px rgba(101, 130, 255, 0.5),
        0px 0px 26px -2px rgba(0, 64, 255, 1);
      border: 1px solid #0096ff;
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    #top-bar,
    #middle-bar,
    #bottom-bar {
      background: #73b9ff;
      opacity: 0.4;
    }
  }
`

// ${CardTitle} { background: #0080ff; }

// Card.defaultProps = {
//   whileHover: "hover",
//   initial: "initial",
//   exit: "exit",
//   animate: "animate",
//   variants: cardVariants,
// };

export default Card
