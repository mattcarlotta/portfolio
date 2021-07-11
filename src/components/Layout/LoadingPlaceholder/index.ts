/* istanbul ignore file */
import styled from "@emotion/styled";

const LoadingPlaceholder = styled.div<{ isLoading: boolean }>`
  display: ${({ isLoading }) => (isLoading ? "block" : "none")};
  margin: 0 10px;
  height: 600px;
  width: 600px;
  margin: 0 auto;
  animation: pulse 1.2s infinite;
`;

export default LoadingPlaceholder;
