import Image from 'next/image'

export default function Navbar() {
  return (
    <header id="nav">
      <a href="#" className="logo-img">
        <Image
          src="/al-saad-logo.png"
          alt="شعار آل سعد للمقاولات"
          quality={100}
          width={240}
          height={48}
          priority
          className="logo-img-nav"
        />
      </a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#finishing">Finishing</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#services">Vision</a></li>
        <li><a href="#legacy">Legacy</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="ham" id="ham" aria-label="Menu">
        <span /><span /><span />
      </button>
    </header>
  )
}
