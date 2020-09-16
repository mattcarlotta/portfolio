import styled from "styled-components";

const Info = styled.div`
  @media (max-width: 550px) {
    word-wrap: break-word;
    word-break: break-all;
  }

  margin: 10px 0;
  padding: 0;
  font-size: 14px;

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
