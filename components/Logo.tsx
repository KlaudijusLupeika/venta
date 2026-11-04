interface LogoProps {
  size?: "sm" | "lg";
  theme?: "light" | "dark";
  className?: string;
}

export default function Logo({ size = "sm", theme = "light", className = "" }: LogoProps) {
  const textColor = theme === "light" ? "text-ink" : "text-footer-paper";
  const subColor = theme === "light" ? "text-stone" : "text-footer-paper/50";
  const borderColor = theme === "light" ? "border-stone/35" : "border-footer-paper/25";

  const titleSize = size === "lg" ? "text-[26px] md:text-[30px]" : "text-[14px] sm:text-[15px]";
  const titleTracking = size === "lg" ? "tracking-[0.22em]" : "tracking-[0.13em]";
  const subSize = size === "lg" ? "text-[11px]" : "text-[8px]";
  const subGap = size === "lg" ? "mt-2.5" : "mt-1";
  const padding = size === "lg" ? "px-8 py-4" : "px-3.5 py-1.5";
  const titleWeight = size === "lg" ? "font-light" : "font-normal";

  return (
    <div className={`inline-flex flex-col items-center border ${borderColor} ${padding} ${className}`}>
      <span className={`font-logo ${titleWeight} uppercase ${titleTracking} ${titleSize} ${textColor} leading-none whitespace-nowrap`}>
        Venta City
      </span>
      <span className={`${subGap} font-sans ${subSize} uppercase tracking-[0.32em] leading-none ${subColor} whitespace-nowrap`}>
        Apartments
      </span>
    </div>
  );
}
