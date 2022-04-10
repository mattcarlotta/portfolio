/* istanbul ignore file */
import styled from '@emotion/styled'
// import CardTitle from '~components/Layout/CardTitle'

const PreviewCard = styled.div`
  width: 155px;
  height: 120px;
  margin: 5px 8px;
  border-radius: 4px;
  overflow: hidden;
  text-align: center;
  background-color: transparent;
  border: 1px solid #16487a;
  color: #0096ff;
  cursor: pointer;

  :hover,
  :focus,
  :focus-within {
    background-color: rgba(2, 28, 48, 0.4);
    transform: scale(1.1);
    transition: transform 200ms ease-in-out;

    [data-title='card-title'] {
      background: #0080ff;
    }
  }
`
//  ${CardTitle} { background: #0080ff; }

export default PreviewCard
