import React, { useEffect, useRef, useState } from 'react';
import styles from './Cube.module.scss';

export default function Cube() {
  const [mov, setMov] = useState({ mx: 0, my: 0 });
  const shape = useRef(null);

  // runs once to assign an event listener that updates state
  useEffect(() => {
    shape.current.onmousedown = () => {
      window.onmousemove = e => {
        setMov(lastMov => {
          return {
            mx: lastMov.mx + e.movementX,
            my: lastMov.my + e.movementY,
          }
        });
      }
    }

    window.onmouseup = () => {
      window.onmousemove = null;
    }
  }, [])


  useEffect(() => {
    console.log(`${mov.mx}, ${mov.my}`);
    mouseMove();
  }, [mov])

  function mouseMove() {
    window.requestAnimationFrame(() => {
      shape.current.style.transform = `translateZ(-150px) rotateX(${-mov.my}deg) rotateY(${mov.mx}deg)`;
    });
  }



  return (
    <>
      <div className={styles.scene}>
        <div className={styles.shape} id="shape" ref={shape}>
          <div className={styles.face}>FRONT</div>

          <div className={styles.face}>BACK</div>

          <div className={styles.face}>RIGHT</div>

          <div className={styles.face}>LEFT</div>

          <div className={styles.face}>TOP</div>

          <div className={styles.face}>BOTTOM</div>
        </div>
      </div>
      <h3>{`X: ${mov.mx}`}</h3>
      <h3>{`Y: ${mov.my}`}</h3>
    </>
  )
}