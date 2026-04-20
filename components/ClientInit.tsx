'use client'

import { useEffect } from 'react'

export default function ClientInit() {
  useEffect(() => {
    // ── CURSOR ──
    const dot = document.getElementById('c-dot')
    const ring = document.getElementById('c-ring')
    if (dot && ring) {
      let mx = 0, my = 0, rx = 0, ry = 0
      const onMove = (e: MouseEvent) => {
        mx = e.clientX; my = e.clientY
        dot.style.left = mx + 'px'; dot.style.top = my + 'px'
      }
      document.addEventListener('mousemove', onMove)
      const tick = () => {
        rx += (mx - rx) * 0.14; ry += (my - ry) * 0.14
        ring.style.left = rx + 'px'; ring.style.top = ry + 'px'
        requestAnimationFrame(tick)
      }
      tick()
      document.querySelectorAll<HTMLElement>('a,button,.pcard,.scard,.ucard,.tl-item').forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hov'))
        el.addEventListener('mouseleave', () => document.body.classList.remove('hov'))
      })
      return () => { document.removeEventListener('mousemove', onMove) }
    }
  }, [])

  useEffect(() => {
    // ── LOADER ──
    const onLoad = () => {
      setTimeout(() => {
        const loader = document.getElementById('loader')
        if (loader) {
          loader.classList.add('out')
          setTimeout(() => loader.remove(), 1100)
        }
      }, 1500)
    }
    if (document.readyState === 'complete') { onLoad() }
    else { window.addEventListener('load', onLoad) }
    return () => window.removeEventListener('load', onLoad)
  }, [])

  useEffect(() => {
    // ── NAVBAR SCROLL ──
    const nav = document.getElementById('nav')
    if (!nav) return
    const onScroll = () => nav.classList.toggle('s', window.scrollY > 70)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // ── HAMBURGER ──
    const ham = document.getElementById('ham')
    const mob = document.getElementById('mob-menu')
    if (!ham || !mob) return
    const toggle = () => { ham.classList.toggle('on'); mob.classList.toggle('on') }
    ham.addEventListener('click', toggle)
    mob.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => { ham.classList.remove('on'); mob.classList.remove('on') })
    })
    return () => ham.removeEventListener('click', toggle)
  }, [])

  useEffect(() => {
    // ── HERO GRAPHIC ──
    const gfx = document.getElementById('hgfx')
    if (!gfx) return
    const lines = [
      { r: '48%', t: '5%', h: '90%', op: 0.55 },
      { r: '38%', t: '12%', h: '76%', op: 0.2 },
      { r: '28%', t: '8%', h: '84%', op: 0.32 },
      { r: '18%', t: '18%', h: '64%', op: 0.14 },
      { r: '8%', t: '24%', h: '52%', op: 0.08 },
    ]
    lines.forEach(l => {
      const d = document.createElement('div')
      Object.assign(d.style, {
        position: 'absolute', right: l.r, top: l.t,
        width: '1px', height: l.h,
        background: `rgba(201,168,76,${l.op})`,
      })
      gfx.appendChild(d)
    })
    const rects = [
      { r: '6%', t: '18%', w: '36%', h: '64%', fill: false, op: 0.07 },
      { r: '4%', t: '28%', w: '16%', h: '44%', fill: true, op: 0.1 },
      { r: '22%', t: '10%', w: '22%', h: '80%', fill: false, op: 0.04 },
    ]
    rects.forEach(r => {
      const d = document.createElement('div')
      Object.assign(d.style, {
        position: 'absolute', right: r.r, top: r.t, width: r.w, height: r.h,
        border: `1px solid rgba(201,168,76,${r.op})`,
        background: r.fill ? 'rgba(201,168,76,.025)' : 'transparent',
      })
      gfx.appendChild(d)
    })

    // ── PARALLAX ──
    const onScroll = () => {
      const y = window.scrollY
      gfx.querySelectorAll<HTMLElement>('div').forEach((el, i) => {
        el.style.transform = `translateY(${y * 0.3 * (i % 2 === 0 ? 1 : -1) * 0.25}px)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // ── INTERSECTION OBSERVER (reveal) ──
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })
    document.querySelectorAll('.rv,.gline').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    // ── COUNTERS ──
    function countUp(el: HTMLElement) {
      const t = +(el.dataset.t ?? 0)
      const s = el.dataset.s ?? ''
      const dur = 2200
      const start = performance.now()
      const frame = (now: number) => {
        const p = Math.min((now - start) / dur, 1)
        const ease = 1 - Math.pow(1 - p, 3)
        el.textContent = Math.floor(ease * t).toLocaleString() + s
        if (p < 1) requestAnimationFrame(frame)
        else el.textContent = t.toLocaleString() + s
      }
      requestAnimationFrame(frame)
    }
    const cio = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { countUp(e.target as HTMLElement); cio.unobserve(e.target) }
      })
    }, { threshold: 0.5 })
    document.querySelectorAll<HTMLElement>('.stat-n[data-t]').forEach(el => cio.observe(el))
    return () => cio.disconnect()
  }, [])

  useEffect(() => {
    // ── TIMELINE HOVER DOTS ──
    document.querySelectorAll('.tl-item').forEach(item => {
      const enter = () => item.classList.add('act')
      const leave = () => { if (!item.classList.contains('act-fixed')) item.classList.remove('act') }
      item.addEventListener('mouseenter', enter)
      item.addEventListener('mouseleave', leave)
    })
  }, [])

  useEffect(() => {
    // ── SMOOTH SCROLL ──
    const handler = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement
      const href = a.getAttribute('href')
      if (!href) return
      const t = document.querySelector(href)
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
    }
    const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
    links.forEach(a => a.addEventListener('click', handler))
    return () => links.forEach(a => a.removeEventListener('click', handler))
  }, [])

  return null
}
