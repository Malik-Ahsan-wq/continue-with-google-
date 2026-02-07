"use client";

import { SessionProvider } from "next-auth/react";
import type { ReactNode } from "react";
import EmailSync from "./EmailSync";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <EmailSync />
      {children}
    </SessionProvider>
  );
}
