import styled from "@emotion/styled";
import { Tooltip, makeStyles } from "@material-ui/core";
import type { CSSProperties, ReactElement, ReactNode } from "~types";

const TooltipText = styled.div`
  text-align: center;
  letter-spacing: 1px;
  font-size: 14px;
  padding: 1px;
  margin: 0;
  font-family: "Mukta", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
`;

export type TTooltipPlacement =
  | "bottom"
  | "left"
  | "right"
  | "top"
  | "bottom-end"
  | "bottom-start"
  | "left-end"
  | "left-start"
  | "right-end"
  | "right-start"
  | "top-end"
  | "top-start"
  | undefined;

const useClasses = makeStyles(() => ({
  arrow: {
    color: "#0096ff",
  },
  tooltip: {
    backgroundColor: "#0096ff",
    boxShadow: "0px 0px 8px -2px rgba(0, 64, 255, 1)",
  },
}));

export type TCustomTooltipProps = {
  children: ReactNode;
  placement: TTooltipPlacement;
  title: ReactNode;
  styles?: CSSProperties;
};

const CustomTooltip = ({
  children,
  placement,
  title,
}: TCustomTooltipProps): ReactElement => {
  const classes = useClasses();

  return (
    <Tooltip
      arrow
      classes={classes}
      placement={placement}
      title={<TooltipText>{title}</TooltipText>}
    >
      <span style={{ textAlign: "center" }}>{children}</span>
    </Tooltip>
  );
};

CustomTooltip.defaultProps = {
  placement: "top",
};

export default CustomTooltip;
