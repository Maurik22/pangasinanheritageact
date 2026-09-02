import Link from "next/link";

export default function NavigationItem({ href, children }) {
  return (
    <Link className="navItem" href={href} prefetch={false}>
      {children}
    </Link>
  );
}
