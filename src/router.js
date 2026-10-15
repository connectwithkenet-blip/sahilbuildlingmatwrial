import { renderNavbar } from './components/navbar.js';
import { renderFooter } from './components/footer.js';
import { renderWhatsAppWidgets } from './components/whatsapp-widget.js';

import { renderHomePage } from './pages/home.js';
import { renderMaterialsPage } from './pages/materials.js';
import { renderServicesPage } from './pages/services.js';
import { renderAboutPage } from './pages/about.js';
import { renderContactPage } from './pages/contact.js';

/**
 * Clean Single Page Router (Zero 3D dependencies)
 */
export class Router {
  constructor() {
    this.currentPath = window.location.pathname || '/';

    this.routes = {
      '/': {
        render: renderHomePage,
        title: 'Sahil Building Material | Rohini Sector 6D, Delhi | Cement, TMT Steel, Bricks',
        desc: "Sahil Building Material Supplier in Rohini Sector 6D, Delhi. Established in 2002. Authorized dealer of UltraTech, ACC, Ambuja Cement, Tata Tiscon TMT bars, red bricks, sand."
      },
      '/materials': {
        render: renderMaterialsPage,
        title: 'Materials Catalog | Cement, TMT Steel, Bricks & Sand | Sahil Building Material',
        desc: "UltraTech Cement, Tata Tiscon TMT rebars, Class-1 red bricks, AAC blocks, Yamuna river sand, and rori from Sahil Building Material Rohini."
      },
      '/services': {
        render: renderServicesPage,
        title: 'Malwa and Unloading Services | Rohini Delhi | Sahil Building Material',
        desc: "Fast construction debris removal (Malwa Uthana) with tippers and professional truck unloading labour team across Rohini & North-West Delhi."
      },
      '/about': {
        render: renderAboutPage,
        title: 'About Us | Serving Rohini Since 2002 | Sahil Building Material',
        desc: "Meet founder Mr. Yogesh Seth and discover how Sahil Building Material has supplied Rohini construction landmarks with honest weight since 2002."
      },
      '/contact': {
        render: renderContactPage,
        title: 'Contact and Rates | Rohini Sector 6D Yard | Sahil Building Material',
        desc: "Visit our Rohini Sector 6D supply yard near Vidya Jain Public School or calculate an instant material quote directly on WhatsApp."
      }
    };

    this.initListeners();
    this.renderCurrentRoute();
  }

  initListeners() {
    // Intercept navigation link clicks
    document.addEventListener('click', (e) => {
      const link = e.target.closest('.nav-link-route');
      if (link) {
        e.preventDefault();
        const targetPath = link.getAttribute('data-path') || link.getAttribute('href');
        this.navigate(targetPath);
      }
    });

    // Browser back / forward
    window.addEventListener('popstate', () => {
      this.currentPath = window.location.pathname;
      this.renderCurrentRoute();
    });
  }

  navigate(path) {
    if (path === this.currentPath) return;
    this.currentPath = path;
    window.history.pushState({}, '', path);
    this.renderCurrentRoute();
  }

  renderCurrentRoute() {
    const routeConfig = this.routes[this.currentPath] || this.routes['/'];
    const appEl = document.getElementById('app');

    // Update Page Title & Description
    document.title = routeConfig.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', routeConfig.desc);

    // Update Canonical URL
    const canonicalUrl = `https://sahilbuildingmaterial.in${this.currentPath === '/' ? '' : this.currentPath}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', canonicalUrl);
      document.head.appendChild(canonicalLink);
    }

    // Update OpenGraph tags
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', routeConfig.title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', routeConfig.desc);

    // Render full page structure
    appEl.innerHTML = `
      ${renderNavbar(this.currentPath)}
      <main id="main-content">${routeConfig.render()}</main>
      ${renderFooter()}
      ${renderWhatsAppWidgets()}
    `;

    // Scroll to top
    window.scrollTo(0, 0);

    // Rebind handlers
    this.bindInteractivity();
  }

  bindInteractivity() {
    // 1. Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const drawer = document.getElementById('mobile-menu-drawer');
    if (menuBtn && drawer) {
      menuBtn.onclick = () => {
        drawer.classList.toggle('open');
      };
      drawer.querySelectorAll('a').forEach(a => {
        a.onclick = () => drawer.classList.remove('open');
      });
    }

    // 2. Materials Category Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const materialCards = document.querySelectorAll('.material-card');

    filterBtns.forEach(btn => {
      btn.onclick = () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        materialCards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      };
    });

    // 3. WhatsApp Quote Form Submission
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
      quoteForm.onsubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('form-name')?.value || '';
        const phone = document.getElementById('form-phone')?.value || '';
        const material = document.getElementById('form-material')?.value || '';
        const qty = document.getElementById('form-quantity')?.value || 'Not specified';
        const location = document.getElementById('form-location')?.value || 'Rohini, Delhi';

        const message = 
`Hello Sahil Building Material,
I would like to request a quote:
- Name: ${name}
- Phone: ${phone}
- Material / Service: ${material}
- Quantity: ${qty}
- Delivery Location: ${location}

Please share current wholesale rates.`;

        const waUrl = `https://wa.me/919873161704?text=${encodeURIComponent(message)}`;
        window.open(waUrl, '_blank');
      };
    }
  }
}
