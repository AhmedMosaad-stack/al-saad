'use client'
import { useState, useRef, useEffect } from 'react'
import Masonry from '@/components/Masonry'

const encode = (filename: string) =>
  `/finishing-images/${encodeURIComponent(filename)}`

const items = [
  { id: '1',  img: encode('WhatsApp Image 2026-04-21 at 4.58.25 PM (1).jpeg'), height: 800  },
  { id: '2',  img: encode('WhatsApp Image 2026-04-21 at 4.58.25 PM.jpeg'),     height: 960  },
  { id: '4',  img: encode('WhatsApp Image 2026-04-21 at 4.58.26 PM (2).jpeg'), height: 1000 },
  { id: '5',  img: encode('WhatsApp Image 2026-04-21 at 4.58.26 PM (3).jpeg'), height: 760  },
  { id: '7',  img: encode('WhatsApp Image 2026-04-21 at 7.30.56 PM (1).jpeg'), height: 720  },
  { id: '8',  img: encode('WhatsApp Image 2026-04-21 at 7.30.56 PM (2).jpeg'), height: 900  },
  { id: '9',  img: encode('WhatsApp Image 2026-04-21 at 7.30.56 PM (3).jpeg'), height: 780  },
  { id: '10', img: encode('WhatsApp Image 2026-04-21 at 7.30.56 PM (4).jpeg'), height: 660  },
  { id: '11', img: encode('WhatsApp Image 2026-04-21 at 7.30.56 PM.jpeg'),     height: 940  },
  { id: '12', img: encode('WhatsApp Image 2026-04-21 at 7.30.57 PM (1).jpeg'), height: 800  },
  { id: '13', img: encode('WhatsApp Image 2026-04-21 at 7.30.57 PM (2).jpeg'), height: 740  },
  { id: '14', img: encode('WhatsApp Image 2026-04-21 at 7.30.57 PM (3).jpeg'), height: 880  },
  { id: '15', img: encode('WhatsApp Image 2026-04-21 at 7.30.57 PM (4).jpeg'), height: 760  },
  { id: '16', img: encode('WhatsApp Image 2026-04-21 at 7.30.57 PM.jpeg'),     height: 1020 },
]

const TEASER_HEIGHT = 420

export default function InteriorGallery() {
  const [expanded, setExpanded] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [fullHeight, setFullHeight] = useState(2400)

  useEffect(() => {
    if (!innerRef.current) return
    const ro = new ResizeObserver(([entry]) => {
      const h = entry.contentRect.height
      if (h > 0) setFullHeight(h)
    })
    ro.observe(innerRef.current)
    return () => ro.disconnect()
  }, [])

  const handleToggle = () => {
    if (expanded) {
      setExpanded(false)
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      setExpanded(true)
    }
  }

  return (
    <div ref={sectionRef}>
      <div className="rv" style={{ marginBottom: '16px' }}>
        <p className="interior-gallery-lbl">Project Gallery · معرض الأعمال</p>
      </div>

      <div
        ref={wrapRef}
        className={`gallery-wrap${expanded ? '' : ' collapsed'}`}
        style={{ maxHeight: expanded ? fullHeight + 'px' : TEASER_HEIGHT + 'px' }}
      >
        <div ref={innerRef}>
          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.04}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.97}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>
      </div>

      <div className="show-more-wrap">
        <button className="btn-toggle" onClick={handleToggle}>
          <span>{expanded ? 'SHOW LESS' : 'VIEW ALL PHOTOS'}</span>
        </button>
      </div>
    </div>
  )
}
