const paths: Record<string, JSX.Element> = {
  parking: (
    <>
      <rect x="3.5" y="6" width="19" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 9.5h4.2a2.6 2.6 0 0 1 0 5.2H9V9.5Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 14.7V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  garden: (
    <>
      <path d="M13 22V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13 13C13 13 6 12 6 6c0 0 7 0 7 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M13 13c0 0 7-1 7-7 0 0-7 0-7 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 22h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  wifi: (
    <>
      <path d="M4 10.5a13 13 0 0 1 18 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7.5 14a8 8 0 0 1 11 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 17.5a3 3 0 0 1 4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="13" cy="20.5" r="1.1" fill="currentColor" />
    </>
  ),
  tv: (
    <>
      <rect x="3.5" y="5.5" width="19" height="13" rx="1.8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9.5 22h7M13 18.5V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  walk: (
    <>
      <path d="M4 20V9l9-5 9 5v11" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9.5 20v-6.5h7V20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </>
  ),
  river: (
    <>
      <path d="M3 15c3-3 5 2 8 0s5 2 8 0s4-1 4-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 20c3-3 5 2 8 0s5 2 8 0s4-1 4-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 12V4M9.5 7 13 4l3.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  bike: (
    <>
      <circle cx="6.5" cy="18" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="19.5" cy="18" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.5 18 10 9h6l3.5 9M10 9 13 14h6.5M10 9H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 14 10.5 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  grill: (
    <>
      <path d="M5 13a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 13h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 16.5 5 22M18 16.5l1 5.5M9 16.5l-.5 5.5M15 16.5l.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13 3v4M9.5 4.5 11 7M16.5 4.5 15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  washer: (
    <>
      <rect x="3.5" y="3.5" width="19" height="19" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="13" cy="15" r="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="13" cy="15" r="2.4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="7.8" cy="6.8" r="0.9" fill="currentColor" />
      <circle cx="11.2" cy="6.8" r="0.9" fill="currentColor" />
    </>
  ),
  balcony: (
    <>
      <path d="M7 6.2 13 3l6 3.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 11h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5.5 11v10M9.8 11v10M14.2 11v10M18.5 11v10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M3 21h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  lock: (
    <>
      <rect x="7" y="3.5" width="12" height="19" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10.3" cy="9" r="0.9" fill="currentColor" />
      <circle cx="13" cy="9" r="0.9" fill="currentColor" />
      <circle cx="15.7" cy="9" r="0.9" fill="currentColor" />
      <circle cx="10.3" cy="13" r="0.9" fill="currentColor" />
      <circle cx="13" cy="13" r="0.9" fill="currentColor" />
      <circle cx="15.7" cy="13" r="0.9" fill="currentColor" />
      <rect x="10.3" y="16.5" width="5.4" height="3" rx="1" stroke="currentColor" strokeWidth="1.3" />
    </>
  ),
  kitchen: (
    <>
      <path d="M4.5 11.5h17v4.5a7 7 0 0 1-7 7h-3a7 7 0 0 1-7-7v-4.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M2.5 11.5h21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3.5 8.5h2.5M20 8.5h2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="13" cy="8.7" r="1.1" fill="currentColor" />
    </>
  ),
};

export default function AmenityIcon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" className={`text-ink ${className}`}>
      {paths[name] ?? null}
    </svg>
  );
}
