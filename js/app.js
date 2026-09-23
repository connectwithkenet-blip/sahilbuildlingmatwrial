/**
 * Sahil Building Material - Interactive Application Logic
 * Clean, lightweight, zero jQuery dependencies.
 */

// ==========================================================================
// 1. Central Business Configuration
// ==========================================================================
const SAHIL_CONFIG = {
  businessName: 'Sahil Building Material',
  // Verified phone found in business listings
  phoneDisplay: '+91 98731 61704',
  phoneRaw: '+919873161704',
  whatsappRaw: '919873161704',
  address: 'D-6/355, 4th Road, Pocket 6, Sector 6D, Rohini, Delhi, 110085',
  landmark: 'Near Vidya Jain Public School, Sector 6',
  hours: 'Monday – Sunday: 08:00 AM – 08:00 PM',
  email: 'sahilbuildingmaterial@gmail.com', // Sensible placeholder
  googleMapsUrl: 'https://maps.google.com/?q=28.709491,77.110359'
};

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initSmoothScroll();
  initProductFilter();
  initGalleryModal();
  initContactForm();
  initScrollSpy();
  initScrollReveals();
});

// ==========================================================================
// 2. Mobile Navigation Toggle
// ==========================================================================
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const drawer = document.getElementById('mobile-drawer');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    } else {
      drawer.classList.add('open');
      toggleBtn.setAttribute('aria-expanded', 'true');
    }
  });

  // Close drawer when a link is clicked
  const navLinks = drawer.querySelectorAll('a');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// ==========================================================================
// 3. Smooth Scroll Navigation
// ==========================================================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 84;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    });
  });
}

// ==========================================================================
// 4. Products Filter Tabs
// ==========================================================================
function initProductFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  if (!filterBtns.length || !productCards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      productCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          card.style.display = 'none';
        }
      });
    });
  });
}

// ==========================================================================
// 5. Gallery Modal / Lightbox
// ==========================================================================
function initGalleryModal() {
  const modal = document.getElementById('gallery-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-item-title');
  const modalDesc = document.getElementById('modal-item-desc');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (!modal || !closeBtn) return;

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      const title = item.getAttribute('data-title') || 'Sahil Yard & Warehouse';
      const desc = item.getAttribute('data-desc') || 'Live stock at Rohini Sector 6 supply yard.';

      if (modalTitle) modalTitle.textContent = title;
      if (modalDesc) modalDesc.textContent = desc;

      modal.classList.add('active');
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}

// ==========================================================================
// 6. Interactive Quote Calculator & Contact Form
// ==========================================================================
function initContactForm() {
  const form = document.getElementById('quote-contact-form');
  const banner = document.getElementById('form-success-banner');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name').value.trim();
    const phone = document.getElementById('form-phone').value.trim();
    const material = document.getElementById('form-material').value;
    const quantity = document.getElementById('form-quantity').value.trim();
    const location = document.getElementById('form-location').value.trim();
    const notes = document.getElementById('form-notes').value.trim();

    // Construct formatted WhatsApp message
    const lines = [
      `*New Material Quotation Inquiry* 🏗️`,
      `*Business:* Sahil Building Material, Rohini`,
      `---`,
      `*Customer Name:* ${name}`,
      `*Contact Phone:* ${phone}`,
      `*Material Required:* ${material}`,
      `*Estimated Quantity:* ${quantity || 'Not specified'}`,
      `*Delivery Location:* ${location || 'Rohini Sector 6 / Delhi'}`,
    ];

    if (notes) {
      lines.push(`*Special Notes:* ${notes}`);
    }

    lines.push(`---`);
    lines.push(`Please provide best available rates and delivery timeframe.`);

    const encodedMsg = encodeURIComponent(lines.join('\n'));
    const whatsappUrl = `https://wa.me/${SAHIL_CONFIG.whatsappRaw}?text=${encodedMsg}`;

    // Show success message
    if (banner) {
      banner.style.display = 'block';
      banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Open WhatsApp in new tab for immediate chat
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 600);
  });
}

// ==========================================================================
// 7. Active Nav ScrollSpy
// ==========================================================================
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}

// ==========================================================================
// 8. GSAP Premium Animations
// ==========================================================================
function initScrollReveals() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn("GSAP not loaded. Fallback to basic visibility.");
    document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('revealed'));
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // Hero Section Initial Animation
  const heroTl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.2 } });
  
  // Wait for 3D intro to finish if it exists
  window.addEventListener('introCompleted', () => {
    playHeroAnimation();
  });
  
  // If no intro active, play immediately
  if (!document.body.classList.contains('intro-active')) {
    setTimeout(playHeroAnimation, 300);
  }

  function playHeroAnimation() {
    heroTl.fromTo('.hero-top-badge', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8 }
    )
    .fromTo('.hero-title', 
      { opacity: 0, y: 30, rotationX: 10 }, 
      { opacity: 1, y: 0, rotationX: 0, stagger: 0.2 }, 
      "-=0.6"
    )
    .fromTo('.hero-subtitle', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0 }, 
      "-=0.8"
    )
    .fromTo('.hero-ctas a', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: "back.out(1.5)" }, 
      "-=0.6"
    )
    .fromTo('.hero-showcase-card', 
      { opacity: 0, x: 50, scale: 0.95 }, 
      { opacity: 1, x: 0, scale: 1, duration: 1.5, ease: "expo.out" }, 
      "-=1.2"
    );
  }

  // Scroll Reveal Animations for sections
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  
  revealElements.forEach((el) => {
    gsap.fromTo(el, 
      { 
        opacity: 0, 
        y: 40 
      },
      {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }
    );
    // Remove the old CSS class toggle to prevent conflicts
    el.classList.remove('reveal-on-scroll');
  });

  // Animate Stat Items
  gsap.from('.stat-item', {
    scrollTrigger: {
      trigger: '.stats-banner',
      start: "top 90%"
    },
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.8,
    ease: "power2.out"
  });
}
