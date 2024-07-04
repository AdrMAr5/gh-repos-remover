import PageLayout from '../components/layouts/PageLayout';
import { CardContent, Card, CardHeader, Grid, List } from '@mui/material';
import GitHubIcon from '../icons/GitHubIcon';
import GitProvidersListItem from '../components/GitProvidersListItem.tsx';
import RepositoriesTable from '../components/RepositoriesTable.tsx';

const MainPage = () => {
  return (
    <PageLayout>
      <Grid columns={8} columnGap={2} container wrap="nowrap" mt={10}>
        <Grid xs={1}>
          <List>
            <GitProvidersListItem icon={<GitHubIcon />} label="GitHub" />
            <GitProvidersListItem icon={undefined} label="GitLab todo" />
            <GitProvidersListItem icon={undefined} label="Bb todo" />
          </List>
        </Grid>
        <Grid xs={7}>
          <Card>
            <CardHeader
              title="Your Repositories"
              sx={{ textAlign: 'center' }}
            />
            <CardContent>
              <RepositoriesTable />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageLayout>
  );
};
export default MainPage;
