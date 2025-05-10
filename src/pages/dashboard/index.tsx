// src/pages/dashboard/index.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";
import { isLoggedIn } from "@/utils/auth";
import DashboardContent from "@/components/Dashboard";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn()) {
      router.replace("/");
    }
  }, [router]);

  return <DashboardContent />;
}