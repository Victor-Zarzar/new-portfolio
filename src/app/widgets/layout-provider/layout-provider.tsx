"use client";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import type React from "react";
import { useEffect, useState } from "react";
import DevToolsGuard from "@/app/guard/disable-dev-tools";
import { Toaster } from "@/app/shared/ui/sonner";
import CookieConsentComponent from "../cookie-consent/cookie-consent";
import Footer from "../footer/footer-component";
import { NavbarComponent } from "../navbar/navbar-desktop";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hasConsented, setHasConsented] = useState(false);

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
      <ThemeProvider enableSystem={true} attribute="class">
        <NavbarComponent />
        <DevToolsGuard />
        {children}
        <Toaster position="top-right" expand={true} />
        {hasConsented && <Analytics />}
        <SpeedInsights />
        <CookieConsentComponent
          onAcceptAction={handleAccept}
          onDeclineAction={handleDecline}
        />
        <Footer />
      </ThemeProvider>
    </>
  );
}
