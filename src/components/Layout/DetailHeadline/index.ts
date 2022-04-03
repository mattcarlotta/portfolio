import styled from '@emotion/styled'

const DetailHeadline = styled.h2<{
  margin?: string
}>`
  font-weight: bold;
  font-size: 22px;
  color: #ccc;
  margin: ${({ margin }) => margin || '40px 0 0 0'};
`

export default DetailHeadline
