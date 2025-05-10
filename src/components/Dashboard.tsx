import { useEffect, useState } from "react";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { isApiError } from "@/types/error";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

interface CarService {
  serviceId: string;
  serviceName: string;
  description: string;
  price: string;
  img_url: string;
  duration: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: CarService[];
}

export default function Dashboard() {
  const [services, setServices] = useState<CarService[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/api/car-services");
        const data: ApiResponse = await response.json();

        if (data.success) {
          setServices(data.data);
        } else {
          setError("Failed to fetch services");
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
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
        Available Services
      </Typography>
    </Box>
    <Grid container spacing={1} sx={{ p: 1 }}>
      {services.map((service) => (
        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={service.serviceId}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <Image
              src={service.img_url}
              alt={service.serviceName}
              width={300}
              height={200}
              style={{ width: "100%", height: "100%" }}
            />
            <div style={{ padding: "16px" }}>
              <Typography variant="h6" component="h2">
                {service.serviceName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {service.description}
              </Typography>
              <Typography variant="h6" color="primary">
                {service.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Duration: {service.duration}
              </Typography>
              <Box
                mt={1}
                display={"flex"}
                // flexDirection={{ xs: "column", sm: "row" }}
                justifyContent={"space-between"}
                alignItems={"center"}
                gap={1}
             
              >
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={
                    <FontAwesomeIcon icon={faEye} height={15} width={15} />
                  }
                  sx={{fontSize:'0.8rem'}}
                >
                  View Details
                </Button>
                <Button variant="contained" color="success"   sx={{fontSize:'0.8rem'}}>
                  Book Now
                </Button>
              </Box>
            </div>
          </Card>
        </Grid>
      ))}
    </Grid>
    </>
  );
}
