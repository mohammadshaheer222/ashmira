"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import FeatherIcon from "@/assets/custom-icon";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    // Placeholder: wire up real auth here
    await new Promise((r) => setTimeout(r, 1200));
    setIsLoading(false);
    setError("Invalid credentials. Please try again.");
  };

  return (
    <div className="w-full max-w-sm">
      <div className="bg-bg-card rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.07)] p-8 flex flex-col gap-5">
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-[13px] font-medium text-heading">
              Email address
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
                <FeatherIcon
                  icon="mail"
                  iconWidth={15}
                  iconHeight={15}
                  iconStrokeWidth={1.75}
                  iconStrokeColor="currentColor"
                />
              </span>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@ashmira.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-11 pl-10 pr-4 rounded-xl text-sm text-heading placeholder:text-text-muted bg-white-soft outline-none transition-all duration-150 focus:ring-2 focus:ring-primary/15"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-[13px] font-medium text-heading">
              Password
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none">
                <FeatherIcon
                  icon="lock"
                  iconWidth={15}
                  iconHeight={15}
                  iconStrokeWidth={1.75}
                  iconStrokeColor="currentColor"
                />
              </span>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-11 pl-10 pr-11 rounded-xl text-sm text-heading placeholder:text-text-muted bg-white-soft outline-none transition-all duration-150 focus:ring-2 focus:ring-primary/15"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-heading transition-colors cursor-pointer"
              >
                <FeatherIcon
                  icon={showPassword ? "eye-off" : "eye"}
                  iconWidth={15}
                  iconHeight={15}
                  iconStrokeWidth={1.75}
                  iconStrokeColor="currentColor"
                />
              </button>
            </div>
          </div>

          {/* Error message */}
          {error && (
            <p className="text-[12px] text-red-500 bg-red-50 border border-red-100 rounded-xl px-3.5 py-2.5 leading-snug">
              {error}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className={cn(
              "mt-1 w-full h-11 rounded-xl bg-primary text-text-on-primary text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-150 cursor-pointer",
              "hover:opacity-90 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
            )}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
                Signing in…
              </>
            ) : (
              "Sign in"
            )}
          </button>
        </form>
      </div>

      {/* Bottom brand */}
      <p className="text-center text-[11px] text-text-muted mt-6">
        © {new Date().getFullYear()} Ashmira. All rights reserved.
      </p>
    </div>
  );
}

