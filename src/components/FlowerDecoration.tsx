export default function FlowerDecoration() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          width: "260px",
          height: "260px",
          background: "rgba(255,255,255,0.06)",
          borderRadius: "50%",
          filter: "blur(70px)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Letters */}
      <div style={{ position: "relative", width: "100%", height: "100%" }}>

        {/* E */}
        <span className="float1 letter">E</span>

        {/* C */}
        <span className="float2 letter">C</span>

        {/* H */}
        <span className="float3 letter">H</span>

        {/* O */}
        <span className="float4 letter">O</span>

        {/* TM */}
        <span className="tm">™</span>

      </div>

      {/* Styles */}
      <style>{`
        .letter {
          position: absolute;
          color: white;
          font-size: 48px;
          font-family: serif;
          opacity: 0.9;
        }

        .float1 {
          top: 20%;
          left: 15%;
          transform: rotate(-12deg);
          animation: floatY 4s ease-in-out infinite;
        }

        .float2 {
          top: 35%;
          left: 35%;
          transform: rotate(8deg);
          animation: floatY 5s ease-in-out infinite;
        }

        .float3 {
          top: 55%;
          left: 55%;
          transform: rotate(-6deg);
          animation: floatY 4.5s ease-in-out infinite;
        }

        .float4 {
          top: 30%;
          left: 60%;
          transform: rotate(10deg);
          animation: floatY 6s ease-in-out infinite;
        }

        .tm {
          position: absolute;
          top: 28%;
          left: 75%;
          color: white;
          font-size: 14px;
          opacity: 0.7;
        }

        @keyframes floatY {
          0%, 100% {
            transform: translateY(0px) rotate(var(--rot, 0deg));
          }
          50% {
            transform: translateY(-12px) rotate(var(--rot, 0deg));
          }
        }
      `}</style>
    </div>
  );
}
