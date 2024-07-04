import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInNew from '@mui/icons-material/OpenInNew';
import GitHubApiClient from '../ApiClients/GitHubApiClient';
import { useEffect, useState } from 'react';

// type RepositoriesTableProps = {
//   repositories: []Repository;
// };

const RepositoriesTable = () => {
  const [repositories, setRepositories] = useState<GitHubRepository[]>([]);
  const getRepositories = async () => {
    const client = new GitHubApiClient();
    try {
      const repos = await client.getRepos(
        '',
        '',
        'https://api.github.com/search/repositories?q=user:AdrMAr5',
      );
      setRepositories(repos);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getRepositories();
  }, []);
  console.log(repositories as GitHubRepository[]);
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Repository Name</TableCell>
            <TableCell>Provider</TableCell>
            <TableCell>Branch</TableCell>
            <TableCell>Go to</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {repositories?.map((repository) => {
            return (
              <TableRow key={repository.id}>
                <TableCell>{repository.name}</TableCell>
                {/*<TableCell>{repository.owner}</TableCell>*/}
                <TableCell>{repository.default_branch}</TableCell>
                <TableCell>
                  <IconButton>
                    <OpenInNew />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default RepositoriesTable;
