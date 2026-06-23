// components/ComingSoonCard.tsx
"use client";
import { Clock } from "lucide-react";

interface ComingSoonProps {
  clientName: string;
  achievement?: string;
}

export default function ComingSoonCard({ clientName, achievement }: ComingSoonProps) {
  return (
    <div className="bg-white dark:bg-[#0D0D0D] border border-zinc-200 dark:border-zinc-900 rounded-2xl overflow-hidden p-4 w-full mx-auto shadow-lg dark:shadow-2xl">
      <div className="relative h-[440px] w-full select-none rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-950 flex flex-col items-center justify-center gap-3">
        <div className="w-14 h-14 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
          <Clock className="w-6 h-6 text-zinc-400 dark:text-zinc-500" />
        </div>
        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          Bientôt Disponible
        </span>
        {achievement && (
          <p className="text-xs text-zinc-400 dark:text-zinc-500 font-medium text-center px-4 italic">
            "{achievement}"
          </p>
        )}
      </div>

      <div className="mt-5 flex justify-between items-center px-1">
        <div>
          <h3 className="text-xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">{clientName}</h3>
        </div>
      </div>
    </div>
  );
}
