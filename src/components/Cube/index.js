import React from 'react';
import styles from './Cube.module.scss';

export default function Cube() {
  return (
    <div className={styles.scene}>
      <div className={styles.shape}>
        <div className={styles.face}>FRONT</div>

        <div className={styles.face}>BACK</div>

        <div className={styles.face}>RIGHT</div>

        <div className={styles.face}>LEFT</div>

        <div className={styles.face}>TOP</div>

        <div className={styles.face}>BOTTOM</div>
      </div>
    </div>
  )
}