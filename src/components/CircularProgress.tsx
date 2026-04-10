import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CircularProgressProps {
  label: string;
  percent: number;
  description: string;
  delay?: number;
}

export default function CircularProgress({ label, percent, description, delay = 0 }: CircularProgressProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [animatedPercent, setAnimatedPercent] = useState(0);
  const [hovered, setHovered] = useState(false);

  const size = 100;
  const strokeWidth = 7;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      const duration = 1500;
      const start = performance.now();
      const animate = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setAnimatedPercent(eased * percent);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, delay);
    return () => clearTimeout(timeout);
  }, [isInView, percent, delay]);

  const offset = circumference - (animatedPercent / 100) * circumference;
  const displayVal = animatedPercent >= 99.95 && percent === 100
    ? "100"
    : animatedPercent.toFixed(percent % 1 !== 0 ? 1 : 0);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: delay / 1000 + 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center gap-3 cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-testid={`skill-${label.toLowerCase()}`}
    >
      {/* Ring */}
      <motion.div
        animate={hovered ? { scale: 1.08 } : { scale: 1 }}
        transition={{ duration: 0.25 }}
        style={{
          position: "relative",
          flexShrink: 0,
          filter: hovered
            ? "drop-shadow(0 0 12px rgba(255,255,255,0.5))"
            : "drop-shadow(0 0 6px rgba(255,255,255,0.2))",
          transition: "filter 0.3s ease",
          width: size,
          height: size,
        }}
      >
        <svg width={size} height={size} style={{ rotate: "-90deg" }}>
          <circle cx={size / 2} cy={size / 2} r={radius} stroke="rgba(255,255,255,0.07)" strokeWidth={strokeWidth} fill="none" />
          <circle
            cx={size / 2} cy={size / 2} r={radius}
            stroke="url(#ringGrad)"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
          <defs>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,1)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.35)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold leading-none" style={{ fontSize: "15px", fontFamily: "Inter, sans-serif" }}>
            {displayVal}%
          </span>
        </div>
      </motion.div>

      {/* Text */}
      <div className="flex flex-col gap-0.5 min-w-0">
        <span
          className="text-white font-bold uppercase tracking-wider"
          style={{ fontSize: "12px", letterSpacing: "0.1em" }}
        >
          {label}
        </span>
        <p
          className="text-gray-400 leading-snug line-clamp-2"
          style={{ fontSize: "10.5px" }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}
