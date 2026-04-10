export default function FlowerDecoration() {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute w-80 h-80 bg-white/5 rounded-full blur-3xl" />

      {/* Main text */}
      <h1
        className="text-white text-5xl md:text-6xl font-serif tracking-[0.4em] select-none"
        style={{
          textShadow: "0 0 20px rgba(255,255,255,0.25), 0 0 60px rgba(255,255,255,0.1)",
        }}
      >
        E C H O™
      </h1>

    </div>
  );
}
