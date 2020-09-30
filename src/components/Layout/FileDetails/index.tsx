import { css } from "@emotion/core";
import { AiOutlineFolderOpen, AiOutlineCode } from "react-icons/ai";
import { BsFillCircleFill } from "react-icons/bs";
import { RiMapPin2Line } from "react-icons/ri";
import { IconContext } from "react-icons";
import Info from "~components/Layout/Info";
import { FileDetailsProps } from "~types";

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
        margin-bottom: 20px;
        padding-left: 20px;
      `}
    >
      <Info data-testid="status">
        <BsFillCircleFill style={{ color: active ? "limegreen" : "#2c4776" }} />
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
            {location}
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
          {source}
        </a>
      </Info>
    </div>
  </IconContext.Provider>
);

FileDetails.defaultProps = {
  active: false,
};

export default FileDetails;
