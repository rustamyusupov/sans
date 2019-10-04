import { setStatus, setPresence } from './slack';
import { getExpiration, getEndTime, setTimer } from './timer';

export default ({ message, emoji, duration, presence }) => {
  const token = process.env.SLACK_TOKEN;

  if (!token) {
    throw new Error('undefined SLACK_TOKEN in environment variables');
  }

  const expiration = getExpiration(duration);
  const endTime = getEndTime(expiration);

  if (message !== undefined || emoji !== undefined) {
    setStatus({ token, message, emoji, expiration });
  }

  if (presence) {
    setPresence({ token, presence });
  }

  if (expiration) {
    console.log(`status set, status will be removed at ${endTime}`);

    setTimer(expiration, () => {
      setStatus({ token, message: '' });
      setPresence({ token, presence: 'auto' });
    });
  }
};
