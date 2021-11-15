import Info from "~components/Layout/Info";
import NormalText from "~components/Layout/NormalText";
import OutsideLink from "~components/Navigation/OutsideLink";
import {
  AiOutlineFolderOpen,
  FaLink,
  FaRegFileCode,
  FiPower,
  IconContext,
} from "~icons";

export type FileDetailsProps = {
  active: boolean;
  fileName: string;
  location?: string;
  status: string;
  source: string;
};

const FileDetails = ({
  active,
  location,
  fileName,
  source,
  status,
}: FileDetailsProps): JSX.Element => (
  <IconContext.Provider
    value={{
      style: { fontSize: 20, verticalAlign: "middle", marginRight: 10 },
    }}
  >
    <NormalText margin="0 0 20px 0" padding="0 0 0 15px" fontSize="16px">
      <Info data-testid="status">
        <FiPower style={{ color: active ? "limegreen" : "#2c4776" }} />
        {status}
      </Info>
      <Info data-testid="filename">
        <AiOutlineFolderOpen />
        {fileName}
      </Info>
      {location && (
        <Info data-testid="location">
          <FaLink />
          <OutsideLink
            data-testid="location-link"
            href={location}
            ariaLabel="Navigate to hosted website"
          >
            Demo
          </OutsideLink>
        </Info>
      )}
      <Info data-testid="source">
        <FaRegFileCode />
        <OutsideLink
          data-testid="source-link"
          href={source}
          ariaLabel="Navigate to source code"
        >
          Source
        </OutsideLink>
      </Info>
    </NormalText>
  </IconContext.Provider>
);

FileDetails.defaultProps = {
  active: false,
};

export default FileDetails;
