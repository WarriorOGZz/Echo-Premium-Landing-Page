export default function FlowerDecoration() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          width: "250px",
          height: "250px",
          background: "rgba(255,255,255,0.08)",
          borderRadius: "50%",
          filter: "blur(60px)",
        }}
      />

      {/* Text */}
      <h1
        style={{
          color: "white",
          fontSize: "48px",
          letterSpacing: "0.4em",
          fontFamily: "serif",
          textAlign: "center",
          zIndex: 2,
          textShadow:
            "0 0 20px rgba(255,255,255,0.25), 0 0 60px rgba(255,255,255,0.1)",
        }}
      >
        E C H O™
      </h1>
    </div>
  );
}
