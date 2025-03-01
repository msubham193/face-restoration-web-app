"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Navbar from "../Navbar";
import { SparklesPreview } from "../Sparkle";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-100 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        GFPGAN <br /> The AI first Face Restoration
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "  min-h-screen  overflow-hidden bg-slate-950 w-full rounded-md z-0",
        className
      )}
    >
      <Navbar />
      <SparklesPreview />
    </div>
  );
};
