import Center from "~components/Layout/Center";
import Link from "~components/Navigation/Link";
import { GoHome } from "~icons";
import { ReactElement } from "~types";

const Home = (): ReactElement => (
  <Center>
    <Link
      dataTestId="navigate-home"
      ariaLabel="Navigate back to home page"
      href="/"
      fontSize="15px"
      showUnderline
    >
      <GoHome style={{ marginRight: 5, position: "relative", top: 2 }} />
      Go Back Home
    </Link>
  </Center>
);

export default Home;
