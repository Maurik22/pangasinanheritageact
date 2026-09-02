export default function Icon({ symbol = "📍", label = "" }) {
  return (
    <span className="icon" role={label ? "img" : undefined} aria-label={label || undefined} aria-hidden={!label}>
      {symbol}
    </span>
  );
}
