import styled from "@emotion/styled";

const Button = styled.button<{
  clickable?: boolean;
  height?: string;
  width?: string;
}>`
  @media (max-width: 1000px) {
    svg {
      font-size: 20px !important;
    }
  }

  cursor: pointer;
  background: transparent;
  padding: 15px;
  outline: 0;
  border: 0;
  color: ${({ clickable }) => (clickable ? "#fff" : "#1f1f1f")};
  height: ${({ height }) => height || "auto"};
  width: ${({ width }) => width || "auto"};
  transition: color 300ms ease-in-out;

  svg {
    font-size: 35px;
  }

  :hover {
    color: ${({ clickable }) => (clickable ? "#0080ff" : "#1f1f1f")};
  }
`;

export default Button;
