import * as React from "react";
// import { css } from "@emotion/react";
import { Slide, Dialog, withStyles } from "@material-ui/core";
import { AppSnapshots } from "~components/Layout/Apps";
import Button from "~components/Layout/Button";
import CardTitle from "~components/Layout/CardTitle";
import Center from "~components/Layout/Center";
import CloseModalButton from "~components/Layout/CloseModalButton";
import DetailHeadline from "~components/Layout/DetailHeadline";
import Flex from "~components/Layout/Flex";
import Image from "~components/Layout/Image";
import ImagePreviewButton from "~components/Layout/ImagePreviewButton";
import ImageTitle from "~components/Layout/ImageTitle";
import PreviewCard from "~components/Layout/PreviewCard";
import SnapshotContainer from "~components/Layout/SnapshotContainer";
import { FaChevronLeft, FaChevronRight, FaTimes } from "~icons";
import { ReactElement, Ref, TransitionProps } from "~types";

const ImageViewer = withStyles(() => ({
  paper: {
    backgroundColor: "#00020e",
  },
}))(Dialog);

const SlideTransition = React.forwardRef(
  (
    props: TransitionProps & { children?: ReactElement<any, any> },
    ref: Ref<unknown>,
  ) => <Slide direction="right" ref={ref} {...props} />,
);

export type ModalDialogProps = {
  snapshotdirectory?: string;
  snapshots?: AppSnapshots;
};

export type ModalDialogState = {
  open: boolean;
  index: number;
  alt: string;
  src: string;
  title: string;
};

const initialImageState = {
  open: false,
  index: 0,
  alt: "",
  src: "",
  title: "",
};

const ModalDialog = ({
  snapshotdirectory,
  snapshots,
}: ModalDialogProps): ReactElement => {
  const [image, setImage] = React.useState<ModalDialogState>(initialImageState);
  const { open, index, alt, src, title } = image;
  const snaps = snapshots as AppSnapshots;
  const snapsLength = snaps.length - 1;

  const handleClick = (index: number): void => {
    const image = snaps[index];
    setImage({ open: true, index, ...image });
  };

  const handleNextImage = (nextIndex: number): void => {
    const selectedIndex =
      nextIndex >= 0 && nextIndex <= snapsLength
        ? nextIndex
        : nextIndex < 0
        ? snapsLength
        : 0;

    const image = snaps[selectedIndex];
    setImage(prevState => ({ ...prevState, index: selectedIndex, ...image }));
  };

  const selectImage = (selectedIndex: number): void => {
    const image = snaps[selectedIndex];
    setImage(prevState => ({ ...prevState, index: selectedIndex, ...image }));
  };

  const handleExit = (): void => {
    setImage(initialImageState);
  };

  const handleClose = (): void => {
    setImage(prevState => ({ ...prevState, open: false }));
  };

  return (
    <>
      {snapshotdirectory && <DetailHeadline>Snapshots:</DetailHeadline>}
      {snapshots && snapshots.length > 0 && (
        <SnapshotContainer data-testid="snapshots">
          <Flex justify="center" flexwrap>
            {snapshots.map(({ src, alt, title }, index) => (
              <PreviewCard
                data-testid={title}
                key={src}
                onClick={() => handleClick(index)}
              >
                <CardTitle>{title}</CardTitle>
                <Image
                  src={`projects/${snapshotdirectory}/${src}Min`}
                  alt={alt}
                />
              </PreviewCard>
            ))}
          </Flex>
        </SnapshotContainer>
      )}
      <ImageViewer
        fullScreen
        scroll="body"
        id="modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="actions-dialog"
        TransitionComponent={SlideTransition}
        TransitionProps={{ onExited: handleExit }}
      >
        <Flex direction="column" height="100vh">
          <Flex justify="center" direction="row" height="80px">
            <ImageTitle>
              <Center data-testid="modal-title">{title}</Center>
            </ImageTitle>
            <CloseModalButton
              data-testid="close-modal"
              aria-label="close modal"
              type="button"
              onClick={handleClose}
            >
              <FaTimes style={{ fontSize: 25 }} />
            </CloseModalButton>
          </Flex>
          <Flex justify="space-around" direction="row" padding="20px">
            <Button type="button" onClick={() => handleNextImage(index - 1)}>
              <FaChevronLeft />
            </Button>
            <Flex justify="center" width="90%">
              <Image
                placeholder
                styles="width: 80%;margin: 0 auto;"
                src={`projects/${snapshotdirectory}/${src}`}
                alt={alt}
              />
            </Flex>
            <Button type="button" onClick={() => handleNextImage(index + 1)}>
              <FaChevronRight />
            </Button>
          </Flex>
          <Flex justify="center" height="80px">
            {snapshots &&
              snapshots.length > 0 &&
              snapshots.map(({ title, src, alt }, idx) => (
                <ImagePreviewButton
                  type="button"
                  onClick={() => selectImage(idx)}
                  active={idx === index}
                  key={title}
                >
                  <Image
                    styles="height: 75px;margin: 0 auto;align-self: center;"
                    src={`projects/${snapshotdirectory}/${src}`}
                    alt={alt}
                  />
                </ImagePreviewButton>
              ))}
          </Flex>
        </Flex>
      </ImageViewer>
    </>
  );
};

export default ModalDialog;
