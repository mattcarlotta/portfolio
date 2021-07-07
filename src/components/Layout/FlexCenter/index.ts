import styled from "@emotion/styled";

const FlexCenter = styled.div<{ breakpoint?: boolean; direction?: string }>`
  ${({ breakpoint }) =>
    breakpoint &&
    `@media (max-width: 500px) {
      flex-wrap: wrap;
    }
  `};

  flex-direction: ${({ direction }) => direction || "column"};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default FlexCenter;
