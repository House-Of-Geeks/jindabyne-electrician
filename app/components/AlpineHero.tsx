'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function AlpineHero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY
        const parallaxElements = heroRef.current.querySelectorAll('.parallax')
        parallaxElements.forEach((el, index) => {
          const speed = 0.5 + (index * 0.2)
          ;(el as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Mono:wght@400;700&family=Work+Sans:wght@400;500;600;700&display=swap');

        .alpine-hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8rem 2rem 4rem;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 50%, #EFF6FF 100%);
        }

        .alpine-hero::before {
          content: '';
          position: absolute;
          top: 0;
          right: -10%;
          width: 50%;
          height: 100%;
          background: linear-gradient(135deg, rgba(0, 217, 255, 0.08) 0%, rgba(0, 240, 255, 0.12) 100%);
          clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
          animation: diagonalPulse 15s ease-in-out infinite;
        }

        @keyframes diagonalPulse {
          0%, 100% { transform: translateX(0) translateY(0); opacity: 1; }
          50% { transform: translateX(-40px) translateY(20px); opacity: 0.8; }
        }

        .electrical-lines {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .power-line {
          position: absolute;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0, 217, 255, 0.4), transparent);
          animation: powerFlow 3s ease-in-out infinite;
        }

        .power-line:nth-child(1) {
          top: 20%;
          left: -100%;
          width: 60%;
          animation-delay: 0s;
        }

        .power-line:nth-child(2) {
          top: 50%;
          right: -100%;
          width: 70%;
          animation-delay: 1s;
          animation-direction: reverse;
        }

        .power-line:nth-child(3) {
          top: 75%;
          left: -100%;
          width: 50%;
          animation-delay: 2s;
        }

        @keyframes powerFlow {
          0% { transform: translateX(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
        }

        .mountain-silhouette {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 35vh;
          background: linear-gradient(180deg, transparent 0%, rgba(226, 232, 240, 0.3) 100%);
          clip-path: polygon(
            0 100%, 0 70%,
            8% 60%, 15% 65%, 22% 55%, 30% 62%,
            40% 45%, 50% 52%, 58% 40%, 68% 55%,
            75% 48%, 82% 58%, 90% 50%, 100% 60%,
            100% 100%
          );
          opacity: 0.6;
        }

        .alpine-content {
          max-width: 1200px;
          position: relative;
          z-index: 10;
          animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .voltage-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #00D9FF;
          background: rgba(0, 217, 255, 0.08);
          padding: 0.5rem 1.25rem;
          border: 1px solid rgba(0, 217, 255, 0.3);
          position: relative;
          overflow: hidden;
          margin-bottom: 2rem;
          animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
        }

        .voltage-badge::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 217, 255, 0.15), transparent);
          animation: voltageShine 4s ease-in-out infinite;
        }

        @keyframes voltageShine {
          0% { left: -100%; }
          50%, 100% { left: 200%; }
        }

        .bolt-icon {
          display: inline-block;
          animation: boltPulse 2s ease-in-out infinite;
        }

        @keyframes boltPulse {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.2); filter: brightness(1.5); }
        }

        .alpine-title {
          font-family: 'Archivo Black', sans-serif;
          font-size: clamp(2.5rem, 9vw, 6rem);
          line-height: 1;
          color: #0F172A;
          margin-bottom: 1.5rem;
          letter-spacing: -0.03em;
          animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
        }

        .title-accent {
          position: relative;
          display: inline-block;
        }

        .title-accent::after {
          content: '';
          position: absolute;
          bottom: 0.1em;
          left: 0;
          width: 100%;
          height: 0.15em;
          background: linear-gradient(90deg, #00D9FF, #FFB800);
          z-index: -1;
          transform: skewX(-12deg);
        }

        .alpine-subtitle {
          font-family: 'Work Sans', sans-serif;
          font-size: clamp(1.125rem, 2.5vw, 1.625rem);
          line-height: 1.5;
          color: #475569;
          max-width: 700px;
          margin-bottom: 3rem;
          animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both;
        }

        .alpine-ctas {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both;
        }

        .cta-charge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.25rem 3rem;
          font-family: 'Work Sans', sans-serif;
          font-weight: 700;
          font-size: 1.0625rem;
          text-decoration: none;
          background: #00D9FF;
          color: #0F172A;
          border: none;
          clip-path: polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%);
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cta-charge::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: #FFB800;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1), height 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cta-charge:hover::before {
          width: 500px;
          height: 500px;
        }

        .cta-charge:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 217, 255, 0.3);
        }

        .cta-charge span {
          position: relative;
          z-index: 1;
        }

        .cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.25rem 3rem;
          font-family: 'Work Sans', sans-serif;
          font-weight: 600;
          font-size: 1.0625rem;
          text-decoration: none;
          background: transparent;
          color: #0F172A;
          border: 2px solid #0F172A;
          clip-path: polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%);
          transition: all 0.3s ease;
        }

        .cta-secondary:hover {
          background: #0F172A;
          color: #FFFFFF;
          transform: translateX(8px);
        }

        .arrow-icon {
          transition: transform 0.3s ease;
        }

        .cta-secondary:hover .arrow-icon {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .alpine-hero {
            padding: 6rem 1.5rem 3rem;
          }

          .alpine-ctas {
            flex-direction: column;
            width: 100%;
          }

          .cta-charge,
          .cta-secondary {
            width: 100%;
            justify-content: center;
          }

          .mountain-silhouette {
            height: 25vh;
          }
        }
      `}</style>

      <section className="alpine-hero" ref={heroRef}>
        <div className="electrical-lines">
          <div className="power-line"></div>
          <div className="power-line"></div>
          <div className="power-line"></div>
        </div>

        <div className="mountain-silhouette parallax"></div>

        <div className="alpine-content">
          <div className="voltage-badge">
            <span>Licensed NSW Electrician</span>
          </div>

          <h1 className="alpine-title">
            <span className="title-accent">Jindabyne</span><br />
            Electrical Services
          </h1>

          <p className="alpine-subtitle">
            Alpine electrical specialists serving the Snowy Mountains.
            From solar installations to emergency power, we keep your property running in the harshest conditions.
          </p>

          <div className="alpine-ctas">
            <Link href="/contact" className="cta-charge">
              <span>Get Free Quote</span>
            </Link>
            <Link href="/our-services" className="cta-secondary">
              <span>View Services</span>
              <span className="arrow-icon">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
