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
  useMediaQuery,
  useTheme,
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Drawer
      variant={isMobile ? "temporary" : "temporary"}
      open={isOpen}
      onClose={toggleDrawer}
      anchor="left"
      sx={{
        width: 300,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 300,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Typography variant="h6">🚗 Car Show</Typography>
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
            <ListItemButton component={Link} href={item.href} onClick={toggleDrawer}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
