import Image from 'next/image'

export default function Loader() {
  return (
    <div id="loader">
      <Image
        src="/al-saad-logo.png"
        alt="شعار آل سعد للمقاولات"
        quality={100}
        width={200}
        height={200}
        className="ld-ar"
        priority
      />
      <div className="ld-en">Al-Saad Construction</div>
      <div className="ld-line" />
    </div>
  )
}
