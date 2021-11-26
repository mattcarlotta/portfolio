/* istanbul ignore file */
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const projectVariants = {
  animate: { x: 0, opacity: 1, transition: { delay: 0 } },
  initial: { x: "-100vw", opacity: 0 },
  exit: { x: "-100vw", opacity: 0 },
};

const Project = styled(motion.div)`
  box-shadow: 0px 0px 26px 0px rgba(0, 64, 255, 1);
  border-radius: 10px 10px 0 0;
  margin: 30px 0px;
`;

Project.defaultProps = {
  initial: "initial",
  exit: "exit",
  animate: "animate",
  variants: projectVariants,
};

export default Project;
