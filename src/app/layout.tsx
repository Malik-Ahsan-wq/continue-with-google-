import type { ReactNode } from "react";
import Providers from "@/components/providers";
import "./globals.css";

export const metadata = {
  title: "Ahsan Commerce",
  description: "Commerce app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-50 text-zinc-900 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
