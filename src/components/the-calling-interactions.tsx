"use client";

import { useEffect } from "react";

type Cleanup = () => void;

function attachScrollReveal(): Cleanup {
  const callingPage = document.getElementById("calling");
  if (!callingPage) return () => {};

  const revealBlocks = callingPage.querySelectorAll<HTMLElement>(".rise");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!("IntersectionObserver" in window) || prefersReducedMotion) {
    revealBlocks.forEach((revealBlock) => revealBlock.classList.add("seen"));
    return () => {};
  }

  const visibilityObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("seen");
          visibilityObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
  );
  revealBlocks.forEach((revealBlock) => visibilityObserver.observe(revealBlock));
  return () => visibilityObserver.disconnect();
}

function attachApplicationSectionScrolling(): Cleanup {
  const removeListeners: Cleanup[] = [];

  document.querySelectorAll<HTMLAnchorElement>('#calling a[href^="#"]').forEach((anchorLink) => {
    const handleAnchorClick = (event: MouseEvent) => {
      const targetId = (anchorLink.getAttribute("href") ?? "").slice(1);
      if (!targetId) return;
      const targetSection = document.getElementById(targetId);
      if (!targetSection) return;
      event.preventDefault();
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    anchorLink.addEventListener("click", handleAnchorClick);
    removeListeners.push(() => anchorLink.removeEventListener("click", handleAnchorClick));
  });

  return () => removeListeners.forEach((removeListener) => removeListener());
}

export function TheCallingInteractions() {
  useEffect(() => {
    const cleanups = [attachScrollReveal(), attachApplicationSectionScrolling()];
    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return null;
}
