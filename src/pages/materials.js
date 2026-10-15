/**
 * Materials Page (Clean light theme)
 */
export function renderMaterialsPage() {
  return `
    <div class="page-materials">
      
      <section class="section section-white" style="padding-bottom: 40px;">
        <div class="container">
          <div class="section-header">
            <h1 class="section-title">Construction materials catalog</h1>
            <p class="section-desc">
              Direct depot wholesale rates on genuine cement, certified TMT steel rebars, Class-1 red bricks, washed Yamuna sand, aggregates, and finishing supplies.
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
            
            <!-- Cement -->
            <div class="material-card" data-category="cement">
              <div class="material-card-top">
                <h3 class="material-name">Cement and concrete binders</h3>
                <p class="material-desc">Fresh 50kg bags of PPC, OPC 43/53 grade, and weatherproof cement for RCC slab casting, beams, and plastering.</p>
                <div class="material-brands">
                  <span class="brand-pill">UltraTech</span>
                  <span class="brand-pill">Ambuja</span>
                  <span class="brand-pill">ACC</span>
                  <span class="brand-pill">JK Lakshmi</span>
                </div>
              </div>
              <a 
                href="https://wa.me/919873161704?text=Hello%20Sahil%20Building%20Material,%20please%20send%20today's%20rate%20for%20Cement" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn btn-outline" 
                style="width: 100%;"
              >
                Get rate on WhatsApp
              </a>
            </div>

            <!-- Steel -->
            <div class="material-card" data-category="steel">
              <div class="material-card-top">
                <h3 class="material-name">TMT steel rebars</h3>
                <p class="material-desc">High-tensile, earthquake-resistant Fe-500D and Fe-550D rebar rods in all standard diameters (8mm to 25mm).</p>
                <div class="material-brands">
                  <span class="brand-pill">Tata Tiscon</span>
                  <span class="brand-pill">Jindal Panther</span>
                  <span class="brand-pill">Kamdhenu</span>
                  <span class="brand-pill">SAIL</span>
                </div>
              </div>
              <a 
                href="https://wa.me/919873161704?text=Hello%20Sahil%20Building%20Material,%20please%20send%20today's%20rate%20for%20TMT%20Steel" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn btn-outline" 
                style="width: 100%;"
              >
                Get rate on WhatsApp
              </a>
            </div>

            <!-- Bricks -->
            <div class="material-card" data-category="bricks">
              <div class="material-card-top">
                <h3 class="material-name">Red bricks and AAC blocks</h3>
                <p class="material-desc">Class-1 high-density kiln-fired red clay bricks, lightweight thermal AAC blocks, and fly-ash partition bricks.</p>
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

            <!-- Sand -->
            <div class="material-card" data-category="aggregates">
              <div class="material-card-top">
                <h3 class="material-name">Yamuna sand and stone dust</h3>
                <p class="material-desc">Clean, double-washed Yamuna river sand for plastering and concrete, plus high-density crusher stone dust (Badarpur).</p>
                <div class="material-brands">
                  <span class="brand-pill">Yamuna River Sand</span>
                  <span class="brand-pill">Stone Dust</span>
                  <span class="brand-pill">Dumpers &amp; Tempos</span>
                </div>
              </div>
              <a 
                href="https://wa.me/919873161704?text=Hello%20Sahil%20Building%20Material,%20please%20quote%20for%20Yamuna%20Sand%20and%20Stone%20Dust" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn btn-outline" 
                style="width: 100%;"
              >
                Get rate on WhatsApp
              </a>
            </div>

            <!-- Rori Aggregates -->
            <div class="material-card" data-category="aggregates">
              <div class="material-card-top">
                <h3 class="material-name">Rori and coarse aggregates</h3>
                <p class="material-desc">10mm and 20mm graded blue metal crushed stone aggregates with computerized weighbridge slips.</p>
                <div class="material-brands">
                  <span class="brand-pill">10mm Rori</span>
                  <span class="brand-pill">20mm Rori</span>
                  <span class="brand-pill">Blue Metal</span>
                </div>
              </div>
              <a 
                href="https://wa.me/919873161704?text=Hello%20Sahil%20Building%20Material,%20please%20quote%20for%20Rori%20Aggregates" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn btn-outline" 
                style="width: 100%;"
              >
                Get rate on WhatsApp
              </a>
            </div>

            <!-- Finishing & Putty -->
            <div class="material-card" data-category="finishing">
              <div class="material-card-top">
                <h3 class="material-name">Wall putty and paints</h3>
                <p class="material-desc">White cement wall putty, primer, interior/exterior emulsions, and Dr. Fixit concrete waterproofing chemicals.</p>
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

            <!-- Tiles & Granite -->
            <div class="material-card" data-category="finishing">
              <div class="material-card-top">
                <h3 class="material-name">Tiles, stone and granite</h3>
                <p class="material-desc">Glazed vitrified floor tiles, durable Kota stone slabs, and black granite for kitchen counters and door frames.</p>
                <div class="material-brands">
                  <span class="brand-pill">Vitrified Floor Tiles</span>
                  <span class="brand-pill">Kota Stone</span>
                  <span class="brand-pill">Granite Slabs</span>
                </div>
              </div>
              <a 
                href="https://wa.me/919873161704?text=Hello%20Sahil%20Building%20Material,%20please%20quote%20for%20Tiles%20and%20Granite" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn btn-outline" 
                style="width: 100%;"
              >
                Get rate on WhatsApp
              </a>
            </div>

            <!-- Plumbing & Hardware -->
            <div class="material-card" data-category="finishing">
              <div class="material-card-top">
                <h3 class="material-name">Plumbing and hardware</h3>
                <p class="material-desc">Astral CPVC water pipes, SWR drainage pipes, Sintex water storage tanks, GI binding wire, and cover blocks.</p>
                <div class="material-brands">
                  <span class="brand-pill">Astral Pipes</span>
                  <span class="brand-pill">Supreme</span>
                  <span class="brand-pill">Sintex Tanks</span>
                  <span class="brand-pill">Binding Wire</span>
                </div>
              </div>
              <a 
                href="https://wa.me/919873161704?text=Hello%20Sahil%20Building%20Material,%20please%20quote%20for%20Plumbing%20and%20Hardware" 
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

      <!-- Bottom Help Banner -->
      <section class="section section-cream">
        <div class="container" style="text-align: center; max-width: 680px;">
          <h2 class="section-title">Need assistance calculating quantities?</h2>
          <p class="section-desc" style="margin: 0 auto 24px;">
            Speak directly with Mr. Yogesh Seth to calculate the exact cement bags, steel tonnage, and brick count required for your slab or floor.
          </p>
          <a href="tel:+919873161704" class="btn btn-primary">Call +91 98731 61704</a>
        </div>
      </section>

    </div>
  `;
}
