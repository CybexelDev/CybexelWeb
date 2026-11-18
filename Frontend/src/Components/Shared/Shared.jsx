// Reusable bits used across sections
export const BLUE_GRADIENT = "bg-gradient-to-b from-[#6aa6ff] via-[#2f5fd0] to-[#14307f]";

export function Badge({ children, dark = false }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs ${
        dark ? "bg-white/20 text-white" : "bg-white text-slate-600 shadow-sm"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
      {children}
    </span>
  );
}

export function SectionTitle({ children, sub, dark = false, center = false }) {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className={`text-4xl font-semibold uppercase tracking-tight sm:text-5xl ${dark ? "text-white" : "text-[#1a3a9c]"}`}>
        {children}
      </h2>
      {sub && <p className={`mt-2 max-w-2xl text-sm ${center ? "mx-auto" : ""} ${dark ? "text-white/80" : "text-slate-600"}`}>{sub}</p>}
    </div>
  );
}
