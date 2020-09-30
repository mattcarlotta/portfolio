import { css } from "@emotion/core";
import Center from "~components/Layout/Center";
import SubHeadline from "~components/Layout/SubHeadline";
import { FC } from "~types";

const Footer: FC = (): JSX.Element => (
  <footer
    data-testid="footer"
    css={css`
      margin: 70px 0 50px;
    `}
  >
    <Center>
      <SubHeadline>©2020 matt carlotta</SubHeadline>
    </Center>
  </footer>
);

export default Footer;
