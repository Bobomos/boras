"use client";

import Lottie from "lottie-react";
import { useSyncExternalStore } from "react";
import mobileAnimation from "../../lottie-home-animation.json";
import widescreenAnimation from "../../home-widescreen.json";

const motionQuery = "(prefers-reduced-motion: reduce)";
const desktopQuery = "(min-width: 901px)";
const subscribeTo = (query: string) => (callback: () => void) => { const media = window.matchMedia(query); media.addEventListener("change", callback); return () => media.removeEventListener("change", callback); };
const snapshotFor = (query: string) => () => window.matchMedia(query).matches;
const getServerSnapshot = () => false;

export function ProcessDiagram() {
  const reducedMotion = useSyncExternalStore(subscribeTo(motionQuery), snapshotFor(motionQuery), getServerSnapshot);
  const isDesktop = useSyncExternalStore(subscribeTo(desktopQuery), snapshotFor(desktopQuery), getServerSnapshot);
  const animationData = isDesktop ? widescreenAnimation : mobileAnimation;

  return (
    <div className={`process-diagram process-diagram--${isDesktop ? "wide" : "mobile"}`} role="img" aria-label="A process moving from complexity through context, clarity, structure, direction and system to launch">
      {isDesktop && (
        <svg className="process-diagram__extensions" viewBox="0 0 1400 176" preserveAspectRatio="none" aria-hidden="true">
          <path d="M 0 49 C 32 65, 79 71, 134 71 C 205 71, 250 27, 292 27" />
          <path d="M 1108 65 C 1126 41, 1168 21, 1266 21 C 1321 21, 1368 27, 1400 43" />
        </svg>
      )}
      <div className="process-diagram__animation">
        <Lottie key={isDesktop ? "wide" : "mobile"} animationData={animationData} loop={!reducedMotion} autoplay={!reducedMotion} rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }} />
      </div>
    </div>
  );
}
