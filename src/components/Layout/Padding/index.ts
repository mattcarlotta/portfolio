import styled from "@emotion/styled";

const Padding = styled.div<{
  breakpoint?: boolean;
  bottom?: string;
  left?: string;
  right?: string;
  top?: string;
}>`
  ${({ breakpoint }) =>
    breakpoint &&
    `@media (max-width: 610px) {
      padding-left: 0;
      padding-right: 0;
    }
  `};
  padding-top: ${({ top }) => top || "0px"};
  padding-bottom: ${({ bottom }) => bottom || "0px"};
  padding-right: ${({ right }) => right || "0px"};
  padding-left: ${({ left }) => left || "0px"};
  word-wrap: break-word;
`;

export default Padding;
