/**
 * Footer Component (Light theme cream #F3ECDF)
 */
export function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        
        <div class="footer-top">
          <!-- Col 1: Brand & Facts -->
          <div>
            <div class="footer-title">Sahil Building Material</div>
            <p style="font-size: 14px; margin-bottom: 16px;">
              Supplying Rohini and North-West Delhi with genuine cement, certified TMT steel, red bricks, sand, and aggregates since 2002.
            </p>
            <div style="font-size: 13px; color: var(--text-secondary); line-height: 1.8;">
              <div>Rating: <strong>4.1 / 5</strong> (19 verified customer reviews)</div>
              <div>Open 7 days: <strong>8:00 AM – 8:00 PM</strong></div>
              <div>Founder &amp; Proprietor: <strong>Mr. Yogesh Seth</strong></div>
            </div>
          </div>

          <!-- Col 2: Navigation -->
          <div>
            <div class="footer-title">Navigation</div>
            <ul class="footer-links">
              <li><a href="/" class="nav-link-route" data-path="/">Home</a></li>
              <li><a href="/materials" class="nav-link-route" data-path="/materials">Materials</a></li>
              <li><a href="/services" class="nav-link-route" data-path="/services">Malwa and Unloading</a></li>
              <li><a href="/about" class="nav-link-route" data-path="/about">About Us</a></li>
              <li><a href="/contact" class="nav-link-route" data-path="/contact">Contact</a></li>
            </ul>
          </div>

          <!-- Col 3: Materials -->
          <div>
            <div class="footer-title">Materials</div>
            <ul class="footer-links">
              <li><a href="/materials" class="nav-link-route" data-path="/materials">UltraTech &amp; Ambuja Cement</a></li>
              <li><a href="/materials" class="nav-link-route" data-path="/materials">Tata Tiscon &amp; Jindal TMT</a></li>
              <li><a href="/materials" class="nav-link-route" data-path="/materials">Class-1 Kiln Red Bricks</a></li>
              <li><a href="/materials" class="nav-link-route" data-path="/materials">AAC Lightweight Blocks</a></li>
              <li><a href="/materials" class="nav-link-route" data-path="/materials">Yamuna Sand &amp; Stone Dust</a></li>
              <li><a href="/materials" class="nav-link-route" data-path="/materials">Rori &amp; Blue Aggregates</a></li>
            </ul>
          </div>

          <!-- Col 4: Depot Address -->
          <div>
            <div class="footer-title">Rohini Yard</div>
            <address style="font-style: normal; font-size: 14px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 14px;">
              D-6/355, 4th Road, Pocket 6, Sector 6D,<br>
              Rohini, Delhi 110085<br>
              <span style="color: var(--accent-brick);">Near Vidya Jain Public School</span>
            </address>
            <div style="font-size: 14px; line-height: 1.8; color: var(--text-secondary);">
              Phone: <a href="tel:+919873161704" style="color: var(--text-primary); font-weight: 600;">+91 98731 61704</a><br>
              WhatsApp: <a href="https://wa.me/919873161704" target="_blank" rel="noopener noreferrer" style="color: var(--color-whatsapp); font-weight: 600;">+91 98731 61704</a><br>
              Email: sahilbuildingmaterial@gmail.com<br>
              Payments: UPI, Cash, Cheque, RTGS/NEFT
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div>
            &copy; 2002 – 2026 Sahil Building Material. All rights reserved.
          </div>
          <div>
            Rohini Sector 6D &bull; Pocket 6 &bull; North-West Delhi 110085
          </div>
        </div>

      </div>
    </footer>
  `;
}
