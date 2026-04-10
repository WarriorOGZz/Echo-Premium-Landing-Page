export default function FlowerDecoration() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Glow background */}
      <div
        style={{
          position: "absolute",
          width: "260px",
          height: "260px",
          background: "rgba(255,255,255,0.06)",
          borderRadius: "50%",
          filter: "blur(70px)",
        }}
      />

      {/* Letters */}
      <div style={{ position: "relative", width: "100%", height: "100%" }}>

        {/* E */}
        <span style={{
          position: "absolute",
          top: "20%",
          left: "15%",
          color: "white",
          fontSize: "42px",
          transform: "rotate(-12deg)",
          opacity: 0.8
        }}>
          E
        </span>

        {/* C */}
        <span style={{
          position: "absolute",
          top: "35%",
          left: "35%",
          color: "white",
          fontSize: "48px",
          transform: "rotate(8deg)",
          opacity: 0.9
        }}>
          C
        </span>

        {/* H */}
        <span style={{
          position: "absolute",
          top: "55%",
          left: "55%",
          color: "white",
          fontSize: "46px",
          transform: "rotate(-6deg)",
          opacity: 0.85
        }}>
          H
        </span>

        {/* O */}
        <span style={{
          position: "absolute",
          top: "30%",
          left: "60%",
          color: "white",
          fontSize: "52px",
          transform: "rotate(10deg)",
          opacity: 1
        }}>
          O
        </span>

        {/* TM */}
        <span style={{
          position: "absolute",
          top: "28%",
          left: "75%",
          color: "white",
          fontSize: "16px",
          opacity: 0.7
        }}>
          ™
        </span>

      </div>
    </div>
  );
}
