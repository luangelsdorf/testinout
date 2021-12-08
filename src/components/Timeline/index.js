import { useEffect } from 'react';
import styles from './Timeline.module.scss';

export default function TimeLine() {

  let steps = [
    {
      "icon": "img-icon.svg",
      "name": "Design Brief",
      "text": "Gathering of all essential information for project execution."
    },
    {
      "icon": "img-icon.svg",
      "name": "Research",
      "text": "Briefing study, competition analysis, market research and mental map."
    },
    {
      "icon": "img-icon.svg",
      "name": "Design Concepts",
      "text": "Brainstorm, moodboard, sketches, prototypes and tests."
    },
    {
      "icon": "img-icon.svg",
      "name": "Refinement",
      "text": "Typography definition, symbol, color scheme and other visual elements."
    },
    {
      "icon": "img-icon.svg",
      "name": "Presentation",
      "text": "Description of the paths to the achieved result and elaboration of visual samples."
    },
    {
      "icon": "img-icon.svg",
      "name": "Feedback and Review",
      "text": "Project validation and, if necessary, adjust and adapt to the client's expectations."
    },
    {
      "icon": "img-icon.svg",
      "name": "Brand Collaterals",
      "text": "Development of all complementary materials included in the brand package."
    },
    {
      "icon": "img-icon.svg",
      "name": "Final Delivery",
      "text": "Finalization and delivery of the project, followed by attendance and support on the brand use."
    },
  ]

  let webSteps = [
    {
      "icon": "img-icon.svg",
      "name": "Briefing",
      "text": "Collection of all essential information for project execution."
    },
    {
      "icon": "img-icon.svg",
      "name": "Layout",
      "text": "Architecture and organization of project content."
    },
    {
      "icon": "img-icon.svg",
      "name": "Design",
      "text": "Definition of all guidelines and visual aspects of the project."
    },
    {
      "icon": "img-icon.svg",
      "name": "Development",
      "text": "Conversion of all visual components into interactive and functional items."
    },
    {
      "icon": "img-icon.svg",
      "name": "Delivery",
      "text": "Project implementation, hosting and publishing."
    },
    {
      "icon": "img-icon.svg",
      "name": "Support",
      "text": "Period for adjustments and corrections of any bugs."
    }
  ]

  let thres = [];
  for (let index = 0; index <= 1.0; index = index + 0.01) {
    thres.push(index);
  }

  const options = {
    rootMargin: '100% 0px 100% 0px',
    threshold: thres,
  }

  const callback = entries => {
    entries.forEach(entry => {
      /* if (entry.isIntersecting) {
        console.log('entred');
      } else {
        console.log('exited');
      } */
      console.log(entry.intersectionRatio);
    });
  }

  useEffect(() => {
    let observer = new IntersectionObserver(callback, options);
    observer.observe(document.querySelector(`.${styles.cards}`))
  }, [])

  function Line() {
    return (
      <>
        {/* <div className={`${styles.line} lineBase`} /> */}
        <div className={styles.line} />
      </>
    )
  }

  

  return (
    <section className={styles.section}>
      <div style={{height: '1200px'}} />
      <div>
        <h3 className="gradient-bg">AEHOOO</h3>
        <h1>ASUDASGDYAS</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <span>asd</span>
          </div>
          <div className="col-12 col-md-6 offset-md-2">
            <div className={styles.cards}>
              {
                steps.map((step, index) => {
                  return (
                    <div key={`step-${index}`}>
                      <span className={styles.number}>{index + 1}</span>
                      <h5>{step.name}</h5>
                      <small>{step.text}</small>
                      {index === 0 ? <Line /> : null}
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div style={{height: '1200px'}} />
    </section>
  )
}