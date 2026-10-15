/**
 * Materials Page Template (Scroll-driven 3D Stage)
 */
export function renderMaterialsPage() {
  return `
    <div class="page-container page-materials">
      
      <!-- HEADER INTRO -->
      <section style="padding: 60px 0 20px; background-color: var(--color-black); color: var(--text-light-primary);">
        <div class="container" style="max-width: 900px; text-align: center;">
          <span class="section-kicker on-dark">Structural &bull; Masonry &bull; Finishing</span>
          <h1 style="font-size: clamp(38px, 6vw, 72px); text-transform: uppercase; margin-bottom: 16px;">
            Certified <span style="color: var(--color-brick-light);">Materials</span> Catalog
          </h1>
          <p style="color: var(--text-light-secondary); font-size: 18px; margin: 0 auto;">
            Scroll to inspect each material on the 3D stage. Every item is backed by genuine manufacturer test certificates and accurate weighment. Click any card to request live rates via WhatsApp.
          </p>
        </div>
      </section>

      <!-- SCROLL-DRIVEN 3D MATERIALS TRACK -->
      <div class="materials-scroll-wrapper">
        <div class="container materials-content-track">
          
          <!-- Section 1: Fresh Cement -->
          <div class="material-snap-section" id="mat-cement">
            <div class="material-spec-card">
              <span class="material-tag">Grade &bull; IS 1489 / IS 269</span>
              <h2 class="material-name">Fresh Factory Cement</h2>
              <p class="material-summary">
                Guaranteed fresh batches direct from company manufacturing depots. Sealed 50kg moisture-resistant bags for RCC slab casting, beam casting, foundation footings, and external masonry plastering.
              </p>

              <table class="spec-table">
                <tbody>
                  <tr>
                    <td>Grades</td>
                    <td>PPC (Pozzolana), OPC 43 &amp; OPC 53 Grade, Weatherproof</td>
                  </tr>
                  <tr>
                    <td>Packaging</td>
                    <td>50 kg Tamper-proof Bags (Full Truck / Tempo)</td>
                  </tr>
                  <tr>
                    <td>Applications</td>
                    <td>Slab Casting, Pillars, Brickwork, Plaster, Waterproofing</td>
                  </tr>
                  <tr>
                    <td>Dispatch</td>
                    <td>Same-Day Delivery in Rohini &amp; North-West Delhi</td>
                  </tr>
                </tbody>
              </table>

              <div class="brand-chips">
                <span class="brand-chip" style="border-color: var(--color-yellow); color: var(--color-yellow);">UltraTech</span>
                <span class="brand-chip">Ambuja Cement</span>
                <span class="brand-chip">ACC Cement</span>
                <span class="brand-chip">JK Lakshmi</span>
              </div>

              <a 
                href="https://wa.me/919873161704?text=Hello%20Sahil%20Building%20Material,%20please%20send%20today's%20rate%20for%20Cement%20bags" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn btn-whatsapp" 
                style="width: 100%;"
              >
                Inquire Cement Rate on WhatsApp
              </a>
            </div>
          </div>

          <!-- Section 2: TMT Steel Rebars -->
          <div class="material-snap-section" id="mat-steel">
            <div class="material-spec-card">
              <span class="material-tag">High Tensile &bull; Fe-500D / Fe-550D</span>
              <h2 class="material-name">TMT Steel Rebars</h2>
              <p class="material-summary">
                Primary and secondary high-ductility earthquake-resistant TMT rebar rods with pronounced transverse ribs for superior concrete grip. Supplied in straight 12-meter factory lengths or cut bundles.
              </p>

              <table class="spec-table">
                <tbody>
                  <tr>
                    <td>Diameters</td>
                    <td>8mm, 10mm, 12mm, 16mm, 20mm, 25mm, 32mm</td>
                  </tr>
                  <tr>
                    <td>Certifications</td>
                    <td>BIS / ISI Certified, Manufacturer Mill Test Slip</td>
                  </tr>
                  <tr>
                    <td>Corrosion</td>
                    <td>Thermo-Mechanically Treated with Weather Coating</td>
                  </tr>
                  <tr>
                    <td>Weighment</td>
                    <td>Computerized Weighbridge Slip Provided</td>
                  </tr>
                </tbody>
              </table>

              <div class="brand-chips">
                <span class="brand-chip" style="border-color: var(--color-yellow); color: var(--color-yellow);">Tata Tiscon</span>
                <span class="brand-chip">Jindal Panther</span>
                <span class="brand-chip">Kamdhenu</span>
                <span class="brand-chip">SAIL</span>
              </div>

              <a 
                href="https://wa.me/919873161704?text=Hello%20Sahil%20Building%20Material,%20please%20send%20today's%20rate%20for%20TMT%20Steel%20Bars%20(Tons)" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn btn-whatsapp" 
                style="width: 100%;"
              >
                Inquire Steel Rate on WhatsApp
              </a>
            </div>
          </div>

          <!-- Section 3: Bricks & AAC Blocks -->
          <div class="material-snap-section" id="mat-bricks">
            <div class="material-spec-card">
              <span class="material-tag">Masonry &bull; Kiln Fired &amp; Autoclaved</span>
              <h2 class="material-name">Red Bricks &amp; AAC Blocks</h2>
              <p class="material-summary">
                Dense Class-1 red kiln bricks made from pure alluvial clay with sharp edges and minimal breakage. Plus lightweight autoclaved aerated concrete (AAC) blocks and fly-ash bricks for faster construction and thermal insulation.
              </p>

              <table class="spec-table">
                <tbody>
                  <tr>
                    <td>Red Bricks</td>
                    <td>Class-1 Kiln Fired, High Compressive Strength</td>
                  </tr>
                  <tr>
                    <td>AAC Blocks</td>
                    <td>4-inch, 6-inch, 8-inch Thickness</td>
                  </tr>
                  <tr>
                    <td>Eco Friendly</td>
                    <td>Fly-Ash Bricks for Partition &amp; Compound Walls</td>
                  </tr>
                  <tr>
                    <td>Handling</td>
                    <td>Careful Loading to Guarantee Zero Shattered Bricks</td>
                  </tr>
                </tbody>
              </table>

              <div class="brand-chips">
                <span class="brand-chip">A-Class Red Bricks</span>
                <span class="brand-chip">AAC Blocks</span>
                <span class="brand-chip">Fly-Ash Bricks</span>
              </div>

              <a 
                href="https://wa.me/919873161704?text=Hello%20Sahil%20Building%20Material,%20please%20quote%20for%20Red%20Bricks%20and%20AAC%20Blocks" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn btn-whatsapp" 
                style="width: 100%;"
              >
                Inquire Brick Rates on WhatsApp
              </a>
            </div>
          </div>

          <!-- Section 4: Yamuna Sand & Rori -->
          <div class="material-snap-section" id="mat-sand">
            <div class="material-spec-card">
              <span class="material-tag">Aggregates &bull; Washed &amp; Graded</span>
              <h2 class="material-name">Yamuna Sand &amp; Rori Grit</h2>
              <p class="material-summary">
                Double-washed Yamuna river sand free from silt and clay impurities for strong plastering and concrete bonding. Crushed stone dust (Badarpur) and graded blue metal rori/aggregates (10mm &amp; 20mm).
              </p>

              <table class="spec-table">
                <tbody>
                  <tr>
                    <td>River Sand</td>
                    <td>Double-Washed Yamuna Sand (Fine / Coarse)</td>
                  </tr>
                  <tr>
                    <td>Aggregates</td>
                    <td>10mm, 20mm Blue Metal Crushed Stone Rori</td>
                  </tr>
                  <tr>
                    <td>Stone Dust</td>
                    <td>High-Density Badarpur Stone Dust for Masonry</td>
                  </tr>
                  <tr>
                    <td>Quantities</td>
                    <td>Dumpers, Full Trucks, or Mini Delivery Tempos</td>
                  </tr>
                </tbody>
              </table>

              <div class="brand-chips">
                <span class="brand-chip">Yamuna River Sand</span>
                <span class="brand-chip">10mm / 20mm Rori</span>
                <span class="brand-chip">Stone Dust (Badarpur)</span>
              </div>

              <a 
                href="https://wa.me/919873161704?text=Hello%20Sahil%20Building%20Material,%20please%20quote%20for%20Yamuna%20Sand%20and%20Rori%20(Truck/Tempo)" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn btn-whatsapp" 
                style="width: 100%;"
              >
                Inquire Sand / Rori on WhatsApp
              </a>
            </div>
          </div>

          <!-- Section 5: Finishing & Plumbing -->
          <div class="material-snap-section" id="mat-finishing">
            <div class="material-spec-card">
              <span class="material-tag">Finishing &bull; Chemicals &bull; Plumbing</span>
              <h2 class="material-name">Putty, Tiles, Pipes &amp; Hardware</h2>
              <p class="material-summary">
                Complete interior and exterior finishing supplies. Premium white cement wall putty, acrylic paints, vitrified flooring tiles, granite slabs, CPVC plumbing pipes, overhead water tanks, and binding wire.
              </p>

              <table class="spec-table">
                <tbody>
                  <tr>
                    <td>Wall Putty</td>
                    <td>Birla White Putty, JK WallMaxx, Primer, Emulsion</td>
                  </tr>
                  <tr>
                    <td>Flooring &amp; Stone</td>
                    <td>Vitrified Tiles, Kota Stone, Jet Black Granite Slabs</td>
                  </tr>
                  <tr>
                    <td>Plumbing &amp; Tanks</td>
                    <td>Astral CPVC Pipes, Supreme SWR, Sintex 500L/1000L</td>
                  </tr>
                  <tr>
                    <td>Hardware</td>
                    <td>Dr. Fixit LW+, GI Binding Wire, PVC Cover Blocks</td>
                  </tr>
                </tbody>
              </table>

              <div class="brand-chips">
                <span class="brand-chip">Birla White</span>
                <span class="brand-chip">Asian Paints</span>
                <span class="brand-chip">Astral Pipes</span>
                <span class="brand-chip">Sintex</span>
                <span class="brand-chip">Dr. Fixit</span>
              </div>

              <a 
                href="https://wa.me/919873161704?text=Hello%20Sahil%20Building%20Material,%20please%20quote%20for%20Finishing%20and%20Plumbing%20supplies" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn btn-whatsapp" 
                style="width: 100%;"
              >
                Inquire Finishing Materials on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>

      <!-- BOTTOM ORDER BANNER -->
      <section class="section-dark" style="border-top: 1px solid rgba(255,255,255,0.1); padding: 60px 0;">
        <div class="container" style="text-align: center; max-width: 750px;">
          <h3 style="font-size: 28px; margin-bottom: 16px;">Need a Mixed Material Project Package?</h3>
          <p style="color: var(--text-light-secondary); font-size: 16px; margin-bottom: 24px;">
            We prepare combined package estimates for complete house construction (from basement excavation to final paint coat).
          </p>
          <a href="/contact" class="btn btn-yellow nav-route" data-path="/contact">Open Instant Quote Calculator &rarr;</a>
        </div>
      </section>

    </div>
  `;
}
