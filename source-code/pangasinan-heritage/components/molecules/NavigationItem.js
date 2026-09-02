export default function NavigationItem({ href, children }) {
  return (
    <a className="navItem" href={href}>
      {children}
    </a>
  );
}
