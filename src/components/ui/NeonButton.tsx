"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface NeonButtonProps extends HTMLMotionProps<"button"> {
  variant?: "violet" | "cyan" | "green";
  glow?: boolean;
}

export const NeonButton = ({
  children,
  className,
  variant = "cyan",
  glow = true,
  ...props
}: NeonButtonProps) => {
  const variantClasses = {
    violet: "border-neon-violet text-white hover:bg-neon-violet/20 shadow-[0_0_15px_rgba(188,19,254,0.4)] hover:shadow-[0_0_30px_rgba(188,19,254,0.6)]",
    cyan: "border-neon-cyan text-white hover:bg-neon-cyan/20 shadow-[0_0_15px_rgba(0,243,255,0.4)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)]",
    green: "border-neon-green text-white hover:bg-neon-green/20 shadow-[0_0_15px_rgba(207,255,4,0.4)] hover:shadow-[0_0_30px_rgba(207,255,4,0.6)]",
  };

  return (
    <motion.button
      whileHover={{ 
        scale: 1.02, 
        y: -1,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "px-8 py-3 bg-white/[0.03] border font-display uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer relative overflow-hidden group",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
      <span className="relative z-10">{children as React.ReactNode}</span>
    </motion.button>
  );
};
