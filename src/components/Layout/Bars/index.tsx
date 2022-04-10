import styles from './Bars.module.scss'

export default function Bars() {
  return (
    <div className="relative">
      <div data-title="bar" className={styles.topBar} />
      <div data-title="bar" className={styles.middleBar} />
      <div data-title="bar" className={styles.bottomBar} />
    </div>
  )
}
