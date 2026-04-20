export default function ContactSection() {
  return (
    <section id="contact" className="sec">
      <div className="rv">
        <div className="sec-lbl">Get in Touch</div>
        <h2 className="ct-h">Let&apos;s Build Something<br />Permanent.</h2>
        <p className="sec-ar">تواصل معنا اليوم</p>
      </div>
      <div className="ct-grid">
        <div className="rv">
          <p className="ct-copy">
            For inquiries, partnerships, or to discuss your next project, reach out to the
            Al-Saad team. Every great building begins with a conversation.
          </p>
          <a href="tel:01204976870" className="btn-fill">Get in Touch →</a>
        </div>
        <div className="ct-info rv d2">
          <div className="ct-row">
            <svg className="ct-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.72 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
            </svg>
            <div className="ct-val"><a href="tel:01204976870">01204976870</a></div>
          </div>
          <div className="ct-row">
            <svg className="ct-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <div className="ct-val">
              <a href="mailto:info@alsaad-eg.com">info@alsaad-eg.com</a>
            </div>
          </div>
          <div className="ct-row">
            <svg className="ct-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            <div className="ct-val ct-val-ar">
              16 شارع البكباشي العيسوي، سيدي بشر بحري، الإسكندرية
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
