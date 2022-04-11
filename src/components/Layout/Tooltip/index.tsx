// import { makeStyles, Tooltip } from '@material-ui/core'
import { styled } from '@mui/material/styles'
import Tooltip, { TooltipProps } from '@mui/material/Tooltip'
import type { ReactElement, ReactNode } from '~types'

export type TTooltipPlacement =
  | 'bottom'
  | 'left'
  | 'right'
  | 'top'
  | 'bottom-end'
  | 'bottom-start'
  | 'left-end'
  | 'left-start'
  | 'right-end'
  | 'right-start'
  | 'top-end'
  | 'top-start'
  | undefined

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))`
  & .MuiTooltip-arrow {
    color: #0088ff;
  }

  & .MuiTooltip-tooltip {
    background: #0088ff;
    box-shadow: 0px 0px 8px -2px rgba(0, 64, 255, 1);
  }
`

export type TCustomTooltipProps = {
  children: ReactNode
  placement?: TTooltipPlacement
  title: ReactNode
}

const MuiTooltip = ({
  children,
  placement = 'top',
  title
}: TCustomTooltipProps): ReactElement => {
  return (
    <CustomTooltip
      placement={placement}
      title={
        <div className="m-0 p-px text-center font-plain text-base">{title}</div>
      }
    >
      <span className="text-center">{children}</span>
    </CustomTooltip>
  )
}

export default MuiTooltip
