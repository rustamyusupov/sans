const secondsInMinute = 60;
const milisecondsInSecond = 1000;

export const getExpiration = duration => {
  if (!duration) {
    return 0;
  }

  const durationInSeconds = duration * secondsInMinute;
  const nowInSeconds = Math.floor(Date.now() / milisecondsInSecond);

  return nowInSeconds + durationInSeconds;
};

export const getEndTime = expiration => {
  const epoch = new Date(0);
  const date = new Date(epoch.setUTCSeconds(expiration));
  const endTime = date.toLocaleTimeString();

  return endTime;
};

export const setTimer = (expiration, cb) => {
  const id = setInterval(() => {
    const nowInSeconds = Math.floor(Date.now() / milisecondsInSecond);

    if (nowInSeconds > expiration) {
      cb();
      clearInterval(id);
    }
  }, milisecondsInSecond);
};
