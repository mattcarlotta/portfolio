/* istanbul ignore file */
import styled from '@emotion/styled'

const Fixed = styled.div<{
  bottom?: string
  left?: string
  height?: string
  right?: string
  top?: string
  width?: string
}>`
  position: fixed;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`

export default Fixed
