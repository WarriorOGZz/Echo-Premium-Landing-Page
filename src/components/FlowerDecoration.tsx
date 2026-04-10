import { useEffect, useState } from "react";

export default function FlowerDecoration() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setPos({ x, y });
  };

  return (
    <div
      onMouseMove={handleMove}
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
          transform: `translate(-50%, -50%) translate(${pos.x * 20}px, ${pos.y * 20}px)`,
        }}
      />

      {/* Letters */}
      <Letter style={{
        top: "20%",
        left: "15%",
        rotate: -12,
        delay: 0,
        pos
      }}>E</Letter>

      <Letter style={{
        top: "35%",
        left: "35%",
        rotate: 8,
        delay: 0.5,
        pos
      }}>C</Letter>

      <Letter style={{
        top: "55%",
        left: "55%",
        rotate: -6,
        delay: 1,
        pos
      }}>H</Letter>

      <Letter style={{
        top: "30%",
        left: "60%",
        rotate: 10,
        delay: 1.5,
        pos
      }}>O</Letter>

      {/* TM */}
      <span
        style={{
          position: "absolute",
          top: "28%",
          left: "75%",
          color: "white",
          fontSize: "14px",
          opacity: 0.7,
        }}
      >
        ™
      </span>
    </div>
  );
}

function Letter({ children, style }: any) {
  const { top, left, rotate, delay, pos } = style;

  return (
    <span
      style={{
        position: "absolute",
        top,
        left,
        color: "white",
        fontSize: "48px",
        fontFamily: "serif",
        opacity: 0.9,
        transform: `
          translate(${pos.x * 15}px, ${pos.y * 15}px)
          rotate(${rotate}deg)
        `,
        animation: `floatY 4s ease-in-out ${delay}s infinite`,
      }}
    >
      {children}

      <style>{`
        @keyframes floatY {
          0%, 100% {
            transform: translateY(0px) rotate(${rotate}deg);
          }
          50% {
            transform: translateY(-12px) rotate(${rotate}deg);
          }
        }
      `}</style>
    </span>
  );
}
