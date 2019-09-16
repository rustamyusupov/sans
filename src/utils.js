const secondsInMinute = 60;
const milisecondsInSecond = 1000;

export default duration => {
  const durationInSeconds = duration * secondsInMinute;
  const nowInSeconds = Math.floor(Date.now() / milisecondsInSecond);

  return nowInSeconds + durationInSeconds;
};
