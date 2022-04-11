/* istanbul ignore file */
import styles from './Orbits.module.scss'

export default function Orbits() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.circleOne} />
        <div className={styles.circleTwo} />
        <div className={styles.circleThree} />
        <div className={styles.circleFour} />
        <div className={styles.circleFive} />
      </div>
    </div>
  )
}
