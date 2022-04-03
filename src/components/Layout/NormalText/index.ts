/* istanbul ignore file */
import styled from '@emotion/styled'

const NormalText = styled.div<{
  color?: string
  fontSize?: string
  margin?: string
  padding?: string
}>`
  font-family: 'Mukta', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize || '14px'};
`

export default NormalText
