import PageLayout from '../components/layouts/PageLayout.tsx';
import {
  Card,
  CardHeader,
  CardContent,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Stack,
  Button,
} from '@mui/material';
import { Field, Form, Formik } from 'formik';
import TokensManager from '../TokensManager';
import { useNavigate } from 'react-router';

const providers: provider[] = [
  { name: 'GitHub', label: 'GitHub' },
  { name: 'GitLab', label: 'GitLab' },
  { name: 'Bitbucket', label: 'Bitbucket' },
];

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <PageLayout>
      <Box mt={16} width="850px">
        <Card style={{ borderRadius: 15 }}>
          <CardHeader
            title="Authorize with Git Providers"
            sx={{ textAlign: 'center' }}
          />
          <CardContent>
            <Stack spacing={2} direction="column" alignItems="center">
              <Formik
                initialValues={
                  {
                    providers: [],
                    email: '',
                    tokens: {
                      GitHubAccessToken: '',
                      GitLabAccessToken: '',
                      BitbucketAccessToken: '',
                    },
                  } as LoginFormSchema
                }
                onSubmit={(values) => {
                  TokensManager.setTokens(values.tokens);
                  navigate('/manage');
                }}
              >
                {({ values, handleChange }) => (
                  <Form>
                    {providers.map((provider) => (
                      <FormControlLabel
                        key={provider.name}
                        control={
                          <Checkbox
                            name="providers"
                            value={provider.name}
                            checked={values.providers.includes(provider.name)}
                            onChange={handleChange}
                          />
                        }
                        label={provider.label}
                      />
                    ))}
                    <Stack spacing={2} direction="column">
                      <Field
                        as={TextField}
                        name="email"
                        label="email"
                        fullWidth
                      />
                      <Field
                        as={TextField}
                        name="tokens.GitHubAccessToken"
                        label="GitHub Access Token"
                        variant="outlined"
                        fullWidth
                        disabled={!values.providers.includes('GitHub')}
                      />
                      <Field
                        as={TextField}
                        name="tokens.GitLabAccessToken"
                        label="Gitlab Access Token"
                        variant="outlined"
                        fullWidth
                        disabled={!values.providers.includes('GitLab')}
                      />
                      <Field
                        as={TextField}
                        name="tokens.BitbucketAccessToken"
                        label="Bitbucket Access Token"
                        variant="outlined"
                        fullWidth
                        disabled={!values.providers.includes('Bitbucket')}
                      />
                      <Button type="submit" variant="contained">
                        Submit
                      </Button>
                    </Stack>
                  </Form>
                )}
              </Formik>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </PageLayout>
  );
};
export default LoginPage;
