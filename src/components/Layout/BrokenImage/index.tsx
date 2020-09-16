import styled from "styled-components";
import { AiOutlineFileImage } from "react-icons/ai";

const Image = ({ className }: { className?: string }) => (
  <div data-testid="broken-image" className={className}>
    <AiOutlineFileImage />
    <p>Unable to load image</p>
  </div>
);

const BrokenImage = styled(Image)`
  margin-top: 25px;
  text-align: center;
  color: #686868;
  width: 100%;

  svg {
    font-size: 40px;
  }
`;

export default BrokenImage;
