import request from './request';

const url = 'https://slack.com/api/users.profile.set';

export default async ({ token, message, emoji, expiration }) => {
  const options = {
    method: 'post',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json; charset=utf-8',
    },
    data: {
      profile: {
        status_text: message,
        status_emoji: emoji,
        status_expiration: expiration,
      },
    },
  };
  const { ok, error } = await request(url, options);

  return { ok, error };
};
