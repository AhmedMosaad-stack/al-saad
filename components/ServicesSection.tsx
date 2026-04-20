export default function ServicesSection() {
  return (
    <section id="services" className="sec">
      <div className="rv">
        <div className="sec-lbl">Our Expertise</div>
        <h2 className="sec-h2">Built on Every Front</h2>
      </div>
      <div className="sgrid">
        <div className="scard rv">
          <svg className="s-ico" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <rect x="8" y="32" width="32" height="12" /><rect x="13" y="20" width="8" height="12" />
            <rect x="27" y="14" width="8" height="18" /><line x1="3" y1="44" x2="45" y2="44" />
            <line x1="24" y1="4" x2="24" y2="14" /><line x1="17" y1="8" x2="31" y2="8" />
          </svg>
          <h3 className="s-title">Structural Construction</h3>
          <p className="s-desc">From foundation to final floor — certified engineering teams, zero compromise on structural integrity.</p>
        </div>
        <div className="scard rv d1">
          <svg className="s-ico" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <rect x="6" y="6" width="36" height="36" /><line x1="6" y1="18" x2="42" y2="18" />
            <line x1="18" y1="18" x2="18" y2="42" /><circle cx="12" cy="12" r="2" fill="currentColor" />
            <circle cx="30" cy="12" r="2" fill="currentColor" />
          </svg>
          <h3 className="s-title">Interior Finishing</h3>
          <p className="s-desc">Premium finishing works for residential and commercial spaces. We delivered interior fit-out for LD 00 Tower in New Alamein City.</p>
        </div>
        <div className="scard rv d2">
          <svg className="s-ico" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <rect x="4" y="28" width="16" height="16" /><rect x="16" y="20" width="16" height="24" />
            <rect x="28" y="28" width="16" height="16" /><line x1="2" y1="44" x2="46" y2="44" />
            <path d="M4 28 L12 16 L20 28" /><path d="M28 28 L36 20 L44 28" />
          </svg>
          <h3 className="s-title">Residential Compounds</h3>
          <p className="s-desc">Gated community development. Zizinia City set a new standard for privacy and luxury living in Alexandria.</p>
        </div>
        <div className="scard rv d3">
          <svg className="s-ico" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M4 36 Q12 20 24 24 Q36 28 44 12" />
            <path d="M4 44 Q12 32 24 32 Q36 32 44 24" />
            <line x1="4" y1="44" x2="44" y2="44" />
            <circle cx="24" cy="20" r="3.5" />
          </svg>
          <h3 className="s-title">Coastal Development</h3>
          <p className="s-desc">Expanding beyond Alexandria — delivering quality construction on Egypt&apos;s prized North Coast and New Alamein City.</p>
        </div>
      </div>
    </section>
  )
}
