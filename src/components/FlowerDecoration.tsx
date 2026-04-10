export default function FlowerDecoration() {
  return (
    <div className="w-full h-full flex items-center justify-center relative z-10">
      <svg
        viewBox="0 0 300 350"
        className="w-[220px] h-[260px] mx-auto"
        style={{
          filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.6)) drop-shadow(0 0 80px rgba(255,255,255,0.25))',
        }}
      >
        <defs>
          <radialGradient id="petalGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
            <stop offset="60%" stopColor="rgba(255,255,255,0.7)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
          </radialGradient>
          <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,1)" />
            <stop offset="100%" stopColor="rgba(200,200,200,0.6)" />
          </radialGradient>
          <filter id="blur">
            <feGaussianBlur stdDeviation="1.5" />
          </filter>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g transform="translate(150, 175)" filter="url(#glow)">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <g key={i} transform={`rotate(${angle})`}>
              <ellipse
                cx="0"
                cy="-62"
                rx="22"
                ry="42"
                fill="url(#petalGrad)"
                opacity="0.9"
              />
              <ellipse
                cx="0"
                cy="-62"
                rx="10"
                ry="28"
                fill="rgba(255,255,255,0.4)"
                filter="url(#blur)"
              />
            </g>
          ))}
          {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) => (
            <g key={`inner-${i}`} transform={`rotate(${angle})`}>
              <ellipse
                cx="0"
                cy="-38"
                rx="14"
                ry="28"
                fill="url(#petalGrad)"
                opacity="0.9"
              />
            </g>
          ))}
          <circle cx="0" cy="0" r="22" fill="url(#centerGrad)" />
          <circle cx="0" cy="0" r="14" fill="rgba(255,255,255,0.95)" />
          <circle cx="0" cy="0" r="8" fill="rgba(255,255,255,1)" />
          {[-30, 0, 30, 60, 90, 120, 150, 180, 210, 240].map((angle, i) => (
            <g key={`stamen-${i}`} transform={`rotate(${angle})`}>
              <line
                x1="0"
                y1="-14"
                x2="0"
                y2="-30"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.5"
              />
              <circle cx="0" cy="-30" r="2.5" fill="rgba(255,255,255,0.7)" />
            </g>
          ))}
          <g transform="translate(-20, 80)">
            <path
              d="M0,0 C-10,30 -5,60 0,80"
              stroke="rgba(255,255,255,0.6)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M0,30 C-20,20 -30,10 -15,5"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="2"
              fill="rgba(255,255,255,0.15)"
              strokeLinecap="round"
            />
            <path
              d="M0,55 C15,45 20,35 10,25"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="2"
              fill="rgba(255,255,255,0.15)"
              strokeLinecap="round"
            />
          </g>
          <g transform="translate(25, 75)">
            <path
              d="M0,0 C8,25 5,50 0,70"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M0,20 C15,15 20,8 12,3"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.5"
              fill="rgba(255,255,255,0.1)"
              strokeLinecap="round"
            />
          </g>
        </g>
        <g transform="translate(150, 175)" opacity="0.15" filter="url(#blur)">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <g key={`shadow-${i}`} transform={`rotate(${angle})`}>
              <ellipse cx="0" cy="-62" rx="22" ry="42" fill="white" />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
