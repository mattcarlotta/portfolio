/* istanbul ignore file */
import styled from '@emotion/styled'

const LoadingPlaceholder = styled.div<{
  height?: number
  width?: number
}>`
  margin: 0 10px;
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
  margin: 0 auto;
  animation: pulse 1.2s infinite;
  animation-delay: 500ms;
  border-radius: 4px;
`

export default LoadingPlaceholder
