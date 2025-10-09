export default function SectionDivider() {
  return (
    <div
      className="relative py-8 px-4 sm:px-6 lg:px-8"
      aria-hidden="true"
      data-testid="section-divider"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Main gradient line */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-white/20 to-transparent">
          {/* Glow effect */}
          <div className="absolute inset-0 blur-sm bg-gradient-to-r from-transparent via-[#007AFF]/30 to-transparent"></div>

          {/* Center dot */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white/40 rounded-full">
            <div className="absolute inset-0 bg-[#007AFF]/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
