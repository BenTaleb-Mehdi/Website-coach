// components/BeforeAfterSlider.tsx
"use client";
import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";

interface SliderProps {
  beforeImg: string;
  afterImg: string;
  clientName: string;
  achievement: string;
  duration?: string;
}

export default function BeforeAfterSlider({ beforeImg, afterImg, clientName, achievement, duration }: SliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="bg-white dark:bg-[#0D0D0D] border border-zinc-200 dark:border-zinc-900 rounded-2xl overflow-hidden p-4 w-full mx-auto shadow-lg dark:shadow-2xl hover:border-zinc-300 dark:hover:border-zinc-800 transition-colors duration-300">
      <div className="relative h-[440px] w-full select-none rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-950">
        {/* After View */}
        <img src={afterImg} alt="After Outcome" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute top-4 right-4 bg-[#82FF00] text-black text-[10px] font-black uppercase px-2.5 py-1 rounded tracking-widest z-10">AFTER</div>

        {/* Before View Overlaid */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img src={beforeImg} alt="Before Entry" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute top-4 left-4 bg-white/90 dark:bg-zinc-900/90 text-zinc-900 dark:text-white text-[10px] font-black uppercase px-2.5 py-1 rounded tracking-widest border border-zinc-200 dark:border-zinc-800 z-10">BEFORE</div>
        </div>

        {/* Input Interactive Range Track */}
        <input 
          type="range" min="0" max="100" value={sliderPosition} 
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
        />

        {/* Custom Neon Divider Bar Line */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-[#82FF00] z-20 pointer-events-none shadow-[0_0_10px_#82FF00]" style={{ left: `${sliderPosition}%` }}>
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 bg-white dark:bg-black text-[#82FF00] border-2 border-[#82FF00] rounded-full flex items-center justify-center shadow-2xl">
            <ArrowLeftRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Info Stack Below Image */}
      <div className="mt-5 flex justify-between items-center px-1">
        <div>
          <h3 className="text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">{clientName}</h3>
          <p className="text-zinc-600 dark:text-[#82FF00] font-bold text-xs uppercase tracking-wider mt-1">{achievement}</p>
        </div>
        {duration && (
          <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-md bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400">
            {duration}
          </span>
        )}
      </div>
    </div>
  );
}