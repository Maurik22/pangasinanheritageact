export default function ImageAtom({ src, alt, className = "", loading = "lazy" }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = src.startsWith("/") ? `${basePath}${src}` : src;

  return <img src={imagePath} alt={alt} className={className} loading={loading} />;
}
