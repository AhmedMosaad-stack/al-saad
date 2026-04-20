export default function StatsSection() {
  return (
    <section id="stats">
      <div className="stats-row">
        <div className="stat rv">
          <div className="stat-n" data-t="30" data-s="+">0</div>
          <div className="stat-lab">Years of Legacy</div>
          <div className="stat-ar">عاماً من الخبرة</div>
        </div>
        <div className="stat rv d1">
          <div className="stat-n" data-t="26" data-s="+">0</div>
          <div className="stat-lab">Delivered Projects</div>
          <div className="stat-ar">مشروع منجز</div>
        </div>
        <div className="stat rv d2">
          <div className="stat-n" data-t="1000" data-s="+">0</div>
          <div className="stat-lab">Residential Units</div>
          <div className="stat-ar">وحدة سكنية</div>
        </div>
        <div className="stat rv d3">
          <div className="stat-n" data-t="3" data-s="">0</div>
          <div className="stat-lab">Active Projects</div>
          <div className="stat-ar">مشاريع نشطة</div>
        </div>
      </div>
    </section>
  )
}
