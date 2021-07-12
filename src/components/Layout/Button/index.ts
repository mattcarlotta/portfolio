/* istanbul ignore file */
import styled from "@emotion/styled";

const Button = styled.button<{ height?: string; width?: string }>`
  @media (max-width: 550px) {
    svg {
      font-size: 20px !important;
    }
  }

  cursor: pointer;
  background: transparent;
  padding: 15px;
  outline: 0;
  border: 0;
  color: #fff;
  height: ${({ height }) => height || "auto"};
  width: ${({ width }) => width || "auto"};
  transition: color 300ms ease-in-out;

  svg {
    font-size: 35px;
  }

  :hover {
    color: #0080ff;
  }
`;

export default Button;
