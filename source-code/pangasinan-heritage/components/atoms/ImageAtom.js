export default function ImageAtom({ src, alt, className = "", loading = "lazy", width = 1200, height = 800 }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = src.startsWith("/") ? `${basePath}${src}` : src;

  return <img src={imagePath} alt={alt} className={className} loading={loading} width={width} height={height} />;
}
