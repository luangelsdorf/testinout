import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from 'src/styles/timer.module.scss';
import toFormattedHours from "src/util/toHours";

export default function Timer() {
  /* const content = JSON.parse(router.query.options); */

  const content = {
    "totalTime": 200,
    "times": [
      {
        "type": "focus",
        "duration": 25
      },
      {
        "type": "shortBreak",
        "duration": 5
      },
      {
        "type": "focus",
        "duration": 25
      },
      {
        "type": "shortBreak",
        "duration": 5
      },
      {
        "type": "focus",
        "duration": 25
      },
      {
        "type": "longBreak",
        "duration": 15
      },
      {
        "type": "focus",
        "duration": 25
      },
      {
        "type": "shortBreak",
        "duration": 5
      },
      {
        "type": "focus",
        "duration": 25
      },
      {
        "type": "shortBreak",
        "duration": 5
      },
      {
        "type": "focus",
        "duration": 25
      },
      {
        "type": "longBreak",
        "duration": 15
      }
    ],
    "focusTime": 25,
    "shortBreak": 5,
    "longBreak": 15,
    "cyclesUntilLongBreak": 3,
    "cycles": 2,
    "totalMinutes": 20,
    "totalHours": 3
  }

  const [secs, setSecs] = useState(1 * 60);

  function pomodoro(mins) {
    let seconds = mins * 60 || 0;
    let interval = setInterval(() => {
      seconds--;
      setSecs(seconds);
      if (!seconds) {
        clearInterval(interval);
        console.log('ACABOU');
      }
    }, 1000)
  }

  function handleClick() {
    pomodoro(1)
  }

  return (
    <div>
      <h1 className="mb-4" id="timer">
        <span>{toFormattedHours(secs, 'min')[0].padStart(2, '0')}</span>
        :
        <span>{toFormattedHours(secs, 'min')[1].padStart(2, '0')}</span>
      </h1>
      <button onClick={handleClick} className="btn btn-primary">Start</button>
    </div>
  );
}