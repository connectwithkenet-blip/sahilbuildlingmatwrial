/**
 * Services Page Template: Malwa Uthana & Maal Unloading (Dedicated Page)
 */
export function renderServicesPage() {
  return `
    <div class="page-container page-services">
      
      <!-- HERO HEADER -->
      <section style="padding: 70px 0 40px; background-color: var(--color-black); color: var(--text-light-primary);">
        <div class="container" style="max-width: 900px; text-align: center;">
          <div class="hero-kicker-pill" style="margin: 0 auto 20px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span>Dedicated Site Labour &amp; Fleet Services</span>
          </div>

          <h1 style="font-size: clamp(36px, 6vw, 76px); text-transform: uppercase; line-height: 1.0; margin-bottom: 20px;">
            Malwa Uthana &amp; <span style="color: var(--color-brick-light);">Site Unloading</span>
          </h1>

          <p style="color: var(--text-light-secondary); font-size: clamp(16px, 1.3vw, 20px); margin: 0 auto; max-width: 68ch;">
            Reliable construction site logistics in Rohini &amp; North-West Delhi. From rapid debris clearance with commercial tippers to careful manual unloading by trained labour teams.
          </p>
        </div>
      </section>

      <!-- 3D SCROLL TRIGGER SECTIONS -->
      <div style="position: relative; z-index: 10;">
        
        <!-- SECTION A: MALWA UTHANA (DEBRIS REMOVAL) -->
        <section class="section-paper" id="service-malwa-sec" style="border-top: 1px solid rgba(255,255,255,0.1);">
          <div class="container">
            
            <div style="max-width: 620px; background: rgba(255,255,255,0.95); backdrop-filter: blur(12px); padding: clamp(28px, 4vw, 48px); border-radius: var(--radius-xl); box-shadow: var(--shadow-lg); border: 1.5px solid rgba(28,27,25,0.1);">
              <div class="service-num-badge">01</div>
              <span class="section-kicker">Debris &amp; Rubble Clearance</span>
              <h2 class="service-card-title">Malwa Uthana (Site Debris Removal)</h2>
              
              <p class="service-card-desc">
                Demolition rubble, old plaster, broken tiles, and excavated earth can block roads and stall your project. We deploy heavy tipper trucks, tempos, and experienced labour to clear your site within hours.
              </p>

              <ul class="service-highlights-list">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span><strong>Full Site Cleanup:</strong> Bricks, concrete chunks, excavation mud, plaster, and tiles.</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span><strong>Vehicles Available:</strong> Mini commercial tempos for narrow galis to large 10-wheel tippers.</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span><strong>Legal Disposal:</strong> Discharged strictly at designated municipal dumping facilities.</span>
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span><strong>Emergency Dispatch:</strong> Same-day evening or early morning clearance available.</span>
                </li>
              </ul>

              <div style="display: flex; gap: 14px; flex-wrap: wrap;">
                <a 
                  href="https://wa.me/919873161704?text=Hello%20Sahil%20Building%20Material,%20I%20need%20Malwa%20Uthana%20(Debris%20Removal)%20service%20for%20my%20site" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn btn-whatsapp"
                >
                  Book Malwa Removal on WhatsApp
                </a>
                <a href="tel:+919873161704" class="btn btn-outline-dark">Call for Rate</a>
              </div>
            </div>

          </div>
        </section>

        <!-- SECTION B: MAAL UNLOADING & LABOUR TEAM -->
        <section class="section-dark" id="service-unload-sec" style="min-height: 85vh; display: flex; align-items: center;">
          <div class="container">
            
            <div style="max-width: 620px; margin-left: auto; background: rgba(28,27,25,0.92); backdrop-filter: blur(16px); padding: clamp(28px, 4vw, 48px); border-radius: var(--radius-xl); box-shadow: 0 24px 64px rgba(0,0,0,0.6); border: 1.5px solid rgba(255,255,255,0.15);">
              <div class="service-num-badge" style="color: var(--color-yellow);">02</div>
              <span class="section-kicker on-dark">Professional Labour &amp; Stacking</span>
              <h2 class="service-card-title" style="color: var(--text-light-primary);">Maal / Truck Unloading Service</h2>
              
              <p class="service-card-desc" style="color: var(--text-light-secondary);">
                Unloading heavy building supplies without damage requires disciplined manpower. Our trained labour team carefully unloads cement bags, red bricks, steel bundles, and sand to prevent breakage and site congestion.
              </p>

              <ul class="service-highlights-list" style="color: var(--text-light-primary);">
                <li style="color: var(--text-light-primary);">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span><strong>Zero Breakage Handling:</strong> Bricks counted and stacked neatly; cement bags protected from rain &amp; moisture.</span>
                </li>
                <li style="color: var(--text-light-primary);">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span><strong>Floor Lifting:</strong> Shifting cement, bricks, and tiles to upper floors (1st, 2nd, 3rd floor).</span>
                </li>
                <li style="color: var(--text-light-primary);">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span><strong>Heavy TMT Rebar Bundles:</strong> Safe manual &amp; crane unloading into designated steel bays.</span>
                </li>
                <li style="color: var(--text-light-primary);">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <span><strong>Fixed Transparent Rates:</strong> Clear per-bag, per-thousand-brick, or per-ton labour charges.</span>
                </li>
              </ul>

              <div style="display: flex; gap: 14px; flex-wrap: wrap;">
                <a 
                  href="https://wa.me/919873161704?text=Hello%20Sahil%20Building%20Material,%20I%20need%20a%20trained%20labour%20team%20for%20Truck%20Unloading" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn btn-yellow"
                >
                  Book Unloading Team on WhatsApp
                </a>
                <a href="tel:+919873161704" class="btn btn-outline-light">Call Directly</a>
              </div>
            </div>

          </div>
        </section>

      </div>

      <!-- SERVICE FAQ BANNER -->
      <section class="section-paper">
        <div class="container" style="max-width: 860px;">
          <div class="section-header-block" style="text-align: center;">
            <span class="section-kicker">Transparent Terms</span>
            <h2 class="section-title">Common Questions About Our Services</h2>
          </div>

          <div class="faq-list">
            
            <div class="faq-item">
              <button class="faq-question">
                <span>How quickly can a Malwa removal truck reach my site in Rohini?</span>
                <span class="faq-icon">+</span>
              </button>
              <div class="faq-answer">
                In most Sectors of Rohini (Sectors 1 to 24, Pitampura, and Rani Bagh), we can dispatch a tempo or tipper truck with a loading team within 1 to 3 hours of confirmation.
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question">
                <span>Do your unloading workers also shift materials to upper floors?</span>
                <span class="faq-icon">+</span>
              </button>
              <div class="faq-answer">
                Yes! Our team can unload at ground level or manually carry cement bags, bricks, and tiles up to builder floor roofs and upper floors (rates differ based on floor height).
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question">
                <span>What are the payment options for debris removal and labour?</span>
                <span class="faq-icon">+</span>
              </button>
              <div class="faq-answer">
                We accept UPI (Google Pay, PhonePe, Paytm), cash on site completion, cheque, and RTGS / NEFT transfers.
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  `;
}
