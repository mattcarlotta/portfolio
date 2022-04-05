import styles from './Bars.module.scss'

export default function Bars() {
  return (
    <div className="relative">
      <div id="top-bar" className={styles.topBar} />
      <div id="middle-bar" className={styles.middleBar} />
      <div id="bottom-bar" className={styles.bottomBar} />
    </div>
  )
}
