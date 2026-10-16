import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Empower Thyself | Olivia Carli",
  description: "Empower Thyself — begin the journey of self-knowledge with Olivia Carli.",
  publicUrl: "/empower-thyself",
  shareImagePath: "/assets/img/img-2bea070edb.jpg",
});

export default function EmpowerThyselfPage() {
  return (
    <>
      <div className="page visible" id="empower">
        <section className="band bg-img">
          <div className="bgart" style={{ backgroundImage: "url(/assets/img/img-2bea070edb.jpg)", opacity: ".16" }}></div>
          <div className="wrap center">
            <p className="eyebrow">Empower Thyself</p>
            <h1 style={{ fontSize: "clamp(46px,6vw,84px)", marginTop: "16px" }}><em>Know Thyself.</em></h1>
            <p style={{ fontFamily: "var(--sans)", textTransform: "uppercase", letterSpacing: ".3em", fontSize: "12px", color: "var(--wine)", marginTop: "16px" }}>
              The Beginning of the Journey
            </p>
            <div className="rule" style={{ margin: "30px auto" }}></div>
            <p className="big-quote" style={{ color: "var(--ink)", fontStyle: "italic", maxWidth: "22ch", margin: "0 auto" }}>
              "The oldest and perhaps the greatest invitation ever given to humanity."
            </p>
          </div>
        </section>
        <section className="band">
          <div className="wrap center narrow">
            <h2 className="statement">Every human eventually arrives at the same questions.</h2>
            <div className="rule" style={{ margin: "30px auto" }}></div>
            <p className="big-quote" style={{ maxWidth: "22ch", margin: "0 auto", fontStyle: "italic" }}>
              Who am I?<br /> Why am I here?<br /> What gives life meaning?<br /> Why do I suffer?<br /> How do I become all that I am capable of becoming?
            </p>
            <p className="lead" style={{ marginTop: "28px" }}>
              These questions are not signs that something is wrong.<br /> They are signs that something within you is <em>awakening.</em>
            </p>
            <p>
              For thousands of years, philosophers, initiates, and the Mystery School tradition have been devoted to exploring & answering these very questions.
            </p>
          </div>
        </section>
        <section className="band dark wine">
          <div className="wrap center narrow">
            <p className="eyebrow on-dark">Ancient Wisdom for Modern Life</p>
            <div className="rule on-dark" style={{ margin: "24px auto" }}></div>
            <p className="big-quote" style={{ color: "var(--light)" }}>
              There is no shortage of information in today's world.<br />{" "}<strong>What is rare is a clear & coherent path.</strong>
            </p>
            <p style={{ color: "#D8C7C2", marginTop: "24px" }}>
              Empower Thyself is a two-day initiatory training within the ancient Lineage of King Salomon, introducing timeless wisdom, practical spiritual tools and a way of understanding yourself & life that continues unfolding long after the training has ended.
            </p>
            <p style={{ color: "#D8C7C2" }}>
              Rather than asking you to adopt another philosophy, these teachings invite you into a living tradition, one that has helped generations of seekers cultivate greater awareness, wisdom, purpose and self-mastery.
            </p>
          </div>
        </section>
        <section className="band cream2">
          <div className="wrap narrow">
            <div className="center" style={{ marginBottom: "14px" }}>
              <p className="eyebrow">You may find yourself here because…</p>
              <div className="rule" style={{ margin: "22px auto 0" }}></div>
            </div>
            <div className="believe" style={{ maxWidth: "740px" }}>
              <div className="item" style={{ color: "var(--ink)" }}>
                You feel called to a deeper purpose, but can't quite name it yet.
              </div>
              <div className="item" style={{ color: "var(--ink)" }}>
                You're building a life, business, or mission that matters, but still crave more clarity, direction and inner peace.
              </div>
              <div className="item" style={{ color: "var(--ink)" }}>
                You've done the work of therapy, coaching and mindset shifts, and still feel like something is missing.
              </div>
              <div className="item" style={{ color: "var(--ink)" }}>
                You're done “collecting” trainings, ceremonies and pieces of different spiritual experiences and ready for a clear direction & spiritual path to progress and grow on.
              </div>
              <div className="item" style={{ color: "var(--ink)" }}>
                You're sensitive to the noise of the world and seeking a way to protect your energy and focus your power.
              </div>
            </div>
            <p className="center" style={{ marginTop: "30px", fontStyle: "italic", color: "var(--gold-deep)", fontSize: "1.2em" }}>
              If something inside you quietly whispered <strong>yes</strong> while reading those words…<br /> You are likely exactly where you're meant to be.
            </p>
          </div>
        </section>
        <section className="band">
          <div className="wrap mid center">
            <p className="eyebrow">What Is Included</p>
            <div className="rule" style={{ margin: "24px auto" }}></div>
            <p className="lead narrow">
              For thousands of years, these teachings have been preserved within the ancient <strong>Lineage of King Salomon</strong>, carefully passed from teacher to student through study, practice and initiation.
            </p>
            <p className="narrow">
              Throughout this two-day initiatory training, you'll be introduced to timeless wisdom, practical spiritual tools, and transformational experiences that invite you into a living tradition dedicated to self-mastery, conscious evolution, the pursuit of wisdom & building a truly meaningful life.
            </p>
            <h2 className="statement" style={{ marginTop: "24px" }}>
              Together, we'll <span className="swash">explore…</span>
            </h2>
          </div>
        </section>
        <section className="band">
          <div className="wrap">
            <div className="feature">
              <div className="fcopy">
                <p className="eyebrow">I</p>
                <h2>Understanding Yourself</h2>
                <div className="rule"></div>
                <p>Everything begins with one timeless invitation:</p>
                <p className="script" style={{ fontSize: "1.7em", color: "var(--gold-deep)", margin: ".15em 0 .55em" }}>
                  Know Thyself.
                </p>
                <p>
                  Explore the deeper nature of the soul, why we forget who we are, the purpose of human life, and the extraordinary potential that exists within each of us.
                </p>
                <p>
                  Through these teachings you'll begin to understand yourself from a much broader perspective, discovering a practical framework for living with greater awareness, purpose and meaning.
                </p>
              </div>
              <div className="ph portrait has-photo" style={{ backgroundImage: "url(/assets/img/img-4c80130e99.jpg)" }}></div>
            </div>
          </div>
        </section>
        <section className="band cream2">
          <div className="wrap">
            <div className="feature rev">
              <div className="ph portrait has-photo" style={{ backgroundImage: "url(/assets/img/img-539b695c22.jpg)" }}></div>
              <div className="fcopy">
                <p className="eyebrow">II</p>
                <h2>The Architecture of Reality</h2>
                <div className="rule"></div>
                <p>
                  Discover the timeless principles and universal laws that govern both the visible and invisible aspects of life.
                </p>
                <p>
                  These teachings provide a practical framework for understanding how consciousness, energy, and natural law shape our experiences, empowering you to participate in life with greater wisdom, discernment and intention.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="band">
          <div className="wrap">
            <div className="feature">
              <div className="fcopy">
                <p className="eyebrow">III</p>
                <h2>Working with Energy</h2>
                <div className="rule"></div>
                <p>
                  Gain a practical understanding of your energetic anatomy, including the aura, chakras, subtle bodies and chi life force.
                </p>
                <p>
                  You'll explore how energy influences your mental, emotional, physical & spiritual wellbeing, relationships and everyday experiences while receiving foundational tools for working consciously with your own energy.
                </p>
              </div>
              <div className="ph portrait has-photo" style={{ backgroundImage: "url(/assets/img/img-401553dc01.jpg)" }}></div>
            </div>
          </div>
        </section>
        <section className="band cream2">
          <div className="wrap">
            <div className="feature rev">
              <div className="ph portrait has-photo" style={{ backgroundImage: "url(/assets/img/img-2f344dbbef.jpg)" }}></div>
              <div className="fcopy">
                <p className="eyebrow">IV</p>
                <h2>Spiritual Tools for Everyday Life</h2>
                <div className="rule"></div>
                <p>Receive practical spiritual tools that can be integrated into your daily life.</p>
                <p>
                  Learn specific meditation techniques, spiritual protection, energetic practices and ancient Mystery School rituals that cultivate greater clarity, connection, peace, resilience, presence and alignment.
                </p>
                <p>
                  These are timeless practices designed to support your continued growth long after the weekend has come to an end.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="band">
          <div className="wrap">
            <div className="feature">
              <div className="fcopy">
                <p className="eyebrow">V</p>
                <h2>Self Mastery</h2>
                <div className="rule"></div>
                <p>Personal transformation begins with self-awareness.</p>
                <p>
                  Explore understandings of the mind & ego that allow you to work consciously with your higher mind, thoughts, emotions, choices, and energy while learning how responsibility, discernment and consistent practice become the foundation of a meaningful life.
                </p>
              </div>
              <div className="ph portrait has-photo" style={{ backgroundImage: "url(/assets/img/img-d66c64d298.jpg)" }}></div>
            </div>
          </div>
        </section>
        <section className="band cream2">
          <div className="wrap">
            <div className="feature rev">
              <div className="ph portrait has-photo" style={{ backgroundImage: "url(/assets/img/img-aa6da8f3c9.jpg)" }}></div>
              <div className="fcopy">
                <p className="eyebrow">VI</p>
                <h2>Ritual</h2>
                <div className="rule"></div>
                <p>Experience the beauty and power of ancient Mystery School ritual.</p>
                <p>
                  For thousands of years, ritual has been used to cultivate energy, awareness and anchor profound inner change. It is a process of harmonization of all aspects of your being: mind, heart, body, spirit.
                </p>
                <p>
                  Throughout the weekend, you'll participate in receiving sacred rituals preserved through lineage, offering moments of reflection, intention, connection, and spiritual awakening that you will integrate into your daily life moving forward.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="band">
          <div className="wrap">
            <div className="feature">
              <div className="fcopy">
                <p className="eyebrow">VII</p>
                <h2>Empower Thyself Initiation</h2>
                <div className="rule"></div>
                <p>
                  At the heart of the weekend of Empower Thyself is <strong>Initiation</strong> into the <strong>Lineage of King Salomon</strong>.
                </p>
                <p>
                  For thousands of years, initiation has marked the beginning of a conscious spiritual journey. More than a ceremony, it is an energetic process that creates the opportunity for profound inner transformation and change, while opening the doorway into one of the world's oldest living Mystery School traditions.
                </p>
                <p>
                  Initiation does not change who you are. It creates the opportunity to become more fully who you have always been. It is alignment. It is a process of true transformation. It is an alchemical experience that expands your capacity and whole structure to hold more light, energy & power.
                </p>
                <p>
                  For many students, this becomes a catalyzing moment where life begins to be experienced with greater clarity, purpose, meaning and connection.
                </p>
              </div>
              <div className="ph portrait has-photo" style={{ backgroundImage: "url(/assets/img/img-fbc521cbaf.jpg)" }}></div>
            </div>
          </div>
        </section>
        <section className="band cream2">
          <div className="wrap">
            <div className="feature rev">
              <div className="ph portrait has-photo" style={{ backgroundImage: "url(/assets/img/img-86d3b2fac4.jpg)" }}></div>
              <div className="fcopy">
                <p className="eyebrow">VIII</p>
                <h2>An Introduction to Universal Hermetic Ray Kabbalah</h2>
                <div className="rule"></div>
                <p>
                  One of the great gifts of Empower Thyself is receiving an introduction to <strong>Universal Hermetic Ray Kabbalah</strong>, one of humanity's most profound systems for understanding yourself and the universe.
                </p>
                <p>
                  While the study of Kabbalah unfolds in a full spectrum 1 year program, during Empower Thyself you'll receive an introduction to this extraordinary map of consciousness and reality.
                </p>
                <p>
                  You'll begin to discover how it helps make sense of your purpose, your gifts, your challenges, your relationships, and your place within the greater architecture of life.
                </p>
                <p>
                  For many students, this introduction becomes the beginning of a lifelong study that continues revealing new layers of wisdom with every stage of the journey.
                </p>
              </div>
            </div>
            <div className="callout">
              <p className="c-line">Empower Thyself is one doorway. The Calling is the ninety-day journey it opens into.</p>
              <a className="btn solid" data-go="calling" href="/the-calling">Answer the Call</a>
              <p className="c-note">90 Days &nbsp;·&nbsp; 13 In-Person Experiences &nbsp;·&nbsp; 10 People Per Cohort</p>
            </div>
          </div>
        </section>
        <section className="band dark bg-img">
          <div className="bgart" style={{ backgroundImage: "url(/assets/img/img-3957c09356.jpg)", opacity: ".4" }}></div>
          <div className="bgtint" style={{ background: "linear-gradient(180deg,rgba(24,19,12,.5),rgba(24,19,12,.72))" }}></div>
          <div className="wrap center narrow">
            <p className="eyebrow on-dark">A Living Community</p>
            <div className="rule on-dark" style={{ margin: "24px auto" }}></div>
            <p className="big-quote" style={{ color: "var(--light)" }}>
              When you complete Empower Thyself, you become part of a worldwide community of students, healers, teachers, and guides devoted to wisdom, self-mastery and meaningful service.
            </p>
            <p style={{ color: "#D8C7C2", marginTop: "22px" }}>
              The weekend may come to an end, but the path continues through a living lineage and a global community committed to walking it together.
            </p>
          </div>
        </section>
        <section className="band">
          <div className="wrap center narrow">
            <p className="eyebrow">This Isn't About Becoming Someone New</p>
            <div className="rule" style={{ margin: "24px auto" }}></div>
            <p>One of the greatest misconceptions about personal growth is that we need to become someone different.</p>
            <p>Empower Thyself teaches something very different.</p>
            <p>
              It suggests that beneath the conditioning, distractions, fears, and stories we have accumulated throughout life, there is already a deeper, wiser, more authentic version of ourselves waiting to be remembered.
            </p>
            <p className="big-quote" style={{ margin: "24px auto", maxWidth: "26ch" }}>
              The work is not to become someone else.<br /> It is to remove everything that keeps you from being fully yourself.
            </p>
            <p>That is why the ancient invitation has always been:</p>
            <p className="script" style={{ fontSize: "2em", color: "var(--gold-deep)", margin: ".15em 0 .55em" }}>
              Know Thyself.
            </p>
          </div>
        </section>
        <section className="band cream2">
          <div className="wrap mid center">
            <p className="eyebrow">The Beginning of the Path</p>
            <div className="rule" style={{ margin: "24px auto" }}></div>
            <p className="lead narrow">Empower Thyself represents the beginning of the <strong>Study</strong> doorway.</p>
            <p className="narrow">
              <strong>Healing</strong> helps us remember.<br />{" "}<strong>Study</strong> helps us understand.
            </p>
            <p className="narrow">
              It is here that timeless wisdom becomes practical.<br /> Ancient philosophy becomes lived experience.<br /> And the questions that have quietly followed you throughout your life finally begin to find a place to land.
            </p>
            <p className="narrow" style={{ fontStyle: "italic", color: "var(--gold-deep)" }}>
              This is where understanding begins.
            </p>
            <div className="flow" style={{ marginTop: "30px" }}>
              <div className="flow-item" data-go="work">
                <span className="fn">I</span>
                <span className="fname">Awaken</span>
                <span className="fsub">Healing</span>
              </div>
              <div className="flow-arrow">↓</div>
              <div className="flow-item hl" data-go="work">
                <span className="fn">II</span>
                <span className="fname">Study</span>
                <span className="fsub">You are here</span>
              </div>
              <div className="flow-arrow">↓</div>
              <div className="flow-item" data-go="work">
                <span className="fn">III</span>
                <span className="fname">Immerse</span>
                <span className="fsub">Retreats</span>
              </div>
              <div className="flow-arrow">↓</div>
              <div className="flow-item" data-go="work">
                <span className="fn">IV</span>
                <span className="fname">Master</span>
                <span className="fsub">Mentorship</span>
              </div>
              <div className="flow-arrow">↓</div>
              <div className="flow-item" data-go="work">
                <span className="fn">V</span>
                <span className="fname">Serve</span>
                <span className="fsub">Certification</span>
              </div>
            </div>
            <div className="ph wide has-photo" style={{ backgroundImage: "url(/assets/img/img-cd28272f5f.jpg)", marginTop: "40px" }}></div>
          </div>
        </section>
        <section className="band">
          <div className="wrap center narrow">
            <p className="eyebrow">Continue the Journey</p>
            <div className="rule" style={{ margin: "24px auto" }}></div>
            <p>
              Empower Thyself is called <em>the beginning</em> for a reason.<br /> Not because it contains every answer.<br /> But because it opens a doorway.
            </p>
            <p>
              A doorway into a living tradition.<br /> A philosophy that becomes a way of life.<br /> A community devoted to wisdom.<br /> And a path that continues unfolding for a lifetime.
            </p>
            <p style={{ fontStyle: "italic", color: "var(--gold-deep)" }}>
              There is no expectation to continue.<br /> Only an open invitation.<br /> If your heart feels called to keep walking, the path is here.
            </p>
            <div style={{ marginTop: "34px" }}>
              <a className="btn solid" data-go="calling" href="/the-calling">Answer the Call</a>
            </div>
          </div>
        </section>
        <section className="band dark wine">
          <div className="wrap center narrow">
            <p className="eyebrow on-dark"><em>The Invitation</em></p>
            <div className="rule on-dark" style={{ margin: "24px auto" }}></div>
            <p style={{ color: "#D8C7C2" }}><em>There are many journeys we can take throughout a lifetime.</em></p>
            <p style={{ color: "#D8C7C2" }}>
              <em>We build careers.</em>
              <br />{" "}<em>We travel the world.</em>
              <br />{" "}<em>We create families.</em>
              <br />{" "}<em>We pursue success.</em>
              <br />{" "}<em>We collect experiences.</em>
            </p>
            <p style={{ color: "#D8C7C2" }}>
              <em>Yet beneath every outward journey lies a quieter one.</em>
              <br />{" "}<em>The journey of coming to know ourselves.</em>
            </p>
            <p style={{ color: "#D8C7C2" }}>
              <em>
                It is the journey that shapes every relationship, every decision, every dream, and every life we create. It is the journey philosophers have contemplated, seekers have devoted themselves to, and the Mystery School has quietly preserved for thousands of years.
              </em>
            </p>
            <p style={{ color: "#D8C7C2" }}>
              <em>They understood that the quality of our lives is shaped by the depth with which we know ourselves.</em>
            </p>
            <p className="big-quote" style={{ color: "var(--light)", margin: "22px auto", maxWidth: "28ch" }}>
              <em>If there is one invitation I hope you carry with you, it is not simply to attend a training.</em>
              <br />{" "}<em>It is to begin the lifelong pursuit of knowing yourself.</em>
            </p>
            <p style={{ color: "#D8C7C2" }}>
              <em>To become curious.</em>
              <br />{" "}<em>To ask deeper questions.</em>
              <br />{" "}<em>To seek wisdom.</em>
              <br />{" "}<em>To cultivate a life of meaning.</em>
            </p>
            <p style={{ color: "var(--gold-light)", fontSize: "1.15em" }}>
              <em>Because everything else grows from there.</em>
            </p>
            <div className="callout">
              <p className="c-line">If you feel it, the next step is a conversation.</p>
              <a className="btn solid" data-go="calling" href="/the-calling">Answer the Call</a>
            </div>
          </div>
        </section>
        <section className="band" style={{ padding: "150px 0 120px" }}>
          <div className="wrap center narrow">
            <p className="big-quote" style={{ maxWidth: "24ch", margin: "0 auto", fontStyle: "italic" }}>
              There will be many people in this life<br /> who never know the depth of who you are.<br />{" "}<strong>What a shame</strong> it would be if you were one of them.
            </p>
            <div style={{ width: "60px", height: "1px", background: "var(--gold)", margin: "70px auto 30px" }}></div>
            <p className="script" style={{ fontSize: "clamp(40px,6vw,72px)", color: "var(--gold-deep)" }}>
              <em>Know Thyself.</em>
            </p>
            <p className="eyebrow" style={{ marginTop: "18px" }}>Olivia Carli</p>
            <div style={{ marginTop: "90px" }}>
              <a className="btn" href="mailto:hello@oliviacarli.com">Explore Upcoming Trainings</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
