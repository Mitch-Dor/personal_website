import React, { useRef, useEffect } from "react";

export default function RainbowRippleBackground() {
  const canvasRef = useRef(null);
  const ripples = useRef([]);
  let animationFrameId = useRef(null);
  let width = 0;
  let height = 0;
  let ctx = null;

  function hsvToRgb(h, s, v) {
    let c = v * s;
    let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    let m = v - c;
    let r1, g1, b1;

    if (h < 60) [r1, g1, b1] = [c, x, 0];
    else if (h < 120) [r1, g1, b1] = [x, c, 0];
    else if (h < 180) [r1, g1, b1] = [0, c, x];
    else if (h < 240) [r1, g1, b1] = [0, x, c];
    else if (h < 300) [r1, g1, b1] = [x, 0, c];
    else [r1, g1, b1] = [c, 0, x];

    return {
      r: Math.round((r1 + m) * 255),
      g: Math.round((g1 + m) * 255),
      b: Math.round((b1 + m) * 255),
    };
  }

  const draw = () => {
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);

    const now = performance.now();

    for (let i = ripples.current.length - 1; i >= 0; i--) {
      const ripple = ripples.current[i];
      const elapsed = (now - ripple.startTime) / 1000;
      const duration = 1.2;

      if (elapsed > duration) {
        ripples.current.splice(i, 1);
        continue;
      }

      const progress = elapsed / duration;
      const radius = ripple.maxRadius * progress;
      const alpha = 1 - progress;

      let hue = (ripple.hue + progress * 360) % 360;
      const { r, g, b } = hsvToRgb(hue, 1, 1);

      ctx.strokeStyle = `rgba(${r},${g},${b},${alpha.toFixed(3)})`;
      ctx.lineWidth = 3 * (1 - progress);
      ctx.beginPath();
      ctx.arc(ripple.x, ripple.y, radius, 0, 2 * Math.PI);
      ctx.stroke();
    }

    animationFrameId.current = requestAnimationFrame(draw);
  };

  const handleMouseMove = (event) => {
    ripples.current.push({
      x: event.clientX,
      y: event.clientY,
      startTime: performance.now(),
      maxRadius: 80 + Math.random() * 40,
      hue: Math.random() * 360,
    });
  };

  const handleMouseLeave = () => {
    ripples.current = [];
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", onResize);

    // Add mouse event listeners on window
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    draw();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "auto",
        userSelect: "none",
        zIndex: -1,
        backgroundColor: "none",
        display: "block",
      }}
    />
  );
}
