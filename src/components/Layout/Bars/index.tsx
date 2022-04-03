import styled from '@emotion/styled'

const Bars = ({ className }: { className?: string }) => (
  <div className={className}>
    <div className="bar1" />
    <div className="bar2" />
    <div className="bar3" />
  </div>
)

const BarsIcon = styled(Bars)`
  @keyframes grow {
    0% {
      width: 0px;
    }
    100% {
      width: 100px;
    }
  }

  position: relative;

  .bar1,
  .bar2,
  .bar3 {
    position: absolute;
    height: 2px;
    width: 0px;
    background: #005193;
    opacity: 0;
  }

  .bar1 {
    top: 4px;
    animation: grow 1.5s linear infinite;
  }

  .bar2 {
    top: 8px;
    animation: grow 1.65s linear infinite;
  }

  .bar3 {
    top: 12px;
    animation: grow 1.75s linear infinite;
  }
`

export default BarsIcon
