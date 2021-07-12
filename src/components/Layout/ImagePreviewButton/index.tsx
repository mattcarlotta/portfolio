import styled from "@emotion/styled";
// import { AppSnapshots } from "~components/Layout/Apps";
// import Flex from "~components/Layout/Flex";
// import Image from "~components/Layout/Image";
// import { ReactElement } from "~types";

const ImagePreviewButton = styled.button<{ active: boolean }>`
  cursor: pointer;
  margin: 0 5px;
  height: 75px;
  width: 75px;
  overflow: hidden;
  border-radius: 4px;
  border: 3px solid ${({ active }) => (active ? "#0080ff" : "transparent")};
  opacity: ${({ active }) => (active ? 1 : 0.4)};
  transition: all 300ms ease-in-out;

  :hover {
    opacity: 1;
  }
`;

// export type ImagePreviewProps = {
//   selectedIndex: number;
//   snapshotdirectory?: string;
//   snapshots?: AppSnapshots;
//   selectImage: (selectedIndex: number) => void;
// };

// const ImagePreviewer = ({
//   selectedIndex,
//   snapshotdirectory,
//   snapshots,
//   selectImage,
// }: ImagePreviewProps): ReactElement => (
//   <Flex justify="center" height="100px" padding="5px" margin="10px">
//     {snapshots &&
//       snapshots.length > 0 &&
//       snapshots.map(({ title, src, alt }, idx) => (
//         <ImagePreviewButton
//           type="button"
//           onClick={() => selectImage(idx)}
//           active={idx === selectedIndex}
//           key={title}
//         >
//           <Image
//             styles="height: 75px;margin: 0 auto;align-self: center;"
//             src={`projects/${snapshotdirectory}/${src}`}
//             alt={alt}
//           />
//         </ImagePreviewButton>
//       ))}
//   </Flex>
// );

export default ImagePreviewButton;
