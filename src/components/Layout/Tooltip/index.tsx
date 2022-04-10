import { makeStyles, Tooltip } from '@material-ui/core'
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

const useClasses = makeStyles(() => ({
  arrow: {
    color: '#0088ff'
  },
  tooltip: {
    backgroundColor: '#0088ff',
    boxShadow: '0px 0px 8px -2px rgba(0, 64, 255, 1)'
  }
}))

export type TCustomTooltipProps = {
  children: ReactNode
  placement?: TTooltipPlacement
  title: ReactNode
}

const CustomTooltip = ({
  children,
  placement = 'top',
  title
}: TCustomTooltipProps): ReactElement => {
  return (
    <Tooltip
      arrow
      classes={useClasses()}
      placement={placement}
      title={
        <div className="m-0 p-px text-center font-plain text-base">{title}</div>
      }
    >
      <span className="text-center">{children}</span>
    </Tooltip>
  )
}

export default CustomTooltip
