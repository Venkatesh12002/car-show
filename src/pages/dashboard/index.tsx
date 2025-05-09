// src/pages/dashboard/index.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { isLoggedIn } from '@/utils/auth';
import { Typography } from '@mui/material';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn()) {
      router.replace('/');
    }
  }, []);

  return (
    <>
      <Typography variant="h4">Dashboard Page</Typography>
    </>
  );
}
