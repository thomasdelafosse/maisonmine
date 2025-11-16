import { useEffect } from "react";

export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = locked ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [locked]);
}
