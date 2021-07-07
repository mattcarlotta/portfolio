import styled from "@emotion/styled";

const Flex = styled.div<{
  direction?: string;
  height?: string;
  justify?: string;
  margin?: string;
  flexwrap?: boolean;
  width?: string;
}>`
  flex-direction: ${({ direction }) => direction || "row"};
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height || "auto"};
  width: ${({ width }) => width || "100%"};
  flex-wrap: ${({ flexwrap }) => (flexwrap ? "wrap" : "nowrap")};
  justify-content: ${({ justify }) => justify || "start"};
  margin: ${({ margin }) => margin};
`;

export default Flex;
