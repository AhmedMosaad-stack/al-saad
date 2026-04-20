import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="ft-l">© 2025 Al-Saad Construction · آل سعد للإنشاءات</div>
      <Image
        src="/al-saad-logo.png"
        alt="شعار آل سعد للمقاولات"
        quality={100}
        width={180}
        height={64}
        className="logo-img-footer"
      />
      <div className="ft-r">Built on Legacy · Alexandria, Egypt</div>
    </footer>
  )
}
