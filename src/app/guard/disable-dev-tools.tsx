"use client";

import useDisableDevTools from "@/app/shared/hooks/disable-dev";
import type { DevToolsGuardProps } from "../shared/types/dev/dev-tools";

export default function DevToolsGuard({
  unauthorizedPath = "/unauthorized",
}: DevToolsGuardProps) {
  useDisableDevTools(unauthorizedPath);
  return null;
}
