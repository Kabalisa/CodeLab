import authUrlWithId from '../helpers/getGithubToken';
import createTokenWithCode from '../helpers/getGithubToken';

describe('getGithubToken helper test', () => {
  it('should return a url', () => {
    const url = authUrlWithId();
    expect(url).not.toBe(null);
  });
  it('should return a code', async () => {
    const code = await createTokenWithCode();
    expect(code).toBe(null);
  });
});
