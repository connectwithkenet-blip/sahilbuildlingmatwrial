# Sahil Building Material — Award-Level 3D Web Experience

A high-performance, immersive 3D multi-page web application for **Sahil Building Material** (Established 2002, Rohini Sector 6D, Delhi), built using Three.js, GSAP ScrollTrigger, Lenis smooth scrolling, and Vite.

## 🚀 Key Features

- **Procedural 3D Objects**: Every 3D mesh (clay red bricks with color variation and stamp, UltraTech cement paper bags, ribbed Tata Tiscon TMT rebar bundles, sand piles, commercial tipper trucks, worker figures, and building shells) is generated procedurally with Three.js geometry and Canvas textures without requiring external model downloads.
- **5 Dynamic 3D Scenes**:
  1. **Scene 1 (Cinematic Intro)**: 72 individual red bricks in an `InstancedMesh` fall with staggered timing, bounce with `back.out` easing into a running-bond wall, with dust puff bursts, slow camera dolly/orbit, clipped typography reveal, and push-through transition (skippable and persisted via `sessionStorage`).
  2. **Scene 2 (Hero Home)**: Cohesive industrial composition (corner brick wall, stacked cement bags, ribbed TMT rebar with metallic sheen, and sand pile) with mouse parallax, touch drag rotate, and idle floating dust.
  3. **Scene 3 (Materials Stage)**: Pinned 3D stage with scroll-driven camera along a `CatmullRomCurve3` spline, transitioning between Cement, TMT Steel, Bricks/AAC, Sand/Rori, and Finishing supplies with live spec tables and direct WhatsApp inquiry buttons.
  4. **Scene 4 (Services: Malwa & Unloading)**: Dedicated presentation for **Malwa Uthana** (site debris clearance with low-poly tipper truck and worker figures) and **Maal Unloading** (trained labour team stacking supplies safely).
  5. **Scene 5 (About & Contact)**: Cinematic fly-over of a multi-story building shell for About, and calm floating brick particles for Contact.
- **Design System**: Concrete Black (`#1C1B19`), Brick Red (`#B23A24`), Safety Yellow (`#F5B800`), Warm Sand (`#EFE9DF`), Paper (`#FAF7F2`), and WhatsApp Green (`#1FAA59`).
- **Typography**: Display: *Bricolage Grotesque* (800), Body: *Figtree* (400, 500, 600).
- **Direct WhatsApp Integration**: Floating WhatsApp CTA, mobile sticky quick contact bar, prefilled product/service inquiry links, and an instant quote calculator that formats WhatsApp orders directly to Mr. Yogesh Seth (+91 98731 61704).
- **Performance & Fallbacks**: Hardware tier detection, capped pixel ratio (1.5x mobile, 2x desktop), soft PCF shadows, ACESFilmic tone mapping, selective bloom, and tab visibility render pause.

## 📁 Project Architecture

```
├── public/
│   ├── assets/images/owner.jpg  # Mr. Yogesh Seth photo
│   ├── favicon.svg              # 3D Isometric red brick favicon
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── footer.js            # Rich footer with facts & replay intro button
│   │   ├── navbar.js            # Responsive sticky header & mobile drawer
│   │   └── whatsapp-widget.js   # Floating button & mobile bottom bar
│   ├── lib/
│   │   ├── device-tier.js       # Hardware & mobile performance detector
│   │   ├── materials-procedural.js # Procedural textures & 3D mesh generators
│   │   └── three-setup.js       # WebGLRenderer, lights, postprocessing, RAF loop
│   ├── pages/
│   │   ├── about.js             # 22+ years timeline & founder quote
│   │   ├── contact.js           # Quote calculator, yard address & FAQ
│   │   ├── home.js              # Hero overlay, why choose us, reviews
│   │   ├── materials.js         # Scroll-driven 3D materials catalog
│   │   └── services.js          # Malwa uthana & truck unloading
│   ├── scenes/
│   │   ├── about-contact-scene.js # Building shell fly-over & floating bricks
│   │   ├── hero-scene.js        # Corner wall, cement bags, rebar & sand
│   │   ├── intro-scene.js       # 72 falling bricks & brand reveal
│   │   ├── materials-scene.js   # CatmullRomCurve3 camera spline & model swaps
│   │   └── services-scene.js    # Tipper truck, worker capsules, debris removal
│   ├── styles/
│   │   └── index.css            # Core design system & responsive CSS
│   ├── main.js                  # Lenis scroll, Three.js bootstrap, Intro logic
│   └── router.js                # SPA client-side router & GSAP transitions
├── index.html                   # SEO tags, JSON-LD schema, fonts & canvas
├── package.json
├── vercel.json                  # SPA routing rewrite rule
└── vite.config.js
```

## 🛠️ Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start Vite development server
npm run dev

# 3. Build for production (outputs to dist/)
npm run build
```

## 🌐 Business Information

- **Firm**: Sahil Building Material (Est. 2002)
- **Founder & Proprietor**: Mr. Yogesh Seth
- **Depot Address**: D-6/355, 4th Road, Pocket 6, Sector 6D, Rohini, Delhi 110085 (Near Vidya Jain Public School)
- **Coordinates**: 28.709491, 77.110359
- **Phone / WhatsApp**: +91 98731 61704
- **Email**: sahilbuildingmaterial@gmail.com
- **Operating Hours**: Monday – Sunday, 8:00 AM – 8:00 PM
