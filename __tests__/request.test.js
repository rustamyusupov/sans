import request from '../src/request';

test('request data from gh sans repo', async () => {
  const data = await request('https://api.github.com/repos/rustamyusupov/sans');

  expect(data.name).toBe('sans');
});
