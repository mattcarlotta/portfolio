import type { ReactNode } from '~types'
import styles from './Card.module.scss'

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className={styles.card}>
      <div data-title="placeholder" className="hidden" />
      <div data-title="card-container">{children}</div>
    </div>
  )
}
