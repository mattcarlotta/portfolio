import styled from "styled-components";

const FlexCenter = styled.div<{ direction?: string }>`
  flex-direction: ${({ direction }) => direction || "column"};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default FlexCenter;
