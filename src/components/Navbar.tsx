// src/components/Navbar.tsx
import {
  AppBar,
  Toolbar,
  IconButton,
  Breadcrumbs,
  Link,
  Menu,
  MenuItem,
  Avatar,
  Box,
} from "@mui/material";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import breadcrumbNameMap from "@/utils/breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

type Props = {
  toggleDrawer: () => void;
};

export default function Navbar({ toggleDrawer }: Props) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleMenuClose();
    console.log("Logout clicked"); // Replace with actual logout logic
  };

  const pathnames = useMemo(
    () => router.pathname.split("/").filter(Boolean),
    [router.pathname]
  );

  return (
    <AppBar position="relative">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "var(--color-background)",
          backgroundColor: "var(--color-primary)",
        }}
      >
        <Box display="flex" alignItems="center">
          <IconButton
            sx={{ color: "var(--color-background)" }}
            edge="start"
            onClick={toggleDrawer}
            
          >
            <FontAwesomeIcon icon={faBars} width={16} height={16} style={{color:"#fff"}}/>
          </IconButton>
          <Breadcrumbs sx={{ ml: 1 }}>
            <Link underline="hover" color="var(--color-background)" href="/">
              Home
            </Link>
            {pathnames.map((value, index) => {
              const to = "/" + pathnames.slice(0, index + 1).join("/");
              return (
                <Link
                  underline="hover"
                  color="var(--color-background)"
                  key={to}
                  href={to}
                >
                  {breadcrumbNameMap[to] || value}
                </Link>
              );
            })}
          </Breadcrumbs>
        </Box>

        {/* Profile Dropdown */}
        <Box>
          <IconButton
            sx={{ color: "var(--color-background)" }}
            onClick={handleMenuOpen}
          >
            <Avatar alt="User" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={() => router.push("/settings")}>
              Settings
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
