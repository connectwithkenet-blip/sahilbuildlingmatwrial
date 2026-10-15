/**
 * About Us Page Template
 */
export function renderAboutPage() {
  return `
    <div class="page-container page-about">
      
      <!-- HERO HEADER -->
      <section style="padding: 70px 0 40px; background-color: var(--color-black); color: var(--text-light-primary);">
        <div class="container" style="max-width: 900px; text-align: center;">
          <span class="section-kicker on-dark">Established 2002 &bull; 22+ Years in Rohini</span>
          <h1 style="font-size: clamp(38px, 6vw, 76px); text-transform: uppercase; margin-bottom: 20px;">
            The Foundation of <span style="color: var(--color-brick-light);">North-West Delhi</span>
          </h1>
          <p style="color: var(--text-light-secondary); font-size: clamp(16px, 1.3vw, 20px); margin: 0 auto; max-width: 68ch;">
            Two decades of building homes, commercial landmarks, and builder floors with honest weight, genuine manufacturer brands, and prompt site dispatch.
          </p>
        </div>
      </section>

      <!-- 3D FLY-OVER STAGE OVERLAY HINT -->
      <div class="container" style="position: relative; z-index: 10;">
        <div class="interactive-hint" style="position: relative; margin-bottom: 20px; width: fit-content; margin-left: auto;">
          <span class="hint-dot"></span>
          <span>Cinematic Fly-Over: Procedural Brick &amp; Concrete Building Shell</span>
        </div>
      </div>

      <!-- FOUNDER & PROPRIETOR SECTION -->
      <section class="section-paper">
        <div class="container">
          
          <div class="owner-feature-card">
            <div class="owner-image-pane">
              <img 
                src="/assets/images/owner.jpg" 
                alt="Mr. Yogesh Seth - Founder & Proprietor, Sahil Building Material" 
              />
            </div>
            <div class="owner-text-pane">
              <span class="owner-title-kicker">Leadership &amp; Founder</span>
              <h2 class="owner-name">Mr. Yogesh Seth</h2>
              <div class="owner-role">Founder &amp; Proprietor &bull; Sahil Building Material</div>
              
              <blockquote class="owner-pullquote">
                &ldquo;When a family builds a home in Rohini, they are not just buying bricks and cement; they are putting their life's savings into a foundation. For over 22 years, our family has stood behind every truck that leaves our yard. We guarantee honest weight, original brands, and a handshake you can trust.&rdquo;
              </blockquote>

              <p class="owner-bio-p">
                Starting the depot in 2002 near Vidya Jain Public School in Pocket 6, Sector 6D, Yogesh Seth observed that local homebuilders frequently suffered from counterfeit cement and short-loaded sand dumpers. He built Sahil Building Material on a pledge of transparent weighbridge slips, factory-fresh authorized bags, and personal consultation on mix design and steel optimization.
              </p>

              <div style="display: flex; gap: 14px; flex-wrap: wrap;">
                <a href="tel:+919873161704" class="btn btn-primary">Call Mr. Yogesh Seth</a>
                <a 
                  href="https://wa.me/919873161704?text=Hello%20Mr.%20Yogesh%20Seth,%20I%20would%20like%20to%20discuss%20a%20construction%20material%20order" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn btn-whatsapp"
                >
                  WhatsApp Consultation
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- 22+ YEARS TIMELINE SECTION -->
      <section class="section-dark">
        <div class="container" style="max-width: 900px;">
          
          <div class="section-header-block" style="text-align: center;">
            <span class="section-kicker on-dark">Milestones &bull; 2002 to Present</span>
            <h2 class="section-title">22+ Years of Unwavering Growth</h2>
            <p class="section-subtitle on-dark">
              From a single local depot in Pocket 6 to North-West Delhi's most trusted commercial stockist.
            </p>
          </div>

          <div class="timeline-track">
            
            <div class="timeline-step">
              <div class="timeline-year">2002 &bull; The Inception</div>
              <h3 style="font-size: 20px; color: var(--text-light-primary); margin-bottom: 8px;">Depot Established in Sector 6D Rohini</h3>
              <p style="color: var(--text-light-secondary); font-size: 15px;">
                Founded by Mr. Yogesh Seth on 4th Road, Pocket 6 near Vidya Jain Public School to provide local plots and contractors with verified first-grade red bricks and clean Yamuna river sand.
              </p>
            </div>

            <div class="timeline-step">
              <div class="timeline-year">2008 &bull; Authorized Alliances</div>
              <h3 style="font-size: 20px; color: var(--text-light-primary); margin-bottom: 8px;">Direct Factory Ties with UltraTech &amp; ACC</h3>
              <p style="color: var(--text-light-secondary); font-size: 15px;">
                Became an authorized stockist for UltraTech, Ambuja, and ACC cement. Established direct company depot deliveries to eliminate middleman markups and expired batches.
              </p>
            </div>

            <div class="timeline-step">
              <div class="timeline-year">2014 &bull; TMT Steel Expansion</div>
              <h3 style="font-size: 20px; color: var(--text-light-primary); margin-bottom: 8px;">Tata Tiscon &amp; Jindal Panther Rebar Depot</h3>
              <p style="color: var(--text-light-secondary); font-size: 15px;">
                Added high-tensile earthquake-resistant Fe-500D and Fe-550D rebar rods in all standard gauges. Installed digital weight verification to ensure zero underweight deliveries.
              </p>
            </div>

            <div class="timeline-step">
              <div class="timeline-year">2019 &bull; Commercial Fleet &amp; Labour</div>
              <h3 style="font-size: 20px; color: var(--text-light-primary); margin-bottom: 8px;">Dedicated Tippers &amp; Malwa Clearance Services</h3>
              <p style="color: var(--text-light-secondary); font-size: 15px;">
                Expanded our owned logistics fleet with commercial tippers and delivery tempos, launching professional site debris clearance (Malwa uthana) and trained manual unloading services.
              </p>
            </div>

            <div class="timeline-step">
              <div class="timeline-year">2026 &bull; The Award Standard</div>
              <h3 style="font-size: 20px; color: var(--text-light-primary); margin-bottom: 8px;">50,000+ Completed Site Drop-offs</h3>
              <p style="color: var(--text-light-secondary); font-size: 15px;">
                Today, Sahil Building Material continues to operate 7 days a week from 8:00 AM to 8:00 PM, holding an authentic 4.1/5 rating from 19 verified reviews across Delhi NCR.
              </p>
            </div>

          </div>

        </div>
      </section>

      <!-- PHYSICAL DEPOT & INFRASTRUCTURE -->
      <section class="section-paper">
        <div class="container">
          <div class="section-header-block">
            <span class="section-kicker">Depot Infrastructure</span>
            <h2 class="section-title">Our Rohini Supply Yard</h2>
            <p class="section-subtitle">
              Ready stock in bulk quantities for immediate crane, truck, or tempo loading.
            </p>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
            <div style="background: #FFF; padding: 28px; border-radius: var(--radius-lg); border: 1px solid rgba(28,27,25,0.08);">
              <h3 style="font-size: 20px; margin-bottom: 10px; color: var(--color-brick);">Cement Warehouse</h3>
              <p style="color: var(--text-dark-secondary); font-size: 14px; line-height: 1.6;">
                Covered, moisture-sealed pallet racks protecting thousands of fresh UltraTech, ACC, and Ambuja bags from humidity.
              </p>
            </div>

            <div style="background: #FFF; padding: 28px; border-radius: var(--radius-lg); border: 1px solid rgba(28,27,25,0.08);">
              <h3 style="font-size: 20px; margin-bottom: 10px; color: var(--color-brick);">Steel Rebar Bays</h3>
              <p style="color: var(--text-dark-secondary); font-size: 14px; line-height: 1.6;">
                Elevated and tarped steel bays housing Tata Tiscon, Jindal Panther, and Kamdhenu rebars in all diameters (8mm to 25mm).
              </p>
            </div>

            <div style="background: #FFF; padding: 28px; border-radius: var(--radius-lg); border: 1px solid rgba(28,27,25,0.08);">
              <h3 style="font-size: 20px; margin-bottom: 10px; color: var(--color-brick);">Aggregate &amp; Sand Bins</h3>
              <p style="color: var(--text-dark-secondary); font-size: 14px; line-height: 1.6;">
                Segregated stockpiles of washed Yamuna river sand, crushed stone dust (Badarpur), and 10mm/20mm blue metal rori.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  `;
}
