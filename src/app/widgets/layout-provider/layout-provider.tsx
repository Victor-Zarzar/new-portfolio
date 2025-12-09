"use client";

import DevToolsGuard from "@/app/guard/disable-dev-tools";
import { Toaster } from "@/app/shared/ui/sonner";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "next-themes";
import React, { useEffect, useState } from "react";
import CookieConsentComponent from "../cookie-consent/cookie-consent";
import Footer from "../footer/footer-component";
import Navbar from "../navbar/navbar-component";

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
        <Navbar />
        <DevToolsGuard />
        {children}
        <Toaster position="top-right" expand={true} />
        {hasConsented && <Analytics />}
        <CookieConsentComponent
          onAcceptCallback={handleAccept}
          onDeclineCallback={handleDecline}
        />
        <Footer />
      </ThemeProvider>
    </>
  );
}
