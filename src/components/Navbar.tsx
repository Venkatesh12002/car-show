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
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import breadcrumbNameMap from "@/utils/breadcrumbs";

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
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Breadcrumbs color="white" sx={{ ml: 1 }}>
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            {pathnames.map((value, index) => {
              const to = "/" + pathnames.slice(0, index + 1).join("/");
              return (
                <Link underline="hover" color="inherit" key={to} href={to}>
                  {breadcrumbNameMap[to] || value}
                </Link>
              );
            })}
          </Breadcrumbs>
        </Box>

        {/* Profile Dropdown */}
        <Box>
          <IconButton color="inherit" onClick={handleMenuOpen}>
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
