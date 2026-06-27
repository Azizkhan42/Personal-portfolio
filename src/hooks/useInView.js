import { useEffect, useRef, useState } from 'react'

export function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setIsInView(true); obs.unobserve(el) }
    }, { threshold: 0.1, ...options })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, isInView]
}

export function useCountUp(target, duration = 1200, active = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let n = 0; const step = target / (duration / 16)
    const t = setInterval(() => {
      n += step
      if (n >= target) { setCount(target); clearInterval(t) }
      else setCount(Math.floor(n))
    }, 16)
    return () => clearInterval(t)
  }, [target, active])
  return count
}
