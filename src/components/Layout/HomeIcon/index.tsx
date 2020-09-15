import { FaHome } from "react-icons/fa";
import { FC } from "~types";

const HomeIcon: FC = () => (
  <span data-testid="home-icon" css="margin-right: 4px;font-size: 20px;">
    <FaHome style={{ position: "relative", top: 3 }} />
  </span>
);

export default HomeIcon;