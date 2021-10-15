export default function toFormattedHours(time, unit) {
  if (unit === 'min') {
    return toHours(time)
  } else {
    return toHours(time / 60)
  }
}

function toHours(mins) {
  const hours = Math.floor(mins / 60);
  const minutes = mins % 60;

  return [hours.toString(), minutes.toString()];
}