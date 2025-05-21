import React from "react";
import Navbar from "./Navbar";
import { Analytics } from "@vercel/analytics/react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-gray-900 transition-colors duration-200">
      <Navbar />
      <div className="flex-1 flex flex-col">
        <div className="flex-1">
          <main className="container mx-auto px-4 py-4">{children}</main>
        </div>
      </div>
      <Analytics />
    </div>
  );
}
