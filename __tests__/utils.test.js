import getExpiration from '../src/utils';

test('calc expiration from duration', () => {
  const duration = 10; // ten minutes
  const durationInSeconds = duration * 60;
  const nowInSeconds = Math.floor(Date.now() / 1000);
  const expiration = nowInSeconds + durationInSeconds;

  expect(getExpiration(duration)).toBe(expiration);
});
