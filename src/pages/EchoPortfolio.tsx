import { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import CircularProgress from "@/components/CircularProgress";
import FlowerDecoration from "@/components/FlowerDecoration";
import BotImage from "@/components/BotImage";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const skills = [
  { label: "PLAYBACK", percent: 100, description: "Flawless audio playback with zero-lag streaming across all sources" },
  { label: "STABILITY", percent: 99.7, description: "Multi-node fallback with near-zero downtime and self-healing nodes" },
  { label: "UI", percent: 98, description: "Clean, intuitive slash commands and embed interfaces for all users" },
  { label: "AI", percent: 89.2, description: "Smart playlist generation and auto-queue powered by machine learning" },
];

const modules = [
  { title: "Core Music System", sub: "since 2023", description: "Lavalink-powered audio engine with multi-source streaming, ultra-low latency, and automatic failover." },
  { title: "AI Playlist Engine", sub: "since 2024", description: "Machine learning-driven playlist generation based on mood, genre, and listening history patterns." },
  { title: "Smart Queue System", sub: "since 2025", description: "Intelligent queue management with priority tracks, shuffle algorithms, and cross-server sync." },
];

const infoRows = [
  { label: "Bot name", value: "Echo™" },
  { label: "Core", value: "Lavalink Streaming Engine" },
  { label: "Symbol", value: "Soundwave" },
  { label: "System ID", value: "89" },
  { label: "Reputation", value: '"Best music bot performance tier"' },
];

function Card3D({ children, className, style, intensity = 12 }: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 30 });
  const springY = useSpring(y, { stiffness: 200, damping: 30 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-intensity, intensity]);
  const glowX = useTransform(springX, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(springY, [-0.5, 0.5], [0, 100]);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        ...style,
      }}
      className={`card-glass rounded-xl relative overflow-hidden ${className ?? ""}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHovered(true)}
      whileHover={{ scale: 1.015 }}
      transition={{ scale: { duration: 0.2 } }}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              zIndex: 10,
              background: `radial-gradient(circle at ${glowX.get()}% ${glowY.get()}%, rgba(255,255,255,0.07) 0%, transparent 60%)`,
            }}
          />
        )}
      </AnimatePresence>
      <div style={{ transform: "translateZ(10px)" }}>
        {children}
      </div>
    </motion.div>
  );
}

export default function EchoPortfolio() {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const nextId = useRef(0);

  const addRipple = (e: React.MouseEvent) => {
    const id = nextId.current++;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setRipples(r => [...r, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => setRipples(r => r.filter(rp => rp.id !== id)), 900);
  };

  return (
    <div
      className="min-h-screen w-full relative"
      style={{ background: "#050505", fontFamily: "Inter, sans-serif", perspective: "1200px" }}
      onClick={addRipple}
      data-testid="page-echo-portfolio"
    >
      <div className="grain-overlay" />
      <div className="vignette" />

      {/* Click ripples */}
      {ripples.map(r => (
        <motion.div
          key={r.id}
          className="pointer-events-none fixed z-50 rounded-full"
          style={{ left: r.x, top: r.y, x: "-50%", y: "-50%", border: "1px solid rgba(255,255,255,0.2)" }}
          initial={{ width: 0, height: 0, opacity: 0.7 }}
          animate={{ width: 200, height: 200, opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
      ))}

      {/* Ambient floating particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: "rgba(255,255,255,0.4)",
            }}
            animate={{
              y: [0, -40 - Math.random() * 60, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              delay: Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8"
      >
        {/* Action Buttons */}
        <motion.div
          {...fadeUp(0.1)}
          className="flex flex-wrap items-center justify-end gap-2 mb-5"
        >
          <motion.a
            href="https://discord.com/oauth2/authorize?client_id=1234567890&scope=bot+applications.commands&permissions=8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm text-black relative overflow-hidden"
            style={{ background: "rgba(255,255,255,0.95)", boxShadow: "0 0 20px rgba(255,255,255,0.15)" }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.97 }}
            data-testid="link-add-to-server"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
            </svg>
            Add to Server
          </motion.a>
          <motion.a
            href="https://discord.gg/echo-support"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm text-white card-glass"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            data-testid="link-support-server"
          >
            Support Server
          </motion.a>
        </motion.div>

        {/* Outer frame */}
        <motion.div
          {...fadeUp(0.15)}
          className="rounded-2xl p-3 sm:p-5 relative"
          style={{
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 0 80px rgba(255,255,255,0.04), inset 0 0 0 1px rgba(255,255,255,0.03)",
            background: "rgba(255,255,255,0.01)",
          }}
        >
          {/* TOP SECTION */}
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.6fr] gap-3 sm:gap-5 mb-3 sm:mb-5">
            {/* Portrait */}
            <motion.div
              {...fadeUp(0.2)}
              className="float-anim"
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                aspectRatio: "1/1.05",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 40px rgba(255,255,255,0.06)",
                maxHeight: "320px",
              }}
              data-testid="img-bot-portrait"
            >
              <BotImage />
            </motion.div>

            {/* Info card */}
            <Card3D className="p-4 sm:p-5 flex flex-col justify-center" data-testid="card-bot-info">
              <motion.h1
                {...fadeUp(0.3)}
                className="font-serif text-2xl sm:text-3xl italic text-white mb-1 leading-tight"
                style={{ letterSpacing: "-0.01em" }}
              >
                Echo™{" "}
                <span style={{ fontFamily: "Inter, sans-serif", fontStyle: "normal", fontWeight: 300, fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", letterSpacing: "0.04em" }}>
                  (에코) – Music Bot
                </span>
              </motion.h1>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                className="w-16 h-px mb-4 mt-2 origin-left"
                style={{ background: "rgba(255,255,255,0.2)" }}
              />
              <div className="flex flex-col gap-0">
                {infoRows.map((row, i) => (
                  <motion.div
                    key={row.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.38 + i * 0.07, duration: 0.45 }}
                    className="flex items-baseline py-2"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                    data-testid={`info-row-${row.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    <span className="flex-shrink-0 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.42)", width: "120px", lineHeight: 1.2, letterSpacing: "0.11em" }}>
                      {row.label}:
                    </span>
                    <span className="text-white text-sm text-right flex-1 leading-tight font-light">
                      {row.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Card3D>
          </div>

          {/* BOTTOM SECTION */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.85fr_1fr] gap-3 sm:gap-5">
            {/* LEFT: Modules + Skills */}
            <div className="flex flex-col gap-3 sm:gap-5">
              <Card3D className="p-4 sm:p-5" intensity={8} data-testid="card-modules">
                <h2 className="font-serif text-xl sm:text-2xl italic text-white mb-4" style={{ letterSpacing: "-0.01em" }}>Modules</h2>
                <div className="flex flex-col gap-0">
                  {modules.map((mod, i) => (
                    <motion.div
                      key={mod.title}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.09, duration: 0.45 }}
                      className="py-2.5 cursor-default group"
                      style={{ borderBottom: i < modules.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}
                      data-testid={`module-${i}`}
                    >
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-white font-semibold text-sm group-hover:text-white transition-colors" style={{ transition: "text-shadow 0.2s" }}>{mod.title}</span>
                        <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "10px" }}>{mod.sub}</span>
                      </div>
                      <p style={{ color: "rgba(255,255,255,0.48)", fontSize: "11.5px", lineHeight: 1.55 }}>{mod.description}</p>
                    </motion.div>
                  ))}
                </div>
              </Card3D>

              <Card3D className="p-4 sm:p-5" intensity={8} data-testid="card-skills">
                <h2 className="font-serif text-xl sm:text-2xl italic text-white mb-5" style={{ letterSpacing: "-0.01em" }}>System-Skills</h2>
                <div className="grid grid-cols-1 gap-4">
                  {skills.map((skill, i) => (
                    <CircularProgress
                      key={skill.label}
                      label={skill.label}
                      percent={skill.percent}
                      description={skill.description}
                      delay={i * 160}
                    />
                  ))}
                </div>
              </Card3D>
            </div>

            {/* CENTER: Flower */}
            <Card3D
              className="overflow-hidden relative sm:block"
              intensity={6}
              style={{ minHeight: "320px" }}
              data-testid="card-decoration"
            >
              <div className="absolute inset-0 p-4 flex items-center justify-center">
                <FlowerDecoration />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(5,5,5,0.5), transparent)" }} />
            </Card3D>

            {/* RIGHT: System */}
            <Card3D className="p-4 sm:p-5 flex flex-col" intensity={8} data-testid="card-system">
              <h2 className="font-serif text-xl sm:text-2xl italic text-white mb-4" style={{ letterSpacing: "-0.01em" }}>System</h2>
              <p className="leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.62)", fontSize: "12.5px", lineHeight: 1.8, textAlign: "justify" }}>
                Echo™ is a high-performance Discord music bot built with a Lavalink-based streaming system, supporting multi-node fallback, ultra-low latency playback, and intelligent queue handling. It integrates AI-based playlist generation and optimized audio delivery.
              </p>

              <div className="mt-5 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.28)", letterSpacing: "0.15em" }}>Audio Sources</p>
                {["YouTube", "Spotify", "SoundCloud", "Apple Music", "Deezer"].map((src, i) => (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.72 + i * 0.06, duration: 0.4 }}
                    className="flex items-center gap-2 py-1.5"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
                    data-testid={`source-${src.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    <motion.div
                      className="w-1 h-1 rounded-full"
                      style={{ background: "rgba(255,255,255,0.4)" }}
                      whileHover={{ scale: 2, background: "rgba(255,255,255,0.9)" }}
                    />
                    <span style={{ color: "rgba(255,255,255,0.68)", fontSize: "12px" }}>{src}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 pt-4 flex flex-col gap-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <motion.a
                  href="https://discord.com/oauth2/authorize?client_id=1234567890&scope=bot+applications.commands&permissions=8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-medium text-black relative overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.95)" }}
                  whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.97 }}
                  data-testid="link-add-server-secondary"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
                  </svg>
                  Add Echo™ to Server
                </motion.a>
                <motion.a
                  href="https://discord.gg/echo-support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-medium card-glass"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  data-testid="link-support-secondary"
                >
                  Join Support Server
                </motion.a>
              </div>
            </Card3D>
          </div>

          {/* Corner accents */}
          {["top-3 left-3 border-l border-t", "top-3 right-3 border-r border-t", "bottom-3 left-3 border-l border-b", "bottom-3 right-3 border-r border-b"].map((cls, i) => (
            <motion.div
              key={i}
              className={`absolute w-3 h-3 ${cls}`}
              style={{ borderColor: "rgba(255,255,255,0.18)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.05 }}
            />
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          {...fadeUp(0.8)}
          className="text-center mt-5"
          style={{ color: "rgba(255,255,255,0.18)", fontSize: "10px", letterSpacing: "0.14em" }}
        >
          ECHO™ © 2025 · ALL RIGHTS RESERVED · SYSTEM ID 89
        </motion.div>
      </motion.div>
    </div>
  );
}
