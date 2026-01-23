'use client'

/**
 * SVG Graphics Components for Alpine Technical Design
 * Circuit diagrams, mountain silhouettes, and electrical elements
 */

export function CircuitPattern() {
  return (
    <svg
      className="circuit-pattern"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', top: 0, left: 0, opacity: 0.08, pointerEvents: 'none' }}
    >
      <defs>
        <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          {/* Horizontal lines */}
          <line x1="0" y1="50" x2="200" y2="50" stroke="#00D9FF" strokeWidth="1.5" />
          <line x1="0" y1="150" x2="200" y2="150" stroke="#00D9FF" strokeWidth="1.5" />

          {/* Vertical lines */}
          <line x1="100" y1="0" x2="100" y2="200" stroke="#00D9FF" strokeWidth="1.5" />

          {/* Circuit nodes */}
          <circle cx="50" cy="50" r="4" fill="#00D9FF" />
          <circle cx="100" cy="50" r="4" fill="#00D9FF" />
          <circle cx="150" cy="50" r="4" fill="#00D9FF" />
          <circle cx="100" cy="100" r="4" fill="#FFB800" />
          <circle cx="50" cy="150" r="4" fill="#00D9FF" />
          <circle cx="150" cy="150" r="4" fill="#00D9FF" />

          {/* Diagonal connections */}
          <line x1="100" y1="50" x2="100" y2="100" stroke="#00D9FF" strokeWidth="1" strokeDasharray="3,3" />
          <line x1="50" y1="50" x2="100" y2="100" stroke="#00D9FF" strokeWidth="1" strokeDasharray="3,3" />
          <line x1="150" y1="50" x2="100" y2="100" stroke="#00D9FF" strokeWidth="1" strokeDasharray="3,3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  )
}

export function MountainSilhouette() {
  return (
    <svg
      className="mountain-silhouette"
      viewBox="0 0 1200 400"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '40vh',
        pointerEvents: 'none',
        zIndex: 0
      }}
    >
      {/* Back mountain layer */}
      <path
        d="M0,400 L0,200 Q150,150 300,180 T600,140 T900,170 T1200,150 L1200,400 Z"
        fill="rgba(229, 241, 255, 0.3)"
      />

      {/* Middle mountain layer */}
      <path
        d="M0,400 L0,240 Q100,200 200,220 Q300,240 400,200 Q500,160 600,190 Q700,220 800,180 Q900,140 1000,200 Q1100,260 1200,220 L1200,400 Z"
        fill="rgba(200, 230, 255, 0.4)"
      />

      {/* Front mountain layer */}
      <path
        d="M0,400 L0,280 Q80,260 160,270 Q240,280 320,250 Q400,220 480,240 Q560,260 640,230 Q720,200 800,250 Q880,300 960,270 Q1040,240 1120,280 L1200,280 L1200,400 Z"
        fill="rgba(170, 220, 255, 0.5)"
      />
    </svg>
  )
}

export function LightningBolt({ className = "", size = 64 }: { className?: string, size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35 4L20 32H32L29 60L52 24H38L35 4Z"
        fill="url(#lightning-gradient)"
        stroke="#00D9FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="lightning-gradient" x1="20" y1="4" x2="52" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00F0FF" />
          <stop offset="50%" stopColor="#00D9FF" />
          <stop offset="100%" stopColor="#FFB800" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function TopoLines() {
  return (
    <svg
      className="topo-lines"
      viewBox="0 0 1200 600"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={{
        position: 'absolute',
        top: '10%',
        right: 0,
        width: '50%',
        height: '80%',
        opacity: 0.04,
        pointerEvents: 'none'
      }}
    >
      {/* Topographic contour lines */}
      <ellipse cx="800" cy="300" rx="600" ry="250" fill="none" stroke="#00D9FF" strokeWidth="2" />
      <ellipse cx="800" cy="300" rx="500" ry="200" fill="none" stroke="#00D9FF" strokeWidth="2" />
      <ellipse cx="800" cy="300" rx="400" ry="150" fill="none" stroke="#00D9FF" strokeWidth="2" />
      <ellipse cx="800" cy="300" rx="300" ry="100" fill="none" stroke="#00D9FF" strokeWidth="2" />
      <ellipse cx="800" cy="300" rx="200" ry="60" fill="none" stroke="#FFB800" strokeWidth="2" />
      <ellipse cx="800" cy="300" rx="100" ry="30" fill="none" stroke="#FFB800" strokeWidth="2" />
    </svg>
  )
}

export function ElectricalSymbol({ type = "power" }: { type?: "power" | "ground" | "resistor" | "switch" }) {
  const symbols = {
    power: (
      <>
        <circle cx="32" cy="32" r="24" fill="none" stroke="#00D9FF" strokeWidth="3" />
        <line x1="32" y1="16" x2="32" y2="48" stroke="#00D9FF" strokeWidth="3" />
        <line x1="16" y1="32" x2="48" y2="32" stroke="#00D9FF" strokeWidth="3" />
        <circle cx="32" cy="32" r="4" fill="#FFB800" />
      </>
    ),
    ground: (
      <>
        <line x1="32" y1="8" x2="32" y2="32" stroke="#00D9FF" strokeWidth="3" />
        <line x1="16" y1="32" x2="48" y2="32" stroke="#00D9FF" strokeWidth="4" />
        <line x1="20" y1="40" x2="44" y2="40" stroke="#00D9FF" strokeWidth="3" />
        <line x1="24" y1="48" x2="40" y2="48" stroke="#00D9FF" strokeWidth="2" />
      </>
    ),
    resistor: (
      <>
        <line x1="8" y1="32" x2="16" y2="32" stroke="#00D9FF" strokeWidth="3" />
        <path d="M16,32 L20,20 L24,44 L28,20 L32,44 L36,20 L40,44 L44,20 L48,32"
              fill="none" stroke="#00D9FF" strokeWidth="3" />
        <line x1="48" y1="32" x2="56" y2="32" stroke="#00D9FF" strokeWidth="3" />
      </>
    ),
    switch: (
      <>
        <line x1="8" y1="32" x2="20" y2="32" stroke="#00D9FF" strokeWidth="3" />
        <line x1="20" y1="32" x2="40" y2="20" stroke="#00D9FF" strokeWidth="3" strokeLinecap="round" />
        <line x1="44" y1="32" x2="56" y2="32" stroke="#00D9FF" strokeWidth="3" />
        <circle cx="20" cy="32" r="2" fill="#00D9FF" />
        <circle cx="44" cy="32" r="2" fill="#00D9FF" />
      </>
    )
  }

  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {symbols[type]}
    </svg>
  )
}

export function GridPattern() {
  return (
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', top: 0, left: 0, opacity: 0.03, pointerEvents: 'none' }}
    >
      <defs>
        <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#00D9FF" strokeWidth="0.5" />
        </pattern>
        <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
          <rect width="100" height="100" fill="url(#smallGrid)" />
          <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#00D9FF" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  )
}

export function ServiceIcon({ icon }: { icon: string }) {
  const icons: Record<string, JSX.Element> = {
    solar: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="4" stroke="#00D9FF" strokeWidth="2"/>
        <path d="M12 2V6M12 18V22M22 12H18M6 12H2M19.07 4.93L16.24 7.76M7.76 16.24L4.93 19.07M19.07 19.07L16.24 16.24M7.76 7.76L4.93 4.93" stroke="#FFB800" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    battery: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="7" width="14" height="10" rx="2" stroke="#00D9FF" strokeWidth="2"/>
        <path d="M17 10V14" stroke="#00D9FF" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 10H10M6 14H14" stroke="#FFB800" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    signal: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="2" fill="#00D9FF"/>
        <path d="M8.5 8.5C10.433 6.567 13.567 6.567 15.5 8.5M5.5 5.5C9.08 1.92 14.92 1.92 18.5 5.5" stroke="#00D9FF" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 18L12 22" stroke="#FFB800" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    heating: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 18H20M4 12H20M4 6H20" stroke="#00D9FF" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 3V21M16 3V21" stroke="#FFB800" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    charging: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 17H17V7H7V17Z" stroke="#00D9FF" strokeWidth="2"/>
        <path d="M13 7L9 13H12L11 17" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    alarm: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="8" stroke="#00D9FF" strokeWidth="2"/>
        <path d="M12 8V12L15 15" stroke="#FFB800" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 3L6 5M16 3L18 5" stroke="#00D9FF" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    bulb: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.686 2 6 4.686 6 8c0 2.21 1.79 4 4 4v4h4v-4c2.21 0 4-1.79 4-4 0-3.314-2.686-6-6-6z" stroke="#00D9FF" strokeWidth="2"/>
        <path d="M10 20h4M10 17h4" stroke="#FFB800" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    power: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="#00D9FF" strokeWidth="2"/>
        <path d="M8 8h8M8 12h8M8 16h4" stroke="#FFB800" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    emergency: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="#00D9FF" strokeWidth="2"/>
        <path d="M12 7v6M12 16h.01" stroke="#FFB800" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    building: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21h18M4 21V9l8-6 8 6v12" stroke="#00D9FF" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 21v-6h6v6M9 9h2M9 13h2M13 9h2M13 13h2" stroke="#FFB800" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    shop: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9v11h18V9M3 9l1.5-6h15L21 9M3 9h18" stroke="#00D9FF" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 13v4M14 13v4" stroke="#FFB800" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    network: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="#00D9FF" strokeWidth="2"/>
        <path d="M2 12h20M12 2c2.5 3 4 7 4 10s-1.5 7-4 10M12 2C9.5 5 8 9 8 12s1.5 7 4 10" stroke="#FFB800" strokeWidth="1.5"/>
      </svg>
    ),
    check: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="#00D9FF" strokeWidth="2"/>
        <path d="M8 12l3 3 5-6" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    hvac: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="#00D9FF" strokeWidth="2"/>
        <circle cx="12" cy="12" r="4" stroke="#FFB800" strokeWidth="2"/>
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#00D9FF" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 6l2 2M16 6l-2 2M6 18l2-2M16 18l-2-2" stroke="#FFB800" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    security: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z" stroke="#00D9FF" strokeWidth="2"/>
        <circle cx="12" cy="11" r="3" stroke="#FFB800" strokeWidth="2"/>
        <path d="M12 14v3" stroke="#FFB800" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    property: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21h18M5 21V10l7-5 7 5v11" stroke="#00D9FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="9" y="12" width="6" height="9" stroke="#00D9FF" strokeWidth="2"/>
        <path d="M10 8h1M13 8h1M10 15h1M13 15h1" stroke="#FFB800" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="18" cy="6" r="3" stroke="#FFB800" strokeWidth="2"/>
        <path d="M17 6h2" stroke="#FFB800" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  }

  return (
    <div style={{
      width: '80px',
      height: '80px',
      background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(255, 184, 0, 0.1))',
      border: '2px solid rgba(0, 217, 255, 0.2)',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      marginBottom: '1.5rem'
    }}>
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: 'conic-gradient(from 0deg, transparent, rgba(0, 217, 255, 0.1), transparent)',
        animation: 'iconSpin 8s linear infinite'
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {icons[icon] || icons.solar}
      </div>
      <style jsx>{`
        @keyframes iconSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
