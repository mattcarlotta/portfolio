import styled from "@emotion/styled";
import Center from "~components/Layout/Center";
import SubHeadline from "~components/Layout/SubHeadline";

const FooterComponent = ({
  className,
}: {
  className?: string;
}): JSX.Element => (
  <footer data-testid="footer" className={className}>
    <Center>
      <SubHeadline>©{new Date().getFullYear()} matt carlotta</SubHeadline>
    </Center>
  </footer>
);

const Footer = styled(FooterComponent)`
  margin: 70px 0 50px 0;
  padding-bottom: 20px;
`;

export default Footer;
