/**
 * Footer Component
 */
export function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        
        <div class="footer-grid">
          
          <!-- Col 1: Brand & Credentials -->
          <div>
            <div class="brand-title" style="margin-bottom: 8px;">SAHIL <span>MATERIALS</span></div>
            <p style="color: var(--text-light-secondary); font-size: 14px; margin-bottom: 20px;">
              Rohini's premiere heavy building material stockist since 2002. Direct authorized partner for UltraTech, Tata Tiscon, Ambuja, and ACC. Genuine weighment, certified brands, and same-day site drops.
            </p>
            <div style="font-size: 13px; color: var(--color-yellow); font-weight: 600; margin-bottom: 8px;">
              ★ 4.1 / 5.0 (19 Verified Customer Reviews)
            </div>
            <div style="font-size: 13px; color: var(--text-light-muted); margin-bottom: 20px;">
              Operating 7 Days: Monday – Sunday (8:00 AM – 8:00 PM)
            </div>

            <!-- Replay 3D Intro Button -->
            <button id="btn-replay-intro" class="btn-replay-intro">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
              </svg>
              <span>Replay 3D Intro Animation</span>
            </button>
          </div>

          <!-- Col 2: Navigation -->
          <div>
            <div class="footer-col-title">Navigation</div>
            <ul class="footer-links-list">
              <li><a href="/" class="footer-link nav-route" data-path="/">Home Overview</a></li>
              <li><a href="/materials" class="footer-link nav-route" data-path="/materials">Materials 3D Stage</a></li>
              <li><a href="/services" class="footer-link nav-route" data-path="/services">Malwa Uthana &amp; Unloading</a></li>
              <li><a href="/about" class="footer-link nav-route" data-path="/about">Our 22+ Year Story</a></li>
              <li><a href="/contact" class="footer-link nav-route" data-path="/contact">Instant Rates &amp; Yard Map</a></li>
            </ul>
          </div>

          <!-- Col 3: Materials Stocked -->
          <div>
            <div class="footer-col-title">Materials Stocked</div>
            <ul class="footer-links-list">
              <li><a href="/materials" class="footer-link nav-route" data-path="/materials">UltraTech &amp; Ambuja Cement</a></li>
              <li><a href="/materials" class="footer-link nav-route" data-path="/materials">Tata Tiscon &amp; Jindal TMT</a></li>
              <li><a href="/materials" class="footer-link nav-route" data-path="/materials">Class-1 Oven Red Bricks</a></li>
              <li><a href="/materials" class="footer-link nav-route" data-path="/materials">Thermal AAC Blocks</a></li>
              <li><a href="/materials" class="footer-link nav-route" data-path="/materials">Washed River Yamuna Sand</a></li>
              <li><a href="/materials" class="footer-link nav-route" data-path="/materials">10mm / 20mm Blue Metal Rori</a></li>
              <li><a href="/materials" class="footer-link nav-route" data-path="/materials">Wall Putty &amp; Waterproofing</a></li>
            </ul>
          </div>

          <!-- Col 4: Rohini Depot Address -->
          <div>
            <div class="footer-col-title">Rohini Supply Yard</div>
            <address style="font-style: normal; font-size: 14px; color: var(--text-light-secondary); line-height: 1.6; margin-bottom: 16px;">
              <strong style="color: #FFF;">Sahil Building Material</strong><br>
              D-6/355, 4th Road, Pocket 6, Sector 6D,<br>
              Rohini, Delhi 110085<br>
              <span style="color: var(--color-yellow); font-size: 13px;">Landmark: Near Vidya Jain Public School</span>
            </address>
            <div style="font-size: 14px; color: var(--text-light-secondary); line-height: 1.8;">
              Phone / WhatsApp: <a href="tel:+919873161704" style="color: #FFF; font-weight: 700;">+91 98731 61704</a><br>
              Email: <a href="mailto:sahilbuildingmaterial@gmail.com" style="color: #FFF;">sahilbuildingmaterial@gmail.com</a><br>
              Payments: UPI, Cash, Cheque, RTGS/NEFT
            </div>
          </div>

        </div>

        <!-- Footer Bottom Row -->
        <div class="footer-bottom-row">
          <div>
            &copy; 2002 – 2026 Sahil Building Material. Founder &amp; Proprietor: Mr. Yogesh Seth. All rights reserved.
          </div>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <span style="background: rgba(255,255,255,0.06); padding: 4px 10px; border-radius: 4px; font-size: 12px;">Sector 6D Rohini</span>
            <span style="background: rgba(255,255,255,0.06); padding: 4px 10px; border-radius: 4px; font-size: 12px;">Pocket 6</span>
            <span style="background: rgba(255,255,255,0.06); padding: 4px 10px; border-radius: 4px; font-size: 12px;">North-West Delhi 110085</span>
          </div>
        </div>

      </div>
    </footer>
  `;
}
