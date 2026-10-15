/**
 * Contact & Instant Material Quote Calculator Page Template
 */
export function renderContactPage() {
  return `
    <div class="page-container page-contact">
      
      <!-- HERO INTRO -->
      <section style="padding: 70px 0 30px; background-color: var(--color-black); color: var(--text-light-primary);">
        <div class="container" style="max-width: 900px; text-align: center;">
          <span class="section-kicker on-dark">Direct Wholesale Depot</span>
          <h1 style="font-size: clamp(38px, 6vw, 76px); text-transform: uppercase; margin-bottom: 16px;">
            Visit Our Yard or <span style="color: var(--color-brick-light);">Order Online</span>
          </h1>
          <p style="color: var(--text-light-secondary); font-size: 18px; margin: 0 auto;">
            Conveniently located on 4th Road, Pocket 6, Sector 6D Rohini. Open 7 days a week from 8:00 AM to 8:00 PM.
          </p>
        </div>
      </section>

      <!-- MAIN CONTACT & FORM LAYOUT (LIGHT SECTION) -->
      <section class="section-paper">
        <div class="container">
          
          <div class="contact-layout-grid">
            
            <!-- LEFT COLUMN: DEPOT INFO, MAP & CONTACT NUMBERS -->
            <div class="contact-card-info">
              
              <!-- Address Tile -->
              <div class="info-tile">
                <div class="info-tile-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h3 style="font-size: 18px; margin-bottom: 6px;">Rohini Supply Depot</h3>
                  <address style="font-style: normal; color: var(--text-dark-secondary); font-size: 14px; line-height: 1.6;">
                    <strong>Sahil Building Material</strong><br>
                    D-6/355, 4th Road, Pocket 6, Sector 6D,<br>
                    Rohini, Delhi 110085<br>
                    <span style="color: var(--color-brick); font-weight: 600;">Landmark: Near Vidya Jain Public School</span>
                  </address>
                  <a href="https://maps.google.com/?q=28.709491,77.110359" target="_blank" rel="noopener noreferrer" style="display: inline-block; margin-top: 8px; color: var(--color-brick); font-weight: 700; font-size: 13px;">
                    Open in Google Maps &rarr;
                  </a>
                </div>
              </div>

              <!-- Phone & WhatsApp Tile -->
              <div class="info-tile">
                <div class="info-tile-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h3 style="font-size: 18px; margin-bottom: 6px;">Direct Contact Numbers</h3>
                  <div style="font-size: 14px; color: var(--text-dark-secondary); line-height: 1.8;">
                    Phone: <a href="tel:+919873161704" style="color: var(--text-dark-primary); font-weight: 700;">+91 98731 61704</a><br>
                    WhatsApp: <a href="https://wa.me/919873161704" target="_blank" rel="noopener noreferrer" style="color: var(--color-whatsapp); font-weight: 700;">+91 98731 61704</a><br>
                    Email: <a href="mailto:sahilbuildingmaterial@gmail.com" style="color: var(--text-dark-secondary);">sahilbuildingmaterial@gmail.com</a>
                  </div>
                </div>
              </div>

              <!-- Working Hours & Payment Tile -->
              <div class="info-tile">
                <div class="info-tile-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <h3 style="font-size: 18px; margin-bottom: 6px;">Yard Timings &amp; Payment</h3>
                  <div style="font-size: 14px; color: var(--text-dark-secondary); line-height: 1.6;">
                    <strong>Mon – Sun:</strong> 08:00 AM – 08:00 PM (Open 7 Days)<br>
                    <span style="color: #059669; font-weight: 600;">Sunday site dispatches active</span><br>
                    Payments: UPI (GPay/PhonePe/Paytm), Cash, Cheque, RTGS / NEFT
                  </div>
                </div>
              </div>

              <!-- Google Maps Iframe -->
              <div class="map-wrapper">
                <iframe 
                  title="Sahil Building Material Rohini Google Maps Location"
                  src="https://maps.google.com/maps?q=28.709491,77.110359&hl=en&z=16&output=embed"
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </div>

            </div>

            <!-- RIGHT COLUMN: INTERACTIVE WHATSAPP QUOTE CALCULATOR FORM -->
            <div class="quote-form-card">
              <span class="section-kicker">Instant Rate Calculator</span>
              <h2 style="font-size: clamp(24px, 3.5vw, 36px); margin-bottom: 12px;">Request a Wholesale Quote</h2>
              <p style="color: var(--text-dark-secondary); font-size: 15px; margin-bottom: 28px;">
                Enter your material specifications below. The form automatically creates an itemized WhatsApp quote request direct to Mr. Yogesh Seth.
              </p>

              <form id="quote-calculator-form">
                
                <div class="form-grid-2">
                  <div class="form-group">
                    <label for="q-name">Your Full Name *</label>
                    <input type="text" id="q-name" class="form-input" placeholder="e.g. Rajesh Kumar" required />
                  </div>
                  <div class="form-group">
                    <label for="q-phone">Mobile / WhatsApp Number *</label>
                    <input type="tel" id="q-phone" class="form-input" placeholder="e.g. +91 98100 XXXXX" required />
                  </div>
                </div>

                <div class="form-grid-2">
                  <div class="form-group">
                    <label for="q-material">Material / Service Required *</label>
                    <select id="q-material" class="form-select" required>
                      <option value="Cement (UltraTech / Ambuja / ACC)">Cement (UltraTech / Ambuja / ACC)</option>
                      <option value="TMT Steel Bars (Tata Tiscon / Fe-550D)">TMT Steel Bars (Tata Tiscon / Fe-550D)</option>
                      <option value="Class-1 Red Clay Bricks">Class-1 Red Clay Bricks</option>
                      <option value="AAC Thermal Lightweight Blocks">AAC Thermal Lightweight Blocks</option>
                      <option value="Washed Yamuna River Sand">Washed Yamuna River Sand</option>
                      <option value="Stone Dust / Badarpur">Stone Dust / Badarpur</option>
                      <option value="Crushed Blue Metal Rori (10mm/20mm)">Crushed Blue Metal Rori (10mm/20mm)</option>
                      <option value="Wall Putty &amp; Waterproofing (Birla/Dr. Fixit)">Wall Putty &amp; Waterproofing (Birla/Dr. Fixit)</option>
                      <option value="Malwa Uthana (Site Debris Clearance)">Malwa Uthana (Site Debris Clearance)</option>
                      <option value="Maal / Truck Unloading Labour">Maal / Truck Unloading Labour</option>
                      <option value="Full Construction Package Deal">Full Construction Package Deal</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="q-quantity">Estimated Quantity</label>
                    <input type="text" id="q-quantity" class="form-input" placeholder="e.g. 150 Bags / 3 Tons / 8000 Bricks" />
                  </div>
                </div>

                <div class="form-group">
                  <label for="q-location">Site Delivery Location in Delhi *</label>
                  <input type="text" id="q-location" class="form-input" placeholder="e.g. Sector 6D, Pocket 6, Rohini" required />
                </div>

                <div class="form-group">
                  <label for="q-notes">Additional Site Notes (Optional)</label>
                  <textarea id="q-notes" class="form-textarea" placeholder="Mention floor delivery, crane requirement, or brand preference..."></textarea>
                </div>

                <button type="submit" class="btn btn-whatsapp" style="width: 100%; font-size: 17px; padding: 16px;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.98-1.39A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
                  </svg>
                  <span>Generate &amp; Send WhatsApp Quote &rarr;</span>
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

      <!-- FREQUENTLY ASKED QUESTIONS SECTION -->
      <section class="section-dark" style="border-top: 1px solid rgba(255,255,255,0.1);">
        <div class="container" style="max-width: 860px;">
          
          <div class="section-header-block" style="text-align: center;">
            <span class="section-kicker on-dark">Transparency</span>
            <h2 class="section-title">Frequently Asked Questions</h2>
            <p class="section-subtitle on-dark">
              Everything you need to know about rates, deliveries, and order minimums.
            </p>
          </div>

          <div class="faq-list">
            
            <div class="faq-item">
              <button class="faq-question">
                <span>How are daily cement and TMT steel rates determined?</span>
                <span class="faq-icon">+</span>
              </button>
              <div class="faq-answer">
                Cement and steel prices fluctuate based on company daily mill revisions. We update our wholesale rates every morning based on authorized UltraTech, Ambuja, and Tata Tiscon depot dispatches to give you direct current factory pricing.
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question">
                <span>What is the minimum order quantity for site delivery?</span>
                <span class="faq-icon">+</span>
              </button>
              <div class="faq-answer">
                We accommodate all project scales: from small tempo drop-offs of 30 cement bags or 1,000 bricks for home renovations up to 500-bag truckloads and full multi-ton rebar trailers for commercial buildings.
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question">
                <span>Which areas do you deliver to from your Rohini Sector 6 yard?</span>
                <span class="faq-icon">+</span>
              </button>
              <div class="faq-answer">
                We deliver throughout Rohini (all Sectors 1 through 24), Pitampura, Rani Bagh, Mangolpuri, Shalimar Bagh, Paschim Vihar, and Outer Delhi.
              </div>
            </div>

            <div class="faq-item">
              <button class="faq-question">
                <span>How can I verify the weighment of sand and steel?</span>
                <span class="faq-icon">+</span>
              </button>
              <div class="faq-answer">
                Every delivery of loose materials (Yamuna sand, rori, stone dust) and bundled TMT steel is dispatched with a computerized weighbridge slip (gross, tare, net weight). You can also weigh the vehicle on any nearby weighbridge in Rohini.
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  `;
}
