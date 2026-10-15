import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GlobalThreeManager } from './lib/three-setup.js';
import { IntroScene } from './scenes/intro-scene.js';
import { Router } from './router.js';
import { getDeviceTier } from './lib/device-tier.js';
import './styles/index.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * Main Application Bootstrap
 */
class App {
  constructor() {
    this.canvas = document.getElementById('webgl-canvas');
    this.tier = getDeviceTier();
    this.initSmoothScroll();
    this.init3DManager();
    this.checkIntroAndStartRouter();
  }

  initSmoothScroll() {
    // Lenis smooth scrolling (disabled for prefersReducedMotion)
    if (!this.tier.prefersReducedMotion) {
      this.lenis = new Lenis({
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true
      });

      this.lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        this.lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }
  }

  init3DManager() {
    if (this.canvas) {
      this.three = new GlobalThreeManager(this.canvas);
    }
  }

  checkIntroAndStartRouter() {
    const introSeen = sessionStorage.getItem('sahil_intro_seen');
    const introOverlay = document.getElementById('cinematic-intro');
    const skipBtn = document.getElementById('skip-intro-btn');

    const startRouter = () => {
      this.router = new Router(this.three, this.lenis);
    };

    if (!introSeen && this.three && !this.tier.prefersReducedMotion) {
      // Play Cinematic Intro Scene (3.5 - 4.5s)
      const intro = new IntroScene(() => {
        startRouter();
      });
      this.three.setActiveScene(intro);

      if (skipBtn) {
        skipBtn.onclick = () => {
          intro.skip();
        };
      }
    } else {
      // Intro already seen or reduced motion enabled
      if (introOverlay) {
        introOverlay.classList.add('intro-hidden');
      }
      startRouter();
    }
  }
}

// Bootstrap on DOM load
window.addEventListener('DOMContentLoaded', () => {
  new App();
});
