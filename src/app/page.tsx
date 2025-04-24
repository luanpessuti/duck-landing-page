"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Funções originais para o grid
  const getColSizes = () => {
    switch (hovered) {
      case "ABOUT": return "grid-cols-[3fr_1fr_2fr]";
      case "JOURNAL": return "grid-cols-[2fr_1fr_3fr]";
      case "WORK": return "grid-cols-[3fr_1fr_2fr]";
      case "CONTACT": return "grid-cols-[2fr_1fr_3fr]";
      case "DUCK": return "grid-cols-[1fr_3fr_1fr]";
      default: return "grid-cols-[2fr_1fr_2fr]";
    }
  };

  const getRowSizes = () => {
    switch (hovered) {
      case "ABOUT": return "grid-rows-[3fr_1fr_2fr]";
      case "JOURNAL": return "grid-rows-[3fr_1fr_2fr]";
      case "WORK": return "grid-rows-[2fr_1fr_3fr]";
      case "CONTACT": return "grid-rows-[2fr_1fr_3fr]";
      case "DUCK": return "grid-rows-[1fr_3fr_1fr]";
      default: return "grid-rows-[2fr_1fr_2fr]";
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background text-foreground">
      {/* Reset de estilos padrão */}
      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
      `}</style>

      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="text-4xl font-duck text-orange"
            >
              DUCK
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed inset-0" // Alterado para fixed
      >
        {/* Fitas - Ajuste para usar viewport units */}
        <div className="absolute top-0 left-0 w-[100vw] h-8 bg-gray text-black border-b border-black flex items-center overflow-hidden z-20">
          <div className="animate-marquee whitespace-nowrap flex">
            {[...Array(4)].map((_, i) => (
              <span key={`top-${i}`} className="inline-flex font-body text-background items-center px-4">
                DUCK Studios • Creative Development • Est. 2025 • Minimal Design •
              </span>
            ))}
          </div>
        </div>

        {/* Fita Inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gray text-black border-b border-black flex items-center overflow-hidden z-20">
          <div className="animate-marquee-reverse whitespace-nowrap flex">
            {[...Array(4)].map((_, i) => (
              <span key={`bottom-${i}`} className="inline-flex font-body text-background items-center px-4">
                Branding • Integrated campaigns • Visual identity • Social media • Content creation •
              </span>
            ))}
          </div>
        </div>

        {/* Fita Esquerda */}
        <div className="absolute top-0 bottom-0 left-0 w-8 bg-gray text-black border-b border-black flex items-center overflow-hidden z-10">
          <div className="animate-marquee-vertical whitespace-nowrap">
            {[...Array(6)].map((_, i) => (
              <div key={`left-${i}`} className="writing-vertical font-body text-background px-1 py-2">
                ↓ Explore ↓ Creativity ↓ Portfolio ↓
              </div>
            ))}
          </div>
        </div>

        {/* Fita Direita */}
        <div className="absolute top-0 bottom-0 right-0 w-8 bg-gray text-black border-b border-black flex items-center overflow-hidden z-10">
          <div className="animate-marquee-vertical-reverse whitespace-nowrap origin-center rotate-180">
            {[...Array(6)].map((_, i) => (
              <div key={`right-${i}`} className="writing-vertical font-body text-background px-1 py-2">
                ↑ Follow ↑ @duckstudio ↑ Dribbble ↑
              </div>
            ))}
          </div>
        </div>

        {/* 2. FORMAS CENTRAIS */}
        <div className="absolute inset-8 pointer-events-none">
          <div
            className={`h-full w-full grid ${getColSizes()} ${getRowSizes()} gap-0 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]`}
          >
            {/* ABOUT */}
            <Link
              href="/about"
              onMouseEnter={() => setHovered("ABOUT")}
              onMouseLeave={() => setHovered(null)}
              className="col-span-2 row-span-1 border-2 border-black flex items-center justify-center p-4 pointer-events-auto hover:bg-gray hover:text-orange transition-all duration-300"
            >
              <h2 className="text-2xl md:text-3xl">ABOUT</h2>
            </Link>

            {/* PARCERIAS */}
            <Link
              href="/journal"
              onMouseEnter={() => setHovered("JOURNAL")}
              onMouseLeave={() => setHovered(null)}
              className="col-span-1 row-span-2 border-2 border-black flex items-center justify-center p-4 pointer-events-auto hover:bg-gray hover:text-orange transition-all duration-300"
            >
              <h2 className="text-2xl md:text-3xl">JOURNAL</h2>
            </Link>

            {/* WORK */}
            <Link
              href="/work"
              onMouseEnter={() => setHovered("WORK")}
              onMouseLeave={() => setHovered(null)}
              className="col-span-1 row-span-2 border-2 border-black flex items-center justify-center p-4 pointer-events-auto hover:bg-gray hover:text-orange transition-all duration-300"
            >
              <h2 className="text-2xl md:text-3xl">WORK</h2>
            </Link>

           {/* DUCK */}
<motion.div
  onMouseEnter={() => setHovered("DUCK")}
  onMouseLeave={() => setHovered(null)}
  className="col-span-1 row-span-1 border-2 bg-gray text-orange border-black flex items-center justify-center p-4 pointer-events-auto relative overflow-hidden group"
  whileHover={{
    backgroundColor: "#f3ede7", // Bege claro da paleta
    transition: { duration: 0.4 },
  }}
>


  {/* Glow sutil atrás do texto */}
  <motion.div
    className="absolute w-40 h-40 bg-orange/30 blur-2xl rounded-full z-0"
    initial={{ opacity: 0, scale: 0.6 }}
    animate={{
      opacity: hovered === "DUCK" ? 1 : 0,
      scale: hovered === "DUCK" ? 1 : 0.6,
    }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  />

  {/* Texto DUCK com leve animação */}
  <motion.h2
    className="text-3xl md:text-4xl !font-duck relative z-10"
    whileHover={{ scale: 1.1, rotate: -1 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    DUCK
  </motion.h2>
</motion.div>

            {/* CONTACT */}
            <Link
              href="/contact"
              onMouseEnter={() => setHovered("CONTACT")}
              onMouseLeave={() => setHovered(null)}
              className="col-span-2 row-span-1 border-2 border-black flex items-center justify-center p-4 pointer-events-auto hover:bg-gray hover:text-orange transition-all duration-300"
            >
              <h2 className="text-2xl md:text-3xl">CONTACT</h2>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}