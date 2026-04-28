"use client";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import type React from "react";
import { useEffect, useState } from "react";
import { Toaster } from "@/app/shared/ui/sonner";
import CookieConsentComponent from "@/app/widgets/cookie-consent/cookie-consent";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hasConsented, setHasConsented] = useState(false);
  const scriptProps =
    typeof window === "undefined"
      ? undefined
      : ({ type: "application/json" } as const);

  useEffect(() => {
    if (document.cookie.includes("cookieConsent=true")) {
      setHasConsented(true);
    }
  }, []);

  function handleAccept() {
    setHasConsented(true);
  }

  function handleDecline() {
    setHasConsented(false);
  }

  return (
    <>
      <ThemeProvider
        scriptProps={scriptProps}
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <main className="min-h-screen">{children}</main>
        <Toaster position="top-right" expand={true} />
        {hasConsented && <Analytics />}
        <SpeedInsights />
        <CookieConsentComponent
          onAcceptAction={handleAccept}
          onDeclineAction={handleDecline}
        />
      </ThemeProvider>
    </>
  );
}
