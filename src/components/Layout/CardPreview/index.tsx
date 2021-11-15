import Bars from "~components/Layout/Bars";
import Card from "~components/Layout/Card";
import CardTitle from "~components/Layout/CardTitle";
import Flex from "~components/Layout/Flex";
import Image from "~components/Layout/Image";
import PlaceHolder from "~components/Layout/PlaceHolder";
import NormalText from "~components/Layout/NormalText";
import Tooltip from "~components/Layout/Tooltip";
import Link from "~components/Navigation/Link";
import OutsideLink from "~components/Navigation/OutsideLink";
import { FaLink, FaRegFileCode, FiPower, IconContext, ImInfo } from "~icons";
import { ReactElement } from "~types";

export type CardPreviewProps = {
  active?: boolean;
  alt: string;
  ariaLabel: string;
  description: string;
  href?: string;
  idx: number;
  location?: string;
  ratio?: string;
  showInfo: boolean;
  source?: string;
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
  ratio,
  showInfo,
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
          },
        }}
      >
        <CardTitle id={title}>{title}</CardTitle>
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
              ratio={ratio}
              width="auto"
              styles="max-width: 250px;border-radius: 4px;"
            />
          </Link>
        </Flex>
        <Flex justify="center" width="100%" margin="5px 0 10px 0">
          {Boolean(status) && (
            <Tooltip title={status}>
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
            </Tooltip>
          )}
          {showInfo && (
            <Tooltip title="More Info">
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
            </Tooltip>
          )}
          {location && (
            <Tooltip title="Demo">
              <OutsideLink
                ariaLabel={`Navigate to ${title} demo page.`}
                href={location}
                padding="5px"
                margin="0 5px"
              >
                <FaLink />
              </OutsideLink>
            </Tooltip>
          )}
          {source && (
            <Tooltip title="Source">
              <OutsideLink
                ariaLabel={`Navigate to ${title} source page.`}
                href={source}
                padding="5px"
                margin="0 5px"
              >
                <FaRegFileCode style={{ fontSize: 24 }} />
              </OutsideLink>
            </Tooltip>
          )}
        </Flex>
      </IconContext.Provider>
      <NormalText
        as="h2"
        id={`${title} description`}
        padding="0px 10px 15px 10px"
      >
        {description}
      </NormalText>
    </div>
  </Card>
);

CardPreview.defaultProps = {
  href: "",
  showInfo: true,
};

export default CardPreview;
