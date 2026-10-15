/**
 * Floating WhatsApp Icon and Mobile Sticky Contact Bar
 */
export function renderWhatsAppWidgets() {
  return `
    <!-- Small Round Floating WhatsApp Button (Icon Only) -->
    <a 
      href="https://wa.me/919873161704?text=Hello%20Sahil%20Building%20Material,%20please%20send%20today's%20rates" 
      target="_blank" 
      rel="noopener noreferrer" 
      class="floating-whatsapp"
      title="Chat on WhatsApp"
      aria-label="Chat on WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.98-1.39A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.05c-1.628 0-3.14-.492-4.407-1.336l-.316-.21-2.962.827.842-2.887-.23-.338A8.04 8.04 0 0 1 3.95 12c0-4.439 3.611-8.05 8.05-8.05 4.439 0 8.05 3.611 8.05 8.05 0 4.439-3.611 8.05-8.05 8.05z"/>
        <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.676.15-.2.301-.776.978-.952 1.179-.175.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.676-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.233-.244-.587-.492-.507-.677-.516l-.577-.01c-.2 0-.526.075-.802.376s-1.053 1.028-1.053 2.508 1.078 2.909 1.229 3.11c.15.2 2.122 3.24 5.141 4.542.718.31 1.279.496 1.716.635.721.23 1.378.197 1.897.12.577-.087 1.78-.728 2.03-1.43.251-.702.251-1.304.176-1.43-.076-.125-.276-.201-.577-.351z"/>
      </svg>
    </a>

    <!-- Mobile Sticky Quick Contact Bottom Bar (Under 768px) -->
    <aside class="mobile-bottom-bar" aria-label="Quick Actions">
      <a href="tel:+919873161704" class="btn-mobile-action btn-outline">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        <span>Call</span>
      </a>

      <a 
        href="https://wa.me/919873161704?text=Hello%20Sahil%20Building%20Material,%20please%20send%20today's%20rates" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="btn-mobile-action btn-whatsapp"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.98-1.39A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
        </svg>
        <span>WhatsApp</span>
      </a>
    </aside>
  `;
}
