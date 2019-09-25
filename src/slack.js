import request from './request';

const apiUrl = 'https://slack.com/api';

const updateStatus = async ({ token, url, data }) => {
  const options = {
    method: 'post',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json; charset=utf-8',
    },
    data,
  };

  const { error } = await request(url, options);

  if (error) {
    throw new Error(error);
  }
};

export const setStatus = ({ token, message, emoji, expiration }) => {
  const url = `${apiUrl}/users.profile.set`;
  const data = {
    profile: {
      status_text: message,
      status_emoji: emoji ? `:${emoji}:` : '',
      status_expiration: expiration,
    },
  };

  updateStatus({ token, url, data }).catch(console.error);
};

export const setPresence = ({ token, presence }) => {
  const url = `${apiUrl}/users.setPresence`;
  const data = { presence };

  updateStatus({ token, url, data }).catch(console.error);
};
