"use client";
import { Play } from "lucide-react";

interface YouTubeButtonProps {
  url: string;
  className?: string;
  size?: "small" | "large";
}

export default function YouTubeButton({
  url,
  className = "",
}: YouTubeButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center justify-center gap-2
        bg-red-600 hover:bg-red-700 
        text-white font-medium text-base
        rounded-lg border border-red-700
        transition-all duration-200
        shadow-sm hover:shadow-md
        px-2 py-3 min-w-[160px] h-[38px]
        
        ${className}
      `}
    >
      <Play className="size-4 fill-current" />
      <span>Watch Video</span>
    </a>
  );
}
