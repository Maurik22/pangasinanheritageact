<<<<<<< HEAD
export default function NavigationItem({ href, children }) {
  return (
    <a className="navItem" href={href}>
      {children}
    </a>
=======
import Link from "next/link";

export default function NavigationItem({ href, children }) {
  return (
    <Link className="navItem" href={href} prefetch={false}>
      {children}
    </Link>
>>>>>>> 82ec4e7b903b8119eacdf577fec87d5276d2840a
  );
}
