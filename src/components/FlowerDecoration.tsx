export default function FlowerDecoration() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      
      {/* Simple glowing circle */}
      <div className="relative flex items-center justify-center">

        {/* Glow */}
        <div className="absolute w-40 h-40 bg-white/10 rounded-full blur-2xl" />

        {/* Main circle */}
        <div className="w-20 h-20 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.4)]" />

      </div>

    </div>
  );
}
