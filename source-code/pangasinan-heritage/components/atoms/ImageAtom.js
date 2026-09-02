export default function ImageAtom({ src, alt, className = "", loading = "lazy", width = 1200, height = 800 }) {
  return <img src={src} alt={alt} className={className} loading={loading} width={width} height={height} />;
}
