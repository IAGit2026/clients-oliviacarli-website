import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "About | Olivia Carli",
  description: "Meet Olivia Carli — Spiritual Guide, teacher and healer helping people cultivate wisdom, practice self-mastery, and create meaningful lives.",
  publicUrl: "/",
  shareImagePath: "/assets/img/img-3e096f0eb8.jpg",
});

export default function AboutPage() {
  return (
    <>
      <div className="page visible" id="about">
        <section className="band bg-img">
          <div className="bgart" style={{ backgroundImage: "url(/assets/img/img-3e096f0eb8.jpg)", opacity: ".16" }}></div>
          <div className="wrap">
            <div className="feature">
              <div className="fcopy">
                <p className="eyebrow">About Olivia</p>
                <h1 style={{ fontSize: "clamp(38px,4.4vw,60px)", margin: "14px 0 6px" }}>Meet Olivia</h1>
                <div className="rule"></div>
                <p className="lead">
                  I'm a Spiritual Guide, teacher, healer, and speaker devoted to helping people cultivate wisdom, practice self-mastery, and create meaningful lives.
                </p>
                <p>
                  For over twelve years, I have studied within the Lineage of King Salomon through the Modern Mystery School. Today, I teach ancient wisdom in a way that is grounded, practical, and deeply relevant to modern life.
                </p>
                <p>
                  My work has taken me from one-on-one healing sessions to international trainings, corporate workshops, retreats, and speaking engagements. Whether I'm teaching in a classroom, sitting with someone in a healing session, or sharing ideas online, my purpose remains the same: to help people live consciously, love deeply, and contribute meaningfully.
                </p>
              </div>
              <div className="ph tall has-photo" style={{ backgroundImage: "url(/assets/img/img-7c2ec75d28.jpg)" }}></div>
            </div>
          </div>
        </section>
        <section className="band cream2">
          <div className="wrap">
            <div className="center" style={{ marginBottom: "20px" }}><p className="eyebrow">Training & Lineage</p></div>
            <div className="stats">
              <div className="stat">
                <span className="num" data-count="12">12</span>
                <span className="suf">years</span>
                <span className="lab">A healer since 2014</span>
              </div>
              <div className="stat">
                <span className="num" data-count="150">150</span>
                <span className="suf">+</span>
                <span className="lab">People initiated</span>
              </div>
              <div className="stat">
                <span className="num" data-count="3000">3,000</span>
                <span className="suf">years</span>
                <span className="lab">Of unbroken lineage</span>
              </div>
            </div>
            <div className="creds">
              <div className="cred">
                <div className="k">Modern Mystery School</div>
                <div className="v">Spiritual Guide & Teacher</div>
              </div>
              <div className="cred"><div className="k">Initiation</div><div className="v">Ritual Master</div></div>
              <div className="cred"><div className="k">Healing</div><div className="v">Certified Healer</div></div>
              <div className="cred"><div className="k">Tradition</div><div className="v">Lineage of King Salomon</div></div>
              <div className="cred"><div className="k">Beyond</div><div className="v">Speaker & Educator</div></div>
            </div>
          </div>
        </section>
        <section className="band">
          <div className="wrap narrow">
            <p>
              I have always been captivated by the deeper questions of life. Long before I knew there were paths devoted to studying wisdom, I found myself searching for them. I was drawn to beauty. To philosophy. To ancient civilizations. To sacred places. To the quiet feeling that life held a depth most of us rarely paused long enough to explore.
            </p>
            <p>
              Before dedicating my life to this work, I spent many years as a hairstylist and colour educator. Looking back, I realize it was never simply about hair. I loved helping people feel beautiful, confident, and more like themselves, and I loved the conversations that unfolded behind the chair, where people felt seen and trusted me with the stories of their lives. Even then, I knew what fulfilled me most wasn't creating outer transformation. It was witnessing inner transformation.
            </p>
            <p>
              That search eventually led me to the Mystery School. More importantly, it gave me a philosophy that continues to shape every part of my life. Because I believe a meaningful life is not something we stumble upon. It is something we consciously create.
            </p>
          </div>
        </section>
        <section className="band cream2">
          <div className="wrap">
            <div className="feature rev">
              <div className="ph portrait has-photo" style={{ backgroundImage: "url(/assets/img/img-110a47c480.jpg)" }}></div>
              <div className="fcopy">
                <p className="eyebrow">Beyond the Classroom & Healing Room</p>
                <div className="rule"></div>
                <p>
                  You'll usually find me admiring beauty wherever it can be found: wandering through forests and along coastlines, museums and historic cities, studying philosophy, nerding out on health and longevity science, lifting heavy weights, creating beautiful spaces that invite people to slow down, setting thoughtful tables for friends and family, and arranging fresh bouquets of flowers.
                </p>
                <p>
                  I believe some of life's greatest conversations happen around a shared meal, that beauty has the power to awaken something within us, and that the smallest rituals, such as lighting a candle, walking through nature, or sharing a meaningful conversation, can transform an ordinary day into something sacred.
                </p>
                <p>
                  I don't believe these moments are separate from the work I do. I believe they <em>are</em> the work. Because the deepest spiritual practice isn't escaping life. It's learning to live it beautifully.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="band dark wine">
          <div className="wrap center">
            <p className="big-quote" style={{ color: "var(--light)", maxWidth: "22ch", margin: "0 auto" }}>
              May your life be guided by wisdom, shaped by beauty, and devoted to meaningful service.
            </p>
            <p className="sign" style={{ color: "var(--rose-light)", marginTop: "26px" }}>Love Always, Olivia</p>
            <div className="callout">
              <p className="c-line">If you're standing at that threshold, there is a path.</p>
              <a className="btn solid" data-go="calling" href="/the-calling">Answer the Call</a>
              <p className="c-note">90 Days &nbsp;·&nbsp; 13 In-Person Experiences &nbsp;·&nbsp; 10 People Per Cohort</p>
            </div>
          </div>
        </section>
        <section className="band">
          <div className="wrap center" style={{ marginBottom: "30px" }}><p className="eyebrow">I Believe…</p></div>
          <div className="wrap">
            <div className="believe" style={{ color: "var(--ink)" }}>
              <div className="item" style={{ color: "var(--ink)" }}>Wisdom is life's greatest pursuit.</div>
              <div className="item" style={{ color: "var(--ink)" }}>A meaningful life is cultivated, not discovered.</div>
              <div className="item" style={{ color: "var(--ink)" }}>Healing clears the way.</div>
              <div className="item" style={{ color: "var(--ink)" }}>Self-mastery creates freedom.</div>
              <div className="item" style={{ color: "var(--ink)" }}>Beauty is essential.</div>
              <div className="item" style={{ color: "var(--ink)" }}>Service gives life meaning.</div>
              <div className="item" style={{ color: "var(--ink)" }}>Every life is orbiting around something. Choose wisely.</div>
            </div>
            <div className="center" style={{ marginTop: "46px" }}>
              <a className="btn solid" data-go="calling" href="/the-calling">Answer the Call</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
