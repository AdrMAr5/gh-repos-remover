import React from 'react';
import { Container, Box } from '@mui/material';

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <Container className="page-layout">
      <Box display="flex" justifyContent="center">
        {children}
      </Box>
    </Container>
  );
};
export default PageLayout;
