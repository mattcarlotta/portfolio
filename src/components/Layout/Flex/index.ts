import styled from "@emotion/styled";

const Flex = styled.div<{
  breakpoint?: boolean;
  direction?: string;
  flex?: string;
  height?: string;
  justify?: string;
  margin?: string;
  padding?: string;
  flexwrap?: boolean;
  width?: string;
}>`
  ${({ breakpoint }) =>
    breakpoint &&
    `@media (max-width: 500px) {
      display: block;
      text-align: center;
      width: 100%;
    }
  `};

  flex-direction: ${({ direction }) => direction || "row"};
  display: flex;
  flex: ${({ flex }) => flex};
  align-items: center;
  height: ${({ height }) => height || "auto"};
  width: ${({ width }) => width || "100%"};
  flex-wrap: ${({ flexwrap }) => (flexwrap ? "wrap" : "nowrap")};
  justify-content: ${({ justify }) => justify || "start"};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
`;

export default Flex;
