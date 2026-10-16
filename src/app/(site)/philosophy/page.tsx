import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Philosophy | Olivia Carli",
  description: "The philosophy behind Olivia Carli's work — wisdom, self-mastery, and living a meaningful life.",
  publicUrl: "/philosophy",
  shareImagePath: "/assets/img/img-1b1c4c6787.jpg",
});

export default function PhilosophyPage() {
  return (
    <>
      <div className="page visible" id="philosophy">
        <section className="band bg-img">
          <div className="bgart" style={{ backgroundImage: "url(/assets/img/img-1b1c4c6787.jpg)", opacity: ".16" }}></div>
          <div className="wrap center">
            <p className="eyebrow">Chapter One</p>
            <h1 style={{ fontSize: "clamp(40px,5vw,68px)", marginTop: "14px" }}>The Philosophy</h1>
            <div className="rule" style={{ margin: "28px auto" }}></div>
            <p className="lead mid">
              Perhaps the life you're searching for isn't built by collecting more. It's built by becoming more.
            </p>
          </div>
        </section>
        <section className="band">
          <div className="wrap narrow questions">
            <p>
              Perhaps you've found yourself here because you've started to wonder… <em>Is there a better way to live?</em>
            </p>
            <p>
              I've accomplished so much… yet it still feels like something essential is missing. How do I raise children, build a business, love my partner, care for my community, and still remain connected to myself?
            </p>
            <p className="q">
              Why do I keep returning to the same patterns? How do I create relationships with depth instead of performance? How do I become someone whose presence leaves the world better than they found it? How do I live wisely?
            </p>
            <p>
              These are the questions that have guided philosophers, mystics, artists, healers, leaders and seekers for thousands of years. Perhaps they've brought you here too.
            </p>
            <div className="rule"></div>
            <p className="big-quote">The pursuit of wisdom is the pursuit of a life well lived.</p>
          </div>
        </section>
        <section className="band cream2">
          <div className="wrap">
            <div className="center" style={{ marginBottom: "50px" }}>
              <p className="eyebrow">Chapter Two</p>
              <h2 className="statement" style={{ marginTop: "14px" }}>The Principles</h2>
              <p className="lead narrow" style={{ marginTop: "20px" }}>
                Every meaningful life begins long before our actions do. It begins in the way we see. Before there is transformation, there is understanding. Before there is healing, there is awareness. Before there is practice, there is philosophy.
              </p>
            </div>
            <div className="timeline">
              <div className="tl-item">
                <span className="tl-node"></span>
                <div className="num">I</div>
                <h3>Wisdom is life's greatest pursuit.</h3>
                <p>
                  Knowledge helps us understand the world. Wisdom teaches us how to live within it. It shapes our decisions, our relationships, our character, and ultimately, the life we create. Everything else grows from here.
                </p>
              </div>
              <div className="tl-item">
                <span className="tl-node"></span>
                <div className="num">II</div>
                <h3>A meaningful life is cultivated, not discovered.</h3>
                <p>
                  Meaning is rarely something we stumble upon. It is built slowly, through the choices we make, the actions we take, and the values we embody.
                </p>
              </div>
              <div className="tl-item">
                <span className="tl-node"></span>
                <div className="num">III</div>
                <h3>Every life is orbiting around something.</h3>
                <p>
                  Whether we realize it or not, every life has a centre: success, fear, status, love, approval, comfort, service, God. Whatever occupies that centre quietly shapes everything around it. You must choose your centre wisely.
                </p>
              </div>
              <div className="tl-item">
                <span className="tl-node"></span>
                <div className="num">IV</div>
                <h3>Healing clears the way.</h3>
                <p>
                  Healing is not the destination. It is what allows us to live with greater freedom, clarity and presence. It removes what obscures our heart, interrupts our discernment, and keeps us from living in alignment with who we truly are.
                </p>
              </div>
              <div className="tl-item">
                <span className="tl-node"></span>
                <div className="num">V</div>
                <h3>Self-mastery creates freedom.</h3>
                <p>
                  The greatest form of leadership always begins with the self. The more we understand our spirit, heart, mind, habits and choices, the more intentionally we can shape our lives. The trap is thinking freedom is found in having fewer responsibilities, when really it is found in becoming someone who can hold them with grace.
                </p>
              </div>
              <div className="tl-item">
                <span className="tl-node"></span>
                <div className="num">VI</div>
                <h3>Beauty is essential.</h3>
                <p>
                  Beauty is not an indulgence or merely decoration. It is the natural expression of a well-ordered life. It is nourishment: the spaces we inhabit, the meals we prepare, the conversations we have, the art we create, the way we care for one another. Beauty reminds us that life is worthy of our attention.
                </p>
              </div>
              <div className="tl-item">
                <span className="tl-node"></span>
                <div className="num">VII</div>
                <h3>Service gives life meaning.</h3>
                <p>
                  There comes a point where fulfillment asks something more of us. Not simply, <em>"What do I want from life?"</em> But, <em>"What do I want to give to life?"</em> Our lives become richer when they become an offering.
                </p>
              </div>
            </div>
            <div className="callout">
              <p className="c-line">These are the principles. The Calling is where they become practice.</p>
              <a className="btn solid" data-go="calling" href="/the-calling">Answer the Call</a>
            </div>
          </div>
        </section>
        <section className="band">
          <div className="wrap">
            <div className="feature rev">
              <div className="ph tall has-photo" style={{ backgroundImage: "url(/assets/img/img-1b1c4c6787.jpg)" }}></div>
              <div className="fcopy">
                <p className="eyebrow">Chapter Three</p>
                <h2>The Path</h2>
                <div className="rule"></div>
                <p>
                  Throughout history, those who sought wisdom did more than admire great ideas. They walked a path, one that united philosophy with practice, knowledge with magick, and understanding with transformation.
                </p>
                <p>
                  A spiritual practice can bring moments of peace, clarity and connection. A spiritual path asks something different. It is not a collection of inspiring ideas, nor a cycle of returning to the same place again and again. It is a living journey with <em>clear direction</em>: teachings to receive, practices to embody, masters to learn from, thresholds to cross, and initiations that prepare you for the next invitation to step up and expand.
                </p>
                <p>
                  For thousands of years, this journey has been known by many names. The Great Work. The Mysteries. The Path of Initiation. Jacob's Ladder. The Way. Though the language has changed, the invitation has remained the same: <em>to Know Thyself.</em>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="band dark wine">
          <div className="wrap center">
            <p className="eyebrow on-dark">Chapter Four</p>
            <h2 className="statement" style={{ color: "var(--light)", marginTop: "14px" }}>The Life</h2>
            <div className="rule on-dark" style={{ margin: "28px auto" }}></div>
            <div className="mid" style={{ textAlign: "left", color: "#D8C7C2" }}>
              <p>
                The path is not walked for the sake of collecting teachings, or accumulating spiritual experiences, or becoming more knowledgeable. The purpose of the path is far simpler. To learn how to live. To cultivate wisdom. To know yourself. To know God.
              </p>
              <p>
                A meaningful life is not built all at once. It is cultivated. One decision. One act of courage. One moment of integrity. One ordinary day lived with extraordinary intention.
              </p>
              <p>
                A life of wisdom is not separate from everyday life. It is revealed through it: in the way you love your partner, raise your children, lead your business, care for your body, navigate hardship, welcome people into your home, and in the courage to do what is right when no one is watching.
              </p>
              <p>
                The path is not an escape from the world. It is a preparation to meet it. Perhaps this is why the pursuit of wisdom has endured for thousands of years. Not because it promises a perfect life, but because it teaches us how to cultivate a meaningful one.
              </p>
              <p style={{ color: "var(--rose-light)", fontStyle: "italic", fontSize: "1.2em" }}>
                Every journey begins with a single step. Perhaps yours begins here.
              </p>
            </div>
            <div style={{ marginTop: "36px" }}>
              <a className="btn on-dark" data-go="work" href="/the-path">Begin Your Journey</a> &nbsp; <a className="btn solid" data-go="calling" href="/the-calling">Answer the Call</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
