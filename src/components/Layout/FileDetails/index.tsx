import Info from "~components/Layout/Info";
import NormalText from "~components/Layout/NormalText";
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
          <a
            data-testid="location-link"
            href={location}
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Link to hosted website"
          >
            Demo
          </a>
        </Info>
      )}
      <Info data-testid="source">
        <FaRegFileCode />
        <a
          data-testid="source-link"
          href={source}
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Link to source code"
        >
          Source
        </a>
      </Info>
    </NormalText>
  </IconContext.Provider>
);

FileDetails.defaultProps = {
  active: false,
};

export default FileDetails;
