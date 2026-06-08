import gsap from "gsap";

export const playWatchAd = (
  watchRef
) => {
  const tl = gsap.timeline();

  tl.from(
    watchRef.current.scale,
    {
      x: 0,
      y: 0,
      z: 0,
      duration: 1.5,
    }
  );

  tl.to(
    watchRef.current.rotation,
    {
      y: Math.PI * 2,
      duration: 3,
    }
  );

  return tl;
};