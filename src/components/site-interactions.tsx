"use client";

import { useEffect } from "react";

type Cleanup = () => void;

function attachMobileMenuToggle(): Cleanup {
  const menuButton = document.querySelector<HTMLElement>("header.site .hamburger");
  const navigationTabs = document.getElementById("tabs");
  if (!menuButton || !navigationTabs) return () => {};

  const handleMenuToggle = () => {
    const isOpen = navigationTabs.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  };
  menuButton.addEventListener("click", handleMenuToggle);
  return () => menuButton.removeEventListener("click", handleMenuToggle);
}

function attachAccordions(): Cleanup {
  const removeListeners: Cleanup[] = [];

  document.querySelectorAll<HTMLElement>(".acc-head").forEach((accordionHead) => {
    const accordionBody = accordionHead.parentElement?.querySelector<HTMLElement>(".acc-body");
    if (!accordionBody) return;

    accordionHead.setAttribute("aria-expanded", "false");
    const handleAccordionToggle = () => {
      const isOpen = accordionBody.classList.toggle("open");
      accordionHead.setAttribute("aria-expanded", isOpen ? "true" : "false");
    };
    accordionHead.addEventListener("click", handleAccordionToggle);
    removeListeners.push(() => accordionHead.removeEventListener("click", handleAccordionToggle));
  });

  return () => removeListeners.forEach((removeListener) => removeListener());
}

function attachFlowItemJumps(): Cleanup {
  const removeListeners: Cleanup[] = [];

  document.querySelectorAll<HTMLElement>(".flow-item[data-acc]").forEach((flowItem) => {
    const handleFlowItemClick = () => {
      const targetAccordion = document.getElementById(flowItem.getAttribute("data-acc") ?? "");
      if (!targetAccordion) return;

      const accordionHead = targetAccordion.querySelector<HTMLElement>(".acc-head");
      const accordionBody = targetAccordion.querySelector<HTMLElement>(".acc-body");
      if (accordionBody && !accordionBody.classList.contains("open")) {
        accordionBody.classList.add("open");
        if (accordionHead) accordionHead.setAttribute("aria-expanded", "true");
      }
      targetAccordion.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    flowItem.addEventListener("click", handleFlowItemClick);
    removeListeners.push(() => flowItem.removeEventListener("click", handleFlowItemClick));
  });

  return () => removeListeners.forEach((removeListener) => removeListener());
}

function formatCountedNumber(value: number) {
  return value.toLocaleString("en-US");
}

function animateCountUp(element: HTMLElement) {
  const targetValue = parseInt(element.getAttribute("data-count") ?? "0", 10);
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion || !window.requestAnimationFrame) {
    element.textContent = formatCountedNumber(targetValue);
    return;
  }

  const durationInMilliseconds = 1500;
  let startTimestamp: number | null = null;
  const drawFrame = (timestamp: number) => {
    if (startTimestamp === null) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / durationInMilliseconds, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    element.textContent = formatCountedNumber(Math.round(targetValue * easedProgress));
    if (progress < 1) requestAnimationFrame(drawFrame);
    else element.textContent = formatCountedNumber(targetValue);
  };
  requestAnimationFrame(drawFrame);
}

function attachCountUpStatistics(): Cleanup {
  const countedNumbers = document.querySelectorAll<HTMLElement>(".stat .num[data-count]");
  if (!countedNumbers.length) return () => {};

  if (!("IntersectionObserver" in window)) {
    countedNumbers.forEach((countedNumber) => animateCountUp(countedNumber));
    return () => {};
  }

  const visibilityObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCountUp(entry.target as HTMLElement);
          visibilityObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );
  countedNumbers.forEach((countedNumber) => {
    countedNumber.textContent = "0";
    visibilityObserver.observe(countedNumber);
  });
  return () => visibilityObserver.disconnect();
}

function attachTestimonialSlider(): Cleanup {
  const slider = document.querySelector<HTMLElement>(".slider");
  if (!slider) return () => {};

  const slides = slider.querySelectorAll<HTMLElement>(".slide");
  if (slides.length <= 1) return () => {};

  const dotsContainer = document.getElementById("dots") ?? document.querySelector<HTMLElement>(".dots");
  const previousButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const abortController = new AbortController();
  const { signal } = abortController;
  let currentSlideIndex = 0;

  const showSlide = (requestedIndex: number) => {
    currentSlideIndex = (requestedIndex + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("on", slideIndex === currentSlideIndex);
    });
    if (dotsContainer) {
      Array.from(dotsContainer.children).forEach((dot, dotIndex) => {
        dot.classList.toggle("on", dotIndex === currentSlideIndex);
        dot.setAttribute("aria-current", dotIndex === currentSlideIndex ? "true" : "false");
      });
    }
  };

  if (dotsContainer) {
    dotsContainer.innerHTML = "";
    slides.forEach((_, slideIndex) => {
      const dotButton = document.createElement("button");
      dotButton.type = "button";
      dotButton.setAttribute("aria-label", `Testimonial ${slideIndex + 1} of ${slides.length}`);
      dotButton.addEventListener("click", () => showSlide(slideIndex), { signal });
      dotsContainer.appendChild(dotButton);
    });
  }
  previousButton?.addEventListener("click", () => showSlide(currentSlideIndex - 1), { signal });
  nextButton?.addEventListener("click", () => showSlide(currentSlideIndex + 1), { signal });

  showSlide(0);
  let autoAdvanceTimer: ReturnType<typeof setInterval> | undefined;
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    autoAdvanceTimer = setInterval(() => showSlide(currentSlideIndex + 1), 7000);
    slider.addEventListener("mouseenter", () => clearInterval(autoAdvanceTimer), { signal });
  }

  return () => {
    abortController.abort();
    clearInterval(autoAdvanceTimer);
  };
}

export function SiteInteractions() {
  useEffect(() => {
    const cleanups = [
      attachMobileMenuToggle(),
      attachAccordions(),
      attachFlowItemJumps(),
      attachCountUpStatistics(),
      attachTestimonialSlider(),
    ];
    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return null;
}
