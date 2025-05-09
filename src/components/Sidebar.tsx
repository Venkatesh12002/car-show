// src/components/Sidebar.tsx
import { useRouter } from 'next/router';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Divider,
  Toolbar,
  Box,
  Typography,
} from "@mui/material";
import Link from "next/link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const menuItems = [
  { text: "Dashboard", href: "/dashboard" },
  { text: "Settings", href: "/settings" },
];

type SidebarProps = {
  isOpen: boolean;
  toggleDrawer: () => void;
};

export default function Sidebar({ isOpen, toggleDrawer }: SidebarProps) {
  const router = useRouter();
  return (
    <Drawer
      variant="persistent"
      open={isOpen}
      anchor="left"
      sx={{
        width: isOpen ? 300 : 0,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 300,
          boxSizing: "border-box",
          transition: "width 0.5s",
        },
      }}
    >
      <Toolbar>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Typography variant="h6" sx={{ ml: 0 }}>
            🚗 Car Show
          </Typography>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            disablePadding
            sx={{
              backgroundColor:
                item.href === router.pathname ? "secondary.main" : "transparent",
            color:
                item.href === router.pathname ? "warning.contrastText" : "inherit",
            }}
          >
            <ListItemButton component={Link} href={item.href}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
