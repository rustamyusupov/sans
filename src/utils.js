const secondsInMinute = 60;
const milisecondsInSecond = 1000;

export default duration => {
  if (!duration) {
    return 0;
  }

  const durationInSeconds = duration * secondsInMinute;
  const nowInSeconds = Math.floor(Date.now() / milisecondsInSecond);

  return nowInSeconds + durationInSeconds;
};
