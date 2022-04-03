import styled from '@emotion/styled'

const FlexSpaceAround = styled.div<{
  breakpoint?: boolean
  direction?: string
}>`
  ${({ breakpoint }) =>
    breakpoint &&
    `@media (max-width: 500px) {
      flex-wrap: wrap;
    }
  `};

  flex-direction: ${({ direction }) => direction || 'row'};
  display: flex;
  max-width: 400px;
  justify-content: space-around;
  margin: 10px auto;
  align-items: center;
  width: 100%;
`

export default FlexSpaceAround
