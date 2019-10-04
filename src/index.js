import { setStatus, setPresence } from './slack';
import { getExpiration, getEndTime, setTimer } from './timer';

export default ({ message, emoji, duration, presence }) => {
  const token = process.env.SLACK_TOKEN;

  if (!token) {
    throw new Error('undefined SLACK_TOKEN in environment variables');
  }

  const expiration = getExpiration(duration);
  const endTime = getEndTime(expiration);
  const statuses = [];

  if (message !== undefined || emoji !== undefined) {
    setStatus({ token, message, emoji, expiration });
    statuses.push(() => setStatus({ token, message: '' }));
  }

  if (presence) {
    setPresence({ token, presence });
    statuses.push(() => setPresence({ token, presence: 'auto' }));
  }

  if (expiration) {
    console.log(`status set, status will be removed at ${endTime}`);
    setTimer(expiration, () => statuses.map(fn => fn()));
  }
};
