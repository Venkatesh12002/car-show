// src/pages/login.tsx
import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { isLoggedIn, login } from '@/utils/auth';
import routes from '@/config/routes';
import { ReactElement } from 'react';

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn()) {
      router.replace(routes.defaultRedirect);
    }
  }, []);

  const handleLogin = () => {
    login('mockToken123');
    router.push(routes.defaultRedirect);
  };

  return (
    <Box textAlign="center" mt={10}>
      <Typography variant="h4">Welcome to Car Show Login</Typography>
      <Button variant="contained" color="primary" onClick={handleLogin} sx={{ mt: 4 }}>
        Login
      </Button>
    </Box>
  );
}

// Layout skip pannradhukku
Login.getLayout = function getLayout(page: ReactElement) {
  return page;
};
