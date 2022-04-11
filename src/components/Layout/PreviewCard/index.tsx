import type { KeyboardEvent, ReactNode } from '~types'
import styles from './PreviewCard.module.scss'

export type PreviewCardProps = {
  children: ReactNode
  dataTestId: string
  onClick: () => void
  onKeyDown: (event: KeyboardEvent<HTMLDivElement>) => void
}

export default function PreviewCard({
  children,
  dataTestId,
  onClick,
  onKeyDown
}: PreviewCardProps) {
  return (
    <div
      role="button"
      className={styles.previewCard}
      data-testid={dataTestId}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      {children}
    </div>
  )
}
