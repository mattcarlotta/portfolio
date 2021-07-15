import { enableES5 } from "immer";
import { proxyDefined } from "./supportsProxy";
import "proxy-polyfill/proxy.min.js";

if (!proxyDefined) enableES5();
