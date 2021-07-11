import Bars from "~components/Layout/Bars";
import Card from "~components/Layout/Card";
import CardTitle from "~components/Layout/CardTitle";
import Flex from "~components/Layout/Flex";
import Image from "~components/Layout/Image";
import PlaceHolder from "~components/Layout/PlaceHolder";
import NormalText from "~components/Layout/NormalText";
import Link from "~components/Navigation/Link";
import OutsideLink from "~components/Navigation/OutsideLink";
import { FaLink, FaRegFileCode, FiPower, IconContext, ImInfo } from "~icons";
import { ReactElement } from "~types";

export type CardPreviewProps = {
  active?: boolean;
  alt: string;
  ariaLabel: string;
  description: string;
  href: string;
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
  href,
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
            fontSize: 22,
            verticalAlign: "middle",
            marginRight: 7,
            marginBottom: 10,
          },
        }}
      >
        <CardTitle>{title}</CardTitle>
        <Bars />
        <Flex justify="center" height="230px" width="100%">
          <Link
            dataTestId={title}
            ariaLabel={ariaLabel}
            padding="0px"
            href={`/${href}${url}`}
            scroll={false}
          >
            <Image
              src={`projects/${src}`}
              alt={alt}
              height="180px"
              width="auto"
              styles="max-width: 250px;border-radius: 4px;"
            />
          </Link>
        </Flex>
        <Flex justify="center" width="100%">
          {Boolean(status) && (
            <Link
              dataTestId={`status-${title}`}
              ariaLabel={ariaLabel}
              padding="5px"
              margin="0 5px"
              href={`/${href}${url}`}
              scroll={false}
            >
              <FiPower
                style={{
                  color: active ? "limegreen" : "#2c4776",
                }}
              />
            </Link>
          )}
          <Link
            dataTestId={`info-${title}`}
            ariaLabel={ariaLabel}
            padding="5px"
            margin="0 5px"
            href={`/${href}${url}`}
            scroll={false}
          >
            <ImInfo />
          </Link>
          {location && (
            <OutsideLink
              ariaLabel={`Navigate to ${title} demo page.`}
              href={location}
              padding="5px"
              margin="0 5px"
            >
              <FaLink />
            </OutsideLink>
          )}
          <OutsideLink
            ariaLabel={`Navigate to ${title} source page.`}
            href={source}
            padding="5px"
            margin="0 5px"
          >
            <FaRegFileCode style={{ fontSize: 24 }} />
          </OutsideLink>
        </Flex>
      </IconContext.Provider>
      <NormalText padding="0px 10px 15px 10px">{description}</NormalText>
    </div>
  </Card>
);

export default CardPreview;
