'use client'
import { useState, useRef, useEffect } from 'react'

type Project = {
  badge: string
  badgeClass: string
  en: string
  ar: string
  loc: string
  yr: string
  desc: string
  lic?: string
  lg?: boolean
  delay?: string
}

const projects: Project[] = [
  {
    badge: 'In Progress', badgeClass: 'b-prog', en: 'Elegance', ar: 'إليجانس',
    loc: 'محور المحمودية قبلي - محرم بك · Alexandria', yr: 'Under Construction',
    desc: 'Twin towers A & B · 1,048 m² · 50 residential units · 80–160 m² each',
    lic: 'Lic: م ذ - 17 - 51 - 0095 / حي وسط', lg: true,
  },
  {
    badge: 'In Progress', badgeClass: 'b-prog', en: 'Meridiana Tower', ar: 'برج ميريديانا',
    loc: 'شارع القاهرة - سيدي بشر · Alexandria', yr: 'Under Construction',
    desc: '8 residential floors · 1,005 m² · 80 units · 49–165 m²',
    lic: 'Lic: م ذ - 19 - 42 - 0081 / حي المنتزه اول', delay: 'd1',
  },
  {
    badge: 'Recently Delivered', badgeClass: 'b-new', en: 'Marassi S2', ar: 'مراسي إس 2',
    loc: 'Marassi · North Coast', yr: '2023+',
    desc: 'Residential building · Structural construction works on Egypt\'s prized North Coast.', delay: 'd2',
  },
  {
    badge: 'Recently Delivered', badgeClass: 'b-new', en: 'LD 00 Tower', ar: 'برج LD 00',
    loc: 'New Alamein City · مدينة العلمين الجديدة', yr: '2023+',
    desc: 'Premium interior finishing works in Egypt\'s landmark new city development.', delay: 'd3',
  },
  {
    badge: 'Delivered · 2020', badgeClass: 'b-del', en: 'Zizinia City', ar: 'زيزينيا سيتي',
    loc: 'شارع الأمير حليم - زيزينيا · Alexandria', yr: '2020',
    desc: 'Compound · 3 buildings (A, B, C) · 3,005 m² · 95 units',
    lic: 'Lic: م ذ - 11 - 41 - 0534 / حي شرق',
  },
  {
    badge: 'Delivered · 2019', badgeClass: 'b-del', en: 'Fleming Towers A', ar: 'أبراج فلمنج A',
    loc: 'شارع مصطفى كامل - فلمنج · Alexandria', yr: '2019',
    desc: '692 m² · 17 floors · 119 residential units',
    lic: 'Lic: م ذ - 15 - 51 - 0152 / حي شرق', delay: 'd1',
  },
  {
    badge: 'Delivered · 2019', badgeClass: 'b-del', en: 'Fleming Towers B', ar: 'أبراج فلمنج B',
    loc: 'شارع مصطفى كامل - فلمنج · Alexandria', yr: '2019',
    desc: '759 m² · 17 floors · 85 residential units',
    lic: 'Lic: م ذ - 15 - 51 - 0499 / حي شرق', delay: 'd2',
  },
  {
    badge: 'Delivered · 2018', badgeClass: 'b-del', en: 'Gleem Heights', ar: 'جليم هايتس',
    loc: 'شارع أحمد فتحي - جليم · Alexandria', yr: '2018',
    desc: 'Luxury residential tower in one of Alexandria\'s most prestigious coastal addresses.',
    lic: 'Lic: م ذ - 16 - 51 - 0133 / حي شرق',
  },
  {
    badge: 'Delivered · 2017', badgeClass: 'b-del', en: 'Gianaclis First Class', ar: 'جناكليس فرس كلاس',
    loc: 'شارع مصطفى كامل - فلمنج · Alexandria', yr: '2017',
    desc: '692 m² · 17 floors · 119 units · Four-sided luxury facade — a Fleming landmark.', delay: 'd1',
  },
  {
    badge: 'Delivered · 2017', badgeClass: 'b-del', en: 'Al-Saad Hayah Tower', ar: 'برج السعد حياة',
    loc: 'السيوف شماعة · Alexandria', yr: '2017',
    desc: '104 residential units in the prestigious Al-Suyuf district of Alexandria.', delay: 'd2',
  },
  {
    badge: 'Delivered · 2016', badgeClass: 'b-del', en: 'Bolkly High Class', ar: 'بولكلي هاي كلاس',
    loc: 'شارع أمير البحار - الرمل · Alexandria', yr: '2016',
    desc: '114 residential units + commercial spaces on Alexandria\'s iconic Corniche district.',
  },
  {
    badge: 'Delivered · 2015', badgeClass: 'b-del', en: 'Al-Eisawy House', ar: 'برج العيسوي هاوس',
    loc: 'سيدي بشر بحري · Alexandria', yr: '2015',
    desc: '38 residential units · Coastal tower',
    lic: 'Lic: م ذ - 12 - 41 - 505 / حي منتزه اول', delay: 'd1',
  },
  {
    badge: 'Delivered · 2014', badgeClass: 'b-del', en: 'Miami House 2', ar: 'برج ميامي هاوس 2',
    loc: 'سيدي بشر · Alexandria', yr: '2014',
    desc: '1,000 m² · 114 residential units',
    lic: 'Lic: م ذ - 11 - 41 - 0600 / حي المنتزة', delay: 'd2',
  },
  {
    badge: 'Delivered · 2013', badgeClass: 'b-del', en: 'Imperial Tower 2', ar: 'برج إمبريال تاور 2',
    loc: 'سيدي بشر · Alexandria', yr: '2013',
    desc: 'Landmark residential tower in the heart of Sidi Bishr.',
    lic: 'Lic: م ذ - 11 - 41 - 0266 / حي المنتزة',
  },
  {
    badge: 'Delivered · 2013', badgeClass: 'b-del', en: 'Mazaya Tower', ar: 'برج مزايا',
    loc: 'سيدي بشر · Alexandria', yr: '2013',
    desc: 'Adjacent to Imperial Tower 2 — a twin landmark defining Sidi Bishr\'s skyline.',
    lic: 'Lic: م ذ - 11 - 41 - 0266 / حي المنتزة', delay: 'd1',
  },
  {
    badge: 'Delivered · 2008–2012', badgeClass: 'b-del', en: 'Hadayek Al-Ahram', ar: 'حدائق الأهرام — 5 مبانٍ',
    loc: 'Gate 2 Khafra · Giza', yr: '2008 · 2009 · 2010 · 2011 · 2012',
    desc: '5 residential buildings delivered consecutively over 5 years. Al-Saad\'s landmark Giza expansion.', delay: 'd2',
  },
  {
    badge: 'Delivered · 2007', badgeClass: 'b-del', en: 'Imperial Tower 1', ar: 'إمبريال تاور 1',
    loc: 'شارع السودان 57 - المهندسين · Cairo', yr: '2007',
    desc: 'Al-Saad\'s Cairo debut — luxury classical-style building in the heart of Mohandessin.',
  },
  {
    badge: 'Delivered · 2006', badgeClass: 'b-del', en: 'Friends Tower', ar: 'برج الأصدقاء',
    loc: 'شارع سيف 608 - سيدي بشر قبلي · Alexandria', yr: '2006',
    desc: 'Residential tower in one of Alexandria\'s most active coastal neighbourhoods.', delay: 'd1',
  },
  {
    badge: 'Delivered · 2005', badgeClass: 'b-del', en: 'Al-Wafa 2', ar: 'برج الوفاء 2',
    loc: 'السيوف شماعة · Alexandria', yr: '2005',
    desc: 'A continuation of excellence in the Al-Suyuf corridor of Alexandria.', delay: 'd2',
  },
  {
    badge: 'Delivered · 2005', badgeClass: 'b-del', en: 'Al-Mustaqbal Tower', ar: 'برج المستقبل',
    loc: 'Alexandria', yr: '2005',
    desc: '"The Future Tower" — a bold declaration of Al-Saad\'s ambitions in a landmark year.',
  },
  {
    badge: 'Delivered · 2005', badgeClass: 'b-del', en: 'Nujmat Al-Suyuf Tower', ar: 'برج نجمة السيوف',
    loc: 'السيوف · Alexandria', yr: '2005',
    desc: 'The Star of Al-Suyuf — one of three major Al-Saad deliveries in 2005 alone.', delay: 'd1',
  },
  {
    badge: 'Delivered · 2004', badgeClass: 'b-del', en: 'Al-Wafa Tower', ar: 'برج الوفاء',
    loc: 'رمل ثان · Alexandria', yr: '2004',
    desc: 'Residential tower in Raml, one of Alexandria\'s historic central neighbourhoods.', delay: 'd2',
  },
  {
    badge: 'Delivered · 2001', badgeClass: 'b-del', en: 'Malak Al-Nour Tower', ar: 'برج ملاك النور',
    loc: 'السيوف شماعة · Alexandria', yr: '2001',
    desc: '"Angel of Light" — a cornerstone project in the growth of Al-Suyuf Shamaa.',
  },
  {
    badge: 'Delivered · 2000', badgeClass: 'b-del', en: 'Al-Rakhaa Tower', ar: 'برج الرخاء',
    loc: 'السيوف شماعة · Alexandria', yr: '2000',
    desc: 'Prosperity Tower — the millennium project that cemented Al-Saad\'s reputation.',
    lic: 'Lic: 68/1999 حي المنتزه', delay: 'd1',
  },
  {
    badge: 'Delivered · 1997', badgeClass: 'b-del', en: 'Masr Al-Khalij Tower', ar: 'برج مصر الخليج',
    loc: 'السيوف شماعة · Alexandria', yr: '1997',
    desc: 'Egypt-Gulf Tower — a bridge between two markets, one uncompromising standard.',
    lic: 'Lic: 209/1997 حي المنتزه', delay: 'd2',
  },
  {
    badge: 'Delivered · 1995 · The First', badgeClass: 'b-del', en: 'Miami House 1', ar: 'برج ميامي هاوس 1',
    loc: 'ميامي · Alexandria', yr: '1995 — The Origin',
    desc: 'Where it all began. The inaugural Al-Saad project that started a 30-year legacy on Alexandria\'s coastline.',
  },
]

export default function ProjectsSection() {
  const [expanded, setExpanded] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)
  const [fullHeight, setFullHeight] = useState(2400)

  useEffect(() => {
    if (wrapRef.current) {
      setFullHeight(wrapRef.current.scrollHeight)
    }
  }, [])

  const handleToggle = () => {
    if (expanded) {
      btnRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      setTimeout(() => setExpanded(false), 300)
    } else {
      setExpanded(true)
    }
  }

  return (
    <section id="projects" className="sec">
      <div className="proj-hdr rv">
        <div className="sec-lbl">Portfolio · 1995–Present</div>
        <h2 className="sec-h2">Projects That<br />Define Cities</h2>
        <p className="sec-ar">مشاريعنا تتحدث عن نفسها</p>
      </div>
      <div className="gline rv" />

      <div
        ref={wrapRef}
        className={`proj-wrap${expanded ? '' : ' collapsed'}`}
        style={expanded ? { maxHeight: fullHeight + 'px' } : undefined}
      >
        <div className="pgrid">
          {projects.map((p, i) => (
            <div key={i} className={`pcard rv${p.delay ? ' ' + p.delay : ''}${p.lg ? ' lg' : ''}`}>
              <div className="pcard-ov"><span className="pcard-ov-txt">View Project</span></div>
              <span className={`badge ${p.badgeClass}`}>{p.badge}</span>
              <div className="p-en">{p.en}</div>
              <div className="p-ar">{p.ar}</div>
              <div className="p-loc">{p.loc}</div>
              <div className="p-yr">{p.yr}</div>
              <div className="p-desc">{p.desc}</div>
              {p.lic && <div className="p-lic">{p.lic}</div>}
            </div>
          ))}
        </div>
      </div>

      <div className="show-more-wrap">
        <button ref={btnRef} className="btn-toggle" onClick={handleToggle}>
          <span>{expanded ? 'SHOW LESS' : 'VIEW ALL PROJECTS'}</span>
        </button>
      </div>
    </section>
  )
}
