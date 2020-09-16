import { GoHome } from "react-icons/go";
import Center from "~components/Layout/Center";
import Link from "~components/Navigation/Link";
import { FC } from "~types";

const Home: FC = (): JSX.Element => (
  <Center>
    <Link
      dataTestId="navigate-home"
      ariaLabel="Navigate back to home page"
      href="/"
    >
      <GoHome style={{ marginRight: 5, verticalAlign: "baseline" }} />
      Go Home
    </Link>
  </Center>
);

export default Home;
