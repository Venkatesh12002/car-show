// src/layout/Layout.tsx
import { ReactNode, useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import {
  Box,
} from '@mui/material';


type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleDrawer = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar isOpen={isSidebarOpen} toggleDrawer={toggleDrawer} />
      <Box sx={{ flexGrow: 1 }}>
      <Navbar toggleDrawer={toggleDrawer} />

        {/* Page content */}
        <Box component="main" sx={{ p: 1 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
