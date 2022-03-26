/* istanbul ignore file */
import styled from "@emotion/styled";

const LoadingPlaceholder = styled.div<{
  isLoading: boolean;
  height?: number;
  width?: number;
}>`
  display: ${({ isLoading }) => (isLoading ? "block" : "none")};
  margin: 0 10px;
  height: ${({ height }) => `${height}px` || "600px"};
  width: ${({ width }) => `${width}px` || "600px"};
  margin: 0 auto;
  animation: pulse 1.2s infinite;
  animation-delay: 500ms;
  border-radius: 4px;
`;

export default LoadingPlaceholder;
