/**
 * Home Page Template
 */
export function renderHomePage() {
  return `
    <div class="page-container page-home">
      
      <!-- HERO SECTION OVERLAY (SCENE 2 3D) -->
      <section class="hero-home">
        <div class="container">
          <div class="hero-home-inner">
            
            <div class="hero-kicker-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span>Authorized Stockist • Sector 6D Rohini</span>
            </div>

            <h1 class="hero-main-title">
              Rohini's Strongest <span class="text-brick">Foundations,</span> <span class="text-yellow">Since 2002.</span>
            </h1>

            <p class="hero-lead-text">
              Direct depot wholesale partner for UltraTech &amp; Ambuja Cement, Tata Tiscon TMT rebars, Class-1 red bricks, and washed Yamuna river sand. Delivering verified weight and genuine quality to construction sites across North-West Delhi for over 22 years.
            </p>

            <div class="hero-btn-row">
              <a 
                href="https://wa.me/919873161704?text=Hello%20Sahil%20Building%20Material,%20please%20send%20current%20rates%20for%20Cement%20and%20TMT%20steel" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn btn-whatsapp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.98-1.39A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
                </svg>
                <span>Get Instant WhatsApp Quote</span>
              </a>

              <a href="tel:+919873161704" class="btn btn-outline-light">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>Call +91 98731 61704</span>
              </a>

              <a href="/materials" class="btn btn-yellow nav-route" data-path="/materials">
                <span>Explore Materials 3D &rarr;</span>
              </a>
            </div>

            <!-- Credibility Counter Bar -->
            <div class="hero-cred-bar">
              <div class="hero-cred-item">
                <div class="cred-big-num">22+ <span>Years</span></div>
                <div class="cred-label">Serving Rohini (Est. 2002)</div>
              </div>
              <div class="hero-cred-item">
                <div class="cred-big-num">4.1 <span>★</span></div>
                <div class="cred-label">19 Google &amp; Local Reviews</div>
              </div>
              <div class="hero-cred-item">
                <div class="cred-big-num">50,000+</div>
                <div class="cred-label">Truck &amp; Tempo Deliveries</div>
              </div>
              <div class="hero-cred-item">
                <div class="cred-big-num">100% <span>Direct</span></div>
                <div class="cred-label">Company Manufacturer Depots</div>
              </div>
            </div>

          </div>
        </div>

        <div class="interactive-hint">
          <span class="hint-dot"></span>
          <span>Interactive 3D Stage: Drag to inspect materials</span>
        </div>
      </section>

      <!-- WHY CHOOSE US (LIGHT PAPER SECTION) -->
      <section class="section-paper">
        <div class="container">
          
          <div class="section-header-block">
            <span class="section-kicker">The Builder &amp; Homeowner Advantage</span>
            <h2 class="section-title">Why Delhi Chooses Sahil Building Material</h2>
            <p class="section-subtitle">
              In construction, an underweight truck or counterfeit cement ruins project timelines and structure safety. For 22 years, we have built on unwavering transparency.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px;">
            
            <div style="background: #FFF; padding: 32px; border-radius: var(--radius-lg); border: 1px solid rgba(28,27,25,0.08); box-shadow: var(--shadow-sm);">
              <div style="width: 48px; height: 48px; border-radius: var(--radius-md); background: rgba(178,58,36,0.1); color: var(--color-brick); display: grid; place-items: center; margin-bottom: 20px;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 style="font-size: 20px; margin-bottom: 12px;">100% Genuine Brands</h3>
              <p style="color: var(--text-dark-secondary); font-size: 15px;">
                Direct factory sourcing from UltraTech, Tata Tiscon, Ambuja, ACC, and Jindal Panther. Every batch comes with genuine test certificates. Zero expired bags.
              </p>
            </div>

            <div style="background: #FFF; padding: 32px; border-radius: var(--radius-lg); border: 1px solid rgba(28,27,25,0.08); box-shadow: var(--shadow-sm);">
              <div style="width: 48px; height: 48px; border-radius: var(--radius-md); background: rgba(245,184,0,0.15); color: #B38600; display: grid; place-items: center; margin-bottom: 20px;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/>
                </svg>
              </div>
              <h3 style="font-size: 20px; margin-bottom: 12px;">Direct Wholesale Pricing</h3>
              <p style="color: var(--text-dark-secondary); font-size: 15px;">
                High-volume, low-margin transparent rates. Whether you need 50 bags for a renovation or 5,000 bags for a commercial building, get direct wholesale rates.
              </p>
            </div>

            <div style="background: #FFF; padding: 32px; border-radius: var(--radius-lg); border: 1px solid rgba(28,27,25,0.08); box-shadow: var(--shadow-sm);">
              <div style="width: 48px; height: 48px; border-radius: var(--radius-md); background: rgba(31,170,89,0.12); color: var(--color-whatsapp); display: grid; place-items: center; margin-bottom: 20px;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
                </svg>
              </div>
              <h3 style="font-size: 20px; margin-bottom: 12px;">Honest Weighment</h3>
              <p style="color: var(--text-dark-secondary); font-size: 15px;">
                Computerized weighbridge receipts for sand, rori, and stone dust. Physically counted and verified brick dispatches so you get what you pay for.
              </p>
            </div>

            <div style="background: #FFF; padding: 32px; border-radius: var(--radius-lg); border: 1px solid rgba(28,27,25,0.08); box-shadow: var(--shadow-sm);">
              <div style="width: 48px; height: 48px; border-radius: var(--radius-md); background: rgba(178,58,36,0.1); color: var(--color-brick); display: grid; place-items: center; margin-bottom: 20px;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
              </div>
              <h3 style="font-size: 20px; margin-bottom: 12px;">Same-Day Site Dispatch</h3>
              <p style="color: var(--text-dark-secondary); font-size: 15px;">
                Strategic depot on 4th Road, Pocket 6 in Rohini Sector 6D enables rapid truck and tempo drop-offs to Rohini, Pitampura, and Outer Delhi plots 7 days a week.
              </p>
            </div>

          </div>

        </div>
      </section>

      <!-- OWNER FEATURED BANNER -->
      <section class="section-dark">
        <div class="container">
          <div class="owner-feature-card">
            <div class="owner-image-pane">
              <img 
                src="/assets/images/owner.jpg" 
                alt="Mr. Yogesh Seth - Founder & Proprietor, Sahil Building Material" 
                loading="lazy"
              />
            </div>
            <div class="owner-text-pane">
              <span class="owner-title-kicker">Leadership &bull; Since 2002</span>
              <h2 class="owner-name" style="color: var(--text-dark-primary);">Mr. Yogesh Seth</h2>
              <div class="owner-role">Founder &amp; Proprietor &bull; Sahil Building Material</div>
              
              <blockquote class="owner-pullquote">
                &ldquo;When a family builds a home in Rohini, they are putting their life savings into a foundation. For over 22 years, our family has stood behind every truck that leaves our yard. We guarantee honest weight, original brands, and a handshake you can trust.&rdquo;
              </blockquote>

              <p class="owner-bio-p">
                With 22+ years on-site experience across Rohini, Mr. Yogesh Seth personally guides contractors, engineers, and individual builders with mix ratios, OPC vs PPC grade selections, and structural rebar optimization.
              </p>

              <div style="display: flex; gap: 14px; flex-wrap: wrap;">
                <a href="tel:+919873161704" class="btn btn-primary">Call Owner Directly</a>
                <a href="/about" class="btn btn-outline-dark nav-route" data-path="/about">Read Our Story &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- VERIFIED TESTIMONIALS (4.1 Rating) -->
      <section class="section-paper">
        <div class="container">
          
          <div class="section-header-block">
            <span class="section-kicker">Client Trust &bull; 4.1 Rating</span>
            <h2 class="section-title">What Our Customers Say in Rohini</h2>
            <p class="section-subtitle">
              Authentic verified customer reviews from Google Maps and Justdial directory listings.
            </p>
          </div>

          <div class="reviews-grid">
            
            <div class="review-card">
              <div>
                <div class="reviewer-header">
                  <div class="reviewer-initial">L</div>
                  <div>
                    <div class="reviewer-name">Lakshay</div>
                    <div class="reviewer-role">Construction Client &bull; Rohini</div>
                  </div>
                </div>
                <div class="star-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p class="review-text">
                  &ldquo;Very reliable building material supplier in Rohini Sector 6. Delivered cement and TMT bars right on time to our construction site without any delay. Highly recommended for hassle-free supplies.&rdquo;
                </p>
              </div>
            </div>

            <div class="review-card">
              <div>
                <div class="reviewer-header">
                  <div class="reviewer-initial" style="background: #1E40AF;">A</div>
                  <div>
                    <div class="reviewer-name">Aditya Bhatia</div>
                    <div class="reviewer-role">Local Resident &bull; Sector 6D</div>
                  </div>
                </div>
                <div class="star-rating">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p class="review-text">
                  &ldquo;Fair pricing and genuine brands (UltraTech, Tata Tiscon). Best supplier around Sector 6 and Pocket 6. Yogesh ji was very cooperative and assisted with the exact quantity needed for our slab casting.&rdquo;
                </p>
              </div>
            </div>

            <div class="review-card">
              <div>
                <div class="reviewer-header">
                  <div class="reviewer-initial" style="background: var(--color-whatsapp);">Y</div>
                  <div>
                    <div class="reviewer-name">Yug Chhabra</div>
                    <div class="reviewer-role">Home Renovation &bull; Rohini</div>
                  </div>
                </div>
                <div class="star-rating">&#9733;&#9733;&#9733;&#9733;&#9734;</div>
                <p class="review-text">
                  &ldquo;Good quality red bricks and Yamuna sand delivered with accurate weight. No broken bricks in the shipment, which saved a lot of material waste. Recommended for home renovation.&rdquo;
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <!-- QUICK CONVERSION BANNER -->
      <section class="section-dark" style="background: linear-gradient(135deg, #242220 0%, #181715 100%); border-top: 1px solid rgba(255,255,255,0.1);">
        <div class="container" style="text-align: center; max-width: 800px;">
          <span class="section-kicker on-dark">Ready to Build?</span>
          <h2 style="font-size: clamp(32px, 5vw, 56px); margin-bottom: 20px;">Get Today's Live Wholesale Price List</h2>
          <p style="color: var(--text-light-secondary); font-size: 18px; margin-bottom: 36px; margin-left: auto; margin-right: auto;">
            Send us your required quantities or bill of materials. We reply with itemized rates and immediate delivery slot availability.
          </p>
          <div style="display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;">
            <a href="https://wa.me/919873161704?text=Hello%20Sahil%20Building%20Material,%20please%20send%20current%20rates" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
              WhatsApp Us (+91 98731 61704)
            </a>
            <a href="/contact" class="btn btn-yellow nav-route" data-path="/contact">
              Instant Quote Calculator &rarr;
            </a>
          </div>
        </div>
      </section>

    </div>
  `;
}
