/* istanbul ignore file */
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import CardTitle from "~components/Layout/CardTitle";
import PlaceHolder from "~components/Layout/PlaceHolder";

const cardVariants = {
  animate: (index: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: 0.1 * index },
  }),
  initial: { x: "-100vw", opacity: 0 },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: { delay: 0 },
  },
  hover: { scale: 1.1 },
};

const Card = styled(motion.div)`
  width: 300px;
  height: 260px;
  margin: 5px;
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

    ${CardTitle} {
      background: #0080ff;
    }

    ${PlaceHolder} {
      display: block;
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

    .bar1,
    .bar2,
    .bar3 {
      background: #73b9ff;
      opacity: 0.4;
    }
  }
`;

Card.defaultProps = {
  whileHover: "hover",
  initial: "initial",
  exit: "exit",
  animate: "animate",
  variants: cardVariants,
};

export default Card;
