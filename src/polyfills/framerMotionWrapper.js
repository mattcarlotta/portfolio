import {
  motion as origMotion,
  createDomMotionComponent,
} from "../../node_modules/framer-motion";
import { proxyDefined } from "./supportsProxy";
import { htmlElements, svgElements } from "./framerMotionElements";

// Adapted from https://github.com/framer/motion/commit/b4319c78fb4bde28ce0d2a8008df48d7e3fd1c8b
const createNonProxyMotion = () => {
  let motionProxy = {
    custom: component => {
      createDomMotionComponent(component);
    },
  };
  motionProxy = htmlElements.reduce((acc, key) => {
    acc[key] = createDomMotionComponent(key);
    return acc;
  }, motionProxy);
  motionProxy = svgElements.reduce((acc, key) => {
    acc[key] = createDomMotionComponent(key);
    return acc;
  }, motionProxy);
  return motionProxy;
};

export const motion = proxyDefined ? origMotion : createNonProxyMotion();

export * from "../../node_modules/framer-motion";
