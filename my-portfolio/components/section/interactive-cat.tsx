"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  useSpring,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";

export const CatSystemCore = () => {
  const [happiness, setHappiness] = useState(100);
  const [hunger, setHunger] = useState(0);
  const [status, setStatus] = useState("PURRING"); // Status: PURRING, HUNGRY, ANGRY

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const [isHovering, setIsHovering] = useState(false);

  // Smooth rotation for the "Cat Core"
  const rotateX = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const rotateY = useSpring(mouseX, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Rotate core based on mouse position
      const x = (e.clientX - window.innerWidth / 2) / 15;
      const y = (e.clientY - window.innerHeight / 2) / 15;
      mouseX.set(x);
      mouseY.set(-y);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const gameLoop = setInterval(() => {
      // Hunger increases over time
      setHunger((prev) => Math.min(100, prev + 2));

      // If too hungry, happiness drops rapidly
      if (hunger > 70) {
        setHappiness((prev) => Math.max(0, prev - 3));
        setStatus("HUNGRY 😿");
      } else if (happiness < 30) {
        setStatus("ANGRY 😾");
      } else {
        setStatus("PURRING 😸");
      }
    }, 1000);

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(gameLoop);
    };
  }, [hunger, happiness]);

  const handleFeed = () => {
    // Feeding the cat resets hunger and boosts happiness
    setHunger(0);
    setHappiness((prev) => Math.min(100, prev + 15));
    setStatus("YUMMY! 🐟");
    setTimeout(() => setStatus("PURRING"), 1000);
  };

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`relative w-full h-screen flex flex-col items-center justify-center bg-zinc-950 overflow-hidden font-mono text-zinc-300 transition-all ${
        isHovering ? "cursor-none" : "cursor-default"
      }`}
    >
      {/* Custom Fish Cursor - Only visible when hovering */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            style={{
              x: cursorX,
              y: cursorY,
              translateX: "-50%", // Center the fish on the actual cursor point
              translateY: "-50%",
              pointerEvents: "none",
            }}
            className="fixed top-0 left-0 z-[9999] text-3xl select-none"
          >
            🐟
          </motion.div>
        )}
      </AnimatePresence>
      {/* Background Warning Glow */}
      <div className="absolute inset-0 transition-opacity duration-1000" />

      {/* Stats UI */}
      <div className="absolute top-8 left-8 space-y-4 z-10">
        <div>
          <div className="text-[10px] uppercase tracking-widest mb-1 opacity-50">
            Hunger Level
          </div>
          <div className="w-48 h-1 bg-zinc-900 rounded-full overflow-hidden">
            <motion.div
              animate={{ width: `${hunger}%` }}
              className={`h-full ${hunger > 70 ? "bg-orange-500" : "bg-sky-400"}`}
            />
          </div>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-widest mb-1 opacity-50">
            Mood Stability
          </div>
          <div className="w-48 h-1 bg-zinc-900 rounded-full overflow-hidden">
            <motion.div
              animate={{ width: `${happiness}%` }}
              className={`h-full ${happiness < 40 ? "bg-red-500" : "bg-pink-500"}`}
            />
          </div>
        </div>

        <div className="text-xs font-bold tracking-tighter">
          STATUS:{" "}
          <span className={hunger > 70 ? "text-orange-500" : "text-pink-400"}>
            {status}
          </span>
        </div>
      </div>

      {/* The Cat Core */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          perspective: 1000,
          cursor: isHovering ? "none" : "pointer",
        }}
        onClick={handleFeed}
        className="relative w-64 h-64 cursor-pointer group"
      >
        {/* Glow Effect */}
        <motion.div
          animate={{
            scale: hunger > 70 ? [1, 1.3, 1] : [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ repeat: Infinity, duration: hunger > 70 ? 0.5 : 3 }}
          className={`absolute inset-0 m-auto w-32 h-32 rounded-full blur-xl ${hunger > 70 ? "bg-red-500" : "bg-green-500"}`}
        />

        {/* Orbiting Elements (Meow Particles) */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 8 + i * 2,
              ease: "linear",
            }}
            className="absolute inset-0 border border-white/5 rounded-full"
            style={{ rotateX: i * 30, rotateY: i * 60 }}
          />
        ))}

        {/* Central Cat Face */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-6xl select-none"
          >
            {hunger > 80 ? "🙀" : happiness < 30 ? "😿" : "🐱"}
          </motion.div>
        </div>

        {/* Outer Rotating Frame */}
        <div className="absolute inset-0 border-2 border-white/10 rounded-3xl rotate-45 group-hover:border-white/30 transition-colors" />
      </motion.div>

      {/* Control Panel */}
      <div className="mt-20 flex flex-col items-center gap-4 z-10">
        <p className="text-[9px] tracking-[0.4em] opacity-40">
          CAT-CORE NEURAL INTERFACE
        </p>
        <div className="flex gap-4">
          <button
            onClick={handleFeed}
            style={{ cursor: isHovering ? "none" : "pointer" }}
            className="px-8 py-3 bg-transparent border border-white/20 text-[10px] font-bold tracking-widest hover:bg-pink-500 hover:border-pink-500 hover:text-white transition-all active:scale-95"
          >
            DISPENSE TREAT (🐟)
          </button>
        </div>
        {happiness <= 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 text-[10px] mt-4"
          >
            SYSTEM FAILURE: CAT HAS LEFT THE BUILDING.
          </motion.div>
        )}
      </div>

      {/* Decorative scanlines */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%]" />
    </div>
  );
};
