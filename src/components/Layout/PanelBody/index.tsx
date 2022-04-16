/* istanbul ignore file */
import type { Children } from '~types'
import styles from './PanelBody.module.scss'

export default function PanelBody({ children }: Children) {
  return <div className={styles.panelBody}>{children}</div>
}
