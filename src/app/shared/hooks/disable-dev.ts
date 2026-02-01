"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import env from "@/env.mjs";

export default function useDisableDevTools() {
  const router = useRouter();
  const pathname = usePathname();
  const redirectedRef = useRef(false);

  useEffect(() => {
    const preventKeys = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();

        if (!redirectedRef.current && pathname !== "/unauthorized") {
          redirectedRef.current = true;
          router.push("/unauthorized");
        }
      }
    };

    const preventContextMenu = (e: MouseEvent) => {
      e.preventDefault();

      if (!redirectedRef.current && pathname !== "/unauthorized") {
        redirectedRef.current = true;
        router.push("/unauthorized");
      }
    };

    const shouldDisableDevTools = env.NEXT_PUBLIC_DISABLE_DEVTOOLS;

    if (shouldDisableDevTools) {
      document.addEventListener("keydown", preventKeys);
      document.addEventListener("contextmenu", preventContextMenu);
    }

    return () => {
      document.removeEventListener("keydown", preventKeys);
      document.removeEventListener("contextmenu", preventContextMenu);
    };
  }, [router, pathname]);

  useEffect(() => {
    if (pathname !== "/unauthorized") {
      redirectedRef.current = false;
    }
  }, [pathname]);
}
