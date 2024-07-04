import * as axios from 'axios';

export default class GitHubApiClient {
  public async getRepos(
    username: string,
    authToken: string,
    url: string,
  ): Promise<GitHubRepository[]> {
    const response = await axios.default.get(url, {
      headers: {
        Authorization: `Bearer `,
      },
    });
    console.log('data', response.data);
    return response.data.items;
  }
}
