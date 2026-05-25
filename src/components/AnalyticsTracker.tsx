"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    const pathWithQuery = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    if (lastTrackedPath.current === pathWithQuery) return;
    lastTrackedPath.current = pathWithQuery;

    if (pathname.startsWith("/admin") || pathname.startsWith("/api")) return;

    const trackVisit = async () => {
      try {
        await fetch("/api/track/visit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            path: pathname,
            referrer: typeof document !== "undefined" ? document.referrer || "direct" : "direct"
          })
        });
      } catch (e) {
        console.error("Failed to track visit:", e);
      }
    };

    trackVisit();
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const trackEl = target.closest("[data-track]");
      if (trackEl) {
        const buttonId = trackEl.getAttribute("data-track") || "Unknown Button";
        const detailsJson = trackEl.getAttribute("data-track-details");
        let details: any = null;
        if (detailsJson) {
          try {
            details = JSON.parse(detailsJson);
          } catch (err) {}
        }
        
        fetch("/api/track/click", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            buttonId,
            pagePath: window.location.pathname,
            details
          })
        }).catch(() => {});
      }
    };

    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
  }, []);

  return null;
}
