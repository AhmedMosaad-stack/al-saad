const timelineItems = [
  { yr: '1995', txt: 'Miami House 1', sub: 'First ever project\nMiami, Alexandria', act: true },
  { yr: '1997', txt: 'Masr Al-Khalij Tower', sub: 'برج مصر الخليج\nLic: 209/1997' },
  { yr: '2000', txt: 'Al-Rakhaa Tower', sub: 'برج الرخاء\nAl-Suyuf, Alexandria' },
  { yr: '2001', txt: 'Malak Al-Nour Tower', sub: 'برج ملاك النور\nAl-Suyuf, Alexandria' },
  { yr: '2004–06', txt: 'Three Deliveries', sub: 'Al-Wafa · Friends Tower\nAl-Wafa 2' },
  { yr: '2007', txt: 'Imperial Tower 1', sub: 'Cairo expansion\nMohandessin' },
  { yr: '2008–12', txt: '5 Buildings — Giza', sub: 'Hadayek Al-Ahram\nGate 2 Khafra' },
  { yr: '2013–15', txt: 'Alexandria Return', sub: 'Imperial 2 · Mazaya\nMiami 2 · Al-Eisawy' },
  { yr: '2016–19', txt: 'Peak Decade', sub: 'Fleming A & B · Gleem\nBolkly · Gianaclis' },
  { yr: '2020', txt: 'Zizinia City', sub: 'Compound milestone\n3 buildings · 95 units' },
  { yr: '2023+', txt: 'New Frontiers', sub: 'Marassi S2 · LD 00\nNorth Coast + New Alamein' },
  { yr: 'NOW', txt: 'Active & Upcoming', sub: 'Elegance · Meridiana\n+ 3 in licensing', act: true, glow: true, goldTitle: true },
]

export default function TimelineSection() {
  return (
    <section id="timeline">
      <div className="tl-hdr rv">
        <div className="sec-lbl">30 Years of Excellence</div>
        <h2 className="sec-h2">A Legacy Written in Stone</h2>
      </div>
      <div className="tl-wrap">
        <div className="tl-track">
          {timelineItems.map((item, i) => (
            <div key={i} className={`tl-item${item.act ? ' act' : ''}`}>
              <div className="tl-yr">{item.yr}</div>
              <div className={`tl-dot${item.glow ? ' glow' : ''}`} />
              <div className="tl-txt">
                <strong style={item.goldTitle ? { color: 'var(--gold)' } : undefined}>
                  {item.txt}
                </strong>
                {item.sub.split('\n').map((line, j) => (
                  <span key={j}>{line}{j < item.sub.split('\n').length - 1 && <br />}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
