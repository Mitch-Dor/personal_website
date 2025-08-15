import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min.js";
import WAVES from "vanta/dist/vanta.waves.min.js";
import NET from "vanta/dist/vanta.net.min.js";
import GLOBE from "vanta/dist/vanta.globe.min.js";
import BIRDS from "vanta/dist/vanta.birds.min.js";
import "../css/animatedBackground.css";

export default function AnimatedBackground({ section }) {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    // Cleanup existing effect before creating a new one
    if (vantaEffect.current) {
      vantaEffect.current.destroy();
      vantaEffect.current = null;
    }

    let effect;
    switch (section) {
      case "headerBar":
        effect = GLOBE({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xb0bec5,
          color2: 0xffffff,
          size: 2,
          backgroundColor: 0x00796b
        })
      break;
      case "educationSection":
        effect = BIRDS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0xd9d9d9,
          color1: 0x00796b,
          color2: 0xe790e,
          separation: 50.00,
          backgroundAlpha: 0.00
        })
        break;
      case "unite-proSection":
        effect = NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xff673f,
          backgroundColor: 0x362251,
          maxDistance: 19.0
        });
        break;
      default:
        effect = FOG({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false
        });
        break;
    }

    vantaEffect.current = effect;

    // Destroy effect on unmount
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, [section]);

  return (
    <div
      ref={vantaRef}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1
      }}
    />
  );
}
