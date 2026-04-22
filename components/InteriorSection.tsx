'use client'
import InteriorGallery from '@/components/InteriorGallery'

const cards = [
  {
    title: 'تشطيب كامل للشقق',
    desc: 'تسليم شقتك جاهزة بالكامل — من البنية التحتية حتى اللمسات الأخيرة.',
    icon: (
      <svg className="interior-ico" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="6" y="6" width="36" height="36" />
        <line x1="6" y1="18" x2="42" y2="18" />
        <line x1="18" y1="18" x2="18" y2="42" />
        <rect x="22" y="22" width="16" height="16" />
      </svg>
    ),
  },
  {
    title: 'دهانات وديكورات',
    desc: 'طلاء احترافي وتصاميم ديكور داخلي تعكس ذوقك وتضيف روحاً لكل مساحة.',
    icon: (
      <svg className="interior-ico" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M10 38 Q14 28 20 22 L34 8 L40 14 L26 28 Q20 34 10 38Z" />
        <circle cx="37" cy="11" r="3" />
        <path d="M8 40 Q12 36 16 38 Q18 44 14 46 Q10 48 8 44Z" fill="rgba(201,168,76,.15)" />
      </svg>
    ),
  },
  {
    title: 'أعمال السيراميك والرخام',
    desc: 'تركيب ومعالجة السيراميك والرخام الفاخر بدقة متناهية لأرضيات وجدران راقية.',
    icon: (
      <svg className="interior-ico" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="4" y="4" width="18" height="18" />
        <rect x="26" y="4" width="18" height="18" />
        <rect x="4" y="26" width="18" height="18" />
        <rect x="26" y="26" width="18" height="18" />
      </svg>
    ),
  },
  {
    title: 'صيانة متكاملة فورية',
    desc: 'فريق صيانة متخصص تحت الطلب — أي وقت، أي إصلاح، أي تعديل، بسرعة واحتراف.',
    icon: (
      <svg className="interior-ico" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M36 8 Q44 16 40 26 L28 38 L10 38 L10 22 L22 10Z" />
        <line x1="18" y1="30" x2="30" y2="18" />
        <circle cx="12" cy="36" r="4" />
        <line x1="38" y1="8" x2="42" y2="12" />
      </svg>
    ),
  },
]

export default function InteriorSection() {
  return (
    <section id="finishing">

      {/* Section header */}
      <div className="rv" style={{ marginBottom: '56px' }}>
        <div className="sec-lbl">Interior Fit-Out · التشطيب الداخلي</div>
        <h2 className="sec-h2">From Shell to Spectacular.</h2>
      </div>

      {/* Arabic tagline */}
      <div className="interior-tagline-wrap rv d1">
        <p className="interior-tagline rv d1">
          كل تفصيلة بنهتم بيها — صيانة متكاملة على مدار الساعة
        </p>
      </div>

      {/* Short description */}
      <p className="interior-desc rv d2">
        نوفر خدمة تشطيب شاملة لشقتك من الألف إلى الياء، بيد فريق متخصص وخبرة تمتد لأكثر من ثلاثة عقود.
        مهندسونا حاضرون في أي وقت، لأي تعديل، لأي إصلاح — لأن بيتك يستحق الأفضل دائماً.
      </p>

      {/* Services grid */}
      <div className="interior-sgrid">
        {cards.map((c, i) => (
          <div key={i} className={`interior-card rv${i > 0 ? ' d' + i : ''}`}>
            {c.icon}
            <div className="interior-card-title">{c.title}</div>
            <p className="interior-card-desc">{c.desc}</p>
          </div>
        ))}
      </div>

      <InteriorGallery />

    </section>
  )
}
