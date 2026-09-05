import { cn } from "@/lib/utils";

export function MiniPrimitiveLockup({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative h-10 w-10 shrink-0">
        <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
          <defs>
            <linearGradient id="mini-stroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#60D5FF" />
              <stop offset="0.52" stopColor="#AF9BFF" />
              <stop offset="1" stopColor="#FF8BD9" />
            </linearGradient>
            <linearGradient id="mini-core" x1="0" y1="0" x2="0.9" y2="1">
              <stop offset="0" stopColor="#60D5FF" stopOpacity="0.55" />
              <stop offset="1" stopColor="#FF8BD9" stopOpacity="0.18" />
            </linearGradient>
          </defs>
          <path d="M60 16 L101 92 L60 107 L19 92 Z" fill="white" stroke="url(#mini-stroke)" strokeWidth="5" />
          <path d="M60 16 L60 107" stroke="url(#mini-core)" strokeWidth="8" strokeLinecap="round" />
          <path d="M60 16 L19 92" stroke="url(#mini-stroke)" strokeOpacity="0.6" strokeWidth="4" />
          <path d="M60 16 L101 92" stroke="url(#mini-stroke)" strokeOpacity="0.6" strokeWidth="4" />
        </svg>
      </div>
      <div className="leading-none">
        <div className="text-[0.94rem] font-semibold tracking-[-0.05em] text-black">Primitive Labs</div>
        <div className="mt-1 text-[0.54rem] uppercase tracking-[0.38em] text-black/45">Research studio</div>
      </div>
    </div>
  );
}

export function PrismFeatureLockup({ className }: { className?: string }) {
  return (
    <div className={cn("flex w-full max-w-[1050px] flex-col items-center justify-center", className)}>
      <svg viewBox="0 0 980 530" className="h-auto w-full overflow-visible" role="img" aria-label="Primitive Labs prism mark">
        <defs>
          <linearGradient id="brand-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#60D5FF" />
            <stop offset="0.5" stopColor="#AF9BFF" />
            <stop offset="1" stopColor="#FF8BD9" />
          </linearGradient>
          <linearGradient id="brand-fill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="0.65" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="brand-core" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#60D5FF" stopOpacity="0.9" />
            <stop offset="1" stopColor="#FF8BD9" stopOpacity="0.65" />
          </linearGradient>
          <linearGradient id="beam-white" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0.78" />
          </linearGradient>
          <filter id="glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="shadow" x="-30%" y="-30%" width="200%" height="200%">
            <feDropShadow dx="0" dy="25" stdDeviation="22" floodColor="#14161a" floodOpacity="0.1" />
          </filter>
        </defs>

        <polygon points="24,263 300,235 300,291 24,318" fill="url(#beam-white)" opacity="0.82" />

        <g filter="url(#glow)" opacity="0.78">
          <polygon points="554,224 934,112 934,135 554,246" fill="#ff758f" />
          <polygon points="554,240 934,162 934,186 554,257" fill="#ffa56d" />
          <polygon points="554,255 934,214 934,238 554,270" fill="#f0d468" />
          <polygon points="554,270 934,264 934,288 554,281" fill="#7ecf8f" />
          <polygon points="554,284 934,314 934,338 554,292" fill="#70bdf8" />
          <polygon points="554,297 934,362 934,386 554,303" fill="#9b8ff5" />
          <polygon points="554,311 934,410 934,434 554,314" fill="#d986eb" />
        </g>

        <g filter="url(#shadow)">
          <path d="M310 88 L556 265 L310 442 Z" fill="url(#brand-fill)" stroke="url(#brand-stroke)" strokeWidth="5" />
          <path d="M310 88 L383 265 L310 442" fill="none" stroke="url(#brand-stroke)" strokeOpacity="0.6" strokeWidth="3.8" />
          <path d="M383 265 L556 265" fill="none" stroke="url(#brand-stroke)" strokeOpacity="0.55" strokeWidth="3.8" />
          <path d="M310 88 L556 265" fill="none" stroke="#ffffff" strokeOpacity="0.75" strokeWidth="2.6" />
          <path d="M383 265 L310 442" fill="none" stroke="#ffffff" strokeOpacity="0.45" strokeWidth="2.2" />
          <path d="M383 265 L383 118" fill="none" stroke="url(#brand-core)" strokeWidth="9" strokeLinecap="round" opacity="0.86" />
        </g>
      </svg>

      <div className="-mt-1 flex items-end gap-6">
        <div className="h-16 w-px bg-black/14" />
        <div>
          <div className="text-[clamp(2rem,7vw,4.8rem)] font-semibold tracking-[-0.065em] text-black">Primitive</div>
          <div className="mt-1 text-[clamp(0.72rem,1.8vw,1rem)] font-medium uppercase tracking-[0.42em] text-black/52">Labs</div>
        </div>
      </div>
    </div>
  );
}

export default MiniPrimitiveLockup;