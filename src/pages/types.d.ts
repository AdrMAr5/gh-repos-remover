type GitProviderName = 'GitHub' | 'GitLab' | 'Bitbucket';
type provider = {
  name: GitProviderName;
  label: string;
};
type Tokens = {
  GitHubAccessToken: string;
  GitLabAccessToken: string;
  BitbucketAccessToken: string;
};

type LoginFormSchema = {
  providers: GitProviderName[];
  email: string;
  tokens: Tokens;
};
