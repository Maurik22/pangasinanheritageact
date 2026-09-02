<<<<<<< HEAD
import NavigationItem from "../molecules/NavigationItem";

export default function HeaderNavigation() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <header className="header">

      <a href="/" className="brand">
        pangasinan
        <span>heritage</span>
      </a>

      <nav className="nav" aria-label="Main navigation">
        <NavigationItem href={`${basePath}/`}>home</NavigationItem>
        <NavigationItem href={`${basePath}/heritage/`}>places</NavigationItem>
        <NavigationItem href={`${basePath}/about/`}>about</NavigationItem>
=======
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
>>>>>>> 82ec4e7b903b8119eacdf577fec87d5276d2840a
      </nav>

    </header>
  );
}
