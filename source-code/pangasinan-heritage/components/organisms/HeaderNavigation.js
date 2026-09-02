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
      </nav>

    </header>
  );
}
