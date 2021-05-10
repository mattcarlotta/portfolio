/* istanbul ignore file */
import styled from "@emotion/styled";

const Info = styled.div`
  @media (max-width: 550px) {
    word-wrap: break-word;
    word-break: break-all;
  }

  margin: 10px 0;
  padding: 0;

  a,
  a:visited {
    color: #0096ff;
    transition: all 0.5s;
  }

  a {
    text-decoration: underline;
  }

  a:hover {
    color: #fff;
  }
`;

export default Info;
