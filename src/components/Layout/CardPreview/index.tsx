import Bars from "~components/Layout/Bars";
import Card from "~components/Layout/Card";
import CardTitle from "~components/Layout/CardTitle";
import Flex from "~components/Layout/Flex";
import Image from "~components/Layout/Image";
import PlaceHolder from "~components/Layout/PlaceHolder";
import NormalText from "~components/Layout/NormalText";
import { ReactElement } from "~types";

export type CardPreviewProps = {
  idx: number;
  title: string;
  src: string;
  alt: string;
  description: string;
};

const CardPreview = ({
  alt,
  idx,
  description,
  src,
  title,
}: CardPreviewProps): ReactElement => (
  <Card custom={idx}>
    <PlaceHolder />
    <div className="panel-container">
      <CardTitle>{title}</CardTitle>
      <Bars />
      <Flex justify="center" height="230px" width="100%">
        <Image
          src={`projects/${src}`}
          alt={alt}
          height="180px"
          width="auto"
          styles="max-width: 250px;border-radius: 4px;"
        />
      </Flex>
      <NormalText padding="0px 10px 15px 10px">{description}</NormalText>
    </div>
  </Card>
);

export default CardPreview;
