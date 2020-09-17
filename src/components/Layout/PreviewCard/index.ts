import styled from "styled-components";
import CardTitle from "~components/Layout/CardTitle";

const PreviewCard = styled.div`
  width: 200px;
  height: 150px;
  margin: 5px 8px;
  border-radius: 4px;
  overflow: hidden;
  text-align: center;
  background-color: transparent;
  border: 1px solid #16487a;
  color: #0096ff;
  cursor: pointer;

  :hover {
    background-color: rgba(2, 28, 48, 0.4);
    transform: scale(1.1);
    transition: transform 200ms ease-in-out;

    ${CardTitle} {
      background: #0080ff;
    }
  }
`;

export default PreviewCard;
