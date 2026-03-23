import { cn } from "@/lib/utils";
import React from "react";

export const GlassCard = ({
  children,
  className,
  bordered = true,
}: {
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
}) => {
  return (
    <div
      className={cn(
        "glass p-6 backdrop-blur-xl rounded-none relative overflow-hidden transition-all duration-500",
        "bg-white/[0.03] border border-white/10",
        "shadow-[inset_0_0_20px_rgba(255,255,255,0.02),0_10px_40px_rgba(0,0,0,0.5)]",
        bordered && "border-l-4 border-l-neon-cyan shadow-[inset_0_0_30px_rgba(0,255,255,0.05)]",
        className
      )}
    >
      {/* Dynamic light accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Industrial corner accents */}
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-neon-cyan/40" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-neon-cyan/40" />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
