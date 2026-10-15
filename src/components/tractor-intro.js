/**
 * Animated Tractor & Split Shutter Intro
 * Features an authentic tractor with trolley puffing smoke, driving across
 * while the screen splits open from top and bottom to reveal the website.
 */
export function initTractorIntro(onComplete) {
  // Check if intro container already exists
  let introEl = document.getElementById('tractor-intro-overlay');
  if (introEl) introEl.remove();

  introEl = document.createElement('div');
  introEl.id = 'tractor-intro-overlay';
  introEl.innerHTML = `
    <!-- Top Curtain Panel -->
    <div class="shutter-panel shutter-top">
      <div class="shutter-brand">
        <span class="shutter-brand-title">Sahil Building Material</span>
        <span class="shutter-brand-sub">Rohini Sector 6D &bull; Est. 2002</span>
      </div>
    </div>

    <!-- Center Track for Tractor -->
    <div class="tractor-track">
      <!-- The Animated Tractor + Trolley -->
      <div class="tractor-rig">
        
        <!-- Smoke Puffs coming out of exhaust -->
        <div class="exhaust-pipe">
          <div class="smoke-puff smoke-1"></div>
          <div class="smoke-puff smoke-2"></div>
          <div class="smoke-puff smoke-3"></div>
          <div class="smoke-puff smoke-4"></div>
        </div>

        <!-- SVG Tractor and Trolley -->
        <svg class="tractor-svg" viewBox="0 0 520 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- TROLLEY (LEFT / BEHIND) -->
          <g id="trolley">
            <!-- Trolley Hitch -->
            <rect x="180" y="145" width="45" height="8" rx="3" fill="#4A453E"/>
            <circle cx="185" cy="149" r="6" fill="#1F1B16"/>
            
            <!-- Trolley Bed -->
            <rect x="20" y="85" width="165" height="65" rx="4" fill="#9E3F2A" stroke="#7A2D1B" stroke-width="3"/>
            <!-- Stiffener ribs on trolley -->
            <line x1="55" y1="85" x2="55" y2="150" stroke="#7A2D1B" stroke-width="3"/>
            <line x1="95" y1="85" x2="95" y2="150" stroke="#7A2D1B" stroke-width="3"/>
            <line x1="135" y1="85" x2="135" y2="150" stroke="#7A2D1B" stroke-width="3"/>

            <!-- Bricks / Malwa / Sand Loaded in Trolley -->
            <path d="M25 85 Q70 45 105 55 Q145 40 180 85 Z" fill="#D47338" stroke="#B05520" stroke-width="2"/>
            <!-- Individual stacked bricks texture -->
            <rect x="40" y="65" width="22" height="10" rx="1" fill="#B23A24"/>
            <rect x="66" y="62" width="22" height="10" rx="1" fill="#C84A32"/>
            <rect x="92" y="65" width="22" height="10" rx="1" fill="#9E321E"/>
            <rect x="118" y="60" width="22" height="10" rx="1" fill="#B23A24"/>
            <rect x="144" y="66" width="22" height="10" rx="1" fill="#C84A32"/>
            <rect x="55" y="75" width="22" height="10" rx="1" fill="#9E321E"/>
            <rect x="80" y="73" width="22" height="10" rx="1" fill="#B23A24"/>
            <rect x="105" y="75" width="22" height="10" rx="1" fill="#C84A32"/>
            <rect x="130" y="74" width="22" height="10" rx="1" fill="#9E321E"/>

            <!-- Trolley Wheels -->
            <g class="wheel wheel-trolley-1" transform-origin="60 160">
              <circle cx="60" cy="160" r="26" fill="#1F1B16" stroke="#3D3831" stroke-width="5"/>
              <circle cx="60" cy="160" r="14" fill="#F5B800"/>
              <circle cx="60" cy="160" r="5" fill="#1F1B16"/>
              <line x1="60" y1="136" x2="60" y2="184" stroke="#1F1B16" stroke-width="2"/>
              <line x1="36" y1="160" x2="84" y2="160" stroke="#1F1B16" stroke-width="2"/>
            </g>
            <g class="wheel wheel-trolley-2" transform-origin="140 160">
              <circle cx="140" cy="160" r="26" fill="#1F1B16" stroke="#3D3831" stroke-width="5"/>
              <circle cx="140" cy="160" r="14" fill="#F5B800"/>
              <circle cx="140" cy="160" r="5" fill="#1F1B16"/>
              <line x1="140" y1="136" x2="140" y2="184" stroke="#1F1B16" stroke-width="2"/>
              <line x1="116" y1="160" x2="164" y2="160" stroke="#1F1B16" stroke-width="2"/>
            </g>
          </g>

          <!-- TRACTOR (RIGHT / FRONT) -->
          <g id="tractor">
            <!-- Tractor Mudguard (Big Curved Fender) -->
            <path d="M230 148 C230 95 320 95 320 148 Z" fill="#2E6930" stroke="#1E4720" stroke-width="3"/>

            <!-- Driver Seat & Steering -->
            <rect x="260" y="90" width="24" height="28" rx="3" fill="#1F1B16"/>
            <!-- Steering Wheel & Column -->
            <line x1="312" y1="108" x2="330" y2="124" stroke="#1F1B16" stroke-width="4"/>
            <ellipse cx="310" cy="106" rx="8" ry="14" fill="none" stroke="#1F1B16" stroke-width="3"/>

            <!-- Driver Silhouette with Yellow Helmet -->
            <circle cx="272" cy="74" r="10" fill="#965A38"/>
            <path d="M260 72 C260 62 284 62 284 72 Z" fill="#F5B800"/> <!-- Safety Helmet -->
            <path d="M262 84 C262 76 282 76 282 84 L282 108 L262 108 Z" fill="#FFFFFF"/> <!-- White Shirt -->

            <!-- Tractor Hood / Engine Body -->
            <path d="M310 115 L430 115 Q445 115 445 130 L445 160 L310 160 Z" fill="#3B823E" stroke="#1E4720" stroke-width="3"/>
            <!-- Front Grille & Headlight -->
            <rect x="432" y="122" width="10" height="26" rx="2" fill="#1F1B16"/>
            <line x1="434" y1="126" x2="440" y2="126" stroke="#F5B800" stroke-width="2"/>
            <line x1="434" y1="132" x2="440" y2="132" stroke="#F5B800" stroke-width="2"/>
            <line x1="434" y1="138" x2="440" y2="138" stroke="#F5B800" stroke-width="2"/>
            <line x1="434" y1="144" x2="440" y2="144" stroke="#F5B800" stroke-width="2"/>

            <!-- Yellow Headlight Beam -->
            <polygon points="445,128 520,105 520,165 445,142" fill="url(#headlightGrad)" opacity="0.6"/>

            <!-- Vertical Exhaust Silencer Pipe -->
            <rect x="400" y="55" width="8" height="60" rx="3" fill="#1F1B16"/>
            <!-- Curved tip of exhaust pipe -->
            <path d="M400 58 Q400 48 392 48" stroke="#1F1B16" stroke-width="7" stroke-linecap="round"/>

            <!-- Big Rear Tractor Wheel (Large Ribbed Tire) -->
            <g class="wheel wheel-rear" transform-origin="275 152">
              <circle cx="275" cy="152" r="42" fill="#1F1B16" stroke="#3D3831" stroke-width="7"/>
              <circle cx="275" cy="152" r="24" fill="#F5B800"/>
              <circle cx="275" cy="152" r="8" fill="#1F1B16"/>
              <!-- Tractor Tire Tread Marks -->
              <line x1="275" y1="112" x2="275" y2="192" stroke="#1F1B16" stroke-width="4"/>
              <line x1="235" y1="152" x2="315" y2="152" stroke="#1F1B16" stroke-width="4"/>
              <line x1="247" y1="124" x2="303" y2="180" stroke="#1F1B16" stroke-width="4"/>
              <line x1="247" y1="180" x2="303" y2="124" stroke="#1F1B16" stroke-width="4"/>
            </g>

            <!-- Front Smaller Tractor Wheel -->
            <g class="wheel wheel-front" transform-origin="415 165">
              <circle cx="415" cy="165" r="25" fill="#1F1B16" stroke="#3D3831" stroke-width="5"/>
              <circle cx="415" cy="165" r="14" fill="#F5B800"/>
              <circle cx="415" cy="165" r="5" fill="#1F1B16"/>
              <line x1="415" y1="142" x2="415" y2="188" stroke="#1F1B16" stroke-width="3"/>
              <line x1="392" y1="165" x2="438" y2="165" stroke="#1F1B16" stroke-width="3"/>
            </g>

            <!-- "SAHIL" Brand Stamp on Tractor Hood -->
            <text x="345" y="138" font-family="'Inter', sans-serif" font-weight="800" font-size="14" fill="#FFFFFF" letter-spacing="1">SAHIL</text>
          </g>

          <defs>
            <linearGradient id="headlightGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="#FFF0A0" stop-opacity="0.8"/>
              <stop offset="100%" stop-color="#FFF0A0" stop-opacity="0"/>
            </linearGradient>
          </defs>
        </svg>

      </div>
    </div>

    <!-- Bottom Curtain Panel -->
    <div class="shutter-panel shutter-bottom">
      <div class="shutter-tagline">
        Building Materials &bull; Malwa Uthana &bull; Site Unloading
      </div>
      <div class="shutter-controls">
        <button id="skip-tractor-btn" class="shutter-skip-btn">Skip Intro &rarr;</button>
      </div>
    </div>
  `;

  document.body.appendChild(introEl);

  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    introEl.classList.add('shutter-open');
    setTimeout(() => {
      introEl.remove();
      if (typeof onComplete === 'function') onComplete();
    }, 900);
  };

  // Skip button click
  const skipBtn = document.getElementById('skip-tractor-btn');
  if (skipBtn) {
    skipBtn.onclick = finish;
  }

  // Listen directly to tractor driving animation
  const tractorRig = introEl.querySelector('.tractor-rig');
  if (tractorRig) {
    tractorRig.addEventListener('animationend', finish);
  }

  // Smoothly open shutters right as the tractor crosses the right edge (2.8 seconds)
  // Zero dead time or waiting!
  setTimeout(() => {
    finish();
  }, 2800);
}
