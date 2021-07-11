import * as React from "react";
import { Slide, Dialog } from "@material-ui/core";
import { AppSnapshots } from "~components/Layout/Apps";
import CardTitle from "~components/Layout/CardTitle";
import Center from "~components/Layout/Center";
import CloseModalButton from "~components/Layout/CloseModalButton";
import DetailHeadline from "~components/Layout/DetailHeadline";
import Flex from "~components/Layout/Flex";
import Image from "~components/Layout/Image";
import Padding from "~components/Layout/Padding";
import PreviewCard from "~components/Layout/PreviewCard";
import SnapshotContainer from "~components/Layout/SnapshotContainer";
import { FaTimes } from "~icons";
import { ReactElement, Ref, TransitionProps } from "~types";

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
  source: string;
  title: string;
};

const initialImageState = {
  open: false,
  source: "",
  title: "",
};

const ModalDialog = ({
  snapshotdirectory,
  snapshots,
}: ModalDialogProps): ReactElement => {
  const [image, setImage] = React.useState<ModalDialogState>(initialImageState);
  const { open, source, title } = image;

  const handleClick = (source: string, title: string): void => {
    setImage({ open: true, source, title });
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
            {snapshots.map(({ src, alt, title }) => (
              <PreviewCard
                data-testid={title}
                key={src}
                onClick={() =>
                  handleClick(`projects/${snapshotdirectory}/${src}`, title)
                }
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
      <Dialog
        maxWidth={false}
        scroll="body"
        id="modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="actions-dialog"
        TransitionComponent={SlideTransition}
        TransitionProps={{ onExited: handleExit }}
      >
        <h2>
          <Center data-testid="modal-title">{title}</Center>
        </h2>
        <CloseModalButton
          data-testid="close-modal"
          aria-label="close modal"
          type="button"
          onClick={handleClose}
        >
          <FaTimes style={{ fontSize: 20 }} />
        </CloseModalButton>
        <Padding top="10px" right="40px" bottom="40px" left="40px">
          <Image
            placeholder
            styles="width: 100%;max-width: 1800px;margin: 0 auto;box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.75);border-radius: 4px;"
            src={source}
            alt={source}
          />
        </Padding>
      </Dialog>
    </>
  );
};

export default ModalDialog;
