export default function BotImage() {
  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{
        borderRadius: "12px",
        background: "#050505",
      }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-black" />

      {/* BOT IMAGE */}
      <img
        src="https://cdn.discordapp.com/avatars/1455571643148533853/f6e9dc891587633d353560934ddfee30.png?size=1024"
        alt="Echo Bot"
        className="w-full h-full object-cover relative z-10"
      />

      {/* Bottom fade */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-black/40" />
    </div>
  );
}
