import { PrimaryNavigationLinks } from "./primary-navigation-links";

export function SiteHeader() {
  return (
    <header className="site">
      <div className="brand-row">
        <a className="brand" data-go="about" href="/">
          <img alt="Olivia Carli monogram" src="/assets/img/img-59d9f8597c.png" />
          <span className="word">OLIVIA&nbsp;CARLI</span>
        </a>
        <button aria-label="Menu" className="hamburger">Menu</button>
      </div>
      <nav className="tabs" id="tabs">
        <PrimaryNavigationLinks />
      </nav>
    </header>
  );
}
