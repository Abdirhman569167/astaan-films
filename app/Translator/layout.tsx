"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import DashboardHeader from "@/components/Translator/header";
import DashboardSidebar from "@/components/Translator/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background">
      <div className="flex h-screen">
        <DashboardSidebar open={sidebarOpen} />
        <div className="flex-1 flex flex-col">
          <DashboardHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </div>
  );
}