import { siteNavigationItems } from "@/lib/site-navigation";
import { FooterCreditLink } from "./footer-credit-link";

export function SiteFooter() {
  return (
    <footer className="site">
      <div className="wrap">
        <img
          alt="Olivia Carli monogram"
          className="fmono"
          src="/assets/img/img-8351ab5d03.png"
          loading="lazy"
          decoding="async"
        />
        <div className="fword">OLIVIA&nbsp;CARLI</div>
        <p className="ftag">Helping people cultivate wisdom, master themselves, and create meaningful lives.</p>
        <nav>
          {siteNavigationItems.map((item) => (
            <a key={item.routePath} data-go={item.originalPageKey} href={item.publicUrl}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="sign" style={{ color: "var(--gold-light)", fontSize: "26px" }}>Love Always, Olivia</div>
        <div className="fine">
          Guide. Teacher. Healer. &nbsp;·&nbsp; Certified by the <FooterCreditLink>Modern Mystery School</FooterCreditLink> &nbsp;·&nbsp; Founder of Living Ceremony
        </div>
        <a
          href="https://modernmysteryschoolint.com/"
          rel="noopener"
          style={{ display: "inline-block", marginTop: "26px" }}
          target="_blank"
        >
          <img
            alt="The Modern Mystery School"
            src="/assets/img/img-0f4f820b18.png"
            style={{ height: "56px", width: "auto", opacity: ".92" }}
            loading="lazy"
            decoding="async"
          />
        </a>
      </div>
    </footer>
  );
}
