import * as React from "react";
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
  snapshots: AppSnapshots;
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
  const snapsLength = snapshots.length;
  const hasSnaps = snapsLength > 0;

  const selectImage = (selectedIndex: number): void => {
    const image = snapshots[selectedIndex];
    setImage(prevState => ({ ...prevState, index: selectedIndex, ...image }));
  };

  const handleImageClick = (index: number): void => {
    setImage({ open: true, index, ...snapshots[index] });
  };

  const handleNextImage = (nextIndex: number): void => {
    const snapsIndexLength = snapsLength - 1;

    const selectedIndex =
      nextIndex >= 0 && nextIndex <= snapsIndexLength
        ? nextIndex
        : nextIndex < 0
        ? snapsIndexLength
        : 0;

    selectImage(selectedIndex);
  };

  const handleModalExit = (): void => {
    setImage(initialImageState);
  };

  const handleModalClose = (): void => {
    setImage(prevState => ({ ...prevState, open: false }));
  };

  const handleKeyDown = ({ key }: { key: string }): void => {
    switch (key) {
      case "Tab":
      case "ArrowRight": {
        handleNextImage(index + 1);
        break;
      }
      case "ArrowLeft": {
        handleNextImage(index - 1);
        break;
      }
      case "Escape": {
        handleModalExit();
        break;
      }
      default:
        break;
    }
  };

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <>
      {snapshotdirectory && <DetailHeadline>Snapshots:</DetailHeadline>}
      {hasSnaps && (
        <SnapshotContainer data-testid="snapshots">
          <Flex justify="center" flexwrap>
            {snapshots.map(({ src, alt, title }, index) => (
              <PreviewCard
                data-testid={title}
                key={src}
                onClick={() => handleImageClick(index)}
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
        onClose={handleModalClose}
        aria-labelledby="actions-dialog"
        TransitionComponent={SlideTransition}
        TransitionProps={{ onExited: handleModalExit }}
      >
        <Flex justify="center" direction="row" height="80px">
          <ImageTitle>
            <Center data-testid="modal-title">{title}</Center>
          </ImageTitle>
          <CloseModalButton
            data-testid="close-modal"
            aria-label="close modal"
            type="button"
            onClick={handleModalClose}
          >
            <FaTimes />
          </CloseModalButton>
        </Flex>
        <Flex
          justify="space-around"
          direction="row"
          padding="20px"
          margin="0 0 20px 0"
        >
          <Button
            data-testid="previous-image"
            type="button"
            clickable={snapsLength > 1}
            onClick={() => handleNextImage(index - 1)}
          >
            <FaChevronLeft />
          </Button>
          <Flex justify="center">
            <Image
              placeholder
              styles="width: 100%;max-width: 1400px;"
              src={`projects/${snapshotdirectory}/${src}`}
              alt={alt}
            />
          </Flex>
          <Button
            data-testid="next-image"
            type="button"
            clickable={snapsLength > 1}
            onClick={() => handleNextImage(index + 1)}
          >
            <FaChevronRight />
          </Button>
        </Flex>
        <Center>
          {hasSnaps &&
            snapshots.map(({ title, src, alt }, idx) => (
              <ImagePreviewButton
                type="button"
                data-testid={`button-${title}`}
                tabIndex={-1}
                aria-selected={idx === index}
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
        </Center>
      </ImageViewer>
    </>
  );
};

ModalDialog.defaultProps = {
  snapshots: [],
};

export default ModalDialog;
