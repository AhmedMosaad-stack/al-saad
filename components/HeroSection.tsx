import Image from 'next/image'

export default function HeroSection() {
  return (
    <section id="hero">

      {/* Two-column flex row — sits inside the section's own flex centering */}
      <div className="hero-inner">

        {/* Left: text content */}
        <div className="hero-col">
          <p className="hero-label">Established · Alexandria · Egypt</p>
          <h1 className="hero-h1">
            We Don&apos;t<br />Build Structures.<br />We Build<br />Legacy.
          </h1>
          <p className="hero-ar">نبني المستقبل — حجراً حجراً</p>
          <p className="hero-p">
            For over three decades, Al-Saad has shaped Alexandria&apos;s skyline with
            precision, ambition, and an uncompromising standard of excellence.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn-fill">Explore Our Work</a>
            <a href="#contact" className="btn-out">Contact Us</a>
          </div>
        </div>

        {/* Right: logo */}
        <div className="hero-logo-col">
          <Image
            src="/al-saad-logo.png"
            alt="شعار آل سعد للمقاولات"
            quality={100}
            width={288}
            height={288}
            priority
            className="logo-img-hero"
          />
        </div>

      </div>

      {/* Decorative absolute elements — outside the flex flow */}
      <div className="hero-gfx" id="hgfx" />
      <div className="sweep" />
      <div className="scroll-cue">
        <div className="scl" />
        <span>Scroll</span>
      </div>

    </section>
  )
}
