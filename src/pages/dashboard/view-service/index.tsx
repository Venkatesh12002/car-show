import React, { useEffect, useState } from 'react';
import {  CarService, getCarServiceById } from '@/pages/api/car-services';
import { isApiError } from '@/types/error';
import { useRouter } from 'next/router';
import { Alert, Box, CircularProgress, Typography } from '@mui/material';

export default function ViewService() {

     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     const [services, setServices] = useState<CarService|any>([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState<string | null>(null);
      const router = useRouter();
      const serviceId = router.query.serviceId;
    
      useEffect(() => {
        const fetchServices = async () => {
          try {
            const response = await getCarServiceById(serviceId as string);
            if (response.success) {
              setServices(response.data);
            } else {
              setError(response.message || "Failed to fetch services");
            }
          } catch (err) {
            if (err instanceof Error) {
              setError(err.message);
            } else if (isApiError(err)) {
              setError(err.message);
            } else {
              setError("An unexpected error occurred");
            }
          } finally {
            setLoading(false);
          }
        };
    
        fetchServices();
      }, [serviceId]);

      useEffect(() => {
      
        return () => {
            <Alert severity="error">{error}</Alert>
        }
      }, [error])
      
      
  return (
    <>
    <Box>
      <Typography sx={{
        color:"#002e48",
        fontWeight:700,
        fontSize: '1.5rem',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        textDecoration:'underline'
      }}>
        Service Details
      </Typography>
      {loading && <>
      <Box>
      <CircularProgress />
      </Box>
      </>}
      <Box>
        <Typography>
          {services.serviceName}
        </Typography>
        <Typography>
          {services.description}
        </Typography>
        <Typography>
          {services.price}
        </Typography>
        <Typography>
          {services.duration}
        </Typography>
      </Box>
    </Box>

    </>
  )
}

