import React from 'react';
import styles from './Slider.module.scss';

export default function Slider() {
  return (
    <div className="container">
      <h1>Projects</h1>
      <div className={`row gy-4 flex-nowrap ${styles.row1}`}>
        <div className="col-4">
          <img src="https://brstorm.design/images/wireframes/projects-1.svg" alt="" />
        </div>

        <div className="col-4">
          <img src="https://brstorm.design/images/wireframes/projects-2.svg" alt="" />
        </div>

        <div className="col-4">
          <img src="https://brstorm.design/images/wireframes/projects-3.svg" alt="" />
        </div>

        <div className="col-4">
          <img src="https://brstorm.design/images/wireframes/projects-4.svg" alt="" />
        </div>

        {/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}

        <div className="col-4">
          <img src="https://brstorm.design/images/wireframes/projects-1.svg" alt="" />
        </div>

        <div className="col-4">
          <img src="https://brstorm.design/images/wireframes/projects-2.svg" alt="" />
        </div>

        <div className="col-4">
          <img src="https://brstorm.design/images/wireframes/projects-3.svg" alt="" />
        </div>

        <div className="col-4">
          <img src="https://brstorm.design/images/wireframes/projects-4.svg" alt="" />
        </div>
      </div>

      <div className={`row gy-4 flex-nowrap ${styles.row2}`}>
        <div className="col-4">
          <img src="https://brstorm.design/images/wireframes/projects-1.svg" alt="" />
        </div>

        <div className="col-4">
          <img src="https://brstorm.design/images/wireframes/projects-2.svg" alt="" />
        </div>

        <div className="col-4">
          <img src="https://brstorm.design/images/wireframes/projects-3.svg" alt="" />
        </div>

        <div className="col-4">
          <img src="https://brstorm.design/images/wireframes/projects-4.svg" alt="" />
        </div>

        {/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */}

        <div className="col-4">
          <img src="https://brstorm.design/images/wireframes/projects-1.svg" alt="" />
        </div>

        <div className="col-4">
          <img src="https://brstorm.design/images/wireframes/projects-2.svg" alt="" />
        </div>

        <div className="col-4">
          <img src="https://brstorm.design/images/wireframes/projects-3.svg" alt="" />
        </div>

        <div className="col-4">
          <img src="https://brstorm.design/images/wireframes/projects-4.svg" alt="" />
        </div>
      </div>
    </div>
  )
}