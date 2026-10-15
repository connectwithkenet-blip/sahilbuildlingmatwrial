/**
 * Device capability and performance tier detector
 */
export function getDeviceTier() {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    (window.innerWidth <= 768);

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const concurrency = navigator.hardwareConcurrency || 4;
  const memory = navigator.deviceMemory || 4;

  // Low end if mobile with low memory or low core count
  const isLowEnd = isMobile || concurrency <= 4 || memory <= 4;

  const maxDpr = isMobile ? 1.5 : 2.0;
  const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);

  return {
    isMobile,
    isLowEnd,
    prefersReducedMotion,
    dpr,
    enableBloom: !isLowEnd && !isMobile,
    enableShadows: true,
    shadowMapSize: isLowEnd ? 1024 : 2048,
    particleCountMultiplier: isLowEnd ? 0.4 : 1.0
  };
}
