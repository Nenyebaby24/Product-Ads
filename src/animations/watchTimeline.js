import gsap from "gsap";

export function createWatchTimeline(
  watchRef
) {
  const tl = gsap.timeline();

  tl.from(
    watchRef.current.scale,
    {
      x: 0,
      y: 0,
      z: 0,
      duration: 2,
      ease: "power3.out",
    }
  );

  tl.to(
    watchRef.current.rotation,
    {
      y: Math.PI * 2,
      duration: 5,
      ease: "none",
    }
  );

  tl.to(
    watchRef.current.position,
    {
      y: 0.3,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    }
  );

  return tl;
}