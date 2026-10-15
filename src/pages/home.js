/**
 * Home Page (Clean light theme)
 */
export function renderHomePage() {
  return `
    <!-- HERO SECTION -->
    <section class="hero-section">
      <div class="container hero-grid">
        
        <!-- Left: Headline & Actions -->
        <div class="hero-text">
          <h1 class="hero-title">
            Quality building materials, delivered on time.
          </h1>
          <p class="hero-desc">
            Supplying Rohini and North-West Delhi with genuine cement, certified TMT steel, red bricks, sand, and aggregates since 2002. Prompt doorstep and site delivery.
          </p>
          <div class="hero-actions">
            <a 
              href="https://wa.me/919873161704?text=Hello%20Sahil%20Building%20Material,%20please%20send%20current%20rates%20for%20Cement%20and%20TMT%20steel" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn-whatsapp"
            >
              WhatsApp Quote
            </a>
            <a href="tel:+919873161704" class="btn btn-outline">
              Call Now
            </a>
          </div>
        </div>

        <!-- Right: Clean Framed Image -->
        <div class="hero-image-wrap">
          <img 
            src="/assets/images/owner.jpg" 
            alt="Mr. Yogesh Seth, Sahil Building Material Rohini Sector 6D" 
            loading="eager"
          />
        </div>

      </div>
    </section>

    <!-- 4 FACTS STRIP -->
    <section class="facts-strip">
      <div class="container facts-grid">
        <div class="fact-item">
          <div class="fact-number">22+ Years</div>
          <div class="fact-label">Serving Rohini since 2002</div>
        </div>
        <div class="fact-item">
          <div class="fact-number">50,000+</div>
          <div class="fact-label">Site deliveries completed</div>
        </div>
        <div class="fact-item">
          <div class="fact-number">4.1 ★</div>
          <div class="fact-label">19 verified customer reviews</div>
        </div>
        <div class="fact-item">
          <div class="fact-number">Open 7 Days</div>
          <div class="fact-label">8:00 AM to 8:00 PM</div>
        </div>
      </div>
    </section>

    <!-- MATERIALS SECTION -->
    <section class="section section-cream" id="materials">
      <div class="container">
        
        <div class="section-header">
          <h2 class="section-title">Essential building materials</h2>
          <p class="section-desc">
            Direct supply partnerships with authorized company depots. Factory-fresh stock, certified test slips, and computerized weighment.
          </p>
        </div>

        <!-- Filter Buttons -->
        <div class="filter-bar">
          <button class="filter-btn active" data-filter="all">All Materials</button>
          <button class="filter-btn" data-filter="cement">Cement</button>
          <button class="filter-btn" data-filter="steel">TMT Steel</button>
          <button class="filter-btn" data-filter="bricks">Bricks &amp; Blocks</button>
          <button class="filter-btn" data-filter="aggregates">Sand &amp; Aggregates</button>
          <button class="filter-btn" data-filter="finishing">Finishing &amp; Plumbing</button>
        </div>

        <!-- Materials Grid -->
        <div class="materials-grid">
          
          <!-- 1. Cement -->
          <div class="material-card" data-category="cement">
            <div class="material-card-top">
              <h3 class="material-name">Cement and concrete binders</h3>
              <p class="material-desc">Fresh 50kg bags of PPC and OPC 43/53 grade for RCC slabs, beams, and plastering.</p>
              <div class="material-brands">
                <span class="brand-pill">UltraTech</span>
                <span class="brand-pill">Ambuja</span>
                <span class="brand-pill">ACC</span>
                <span class="brand-pill">JK Lakshmi</span>
              </div>
            </div>
            <a 
              href="https://wa.me/919873161704?text=Hello%20Sahil%20Building%20Material,%20please%20quote%20today's%20rate%20for%20Cement" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn-outline" 
              style="width: 100%;"
            >
              Get rate on WhatsApp
            </a>
          </div>

          <!-- 2. Steel / TMT -->
          <div class="material-card" data-category="steel">
            <div class="material-card-top">
              <h3 class="material-name">TMT steel rebars</h3>
              <p class="material-desc">Earthquake-resistant Fe-500D and Fe-550D rebar rods in 8mm, 10mm, 12mm, 16mm, 20mm, 25mm.</p>
              <div class="material-brands">
                <span class="brand-pill">Tata Tiscon</span>
                <span class="brand-pill">Jindal Panther</span>
                <span class="brand-pill">Kamdhenu</span>
                <span class="brand-pill">SAIL</span>
              </div>
            </div>
            <a 
              href="https://wa.me/919873161704?text=Hello%20Sahil%20Building%20Material,%20please%20quote%20today's%20rate%20for%20TMT%20Steel" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn-outline" 
              style="width: 100%;"
            >
              Get rate on WhatsApp
            </a>
          </div>

          <!-- 3. Red Bricks & AAC Blocks -->
          <div class="material-card" data-category="bricks">
            <div class="material-card-top">
              <h3 class="material-name">Red bricks and AAC blocks</h3>
              <p class="material-desc">Class-1 kiln-fired red clay bricks with sharp edges, thermal AAC blocks, and fly-ash bricks.</p>
              <div class="material-brands">
                <span class="brand-pill">Class-1 Red Bricks</span>
                <span class="brand-pill">AAC Blocks (4", 6", 8")</span>
                <span class="brand-pill">Fly-Ash Bricks</span>
              </div>
            </div>
            <a 
              href="https://wa.me/919873161704?text=Hello%20Sahil%20Building%20Material,%20please%20quote%20for%20Red%20Bricks%20and%20AAC%20Blocks" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn-outline" 
              style="width: 100%;"
            >
              Get rate on WhatsApp
            </a>
          </div>

          <!-- 4. Sand & Aggregates -->
          <div class="material-card" data-category="aggregates">
            <div class="material-card-top">
              <h3 class="material-name">Yamuna sand and rori</h3>
              <p class="material-desc">Double-washed river sand, crusher stone dust (Badarpur), and 10mm/20mm blue metal rori.</p>
              <div class="material-brands">
                <span class="brand-pill">Yamuna River Sand</span>
                <span class="brand-pill">10mm / 20mm Rori</span>
                <span class="brand-pill">Stone Dust</span>
              </div>
            </div>
            <a 
              href="https://wa.me/919873161704?text=Hello%20Sahil%20Building%20Material,%20please%20quote%20for%20Yamuna%20Sand%20and%20Rori" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn-outline" 
              style="width: 100%;"
            >
              Get rate on WhatsApp
            </a>
          </div>

          <!-- 5. Finishing & Putty -->
          <div class="material-card" data-category="finishing">
            <div class="material-card-top">
              <h3 class="material-name">Wall putty and paints</h3>
              <p class="material-desc">White cement wall putty, primer coats, exterior emulsions, and waterproofing chemicals.</p>
              <div class="material-brands">
                <span class="brand-pill">Birla White Putty</span>
                <span class="brand-pill">JK WallMaxx</span>
                <span class="brand-pill">Asian Paints</span>
                <span class="brand-pill">Dr. Fixit</span>
              </div>
            </div>
            <a 
              href="https://wa.me/919873161704?text=Hello%20Sahil%20Building%20Material,%20please%20quote%20for%20Wall%20Putty%20and%20Paints" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn-outline" 
              style="width: 100%;"
            >
              Get rate on WhatsApp
            </a>
          </div>

          <!-- 6. Tiles, Plumbing & Hardware -->
          <div class="material-card" data-category="finishing">
            <div class="material-card-top">
              <h3 class="material-name">Tiles, plumbing and hardware</h3>
              <p class="material-desc">Glazed floor tiles, granite slabs, Astral CPVC pipes, Sintex tanks, and GI binding wire.</p>
              <div class="material-brands">
                <span class="brand-pill">Vitrified Tiles</span>
                <span class="brand-pill">Granite Slabs</span>
                <span class="brand-pill">Astral Pipes</span>
                <span class="brand-pill">Sintex</span>
              </div>
            </div>
            <a 
              href="https://wa.me/919873161704?text=Hello%20Sahil%20Building%20Material,%20please%20quote%20for%20Tiles,%20Plumbing%20and%20Hardware" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn-outline" 
              style="width: 100%;"
            >
              Get rate on WhatsApp
            </a>
          </div>

        </div>

      </div>
    </section>

    <!-- SERVICES SECTION (MALWA UTHANA & UNLOADING) -->
    <section class="section section-white" id="services">
      <div class="container">
        
        <div class="section-header">
          <h2 class="section-title">Malwa loading and unloading services</h2>
          <p class="section-desc">
            Complete construction site logistics in Rohini. Dedicated commercial tractors and tippers for debris loading &amp; clearance, and trained labour teams for safe unloading.
          </p>
        </div>

        <div class="services-grid">
          
          <!-- Card 1: Malwa Loading & Removal -->
          <div class="service-card">
            <div>
              <h3 class="service-title">Malwa loading &amp; debris removal (Malwa Uthana)</h3>
              <p class="service-desc">
                Fast clearance of demolition rubble, broken bricks, plaster, and excavated soil from residential and commercial sites across North-West Delhi with tractors and tippers.
              </p>
              <ul class="service-points">
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Mini tempos for narrow residential lanes to heavy tipper trucks.</span>
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Labour team handles loading quickly to clear road blockages.</span>
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Strict disposal at authorized municipal dumping grounds.</span>
                </li>
              </ul>
            </div>
            <a 
              href="https://wa.me/919873161704?text=Hello%20Sahil%20Building%20Material,%20I%20need%20Malwa%20Uthana%20(debris%20removal)%20service" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn-primary"
            >
              Book Malwa removal on WhatsApp
            </a>
          </div>

          <!-- Card 2: Malwa / Maal Unloading -->
          <div class="service-card">
            <div>
              <h3 class="service-title">Malwa and maal unloading</h3>
              <p class="service-desc">
                Trained labour team to unload heavy deliveries of cement, bricks, sand, and steel from trucks with zero breakage and orderly stacking.
              </p>
              <ul class="service-points">
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Careful manual handling to keep cement dry and bricks intact.</span>
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Floor lifting available to shift materials to 1st, 2nd, and 3rd floors.</span>
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span>Clear, transparent per-bag or per-thousand-brick rates.</span>
                </li>
              </ul>
            </div>
            <a 
              href="https://wa.me/919873161704?text=Hello%20Sahil%20Building%20Material,%20I%20need%20a%20trained%20labour%20team%20for%20truck%20unloading" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn-primary"
            >
              Book unloading team on WhatsApp
            </a>
          </div>

        </div>

      </div>
    </section>

    <!-- OWNER SECTION -->
    <section class="section section-cream" id="about">
      <div class="container">
        
        <div class="owner-card">
          <div class="owner-photo">
            <img 
              src="/assets/images/owner.jpg" 
              alt="Mr. Yogesh Seth - Founder & Proprietor" 
              loading="lazy"
            />
          </div>
          <div class="owner-details">
            <div>
              <h2 class="owner-name">Mr. Yogesh Seth</h2>
              <div class="owner-role">Founder and Proprietor &bull; Established 2002</div>
            </div>
            <blockquote class="owner-quote">
              &ldquo;When a family builds a home in Rohini, they are putting their life savings into a foundation. For over 22 years, our family has stood behind every truck that leaves our yard. We guarantee honest weight, original brands, and a handshake you can trust.&rdquo;
            </blockquote>
            <p class="owner-bio">
              With deep roots in Rohini Sector 6D near Vidya Jain Public School, Mr. Yogesh Seth personally advises contractors, builders, and individual home builders on mix ratios, OPC vs PPC grades, and steel optimization.
            </p>
            <div style="display: flex; gap: 12px; flex-wrap: wrap;">
              <a href="tel:+919873161704" class="btn btn-primary">Call owner directly</a>
              <a 
                href="https://wa.me/919873161704?text=Hello%20Mr.%20Yogesh%20Seth,%20I%20would%20like%20to%20discuss%20a%20material%20order" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn btn-outline"
              >
                WhatsApp owner
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- REVIEWS SECTION (INFINITE LIVE RUNNING MARQUEE) -->
    <section class="section section-white reviews-section-wrap">
      <div class="container">
        
        <div class="section-header" style="text-align: center; margin-bottom: 32px;">
          <div style="font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent-brick); margin-bottom: 8px;">
            Live Verified Google Reviews &bull; 4.1 / 5.0 Rating
          </div>
          <h2 class="section-title">What our customers say in Rohini</h2>
          <p class="section-desc" style="margin: 0 auto;">
            Trusted by over 50,000 site deliveries across North-West Delhi since 2002.
          </p>
        </div>

      </div>

      <!-- Live Running Marquee Track -->
      <div class="reviews-marquee-container">
        <div class="reviews-marquee-track">
          
          <!-- Review 1 -->
          <div class="review-card">
            <div>
              <div class="review-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p class="review-quote">
                &ldquo;Very reliable building material supplier in Rohini Sector 6. Delivered cement and TMT bars right on time to our construction site without any delay. Highly recommended for hassle-free supplies.&rdquo;
              </p>
            </div>
            <div>
              <div class="reviewer-name">Lakshay</div>
              <div class="reviewer-sub">Construction client &bull; Rohini</div>
            </div>
          </div>

          <!-- Review 2 -->
          <div class="review-card">
            <div>
              <div class="review-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p class="review-quote">
                &ldquo;Fair pricing and genuine brands (UltraTech, Tata Tiscon). Best supplier around Sector 6 and Pocket 6. Yogesh ji was very cooperative and assisted with the exact quantity needed for our slab casting.&rdquo;
              </p>
            </div>
            <div>
              <div class="reviewer-name">Aditya Bhatia</div>
              <div class="reviewer-sub">Local resident &bull; Sector 6D</div>
            </div>
          </div>

          <!-- Review 3 -->
          <div class="review-card">
            <div>
              <div class="review-stars">&#9733;&#9733;&#9733;&#9733;&#9734;</div>
              <p class="review-quote">
                &ldquo;Good quality red bricks and Yamuna sand delivered with accurate weight. No broken bricks in the shipment, which saved a lot of material waste. Recommended for home renovation.&rdquo;
              </p>
            </div>
            <div>
              <div class="reviewer-name">Yug Chhabra</div>
              <div class="reviewer-sub">Home renovation &bull; Rohini</div>
            </div>
          </div>

          <!-- Review 4 -->
          <div class="review-card">
            <div>
              <div class="review-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p class="review-quote">
                &ldquo;Took their Malwa Uthana and site clearing service for a 3-storey building. 2 tractor tippers sent on the same morning, quick loading labours. Road blockage cleared within 2 hours.&rdquo;
              </p>
            </div>
            <div>
              <div class="reviewer-name">Rajesh Verma</div>
              <div class="reviewer-sub">Contractor &bull; North-West Delhi</div>
            </div>
          </div>

          <!-- Review 5 -->
          <div class="review-card">
            <div>
              <div class="review-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p class="review-quote">
                &ldquo;Direct company depot cement and computerized weighment slips provided. Mr. Yogesh Seth is very honest with rates and commitments. Best shop in Rohini.&rdquo;
              </p>
            </div>
            <div>
              <div class="reviewer-name">Sunil Kumar</div>
              <div class="reviewer-sub">Builder &bull; Sector 7, Rohini</div>
            </div>
          </div>

          <!-- DUPLICATE SET FOR SEAMLESS 100% INFINITE CONTINUOUS LOOP -->
          <!-- Review 1 (Clone) -->
          <div class="review-card" aria-hidden="true">
            <div>
              <div class="review-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p class="review-quote">
                &ldquo;Very reliable building material supplier in Rohini Sector 6. Delivered cement and TMT bars right on time to our construction site without any delay. Highly recommended for hassle-free supplies.&rdquo;
              </p>
            </div>
            <div>
              <div class="reviewer-name">Lakshay</div>
              <div class="reviewer-sub">Construction client &bull; Rohini</div>
            </div>
          </div>

          <!-- Review 2 (Clone) -->
          <div class="review-card" aria-hidden="true">
            <div>
              <div class="review-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p class="review-quote">
                &ldquo;Fair pricing and genuine brands (UltraTech, Tata Tiscon). Best supplier around Sector 6 and Pocket 6. Yogesh ji was very cooperative and assisted with the exact quantity needed for our slab casting.&rdquo;
              </p>
            </div>
            <div>
              <div class="reviewer-name">Aditya Bhatia</div>
              <div class="reviewer-sub">Local resident &bull; Sector 6D</div>
            </div>
          </div>

          <!-- Review 3 (Clone) -->
          <div class="review-card" aria-hidden="true">
            <div>
              <div class="review-stars">&#9733;&#9733;&#9733;&#9733;&#9734;</div>
              <p class="review-quote">
                &ldquo;Good quality red bricks and Yamuna sand delivered with accurate weight. No broken bricks in the shipment, which saved a lot of material waste. Recommended for home renovation.&rdquo;
              </p>
            </div>
            <div>
              <div class="reviewer-name">Yug Chhabra</div>
              <div class="reviewer-sub">Home renovation &bull; Rohini</div>
            </div>
          </div>

          <!-- Review 4 (Clone) -->
          <div class="review-card" aria-hidden="true">
            <div>
              <div class="review-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p class="review-quote">
                &ldquo;Took their Malwa Uthana and site clearing service for a 3-storey building. 2 tractor tippers sent on the same morning, quick loading labours. Road blockage cleared within 2 hours.&rdquo;
              </p>
            </div>
            <div>
              <div class="reviewer-name">Rajesh Verma</div>
              <div class="reviewer-sub">Contractor &bull; North-West Delhi</div>
            </div>
          </div>

          <!-- Review 5 (Clone) -->
          <div class="review-card" aria-hidden="true">
            <div>
              <div class="review-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p class="review-quote">
                &ldquo;Direct company depot cement and computerized weighment slips provided. Mr. Yogesh Seth is very honest with rates and commitments. Best shop in Rohini.&rdquo;
              </p>
            </div>
            <div>
              <div class="reviewer-name">Sunil Kumar</div>
              <div class="reviewer-sub">Builder &bull; Sector 7, Rohini</div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- CONTACT & QUOTE SECTION -->
    <section class="section section-cream" id="contact">
      <div class="container">
        
        <div class="section-header">
          <h2 class="section-title">Visit our yard or request a quote</h2>
          <p class="section-desc">
            Conveniently located on 4th Road, Pocket 6 in Rohini Sector 6D. Open 7 days a week from 8:00 AM to 8:00 PM.
          </p>
        </div>

        <div class="contact-grid">
          
          <!-- Form: Instant WhatsApp Quote -->
          <div class="form-box">
            <h3 style="margin-bottom: 8px;">Request a material quote</h3>
            <p style="font-size: 14px; margin-bottom: 24px;">Fill in your details to open an itemized quote request directly in WhatsApp.</p>

            <form id="quote-form">
              <div class="form-group">
                <label for="form-name">Your name</label>
                <input type="text" id="form-name" class="form-input" placeholder="Rajesh Kumar" required />
              </div>

              <div class="form-group">
                <label for="form-phone">Mobile number</label>
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
                  <option value="Malwa Uthana (debris removal)">Malwa Uthana (debris removal)</option>
                  <option value="Truck Unloading Labour">Truck Unloading Labour</option>
                  <option value="Complete Construction Package">Complete Construction Package</option>
                </select>
              </div>

              <div class="form-group">
                <label for="form-quantity">Estimated quantity</label>
                <input type="text" id="form-quantity" class="form-input" placeholder="e.g. 100 bags / 2 tons / 5000 bricks" />
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

          <!-- Info & Map -->
          <div class="info-cards-col">
            
            <div class="info-card">
              <h4>Depot address</h4>
              <p>
                <strong>Sahil Building Material</strong><br>
                D-6/355, 4th Road, Pocket 6, Sector 6D,<br>
                Rohini, Delhi 110085<br>
                <span style="color: var(--accent-brick);">Near Vidya Jain Public School</span>
              </p>
            </div>

            <div class="info-card">
              <h4>Contact and hours</h4>
              <p>
                Phone: <strong>+91 98731 61704</strong><br>
                WhatsApp: <strong>+91 98731 61704</strong><br>
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
  `;
}
