/* istanbul ignore file */
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import CardTitle from "~components/Layout/CardTitle";

const cardVariants = {
  animate: (index: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: 0.1 * index },
  }),
  initial: { x: -1000, opacity: 0 },
  exit: {
    x: -1000,
    opacity: 0,
    transition: { delay: 0 },
  },
  hover: { scale: 1.1 },
};

const Card = styled(motion.div)`
  width: 300px;
  height: 260px;
  margin: 5px;
  border-radius: 4px;
  text-align: center;
  background-color: transparent;
  color: #0096ff;
  box-shadow: 0px 8px 15px -8px rgba(0, 0, 0, 0.75);

  :after {
    content: "";
    display: block;
    height: 90%;
    border-width: 1px;
    border-style: solid;
    -o-border-image: -o-linear-gradient(
      bottom,
      #73b9ff 0%,
      #005193 50%,
      #00284a 100%
    );
    border-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      from(#73b9ff),
      color-stop(50%, #005193),
      to(#00284a)
    );
    border-image: linear-gradient(
      to top,
      #73b9ff 0%,
      #005193 50%,
      #00284a 100%
    );
    border-image-slice: 1;
  }

  :hover {
    background-color: rgba(0, 2, 14, 1);
    box-shadow: 0px 0px 26px -2px rgba(0, 64, 255, 1);

    ${CardTitle} {
      background: #0080ff;
    }

    .bar1,
    .bar2,
    .bar3 {
      background: #73b9ff;
      opacity: 0.4;
    }

    :after {
      border-width: 2px;
      border-style: solid;
      -o-border-image: -o-linear-gradient(
        bottom,
        #73b9ff 0%,
        #005193 50%,
        #005193 100%
      );
      border-image: -webkit-gradient(
        linear,
        left bottom,
        left top,
        from(#73b9ff),
        color-stop(50%, #005193),
        to(#005193)
      );
      border-image: linear-gradient(
        to top,
        #73b9ff 0%,
        #005193 50%,
        #005193 100%
      );
      border-image-slice: 1;
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
