import Bars from "~components/Layout/Bars";
import Card from "~components/Layout/Card";
import CardTitle from "~components/Layout/CardTitle";
import Flex from "~components/Layout/Flex";
import Image from "~components/Layout/Image";
import PlaceHolder from "~components/Layout/PlaceHolder";
import NormalText from "~components/Layout/NormalText";
import Link from "~components/Navigation/Link";
import OutsideLink from "~components/Navigation/OutsideLink";
import { FiPower, FaGithub, FaLink, IconContext, ImInfo } from "~icons";
import { ReactElement } from "~types";

export type CardPreviewProps = {
  active?: boolean;
  alt: string;
  ariaLabel: string;
  description: string;
  idx: number;
  location?: string;
  source: string;
  src: string;
  status?: string;
  title: string;
  url: string;
};

const CardPreview = ({
  active,
  alt,
  ariaLabel,
  description,
  idx,
  location,
  source,
  src,
  status,
  title,
  url,
}: CardPreviewProps): ReactElement => (
  <Card custom={idx}>
    <PlaceHolder />
    <div className="panel-container">
      <IconContext.Provider
        value={{
          style: {
            fontSize: 25,
            verticalAlign: "middle",
            marginRight: 7,
            marginBottom: 10,
          },
        }}
      >
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
        <Flex justify="center" width="100%">
          {Boolean(status) && (
            <FiPower
              style={{
                color: active ? "limegreen" : "#2c4776",
                marginRight: 10,
              }}
            />
          )}
          <Link
            dataTestId={title}
            ariaLabel={ariaLabel}
            padding="10px"
            href={`/projects${url}`}
            scroll={false}
          >
            <ImInfo />
          </Link>
          {location && (
            <OutsideLink
              ariaLabel={`Navigate to ${title} demo page.`}
              href={location}
              padding="10px"
            >
              <FaLink />
            </OutsideLink>
          )}
          <OutsideLink
            ariaLabel={`Navigate to ${title} source page.`}
            href={source}
            padding="10px"
          >
            <FaGithub />
          </OutsideLink>
        </Flex>
      </IconContext.Provider>
      <NormalText padding="0px 10px 15px 10px">{description}</NormalText>
    </div>
  </Card>
);

export default CardPreview;
