import styled from "styled-components";

const OutsideLink = styled.a.attrs(() => ({
  rel: "noopener noreferrer",
  target: "_blank",
}))`
  padding: 10px 15px;
  color: #1295f3;
  transition: all 0.5s;
  text-decoration: underline;
  cursor: pointer;

  :hover {
    color: #fff;
  }

  :focus {
    color: #1295f3;
    outline: none !important;
  }
`;

export default OutsideLink;
