import styled from '@emotion/styled'
import type { ReactElement } from '~types'

const Orbits = ({ className }: { className?: string }): ReactElement => (
  <div className={className}>
    <div className="container">
      {[0, 1, 2, 3, 4, 5].map((key) => (
        <div key={key} className={`circle circle-${key}`} />
      ))}
    </div>
  </div>
)

const OrbitsIcon = styled(Orbits)`
  @media (max-width: 650px) {
    display: none;
  }

  opacity: 0.45;
  position: relative;
  top: 0;
  left: 0;
  z-index: -1;

  .container {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 150px;
    height: 150px;
    transform: rotateX(60deg) rotateZ(-30deg);
    animation: solar-rotate 20s infinite linear;
    transform-style: preserve-3d;
  }

  .circle-1 {
    transform: rotateZ(72deg) rotateX(63.435deg);
  }
  .circle-2 {
    transform: rotateZ(144deg) rotateX(63.435deg);
  }
  .circle-3 {
    transform: rotateZ(216deg) rotateX(63.435deg);
  }
  .circle-4 {
    transform: rotateZ(288deg) rotateX(63.435deg);
  }
  .circle-5 {
    transform: rotateZ(360deg) rotateX(63.435deg);
  }

  .circle {
    width: 150px;
    height: 150px;
    position: absolute;
    transform-style: preserve-3d;
    border-radius: 100%;
    box-sizing: border-box;
    box-shadow: 0 0 20px #00020c, inset 0 0 20px #2c4776;

    :after {
      transform: translateZ(90px);
    }

    :before {
      transform: translateZ(-90px);
    }

    :before,
    :after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      width: 5px;
      height: 5px;
      border-radius: 100%;
      background: #2c4776;
      box-shadow: 0 0 5px 2px #2c4776;
    }
  }
`

export default OrbitsIcon
