import setStatus from './slack';
import getExpiration from './utils';

export default async ({ message, emoji, duration }) => {
  const token = process.env.SLACK_TOKEN;

  if (!token) {
    throw new Error('undefined SLACK_TOKEN in environment variables');
  }

  const expiration = getExpiration(duration);
  const { ok, error } = await setStatus({ token, message, emoji, expiration });

  console.log({ ok, error });
};
