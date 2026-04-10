export default function BotImage() {
  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{
        borderRadius: '12px',
        background: '#050505',
      }}
    >
      <svg viewBox="0 0 300 320" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="bgGrad" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="rgba(80,80,80,0.6)" />
            <stop offset="100%" stopColor="rgba(0,0,0,1)" />
          </radialGradient>
          <filter id="imgGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="glowCenter" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
          <filter id="softBlur">
            <feGaussianBlur stdDeviation="1" />
          </filter>
        </defs>
        <rect width="300" height="320" fill="url(#bgGrad)" />
        <rect width="300" height="320" fill="url(#glowCenter)" />
        <g transform="translate(150, 155)" filter="url(#imgGlow)">
          <ellipse cx="0" cy="70" rx="55" ry="85" fill="rgba(30,30,30,0.8)" />
          <ellipse cx="0" cy="140" rx="90" ry="50" fill="rgba(20,20,20,0.9)" />
          <ellipse cx="0" cy="-20" rx="42" ry="52" fill="rgba(200,200,200,0.7)" />
          <ellipse cx="0" cy="-20" rx="38" ry="48" fill="rgba(220,220,220,0.8)" />
          <ellipse cx="-16" cy="-40" rx="10" ry="6" fill="rgba(150,150,150,0.6)" />
          <ellipse cx="16" cy="-40" rx="10" ry="6" fill="rgba(150,150,150,0.6)" />
          <ellipse cx="-14" cy="-38" rx="6" ry="4" fill="rgba(60,60,60,0.9)" />
          <ellipse cx="14" cy="-38" rx="6" ry="4" fill="rgba(60,60,60,0.9)" />
          <ellipse cx="-13" cy="-38" rx="3" ry="2.5" fill="rgba(255,255,255,0.9)" />
          <ellipse cx="13" cy="-38" rx="3" ry="2.5" fill="rgba(255,255,255,0.9)" />
          <path d="M-8,-15 Q0,-10 8,-15" stroke="rgba(100,100,100,0.8)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <ellipse cx="-20" cy="-25" rx="4" ry="3" fill="rgba(180,180,180,0.6)" filter="url(#softBlur)" />
          <ellipse cx="20" cy="-25" rx="4" ry="3" fill="rgba(180,180,180,0.6)" filter="url(#softBlur)" />
          <path d="M-42,-20 Q-50,-50 -30,-70 Q-10,-80 0,-72 Q10,-80 30,-70 Q50,-50 42,-20 Q35,-5 0,-70 Q-35,-5 -42,-20"
            fill="rgba(80,80,80,0.7)" />
          <path d="M-20,55 Q0,45 20,55 Q25,100 20,130 Q0,140 -20,130 Q-25,100 -20,55"
            fill="rgba(180,180,180,0.6)" />
          <path d="M-10,60 Q0,55 10,60 L15,90 Q0,95 -15,90 Z"
            fill="rgba(160,160,160,0.5)" />
          <path d="M-55,70 Q-70,50 -60,30 Q-45,10 -30,20 Q-20,30 -20,50"
            fill="rgba(170,170,170,0.5)" />
          <path d="M55,70 Q70,50 60,30 Q45,10 30,20 Q20,30 20,50"
            fill="rgba(170,170,170,0.5)" />
        </g>
        <rect width="300" height="320" fill="rgba(0,0,0,0)" style={{ mixBlendMode: 'multiply' }} />
        <defs>
          <radialGradient id="vignette2" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="rgba(0,0,0,0)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.7)" />
          </radialGradient>
        </defs>
        <rect width="300" height="320" fill="url(#vignette2)" />
        <rect width="300" height="30" y="0" fill="url(#topFade)" />
        <rect width="300" height="30" y="290" fill="url(#botFade)" />
        <defs>
          <linearGradient id="topFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(5,5,5,0.8)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </linearGradient>
          <linearGradient id="botFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(0,0,0,0)" />
            <stop offset="100%" stopColor="rgba(5,5,5,0.9)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute bottom-3 right-3">
        <div style={{ width: 18, height: 18, position: 'relative' }}>
          <svg viewBox="0 0 20 20" width="18" height="18">
            <path d="M10,2 L10,2" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
            <path d="M5,5 L15,5 M3,10 L17,10 M5,15 L15,15" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="10" cy="10" r="8" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, transparent 60%, rgba(5,5,5,0.4) 100%)'
      }} />
    </div>
  );
}
