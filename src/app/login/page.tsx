"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading-google" | "loading-email">("idle");

  const emailSigninEnabled =
    typeof process !== "undefined" &&
    process.env.NEXT_PUBLIC_ENABLE_EMAIL_SIGNIN === "true";

  const handleGoogle = async () => {
    setStatus("loading-google");
    try {
      await signIn("google", { callbackUrl: "/admin" });
    } catch (err) {
      setStatus("idle");
    }
  };

  const handleEmail = async () => {
    if (!email) return;
    setStatus("loading-email");
    try {
      localStorage.setItem("user_email", email);
      if (emailSigninEnabled) {
        await signIn("email", { email, callbackUrl: "/admin" });
      }
    } catch (err) {
      setStatus("idle");
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-white">
      {/* Left Column: Visual/Marketing Side (Hidden on Mobile) */}
      <div className="relative hidden w-1/2 flex-col justify-between bg-zinc-900 p-12 text-white lg:flex">
        <div className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center">
            <div className="h-4 w-1 bg-white rotate-45 translate-x-0.5" />
            <div className="h-4 w-1 bg-white -rotate-45 -translate-x-0.5" />
          </div>
          Nexus Systems
        </div>

        <div>
          <h2 className="mb-6 text-5xl font-bold leading-tight">
          Haroon bhai this is my  <br /> First fully login page
          </h2>
          <p className="max-w-md text-lg text-zinc-400">
            Secure, scalable, and built for high-performance teams. 
            Join over 2,000 companies managing their operations with Nexus.
          </p>
        </div>

        <div className="flex items-center gap-4 text-sm text-zinc-500">
          <span>v3.0.4</span>
          <span className="h-1 w-1 rounded-full bg-zinc-700" />
          <span>Privacy Policy</span>
          <span className="h-1 w-1 rounded-full bg-zinc-700" />
          <span>System Status</span>
        </div>
      </div>

      {/* Right Column: Login Form */}
      <div className="flex w-full items-center justify-center px-8 lg:w-1/2">
        <div className="w-full max-w-[400px]">
          {/* Header */}
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900">
              Sign in
            </h1>
            <p className="mt-2 text-zinc-500">
              Please enter your details to continue.
            </p>
          </div>

          <div className="space-y-6">
            {/* Google Social Button */}
            <button
              onClick={handleGoogle}
              disabled={status !== "idle"}
              className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 font-semibold text-zinc-700 transition-all hover:bg-zinc-50 hover:shadow-sm active:scale-[0.98] disabled:opacity-50"
            >
              {status === "loading-google" ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-zinc-300 border-t-zinc-600" />
              ) : (
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              )}
              Continue with Google
            </button>

            {/* Divider */}
            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-zinc-100"></div>
              <span className="mx-4 flex-shrink text-xs font-semibold uppercase tracking-widest text-zinc-400">
                OR
              </span>
              <div className="flex-grow border-t border-zinc-100"></div>
            </div>

        

            {/* Footer Links */}
        
          </div>
        </div>
      </div>
    </div>
  );
}