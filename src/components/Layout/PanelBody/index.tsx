/* istanbul ignore file */
import type { ReactNode } from '~types'
import styles from './PanelBody.module.scss'

export default function PanelBody({ children }: { children: ReactNode }) {
  return <div className={styles.panelBody}>{children}</div>
}
