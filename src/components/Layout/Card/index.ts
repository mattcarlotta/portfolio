/* istanbul ignore file */
import styled from "@emotion/styled";
import CardTitle from "~components/Layout/CardTitle";

const Card = styled.div`
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

  :hover {
    background-color: rgba(0, 2, 14, 1);
    box-shadow: 0px 0px 26px -2px rgba(0, 64, 255, 1);
    transform: scale(1.15);
    transition: transform 200ms ease-in-out;

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

export default Card;
