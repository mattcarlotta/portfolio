import { css } from "@emotion/react";
import Info from "~components/Layout/Info";
import {
  AiOutlineFolderOpen,
  AiOutlineCode,
  FiPower,
  IconContext,
  RiMapPin2Line,
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
      style: { fontSize: 20, verticalAlign: "text-top", marginRight: 7 },
    }}
  >
    <div
      css={css`
        font-family: "Mukta", -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
        margin-bottom: 20px;
        padding-left: 20px;
      `}
    >
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
          <RiMapPin2Line />
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
        <AiOutlineCode />
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
    </div>
  </IconContext.Provider>
);

FileDetails.defaultProps = {
  active: false,
};

export default FileDetails;
