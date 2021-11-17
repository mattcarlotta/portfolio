import Center from "~components/Layout/Center";
import Link from "~components/Navigation/Link";
import { GoHome } from "~icons";
import type { ReactElement } from "~types";

export type GoBackProps = {
  href: string;
  title: string;
};

const GoBack = ({ href, title }: GoBackProps): ReactElement => (
  <Center>
    <Link
      dataTestId="navigate-home"
      ariaLabel={`Navigate back to ${title} page`}
      href={href}
      fontSize="15px"
      showUnderline
    >
      <GoHome style={{ marginRight: 5, position: "relative", top: 2 }} />
      go back to {title}
    </Link>
  </Center>
);

export default GoBack;
