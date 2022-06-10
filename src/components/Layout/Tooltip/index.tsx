import type { Children } from '~types'
import styles from './Tooltip.module.scss'

export type ToolTipProps = Children & { title?: string }

export default function Tooltip({ children, title }: ToolTipProps) {
  return (
    <div className={styles.tooltip} data-tooltip={title}>
      {children}
    </div>
  )
}
