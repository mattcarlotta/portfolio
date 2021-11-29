/* istanbul ignore file */
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const categoryVariants = {
  initial: { x: "-100vw", opacity: 0 },
  exit: { x: "-100vw", opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { delay: 0.15 } },
};

const Category = styled(motion.div)`
  @media (max-width: 350px) {
    font-size: 20px;
  }

  font-size: 30px;
  text-align: center;
  margin: 20px 0;
`;

Category.defaultProps = categoryVariants;

export default Category;
