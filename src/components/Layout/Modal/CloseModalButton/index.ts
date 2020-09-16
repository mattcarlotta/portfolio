import styled from "styled-components";

const CloseModalButton = styled.button`
  cursor: pointer;
  color: #d2d2d2;
  border: 0;
  height: 25px;
  width: 25px;
  background-color: transparent;
  -webkit-font-smoothing: auto;
  transition: all 0.2s ease-in-out;
  font-size: 20px;
  margin-right: 5px;

  &:hover {
    color: #f5222d;
  }

  &:focus {
    outline: none;
  }
`;

export default CloseModalButton;
