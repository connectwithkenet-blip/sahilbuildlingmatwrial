/**
 * Top Navigation Bar (Clean light theme)
 */
export function renderNavbar(activePath = '/') {
  return `
    <header class="site-header">
      <div class="container nav-wrap">
        
        <!-- Logo -->
        <a href="/" class="brand-logo nav-link-route" data-path="/">
          <span class="brand-title">Sahil Building Material</span>
          <span class="brand-sub">Rohini Sector 6D &bull; Est. 2002</span>
        </a>

        <!-- Desktop Links -->
        <nav aria-label="Main Navigation">
          <ul class="nav-links-desktop">
            <li><a href="/" class="nav-link nav-link-route ${activePath === '/' ? 'active' : ''}" data-path="/">Home</a></li>
            <li><a href="/materials" class="nav-link nav-link-route ${activePath === '/materials' ? 'active' : ''}" data-path="/materials">Materials</a></li>
            <li><a href="/services" class="nav-link nav-link-route ${activePath === '/services' ? 'active' : ''}" data-path="/services">Malwa and Unloading</a></li>
            <li><a href="/about" class="nav-link nav-link-route ${activePath === '/about' ? 'active' : ''}" data-path="/about">About</a></li>
            <li><a href="/contact" class="nav-link nav-link-route ${activePath === '/contact' ? 'active' : ''}" data-path="/contact">Contact</a></li>
          </ul>
        </nav>

        <!-- CTA & Mobile Toggle -->
        <div class="nav-cta-group">
          <a 
            href="https://wa.me/919873161704?text=Hello%20Sahil%20Building%20Material,%20please%20send%20today's%20rates" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="btn btn-whatsapp"
          >
            WhatsApp
          </a>

          <button class="mobile-toggle" id="mobile-menu-btn" aria-label="Toggle menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

      </div>

      <!-- Plain White Mobile Drawer Below Header -->
      <div class="mobile-drawer" id="mobile-menu-drawer">
        <ul class="mobile-nav-list">
          <li><a href="/" class="mobile-nav-item nav-link-route" data-path="/">Home</a></li>
          <li><a href="/materials" class="mobile-nav-item nav-link-route" data-path="/materials">Materials</a></li>
          <li><a href="/services" class="mobile-nav-item nav-link-route" data-path="/services">Malwa and Unloading</a></li>
          <li><a href="/about" class="mobile-nav-item nav-link-route" data-path="/about">About</a></li>
          <li><a href="/contact" class="mobile-nav-item nav-link-route" data-path="/contact">Contact</a></li>
        </ul>
        <div style="display: flex; gap: 10px;">
          <a href="tel:+919873161704" class="btn btn-outline" style="flex: 1;">Call Now</a>
          <a href="https://wa.me/919873161704" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="flex: 1;">WhatsApp</a>
        </div>
      </div>
    </header>
  `;
}
