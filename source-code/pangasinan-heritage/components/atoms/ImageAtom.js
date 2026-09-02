<<<<<<< HEAD
export default function ImageAtom({ src, alt, className = "", loading = "lazy", width = 1200, height = 800 }) {
  return <img src={src} alt={alt} className={className} loading={loading} width={width} height={height} />;
=======
export default function ImageAtom({ src, alt, className = "", loading = "lazy" }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = src.startsWith("/") ? `${basePath}${src}` : src;

  return <img src={imagePath} alt={alt} className={className} loading={loading} />;
>>>>>>> 82ec4e7b903b8119eacdf577fec87d5276d2840a
}
