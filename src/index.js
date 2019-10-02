import { setStatus, setPresence } from './slack';
import getExpiration from './utils';

export default ({ message, emoji, duration, presence }) => {
  const token = process.env.SLACK_TOKEN;

  if (!token) {
    throw new Error('undefined SLACK_TOKEN in environment variables');
  }

  if (message !== undefined || emoji !== undefined) {
    const expiration = getExpiration(duration);

    setStatus({ token, message, emoji, expiration });
  }

  if (presence) {
    setPresence({ token, presence });
  }
};
