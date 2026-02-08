'use client'
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { useState } from "react";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#F1F2F3]">
      {/* Sidebar */}
      <div className="md:flex md:flex-shrink-0">
        <Sidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header onMobileMenuToggle={() => setIsMobileOpen(!isMobileOpen)} />

        {/* Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-4 md:p-6 space-y-6">{children}</div>
        </main>

        {/* Footer */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}
