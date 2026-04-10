export default function FlowerDecoration() {
  return (
    <div className="w-full h-full flex items-center justify-center relative">

      {/* Soft ambient glow (cheap, GPU friendly) */}
      <div className="absolute w-56 h-56 bg-white/10 rounded-full blur-3xl" />

      <svg
        viewBox="0 0 300 300"
        className="w-[200px] h-[200px] relative z-10"
      >
        <defs>
          <radialGradient id="petalGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
            <stop offset="70%" stopColor="rgba(255,255,255,0.6)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.15)" />
          </radialGradient>

          <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="rgba(200,200,200,0.6)" />
          </radialGradient>
        </defs>

        <g transform="translate(150,150)">
          
          {/* Outer petals */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <ellipse
              key={i}
              cx="0"
              cy="-60"
              rx="20"
              ry="42"
              fill="url(#petalGrad)"
              opacity="0.9"
              transform={`rotate(${angle})`}
            />
          ))}

          {/* Inner petals */}
          {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) => (
            <ellipse
              key={`inner-${i}`}
              cx="0"
              cy="-38"
              rx="14"
              ry="28"
              fill="url(#petalGrad)"
              opacity="0.7"
              transform={`rotate(${angle})`}
            />
          ))}

          {/* Center */}
          <circle cx="0" cy="0" r="20" fill="url(#centerGrad)" />
          <circle cx="0" cy="0" r="10" fill="#fff" />

          {/* Stem */}
          <path
            d="M0,20 C0,60 0,90 0,120"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />

        </g>
      </svg>
    </div>
  );
}
