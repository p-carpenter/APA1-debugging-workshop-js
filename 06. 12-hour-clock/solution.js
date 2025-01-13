function convertTo12HourClock(time) {
  const hours = time.slice(0, 2);
  console.log(hours)
  console.log(hours - 12)
  // console.log(hours)
  const minutes = time.slice(-2);
  console.log(minutes)
  if (hours >= 10) {
    return `${hours}:${minutes} PM`;
  } else if (hours >= 0) {
    // console.log(typeof hours)
    return `${hours}:${minutes} AM`;
  }
}
console.log(convertTo12HourClock("00:00"))
module.exports = { convertTo12HourClock };
