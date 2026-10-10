import React from "react";

export const metadata = {
  title: "Admin — Ashmira",
  description: "Ashmira admin panel",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white-soft flex items-center justify-center p-4">
      {children}
    </div>
  );
}

