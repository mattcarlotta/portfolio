import * as React from "react";
import CardTitle from "~components/Layout/CardTitle";
import DetailHeadline from "~components/Layout/DetailHeadline";
import Image from "~components/Layout/Image";
import Flex from "~components/Layout/Flex";
import Modal from "~components/Layout/Modal";
import ModalContainer from "~components/Layout/ModalContainer";
import Panel from "~components/Layout/Panel";
import PreviewCard from "~components/Layout/PreviewCard";
import Project from "~components/Layout/Project";
import FileDetails from "~components/Layout/FileDetails";
import SubTitle from "~components/Layout/SubTitle";
import Text from "~components/Layout/Text";
import PanelTitle from "~components/Layout/PanelTitle";
import SnapshotContainer from "~components/Layout/SnapshotContainer";
import Home from "~components/Navigation/Home";
import Head from "~components/Navigation/Header";
import { PageProps } from "~types";

const Page = ({
  description,
  head,
  filedetails,
  snapshotdirectory,
  snapshots,
  tech,
}: PageProps): JSX.Element => (
  <>
    <Head {...head} />
    <ModalContainer>
      {(isOpen, selected, toggleModal) => (
        <Project>
          <PanelTitle data-testid="panel-title">{head.title}</PanelTitle>
          <Panel>
            <Text>
              <DetailHeadline>Details:</DetailHeadline>
              <FileDetails {...filedetails} fileName={head.title} />
              <DetailHeadline>Description:</DetailHeadline>
              <SubTitle data-testid="description">{description}</SubTitle>
              <DetailHeadline>Tech Specs:</DetailHeadline>
              <ul data-testid="tech">
                {tech.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {snapshotdirectory && <DetailHeadline>Snapshots:</DetailHeadline>}
              <SnapshotContainer data-testid="snapshots">
                <Flex justify="center" flexwrap>
                  {snapshots.map(({ src, alt, title }) => (
                    <PreviewCard
                      data-testid={title}
                      key={src}
                      onClick={() =>
                        toggleModal(`projects/${snapshotdirectory}/${src}`)
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
            </Text>
          </Panel>
          <Modal isOpen={isOpen} onClick={toggleModal}>
            <Image
              styles="width: 100%;max-width: 1800px;margin: 10px auto;display: block;box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.75);border-radius: 4px;"
              src={selected}
              alt={selected}
            />
          </Modal>
        </Project>
      )}
    </ModalContainer>
    <Home />
  </>
);

Page.defaultProps = {
  snapshots: [],
};

export default Page;
