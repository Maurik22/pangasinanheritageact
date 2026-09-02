export default function Typography({ as = "p", children, className = "" }) {
  const Tag = as;
  return <Tag className={className}>{children}</Tag>;
}
