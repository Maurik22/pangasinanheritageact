import Link from "next/link";
import NavigationItem from "../molecules/NavigationItem";

export default function HeaderNavigation() {
  return (
    <header className="header">

      <Link href="/" className="brand" prefetch={false}>
        pangasinan
        <span>heritage</span>
      </Link>

      <nav className="nav" aria-label="Main navigation">
        <NavigationItem href="/">home</NavigationItem>
        <NavigationItem href="/heritage/">places</NavigationItem>
        <NavigationItem href="/about/">about</NavigationItem>
      </nav>

    </header>
  );
}
