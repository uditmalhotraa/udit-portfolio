// src/hooks/useUserCountry.js
import { useState, useEffect } from "react";

export function useUserCountry() {
  const [isIndia, setIsIndia] = useState(null); // null = still detecting

  useEffect(() => {
    let cancelled = false;

    async function detectCountry() {
      try {
        const res = await fetch("https://ipapi.co/json/");
        if (!res.ok) throw new Error("geo lookup failed");
        const data = await res.json();
        if (cancelled) return;
        setIsIndia(data?.country_code === "IN");
      } catch (err) {
        if (cancelled) return;
        // Fail-safe default: worldwide links if detection fails
        setIsIndia(false);
      }
    }

    detectCountry();
    return () => {
      cancelled = true;
    };
  }, []);

  return isIndia;
}
