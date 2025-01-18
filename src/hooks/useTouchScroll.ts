import { useEffect } from "react";

export const useTouchScroll = () => {
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        const target = e.target as HTMLElement;
        if (target.closest("canvas")) {
          e.preventDefault();
          const touch = e.touches[0];
          const startY = touch.pageY;

          const handleTouchMove = (e: TouchEvent) => {
            const touch = e.touches[0];
            const deltaY = touch.pageY - startY;
            window.scrollBy(0, -deltaY);
          };

          document.addEventListener("touchmove", handleTouchMove, {
            passive: false,
          });
          document.addEventListener(
            "touchend",
            () => {
              document.removeEventListener("touchmove", handleTouchMove);
            },
            { once: true }
          );
        }
      }
    };

    document.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);
};
