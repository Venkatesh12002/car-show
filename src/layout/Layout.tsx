// src/layout/Layout.tsx
import { ReactNode, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { Box } from "@mui/material";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleDrawer = () => setIsSidebarOpen(!isSidebarOpen);


  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Sidebar isOpen={isSidebarOpen} toggleDrawer={toggleDrawer} />
      <Box
       sx={{
        flexGrow: 1,
       }}
      >
        <Navbar toggleDrawer={toggleDrawer} />

        {/* Page content */}
        <Box
          component="main"
          sx={{
            p: 1,
            transition: "margin-left 0.3s",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
