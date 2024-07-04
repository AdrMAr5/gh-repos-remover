import {
  ListItem,
  Box,
  ListItemButton as MuiListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from '@mui/material';
import { ReactNode } from 'react';

const StyledListItemButton = styled(MuiListItemButton)({
  backgroundColor: 'white',
  ':hover': { backgroundColor: '#718EA4' },
  borderRadius: '6px',
});
type GitProvidersListItemProps = {
  icon: ReactNode;
  label: string;
};

const GitProvidersListItem = ({ icon, label }: GitProvidersListItemProps) => {
  return (
    <ListItem sx={{}}>
      <StyledListItemButton>
        <ListItemIcon>
          <Box display="flex" gap="8px" flexDirection="row">
            <ListItemText primary={label} />
            {icon}
          </Box>
        </ListItemIcon>
      </StyledListItemButton>
    </ListItem>
  );
};

export default GitProvidersListItem;
