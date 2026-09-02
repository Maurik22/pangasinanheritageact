import Link from "next/link";
import NavigationItem from "../molecules/NavigationItem";

export default function HeaderNavigation() {
  return (
    <header className="header">

      <Link href="/" className="brand">
        pangasinan
        <span>heritage</span>
      </Link>

      <nav className="nav" aria-label="Main navigation">
        <NavigationItem href={`${basePath}/`}>home</NavigationItem>
        <NavigationItem href={`${basePath}/heritage/`}>places</NavigationItem>
        <NavigationItem href={`${basePath}/about/`}>about</NavigationItem>
      </nav>

    </header>
  );
}
