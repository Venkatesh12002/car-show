// src/pages/404.tsx
import { Box, Typography } from '@mui/material';
import { ReactElement } from 'react';

export default function NotFound() {
  return (
    <Box textAlign="center" mt={10}>
      <Typography variant="h4" color="error">
        404 - Page Not Found
      </Typography>
    </Box>
  );
}

NotFound.getLayout = function getLayout(page: ReactElement) {
  return page;
};
