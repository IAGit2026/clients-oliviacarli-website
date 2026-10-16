import type { Metadata } from "next";
import { MissingPieceAssessmentInteractions } from "@/components/missing-piece-assessment-interactions";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "The Missing Piece — Olivia Carli",
  description:
    "Take the Missing Piece Assessment with Olivia Carli — discover your archetype, your greatest strength and the area of life asking for your attention.",
  publicUrl: "/missing-piece.html",
  shareImagePath: "/assets/missing-piece/mp-8213236a.jpg",
  shareTitle: "The Missing Piece Assessment — Olivia Carli",
  shareDescription: "Discover your archetype, your greatest strength and your growth opportunity. About 4 minutes.",
  includeTwitterCard: false,
});

export default function MissingPiecePage() {
  return (
    <>
      <div id="heroBg"></div>
      <header>
        <a className="brand" href="https://oliviacarli.com">
          <img src="/assets/missing-piece/mp-5b9dfc22.png" alt="" />
          <span className="word">OLIVIA&nbsp;CARLI</span>
        </a>
      </header>
      <div className="progress" id="progress">
        <div className="pbar"><span id="pfill"></span></div>
        <div className="plabel" id="plabel"></div>
      </div>
      <div className="wrap">
        <section className="screen active center intro" id="s-intro">
          <img className="mono-lg" src="/assets/missing-piece/mp-5b9dfc22.png" alt="" />
          <p className="eyebrow">The Know Thyself Assessment</p>
          <h1>The Missing Piece</h1>
          <p className="sub">Discover where you are on the path toward a more meaningful life.</p>
          <div className="rule"></div>
          <p>
            Most people spend years searching for more — more clarity, more peace, more purpose, more fulfillment. Yet despite all the books, podcasts, courses, and experiences, many still feel that something is missing.
          </p>
          <p>
            The ancient invitation to <em>Know Thyself</em> has guided seekers for thousands of years, because every meaningful life begins with self-awareness.
          </p>
          <p>
            This guided assessment is designed to help you reflect honestly on where you are today, and reveal the area of your life that is asking for your deepest attention.
          </p>
          <p className="note">
            There are no right or wrong answers. Simply answer each question honestly, based on where you are today.
          </p>
          <form className="optin" id="optin" style={{ marginTop: "34px" }} noValidate>
            <input type="text" id="lead-name" name="first_name" placeholder="First name" autoComplete="given-name" required />{" "}<input type="email" id="lead-email" name="email" placeholder="Email address" autoComplete="email" required />{" "}<input type="tel" id="lead-phone" name="phone" placeholder="Phone number" autoComplete="tel" inputMode="tel" required />{" "}<input type="text" id="lead-social" name="social_handle" placeholder="Instagram or social handle (e.g. @yourname)" autoComplete="off" autoCapitalize="off" spellCheck="false" />
            <p className="opt-hint">Social handle is optional — it helps Olivia get to know you before your consult.</p>
            <div className="err" id="lead-err"></div>
            <button className="btn solid" type="submit">Begin the Assessment</button>
            <p className="consent">
              Enter your details to begin. By continuing, you agree to receive your results and occasional emails and texts from Olivia about your journey — unsubscribe anytime. Takes about 4 minutes.
            </p>
          </form>
        </section>
        <section className="screen" id="s-part">
          <div className="part-head">
            <div className="part-num" id="part-num"></div>
            <h2 id="part-title"></h2>
            <div className="part-q" id="part-q"></div>
          </div>
          <div className="scale-note">Rate each statement · 1 = Strongly Disagree · 5 = Strongly Agree</div>
          <div id="questions"></div>
          <div className="nav">
            <button className="btn ghost" id="backBtn">← Back</button>{" "}<button className="btn solid" id="nextBtn" disabled>Continue</button>
          </div>
        </section>
        <section className="screen center reflect" id="s-reflect">
          <p className="eyebrow">Reflection</p>
          <div className="rule"></div>
          <p className="lead" style={{ marginBottom: "20px" }}>Take a moment before viewing your results.</p>
          <ul>
            <li>Which section felt the strongest?</li>
            <li>Which questions were the most difficult to answer honestly?</li>
          </ul>
          <p className="big-quote">
            Often, the area that creates the most discomfort is the very place inviting our deepest growth.
          </p>
          <p className="swash" style={{ fontSize: "1.2em" }}>Awareness is the beginning of transformation.</p>
          <div style={{ marginTop: "36px" }}>
            <button className="btn solid" id="showResultsButton">View My Results</button>
          </div>
        </section>
        <section className="screen" id="s-results">
          <div className="result-hero">
            <p className="arch-badge" id="archBadge">Your Archetype</p>
            <h2 className="arch-name" id="archName"></h2>
            <p className="arch-desc" id="archDesc"></p>
          </div>
          <div className="scores" id="scores"></div>
          <div className="rcard">
            <p className="eyebrow">Your Greatest Strength</p>
            <h3 id="strengthTitle"></h3>
            <p id="strengthText"></p>
            <p style={{ marginTop: "10px", color: "var(--ink-soft)" }}>
              Every person has an area where wisdom has already taken root. This is the foundation you can continue building upon. <span className="hl">Celebrate it.</span>
            </p>
          </div>
          <div className="rcard">
            <p className="eyebrow">Your Growth Opportunity</p>
            <h3 id="growthTitle"></h3>
            <p id="growthText"></p>
            <p style={{ marginTop: "10px", color: "var(--ink-soft)" }}>
              Not because something is wrong with you — but because every season of life invites a new level of growth. <span className="hl">
                Growth is not about becoming someone else. It is about becoming more fully who you already are.
              </span>
            </p>
          </div>
          <div className="rcard">
            <p className="eyebrow">Your Next Step</p>
            <h3>You don't need more information.<br />You need the right next step.</h3>
            <p id="nextText"></p>
            <p style={{ marginTop: "10px", color: "var(--ink-soft)" }}>
              The path is different for everyone. The important thing is taking the next conscious step.
            </p>
          </div>
          <div className="invite">
            <p className="eyebrow on-dark">A Personal Invitation</p>
            <div className="rule" style={{ background: "linear-gradient(90deg,transparent,var(--gold-light),transparent)" }}></div>
            <h3>Continue the conversation.</h3>
            <p>
              If this assessment brought clarity, questions, or revealed an area of your life calling for deeper attention, book a complimentary 30-minute Clarity Consult with Olivia.
            </p>
            <ul className="explore">
              <li>Where you are on your journey.</li>
              <li>What may be holding you back.</li>
              <li>The next step that best supports your growth.</li>
            </ul>
            <p style={{ fontStyle: "italic", color: "var(--gold-light)" }}>
              This conversation is designed to provide clarity — not pressure.
            </p>
            <div style={{ marginTop: "28px" }}>
              <a className="btn solid" href="https://oliviacarli.as.me/clarityconsult" target="_blank" rel="noopener">
                Book Your Clarity Consult
              </a>
            </div>
            <p style={{ marginTop: "20px", fontFamily: "var(--sans)", fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "#b6ab94" }}>
              Every meaningful journey begins with one conversation.
            </p>
          </div>
          <div className="center" style={{ padding: "70px 0 20px" }}>
            <div className="rule"></div>
            <p className="big-quote" style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "clamp(22px,3vw,30px)", lineHeight: "1.4", maxWidth: "26ch", margin: "0 auto", color: "var(--ink)" }}>
              This assessment wasn't created to tell you who you are. It was created to help you discover where your attention is being invited next.
            </p>
            <p className="swash" style={{ fontSize: "1.25em", marginTop: "24px" }}>
              Because you don't stumble upon a meaningful life. You cultivate one.
            </p>
            <p style={{ fontFamily: "var(--sans)", textTransform: "uppercase", letterSpacing: ".24em", fontSize: "11px", color: "var(--gold-deep)", marginTop: "16px" }}>
              One conscious choice · one courageous decision · one step at a time
            </p>
            <div style={{ marginTop: "40px" }}>
              <a className="btn solid" href="https://oliviacarli.as.me/clarityconsult" target="_blank" rel="noopener">
                Book Your Clarity Consult
              </a> &nbsp; <button className="btn" id="restartButton">Retake the Assessment</button>
            </div>
          </div>
        </section>
      </div>
      <footer>
        <div className="fw">OLIVIA&nbsp;CARLI</div>
        <div className="fine">Cultivate Wisdom · Master Yourself · Create a Meaningful Life</div>
      </footer>
      <MissingPieceAssessmentInteractions />
    </>
  );
}
