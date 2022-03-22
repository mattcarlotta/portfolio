/* istanbul ignore file */
import styled from "@emotion/styled";

const CloseModalButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: #d2d2d2;
  border: 0;
  padding: 5px;
  background-color: transparent;
  transition: background-color 0.2s ease-in-out;

  svg {
    font-size: 25px;
  }

  :hover {
    color: #f5222d;
  }

  :focus {
    outline: none;
  }
`;

export default CloseModalButton;
