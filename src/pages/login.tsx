// src/pages/login.tsx
import { Box, Grid, Typography } from '@mui/material';
import { ReactElement } from 'react';

export default function Login() {


  return (
    <Box textAlign="center" mt={10}>
      <Typography variant="h4">Welcome to Car Show Login</Typography>
      <Grid container spacing={1} gap={1}>
        <Grid size={{ xs: 12, md: 8, lg: 4 }}>
          <Box>
            <Typography variant="h6">Bike</Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 8, lg: 4 }}>
          <Box>
            <Typography variant="h6">Car</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

// Layout skip pannradhukku
Login.getLayout = function getLayout(page: ReactElement) {
  return page;
};
