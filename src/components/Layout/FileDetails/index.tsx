import Info from "~components/Layout/Info";
import NormalText from "~components/Layout/NormalText";
import OutsideLink from "~components/Navigation/OutsideLink";
import { AiOutlineFolderOpen, FaLink, FaRegFileCode, FiPower } from "~icons";
import type { CSSProperties } from "~types";

export type FileDetailsProps = {
  active: boolean;
  fileName: string;
  location?: string;
  status: string;
  source: string;
};

const style = {
  fontSize: 20,
  verticalAlign: "middle",
  marginRight: 10,
} as CSSProperties;

const FileDetails = ({
  active,
  location,
  fileName,
  source,
  status,
}: FileDetailsProps): JSX.Element => (
  <NormalText margin="0 0 20px 0" padding="0 0 0 15px" fontSize="16px">
    <Info data-testid="status">
      <FiPower
        data-testid="fipower"
        style={{ color: active ? "limegreen" : "#2c4776", ...style }}
      />
      {status}
    </Info>
    <Info style={{ textTransform: "uppercase" }} data-testid="filename">
      <AiOutlineFolderOpen style={style} />
      {fileName}
    </Info>
    {location && (
      <Info data-testid="location">
        <FaLink style={style} />
        <OutsideLink
          data-testid="location-link"
          href={location}
          ariaLabel="Navigate to hosted website"
          showIcon
        >
          Demo
        </OutsideLink>
      </Info>
    )}
    <Info data-testid="source">
      <FaRegFileCode style={style} />
      <OutsideLink
        data-testid="source-link"
        href={source}
        ariaLabel="Navigate to source code"
        showIcon
      >
        Source
      </OutsideLink>
    </Info>
  </NormalText>
);

FileDetails.defaultProps = {
  active: false,
};

export default FileDetails;
