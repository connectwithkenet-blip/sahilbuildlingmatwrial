/**
 * Navigation Bar Component
 */
export function renderNavbar(activePath = '/') {
  return `
    <header class="site-header" id="main-header">
      <div class="container nav-container">
        
        <!-- Brand Logo -->
        <a href="/" class="brand-badge nav-route" data-path="/">
          <div class="brand-brick-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
          </div>
          <div class="brand-name-group">
            <span class="brand-title">SAHIL <span>MATERIALS</span></span>
            <span class="brand-est">Rohini Sector 6D • Est. 2002</span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav aria-label="Main Navigation">
          <ul class="desktop-nav">
            <li><a href="/" class="nav-link nav-route ${activePath === '/' ? 'active-link' : ''}" data-path="/">Home</a></li>
            <li><a href="/materials" class="nav-link nav-route ${activePath === '/materials' ? 'active-link' : ''}" data-path="/materials">Materials</a></li>
            <li><a href="/services" class="nav-link nav-route ${activePath === '/services' ? 'active-link' : ''}" data-path="/services">Services (Malwa &amp; Unloading)</a></li>
            <li><a href="/about" class="nav-link nav-route ${activePath === '/about' ? 'active-link' : ''}" data-path="/about">About</a></li>
            <li><a href="/contact" class="nav-link nav-route ${activePath === '/contact' ? 'active-link' : ''}" data-path="/contact">Contact &amp; Rates</a></li>
          </ul>
        </nav>

        <!-- Nav Actions -->
        <div class="nav-actions">
          <a href="tel:+919873161704" class="btn-nav-call" title="Call Sahil Building Material directly">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>+91 98731 61704</span>
          </a>

          <a href="https://wa.me/919873161704?text=Hello%20Sahil%20Building%20Material,%20please%20send%20today's%20rates" target="_blank" rel="noopener noreferrer" class="btn-nav-whatsapp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.98-1.39A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
            </svg>
            <span>WhatsApp Us</span>
          </a>

          <!-- Mobile Hamburger -->
          <button class="mobile-menu-toggle" id="mobile-toggle-btn" aria-label="Open Navigation Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

      </div>

      <!-- Full-screen Mobile Drawer Modal -->
      <div class="mobile-nav-modal" id="mobile-drawer">
        <div class="mobile-nav-top">
          <div class="brand-title">SAHIL <span>MATERIALS</span></div>
          <button class="mobile-nav-close" id="mobile-close-btn" aria-label="Close menu">&times;</button>
        </div>

        <ul class="mobile-nav-links">
          <li><a href="/" class="mobile-nav-link nav-route ${activePath === '/' ? 'active-link' : ''}" data-path="/">Home <span>&rarr;</span></a></li>
          <li><a href="/materials" class="mobile-nav-link nav-route ${activePath === '/materials' ? 'active-link' : ''}" data-path="/materials">Materials 3D <span>&rarr;</span></a></li>
          <li><a href="/services" class="mobile-nav-link nav-route ${activePath === '/services' ? 'active-link' : ''}" data-path="/services">Services (Malwa) <span>&rarr;</span></a></li>
          <li><a href="/about" class="mobile-nav-link nav-route ${activePath === '/about' ? 'active-link' : ''}" data-path="/about">About Us <span>&rarr;</span></a></li>
          <li><a href="/contact" class="mobile-nav-link nav-route ${activePath === '/contact' ? 'active-link' : ''}" data-path="/contact">Contact &amp; Rates <span>&rarr;</span></a></li>
        </ul>

        <div class="mobile-nav-ctas">
          <a href="tel:+919873161704" class="btn btn-outline-light" style="width: 100%;">Call +91 98731 61704</a>
          <a href="https://wa.me/919873161704?text=Hello%20Sahil%20Building%20Material,%20I%20am%20inquiring%20about%20materials" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="width: 100%;">WhatsApp Quote</a>
        </div>
      </div>
    </header>
  `;
}
