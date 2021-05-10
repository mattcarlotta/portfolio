import styled from "@emotion/styled";
import FlexCenter from "~components/Layout/FlexCenter";
import { ReactElement } from "~types";

const Solar = ({ className }: { className?: string }): ReactElement => (
  <FlexCenter data-testid="solar-system" className={className}>
    <div className="solar-system">
      <div className="earth-orbit orbit">
        <div className="planet earth" />
        <div className="venus-orbit orbit">
          <div className="planet venus" />
          <div className="mercury-orbit orbit">
            <div className="planet mercury" />
            <div className="sun" />
          </div>
        </div>
      </div>
    </div>
  </FlexCenter>
);

const SolarIcon = styled(Solar)`
  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(359deg);
    }
  }

  position: relative;
  background-color: transparent;
  z-index: -1;
  opacity: 0.15;

  .solar-system {
    position: absolute;
    top: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .orbit {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ffffffa5;
    border-radius: 50%;
  }

  .earth-orbit {
    width: 800px;
    height: 800px;
    animation: spin 12s linear 0s infinite;
  }

  .venus-orbit {
    width: 555px;
    height: 555px;
    animation: spin 7.4s linear 0s infinite;
  }

  .mercury-orbit {
    width: 325px;
    height: 325px;
    animation: spin 3s linear 0s infinite;
  }

  .planet {
    position: absolute;
    top: -5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #0096ff;
  }

  .sun {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #0096ff;
  }
`;

export default SolarIcon;
