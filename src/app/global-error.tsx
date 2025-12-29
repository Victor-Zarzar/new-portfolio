"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to Sentry
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-4 dark:bg-zinc-900">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
              Application Error
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
              A critical error has occurred. Our team has been notified.
            </p>
            {error.digest && (
              <p className="mt-2 font-mono text-sm text-zinc-500 dark:text-zinc-400">
                Error ID: {error.digest}
              </p>
            )}
            <div className="mt-8">
              <button
                onClick={reset}
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
              >
                Try again
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
