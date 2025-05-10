// src/pages/dashboard/index.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";
import { isLoggedIn } from "@/utils/auth";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn()) {
      router.replace("/");
    }
  }, [router]);

  return (
    <>
      <Box>
        <Box display={"flex"}>
          <Typography>Dashboard</Typography>
        </Box>
        <Box>
          <Grid container spacing={1} component="div">
            <Grid
              size={{ xs: 12, md: 8, lg: 4 }}
              sx={{
                transition: "all 0.5s ease-in-out",
                "&:hover": {
                  boxShadow: "0.5px 0.5px 5px rgba(239, 243, 9, 0.3)",
                  transform: "scale(1.01) ",  
                },
              }}
            >
              <Box
                sx={{
                  p: 1,
                  border: "1px solid rgba(0,0,0,.3)",
                  borderRadius: "3px",
                  boxSizing: "border-box",
                  boxShadow: "0.5px 0.5px 5px rgba(239, 243, 9, 0.3)",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    color: "var(--color-secondary)",
                  }}
                >
                  Servie 1
                </Typography>
                <Typography
                  sx={{
                    color: "var(--color-text)",
                    fontSize: "0.875rem",
                  }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Assumenda dolores aliquam illo totam mollitia cum nisi...
                </Typography>
                <Box sx={{ mt: 1, width: "100%" }}>
                  <Image
                    width={800}
                    height={600}
                    src="/images/png/car-service.png"
                    alt="service1"
                    priority
                    style={{ width: "100%", height: "auto" }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
