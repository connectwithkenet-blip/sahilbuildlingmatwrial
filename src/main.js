import { Router } from './router.js';
import { initTractorIntro } from './components/tractor-intro.js';
import './styles/index.css';

/**
 * Main Application Bootstrap with Tractor Reveal Intro
 */
window.addEventListener('DOMContentLoaded', () => {
  new Router();

  // Play the animated tractor smoke reveal intro
  initTractorIntro();
});
