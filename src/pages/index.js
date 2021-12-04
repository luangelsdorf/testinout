import React, { useEffect, useState } from 'react';
import styles from 'src/styles/index.module.scss';
import { useRouter } from 'next/router';

export default function Home() {
  const [totalTime, setTotalTime] = useState(0);
  const [times, setTimes] = useState([]);
  //
  const [focusTime, setFocusTime] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [cyclesUntilLongBreak, setCyclesUntilLongBreak] = useState(3);
  const [cycles, setCycles] = useState(0);
  //
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [totalHours, setTotalHours] = useState(0);

  const handleChange = () => {
    let inputs = document.querySelectorAll('input[type="number"]');
    for (const element of inputs) {
      if (!element.value) return;
    }

    let minutes = 0;
    let longBreakCounter = 0;
    let isLongBreak = false;
    let timeline = [];
    for (let cycIndex = 0; cycIndex < cycles; cycIndex++) {
      for (let index = 0; index < cyclesUntilLongBreak; index++) {
        if (longBreakCounter === cyclesUntilLongBreak - 1) {
          isLongBreak = true;
          longBreakCounter = 0;
        } else {
          isLongBreak = false;
          longBreakCounter += 1;
        }
        minutes += focusTime;
        timeline.push({ type: 'focus', duration: focusTime });

        if (isLongBreak) {
          minutes += longBreak;
          timeline.push({ type: 'longBreak', duration: longBreak });
        } else {
          minutes += shortBreak;
          timeline.push({ type: 'shortBreak', duration: shortBreak });
        }
      }
    }
    setTotalTime(minutes);
    setTotalHours(Math.floor(minutes / 60));
    setTotalMinutes(minutes % 60)
    setTimes(timeline);
  }

  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    const query = {
      totalTime,
      times,
      focusTime,
      shortBreak,
      longBreak,
      cyclesUntilLongBreak,
      cycles,
      totalMinutes,
      totalHours,
    }
    router.push({pathname: '/timer', query: {options: JSON.stringify(query)}});
  }

  useEffect(handleChange, [focusTime, shortBreak, longBreak, cyclesUntilLongBreak, cycles]);

  return (
    <section className={styles.section} className="container">

      <form onSubmit={handleSubmit}>
        <div className="w-25">
          <div>
            <label htmlFor="focus">Tempo de foco</label>
            <input value={focusTime} min="1" className="form-control" id="focus" type="number" onChange={e => setFocusTime(parseFloat(e.target.value))} />
          </div>
          <div>
            <label htmlFor="shortBreak">Pausa curta</label>
            <input value={shortBreak} min="1" className="form-control" id="shortBreak" type="number" onChange={e => setShortBreak(parseFloat(e.target.value))} />
          </div>
          <div>
            <label htmlFor="longBreak">Pausa longa</label>
            <input value={longBreak} min="1" className="form-control" id="longBreak" type="number" onChange={e => setLongBreak(parseFloat(e.target.value))} />
          </div>
          <div>
            <label htmlFor="untilLong">Ciclos até uma pausa longa</label>
            <input value={cyclesUntilLongBreak} min="1" className="form-control" id="untilLong" type="number" onChange={e => setCyclesUntilLongBreak(parseFloat(e.target.value))} />
          </div>
          <div>
            <label htmlFor="cycles">Número de ciclos</label>
            <input value={cycles} min="1" className="form-control" id="cycles" type="number" onChange={e => setCycles(parseFloat(e.target.value))} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>

      <hr />
      <div>
        <span>{`Tempo total: ${totalHours} hora`}</span>
        {(totalHours) > 1 ? 's' : ''}
        <span>{!!(totalMinutes) ? (` e ${totalMinutes} minutos`) : null}</span>
      </div>
      <div className="overflow-auto">
        <div className="d-flex w-100 my-3">
          {
            times.map((item, index) => {
              return (
                <div
                  className={`${styles.timeSection} ${item.type}`}
                  key={index}
                  style={{ width: `${(item.duration * 100) / totalTime}%` }}
                />
              )
            })
          }
        </div>
      </div>

      <div className="ps-2 border-start border-danger">Foco</div>
      <div className="ps-2 border-start my-2 border-success">Pausa curta</div>
      <div className="ps-2 border-start border-info">Pausa Longa</div>
    </section>
  )
}