"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function EmailSync() {
  const { data: session } = useSession();

  useEffect(() => {
    const email = session?.user?.email;
    if (typeof window !== "undefined" && email) {
      try {
        localStorage.setItem("user_email", email);
      } catch {}
    }
  }, [session?.user?.email]);

  return null;
}
