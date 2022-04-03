import styled from '@emotion/styled'

const FlexCenter = styled.div<{ direction?: string }>`
  flex-direction: ${({ direction }) => direction || 'column'};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export default FlexCenter
