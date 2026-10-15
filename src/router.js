import gsap from 'gsap';
import { renderNavbar } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { renderWhatsAppWidgets } from './components/whatsapp-widget.js';

import { renderHomePage } from './pages/home.js';
import { renderMaterialsPage } from './pages/materials.js';
import { renderServicesPage } from './pages/services.js';
import { renderAboutPage } from './pages/about.js';
import { renderContactPage } from './pages/contact.js';

import { HeroScene } from './scenes/hero-scene.js';
import { MaterialsScene } from './scenes/materials-scene.js';
import { ServicesScene } from './scenes/services-scene.js';
import { AboutScene, ContactScene } from './scenes/about-contact-scene.js';

/**
 * Client-Side Router with GSAP Page Transitions & 3D Scene Synchronization
 */
export class Router {
  constructor(threeManager, lenis) {
    this.three = threeManager;
    this.lenis = lenis;
    this.currentPath = window.location.pathname || '/';

    this.routes = {
      '/': {
        render: renderHomePage,
        title: 'Sahil Building Material | Rohini Sector 6D, Delhi | Cement, TMT Steel, Bricks',
        desc: "Sahil Building Material Supplier in Rohini Sector 6D, Delhi. Established in 2002. Authorized dealer of UltraTech, ACC, Ambuja Cement, Tata Tiscon TMT bars, red bricks, sand.",
        sceneFactory: () => new HeroScene()
      },
      '/materials': {
        render: renderMaterialsPage,
        title: 'Building Materials Catalog | Cement, TMT Steel, Bricks & Sand | Sahil Building Material',
        desc: "Explore UltraTech Cement, Tata Tiscon TMT rebars, Class-1 red bricks, AAC blocks, Yamuna river sand, and rori on our interactive 3D stage.",
        sceneFactory: () => new MaterialsScene()
      },
      '/services': {
        render: renderServicesPage,
        title: 'Malwa Uthana & Unloading Services | Rohini Delhi | Sahil Building Material',
        desc: "Fast construction debris removal (Malwa Uthana) with tippers and professional truck unloading labour team across Rohini & North-West Delhi.",
        sceneFactory: () => new ServicesScene()
      },
      '/about': {
        render: renderAboutPage,
        title: 'About Us | 22+ Years in Rohini Since 2002 | Sahil Building Material',
        desc: "Meet founder Mr. Yogesh Seth and discover how Sahil Building Material has supplied Rohini construction landmarks with honest weight and genuine quality since 2002.",
        sceneFactory: () => new AboutScene()
      },
      '/contact': {
        render: renderContactPage,
        title: 'Contact & Instant Rates | Rohini Sector 6D Yard | Sahil Building Material',
        desc: "Visit our Rohini Sector 6D supply yard near Vidya Jain Public School or calculate an instant material quote directly on WhatsApp.",
        sceneFactory: () => new ContactScene()
      }
    };

    this.initListeners();
    this.renderCurrentRoute(true);
  }

  initListeners() {
    // Intercept navigation links
    document.addEventListener('click', (e) => {
      const routeLink = e.target.closest('.nav-route');
      if (routeLink) {
        e.preventDefault();
        const path = routeLink.getAttribute('data-path') || routeLink.getAttribute('href');
        this.navigate(path);
      }
    });

    // Browser back / forward buttons
    window.addEventListener('popstate', () => {
      this.currentPath = window.location.pathname;
      this.renderCurrentRoute(false);
    });

    // Header scroll background effect
    window.addEventListener('scroll', () => {
      const header = document.getElementById('main-header');
      if (header) {
        if (window.scrollY > 40) {
          header.classList.add('header-scrolled');
        } else {
          header.classList.remove('header-scrolled');
        }
      }
    });
  }

  navigate(path) {
    if (path === this.currentPath) return;
    this.currentPath = path;
    window.history.pushState({}, '', path);
    this.renderCurrentRoute(false);
  }

  renderCurrentRoute(isInitial = false) {
    const routeConfig = this.routes[this.currentPath] || this.routes['/'];
    const appShell = document.getElementById('app-shell');
    const pageContent = document.getElementById('page-content');

    // Update Document Title & Meta Description for SEO
    document.title = routeConfig.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', routeConfig.desc);

    const loadNewContent = () => {
      // 1. Render App Structure if not already built
      if (!document.getElementById('main-header') || isInitial) {
        appShell.innerHTML = `
          ${renderNavbar(this.currentPath)}
          <main id="page-content">${routeConfig.render()}</main>
          ${renderFooter()}
          ${renderWhatsAppWidgets()}
        `;
      } else {
        // Update Navbar active link state
        const headerContainer = document.getElementById('main-header');
        if (headerContainer) {
          headerContainer.outerHTML = renderNavbar(this.currentPath);
        }
        pageContent.innerHTML = routeConfig.render();
      }

      // 2. Scroll to Top
      if (this.lenis) {
        this.lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }

      // 3. Switch 3D Scene
      if (this.three && typeof routeConfig.sceneFactory === 'function') {
        const newScene = routeConfig.sceneFactory();
        this.three.setActiveScene(newScene);
      }

      // 4. Attach Page Interactive Handlers
      this.bindPageInteractivity();

      // 5. Fade In Page
      const currentContent = document.getElementById('page-content');
      gsap.fromTo(currentContent, 
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }
      );
    };

    if (isInitial) {
      loadNewContent();
    } else {
      // Smooth Page Fade Out Transition
      const currentContent = document.getElementById('page-content');
      if (currentContent) {
        gsap.to(currentContent, {
          opacity: 0,
          y: -10,
          duration: 0.25,
          ease: 'power2.in',
          onComplete: loadNewContent
        });
      } else {
        loadNewContent();
      }
    }
  }

  bindPageInteractivity() {
    // 1. Mobile Menu Toggle & Close
    const toggleBtn = document.getElementById('mobile-toggle-btn');
    const drawer = document.getElementById('mobile-drawer');
    const closeBtn = document.getElementById('mobile-close-btn');

    if (toggleBtn && drawer) {
      toggleBtn.onclick = () => drawer.classList.add('open');
    }
    if (closeBtn && drawer) {
      closeBtn.onclick = () => drawer.classList.remove('open');
    }
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.onclick = () => drawer && drawer.classList.remove('open');
    });

    // 2. FAQ Accordion Toggle
    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.onclick = () => {
        const item = btn.closest('.faq-item');
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      };
    });

    // 3. Replay 3D Intro Button
    const replayBtn = document.getElementById('btn-replay-intro');
    if (replayBtn) {
      replayBtn.onclick = () => {
        sessionStorage.removeItem('sahil_intro_seen');
        window.location.href = '/';
      };
    }

    // 4. WhatsApp Quote Calculator Form Submission
    const quoteForm = document.getElementById('quote-calculator-form');
    if (quoteForm) {
      quoteForm.onsubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('q-name')?.value || '';
        const phone = document.getElementById('q-phone')?.value || '';
        const material = document.getElementById('q-material')?.value || '';
        const qty = document.getElementById('q-quantity')?.value || 'Requirement details to follow';
        const location = document.getElementById('q-location')?.value || 'Rohini, Delhi';
        const notes = document.getElementById('q-notes')?.value || 'None';

        const message = 
`*SAHIL BUILDING MATERIAL - QUOTE REQUEST*
• *Customer:* ${name}
• *Phone:* ${phone}
• *Material / Service:* ${material}
• *Estimated Quantity:* ${qty}
• *Site Delivery Location:* ${location}
• *Special Site Notes:* ${notes}

_Please provide today's best wholesale rate and delivery slot schedule._`;

        const waUrl = `https://wa.me/919873161704?text=${encodeURIComponent(message)}`;
        window.open(waUrl, '_blank');
      };
    }
  }
}
