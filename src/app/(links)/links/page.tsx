import type { Metadata } from "next";
import { linkPageLinks } from "@/lib/link-page-links";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Links — Olivia Carli",
  description:
    "Every way to connect with Olivia Carli — book a Clarity Consult, answer the call, take the Missing Piece Assessment and more.",
  publicUrl: "/links",
  shareImagePath: "/assets/img/img-3e096f0eb8.jpg",
  shareTitle: "Olivia Carli — Start Here",
  shareDescription:
    "Helping people cultivate wisdom, master themselves, and create meaningful lives.",
});

export default function LinkPage() {
  return (
    <main className="link-page">
      <div className="link-page-column">
        <div className="link-page-portrait-frame">
          <img
            className="link-page-portrait"
            src="/assets/img/img-3e096f0eb8.jpg"
            alt="Olivia Carli"
            width={122}
            height={122}
          />
        </div>

        <p className="link-page-eyebrow">Guide · Teacher · Healer</p>
        <h1 className="link-page-name">Links &amp; Offerings</h1>
        <p className="link-page-tagline">
          Helping people cultivate wisdom, master themselves, and create meaningful lives.
        </p>

        <div className="link-page-divider" />

        <ul className="link-page-list">
          {linkPageLinks.map((link) => (
            <li key={link.label}>
              <a
                className={`link-page-card${link.isFeatured ? " is-featured" : ""}`}
                href={link.href}
                {...(link.opensInNewTab ? { target: "_blank", rel: "noopener" } : {})}
              >
                <span className="link-page-card-label">{link.label}</span>
                <span className="link-page-card-description">{link.description}</span>
              </a>
            </li>
          ))}
        </ul>

        <p className="link-page-closing-quote">
          May your life be guided by wisdom, shaped by beauty, and devoted to meaningful service.
        </p>
        <p className="link-page-signature">Love Always, Olivia</p>

        <div className="link-page-footer">
          <img className="link-page-monogram" src="/assets/img/img-8351ab5d03.png" alt="Olivia Carli monogram" />
          Cultivate Wisdom · Master Yourself · Create a Meaningful Life
        </div>
      </div>
    </main>
  );
}
