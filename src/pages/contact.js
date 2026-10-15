/**
 * Contact Page (Clean light theme)
 */
export function renderContactPage() {
  return `
    <div class="page-contact">
      
      <section class="section section-white">
        <div class="container">
          
          <div class="section-header">
            <h1 class="section-title">Contact and wholesale rates</h1>
            <p class="section-desc">
              Visit our yard on 4th Road, Pocket 6 in Rohini Sector 6D, or submit the form below to receive an instant price quote on WhatsApp.
            </p>
          </div>

          <div class="contact-grid">
            
            <!-- Left: Quote Calculator Form -->
            <div class="form-box">
              <h2 style="font-size: 22px; margin-bottom: 8px;">Request a material quote</h2>
              <p style="font-size: 14px; margin-bottom: 24px;">Submit your requirements below to open a prefilled WhatsApp request with Mr. Yogesh Seth.</p>

              <form id="quote-form">
                <div class="form-group">
                  <label for="form-name">Your full name</label>
                  <input type="text" id="form-name" class="form-input" placeholder="Rajesh Kumar" required />
                </div>

                <div class="form-group">
                  <label for="form-phone">Mobile / WhatsApp number</label>
                  <input type="tel" id="form-phone" class="form-input" placeholder="98100 XXXXX" required />
                </div>

                <div class="form-group">
                  <label for="form-material">Material or service required</label>
                  <select id="form-material" class="form-select" required>
                    <option value="Cement (UltraTech / Ambuja / ACC)">Cement (UltraTech / Ambuja / ACC)</option>
                    <option value="TMT Steel Bars (Tata Tiscon / Jindal Panther)">TMT Steel Bars (Tata Tiscon / Jindal Panther)</option>
                    <option value="Class-1 Red Clay Bricks">Class-1 Red Clay Bricks</option>
                    <option value="AAC Lightweight Blocks">AAC Lightweight Blocks</option>
                    <option value="Washed Yamuna River Sand">Washed Yamuna River Sand</option>
                    <option value="Stone Dust / Badarpur">Stone Dust / Badarpur</option>
                    <option value="10mm / 20mm Blue Metal Rori">10mm / 20mm Blue Metal Rori</option>
                    <option value="Wall Putty &amp; Paints">Wall Putty &amp; Paints</option>
                    <option value="Malwa Uthana (debris removal)">Malwa Uthana (debris removal)</option>
                    <option value="Truck Unloading Labour">Truck Unloading Labour</option>
                    <option value="Full Project Package">Full Project Package</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="form-quantity">Estimated quantity</label>
                  <input type="text" id="form-quantity" class="form-input" placeholder="e.g. 150 bags / 3 tons / 8,000 bricks" />
                </div>

                <div class="form-group">
                  <label for="form-location">Delivery location in Delhi</label>
                  <input type="text" id="form-location" class="form-input" placeholder="e.g. Sector 6D, Pocket 6, Rohini" required />
                </div>

                <button type="submit" class="btn btn-whatsapp" style="width: 100%; margin-top: 8px;">
                  Send WhatsApp quote request
                </button>
              </form>
            </div>

            <!-- Right: Info & Map -->
            <div class="info-cards-col">
              
              <div class="info-card">
                <h4>Depot address</h4>
                <p>
                  <strong>Sahil Building Material</strong><br>
                  D-6/355, 4th Road, Pocket 6, Sector 6D,<br>
                  Rohini, Delhi 110085<br>
                  <span style="color: var(--accent-brick); font-weight: 500;">Near Vidya Jain Public School</span>
                </p>
                <a 
                  href="https://maps.google.com/?q=28.709491,77.110359" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style="display: inline-block; margin-top: 8px; color: var(--accent-brick); font-weight: 500; font-size: 14px;"
                >
                  Open in Google Maps
                </a>
              </div>

              <div class="info-card">
                <h4>Contact details</h4>
                <p>
                  Phone: <a href="tel:+919873161704" style="font-weight: 600; color: var(--text-primary);">+91 98731 61704</a><br>
                  WhatsApp: <a href="https://wa.me/919873161704" target="_blank" rel="noopener noreferrer" style="font-weight: 600; color: var(--color-whatsapp);">+91 98731 61704</a><br>
                  Email: sahilbuildingmaterial@gmail.com<br>
                  Hours: Monday to Sunday, 8:00 AM – 8:00 PM<br>
                  Payments: UPI, Cash, Cheque, RTGS / NEFT
                </p>
              </div>

              <div class="map-frame">
                <iframe 
                  title="Sahil Building Material Google Maps Location"
                  src="https://maps.google.com/maps?q=28.709491,77.110359&hl=en&z=16&output=embed"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </div>

            </div>

          </div>

        </div>
      </section>

      <!-- FAQ Section -->
      <section class="section section-cream">
        <div class="container" style="max-width: 800px;">
          <h2 class="section-title" style="margin-bottom: 24px;">Frequently asked questions</h2>
          
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div style="background: var(--bg-white); padding: 22px 24px; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
              <h3 style="font-size: 17px; margin-bottom: 6px;">How are daily cement and steel rates determined?</h3>
              <p style="font-size: 14px; margin: 0;">We update our wholesale prices each morning based on direct UltraTech, Ambuja, and Tata Tiscon depot dispatches to guarantee current market pricing.</p>
            </div>

            <div style="background: var(--bg-white); padding: 22px 24px; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
              <h3 style="font-size: 17px; margin-bottom: 6px;">What is the minimum delivery quantity?</h3>
              <p style="font-size: 14px; margin: 0;">We accommodate small renovation needs (30 cement bags or 1,000 bricks via tempo) up to 500-bag truckloads and commercial rebar trailers.</p>
            </div>

            <div style="background: var(--bg-white); padding: 22px 24px; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
              <h3 style="font-size: 17px; margin-bottom: 6px;">How do you guarantee accurate weighment?</h3>
              <p style="font-size: 14px; margin: 0;">All loose sand, rori, and steel shipments are dispatched with computerized weighbridge slips. You can also re-weigh on any nearby weighbridge in Rohini.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  `;
}
