export function Logo({ className = '', size = 32 }: { className?: string; size?: number }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="48" y2="48">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#2D1B69" />
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="12" fill="url(#logoGrad)" />
        <path
          d="M12 14L18 34L24 20L30 34L36 14"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="24" cy="20" r="3" fill="#06B6D4" />
        <circle cx="15" cy="24" r="1.5" fill="rgba(255,255,255,0.5)" />
        <circle cx="33" cy="24" r="1.5" fill="rgba(255,255,255,0.5)" />
      </svg>
      <span
        className="tracking-tight"
        style={{ fontSize: size * 0.6 }}
      >
        <span className="font-medium">Wizard</span>
        <span className="font-bold">Tech</span>
      </span>
    </div>
  );
}
