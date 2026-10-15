/**
 * About Us Page (Clean light theme)
 */
export function renderAboutPage() {
  return `
    <div class="page-about">
      
      <section class="section section-white">
        <div class="container">
          
          <div class="section-header">
            <h1 class="section-title">Serving Rohini since 2002</h1>
            <p class="section-desc">
              Sahil Building Material was founded with a clear principle: provide builders, contractors, and homeowners in Rohini with direct access to genuine, factory-fresh construction materials at honest wholesale prices.
            </p>
          </div>

          <!-- Owner Card -->
          <div class="owner-card" style="margin-bottom: 64px;">
            <div class="owner-photo">
              <img 
                src="/assets/images/owner.jpg" 
                alt="Mr. Yogesh Seth, Founder and Proprietor" 
                loading="lazy"
              />
            </div>
            <div class="owner-details">
              <div>
                <h2 class="owner-name">Mr. Yogesh Seth</h2>
                <div class="owner-role">Founder and Proprietor</div>
              </div>
              <blockquote class="owner-quote">
                &ldquo;When a family builds a home in Rohini, they are not just buying bricks and cement; they are putting their life savings into a foundation. For over 22 years, our family has stood behind every truck that leaves our yard. We guarantee honest weight, original brands, and a handshake you can trust.&rdquo;
              </blockquote>
              <p class="owner-bio">
                Located near Vidya Jain Public School in Pocket 6, Sector 6D, Mr. Yogesh Seth personally guides contractors, civil engineers, and first-time homebuilders on grade selections (PPC vs OPC), mix ratios, and steel bar optimization.
              </p>
              <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                <a href="tel:+919873161704" class="btn btn-primary">Call Mr. Yogesh Seth</a>
                <a 
                  href="https://wa.me/919873161704?text=Hello%20Mr.%20Yogesh%20Seth,%20I%20would%20like%20to%20discuss%20a%20construction%20material%20order" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn btn-outline"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <!-- 4 Pillars of Trust -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px;">
            
            <div style="background: var(--bg-cream); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 28px;">
              <h3 style="font-size: 18px; margin-bottom: 8px;">100% Genuine Brands</h3>
              <p style="font-size: 14px; margin: 0;">Authorized alliances with UltraTech, Ambuja, ACC, and Tata Tiscon. Direct company dispatches, zero counterfeit stock.</p>
            </div>

            <div style="background: var(--bg-cream); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 28px;">
              <h3 style="font-size: 18px; margin-bottom: 8px;">Accurate Weighment</h3>
              <p style="font-size: 14px; margin: 0;">Computerized weighbridge receipts for sand and aggregates, and physically verified brick counts on every dispatch.</p>
            </div>

            <div style="background: var(--bg-cream); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 28px;">
              <h3 style="font-size: 18px; margin-bottom: 8px;">Direct Bulk Pricing</h3>
              <p style="font-size: 14px; margin: 0;">Zero middleman commission. Direct wholesale rates whether you purchase 50 bags for a renovation or 5,000 bags for a commercial project.</p>
            </div>

            <div style="background: var(--bg-cream); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 28px;">
              <h3 style="font-size: 18px; margin-bottom: 8px;">Prompt Site Delivery</h3>
              <p style="font-size: 14px; margin: 0;">Dedicated fleet of commercial tippers and delivery tempos serving Rohini, Pitampura, and Outer Delhi 7 days a week.</p>
            </div>

          </div>

        </div>
      </section>

      <!-- Depot Details Banner -->
      <section class="section section-cream">
        <div class="container" style="max-width: 800px;">
          <h2 class="section-title" style="margin-bottom: 16px;">Rohini Sector 6D depot</h2>
          <p class="section-desc" style="margin-bottom: 24px;">
            Our yard on 4th Road, Pocket 6 (near Vidya Jain Public School) houses covered cement warehouses, dedicated rebar storage bays, and segregated aggregate stockpiles ready for immediate dispatch.
          </p>
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <a href="/contact" class="btn btn-primary nav-link-route" data-path="/contact">Get Directions &amp; Contact</a>
          </div>
        </div>
      </section>

    </div>
  `;
}
