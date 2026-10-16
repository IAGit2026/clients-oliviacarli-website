import type { Metadata } from "next";
import { TheCallingInteractions } from "@/components/the-calling-interactions";
import { buildPageMetadata } from "@/lib/page-metadata";
import "@/styles/the-calling-styles.css";

export const metadata: Metadata = buildPageMetadata({
  title: "The Calling | Olivia Carli",
  description: "The Calling — answer the call to a deeper, more meaningful life with Olivia Carli.",
  publicUrl: "/the-calling",
  shareImagePath: "/assets/img/img-e516ee97e0.jpg",
});

export default function TheCallingPage() {
  return (
    <>
      <div className="page visible" id="calling">
        <section className="band dark wine hero bold">
          <div className="shot">
            <img src="/assets/img/img-e516ee97e0.jpg" alt="Olivia Carli seated in a deep burgundy room" loading="lazy" decoding="async" />
            <div className="scrim"></div>
            <div className="frame"></div>
            <div className="wrap">
              <div className="inner stack loose">
                <p className="eyebrow on-dark">The Calling</p>
                <h1>You feel called to do something<br />meaningful with <em>your life.</em></h1>
                <p className="said">The question is whether you've become capable of doing it.</p>
                <div className="rule on-dark"></div>
                <p className="lead">
                  A 90-day initiatory journey for people ready to move beyond seeking and into deeper self-knowledge, self-mastery, spiritual training and meaningful service.
                </p>
                <ul className="herostats">
                  <li><span className="n">90</span><span className="u">Days</span></li>
                  <li><span className="n">10</span><span className="u">People per cohort</span></li>
                  <li className="qual"><span className="u solo">Repeated in-person experiences</span></li>
                  <li className="br"></li>
                  <li className="qual"><span className="u solo">Private mentorship</span></li>
                  <li className="qual"><span className="u solo">Initiation + spiritual training</span></li>
                </ul>
                <div className="cta">
                  <a className="btn solid" href="#answer">Answer the Call</a>
                  <p className="sub">Apply for The Calling →</p>
                  <p className="fine">The Calling opens January 2027</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="band">
          <div className="wrap stack loose rise">
            <div className="center stack tight">
              <p className="eyebrow">I &nbsp;·&nbsp; Recognition</p>
              <h2 style={{ marginTop: "10px" }}>You may recognise yourself here.</h2>
              <div className="rule center" style={{ margin: "18px auto 0" }}></div>
            </div>
            <div className="voices">
              <blockquote>“I know I'm meant to do something important with my life.”</blockquote>
              <blockquote>“People have always come to me.”</blockquote>
              <blockquote>“I want to help people, but I don't know what that actually looks like.”</blockquote>
              <blockquote>“I have a successful career, but I don't feel like this is all I'm here for.”</blockquote>
              <blockquote>“I've done years of healing and spiritual work. At some point I need to do something with it.”</blockquote>
              <blockquote>“I know I'm capable of more.”</blockquote>
              <blockquote>“I want training. Not another manifestation course.”</blockquote>
              <blockquote>“I want to understand spirituality deeply, but I also want to be useful.”</blockquote>
              <blockquote>“I don't want to waste my life.”</blockquote>
            </div>
          </div>
        </section>
        <section className="band plateband dark">
          <div className="interlude">
            <img className="bg" style={{ objectPosition: "50% 30%" }} src="/assets/img/img-c62d38537c.jpg" alt="Five women dressed in black, each holding a single rose" loading="lazy" decoding="async" />
            <div className="veil" style={{ background: "linear-gradient(180deg,rgba(30,15,19,.50),rgba(30,15,19,.80))" }}></div>
            <div className="frame"></div>
            <div className="inner wide">
              <p className="say">
                You're not looking for someone to rescue you. You're ready to take greater responsibility for the life you already have.
              </p>
            </div>
          </div>
        </section>
        <section className="band dark">
          <div className="bgart" style={{ backgroundImage: "url(/assets/img/img-5ebf24d8ff.jpg)", opacity: "1" }}></div>
          <div className="bgtint" style={{ background: "linear-gradient(180deg,rgba(20,8,11,.42),rgba(20,8,11,.66))" }}></div>
          <div className="wrap mid center stack loose rise">
            <p className="eyebrow on-dark">II &nbsp;·&nbsp; The Tension</p>
            <h2 className="statement">Feeling called is not the same as being equipped.</h2>
            <div className="rule on-dark center"></div>
            <p className="lead" style={{ maxWidth: "52ch", margin: "0 auto" }}>
              You can care deeply about people. You can feel certain your life is meant to mean something. You can have gifts, intelligence, sensitivity, ambition and good intentions. And still not yet have the foundation required to carry greater responsibility well.
            </p>
            <p className="big-quote" style={{ color: "var(--gold-light)", maxWidth: "22ch", margin: "14px auto 0" }}>
              Calling does not equal capacity.
            </p>
            <p className="quiet" style={{ maxWidth: "46ch", margin: "0 auto" }}>The gap might look like:</p>
            <div className="chips">
              <span>Lack of direction</span>
              <span>Inconsistent discipline</span>
              <span>Unresolved patterns</span>{" "}<span>Emotional reactivity</span>
              <span>Stress</span>
              <span>Fear of being seen</span>{" "}<span>Lack of energetic strength</span>
              <span>Lack of training</span>{" "}<span>Information without integration</span>
              <span>Wanting to help without knowing how</span>{" "}<span>Not knowing where to begin</span>
            </div>
            <p className="big-quote" style={{ color: "var(--light)", maxWidth: "26ch", margin: "16px auto 0" }}>
              A calling is an invitation to develop.
            </p>
          </div>
        </section>
        <section className="band">
          <div className="wrap mid stack loose rise">
            <div className="center stack tight">
              <p className="eyebrow">III &nbsp;·&nbsp; Endless Seeking</p>
              <p className="quiet" style={{ fontFamily: "var(--tc-display)", fontSize: "clamp(20px,2vw,27px)", marginTop: "10px" }}>
                Maybe you don't need another experience.
              </p>
              <h2 style={{ marginTop: "2px" }}>Maybe you need a path.</h2>
              <div className="rule center" style={{ margin: "18px auto 0" }}></div>
            </div>
            <p className="lead center" style={{ maxWidth: "50ch", margin: "0 auto" }}>
              You've learned. You've healed. You've read the books, listened to the podcasts, taken the workshops and followed the teachers. Some of it genuinely changed you. But eventually, seeking has to lead somewhere.
            </p>
            <ul className="becomes">
              <li>Information has to become <em>wisdom.</em></li>
              <li>Healing has to become <em>integration.</em></li>
              <li>Potential has to become <em>capacity.</em></li>
              <li>And a calling has to become <em>service.</em></li>
            </ul>
            <div className="ledger" style={{ marginTop: "14px" }}>
              <div className="lhead a">Instead of</div>
              <div className="spacer"></div>
              <div className="lhead b">Toward</div>
              <div className="a-cell">Endless seeking</div>
              <div className="arrow">→</div>
              <div className="b-cell">A path</div>
              <div className="a-cell">Information</div>
              <div className="arrow">→</div>
              <div className="b-cell">Wisdom</div>
              <div className="a-cell">Consumption</div>
              <div className="arrow">→</div>
              <div className="b-cell">Practice</div>
              <div className="a-cell">Shortcuts</div>
              <div className="arrow">→</div>
              <div className="b-cell">Development</div>
              <div className="a-cell">Endless healing</div>
              <div className="arrow">→</div>
              <div className="b-cell">Integration</div>
              <div className="a-cell">Spiritual bypassing</div>
              <div className="arrow">→</div>
              <div className="b-cell">Responsibility</div>
              <div className="a-cell">Collecting modalities</div>
              <div className="arrow">→</div>
              <div className="b-cell">Progressive training</div>
              <div className="a-cell">Self-development as the destination</div>
              <div className="arrow">→</div>
              <div className="b-cell">Service</div>
            </div>
            <div className="center stack tight" style={{ marginTop: "14px" }}>
              <p className="big-quote" style={{ maxWidth: "22ch", margin: "0 auto", color: "var(--gold-deep)" }}>
                Seeking should lead somewhere.
              </p>
              <p className="lead">To wisdom. To mastery. To responsibility. To service.</p>
            </div>
          </div>
        </section>
        <section className="band dark wine">
          <div className="wrap stack loose rise">
            <div className="splitfig">
              <div className="ph">
                <img src="/assets/img/img-3bb4a2882b.jpg" alt="A hand reaching for the brass knocker on a door marked The Calling" loading="lazy" decoding="async" />
              </div>
              <div className="cp stack">
                <p className="eyebrow on-dark">IV &nbsp;·&nbsp; The Calling</p>
                <h2 className="statement">One season can change the direction of a life.</h2>
                <div className="rule on-dark"></div>
                <p className="lead">
                  The Calling is a 90-day initiatory journey for people who know they want their lives to matter and are ready to become more capable of contributing something meaningful. This isn't another course designed to give you more information. It is a season of development.
                </p>
                <p className="quiet">Across ninety days, we work on three things.</p>
              </div>
            </div>
            <div className="trainings">
              <article>
                <span className="t-lab">One</span>
                <h3>Know Yourself</h3>
                <p>
                  Deepen your understanding of yourself, receive ancient spiritual teachings and initiation, and begin seeing yourself, your life and your potential with greater clarity.
                </p>
              </article>
              <article>
                <span className="t-lab">Two</span>
                <h3>Master Yourself</h3>
                <p>
                  Develop greater stability, energetic strength, awareness, resilience, discipline and capacity in the life you are actually living.
                </p>
              </article>
              <article>
                <span className="t-lab">Three</span>
                <h3>Serve</h3>
                <p>
                  Receive foundational and advanced spiritual training, begin developing practical tools you can use in service to others, clarify your next steps, and establish a foundation from which your calling can begin becoming something lived.
                </p>
              </article>
            </div>
            <div className="land" style={{ marginTop: "10px" }}>
              <span className="a">This isn't another course to consume.</span>{" "}<span className="b">It is a path to walk.</span>
            </div>
            <div className="cta" style={{ marginTop: "6px" }}>
              <a className="btn solid" href="#answer">Answer the Call</a>
              <p className="sub">Apply for The Calling →</p>
            </div>
          </div>
        </section>
        <section className="band">
          <div className="wrap stack loose rise">
            <div className="splitfig rev">
              <div className="ph">
                <img src="/assets/img/img-df24decd69.jpg" alt="A gloved hand pressing a brass bell on a marble table" loading="lazy" decoding="async" />
              </div>
              <div className="cp stack">
                <p className="eyebrow">V &nbsp;·&nbsp; The In-Person Experience</p>
                <p className="quiet" style={{ fontFamily: "var(--tc-display)", fontSize: "clamp(20px,2vw,27px)" }}>
                  Not another twelve-week online course.
                </p>
                <h2 style={{ marginTop: "-14px" }}>Some things have to be experienced.</h2>
                <div className="rule"></div>
                <p className="lead">
                  There is extraordinary value in what can happen through a conversation, a teaching or a screen. But some things cannot be fully understood intellectually. They have to be experienced.
                </p>
                <p className="quiet">
                  The Calling is built around repeated in-person experiences across the ninety-day journey, with private mentorship, practice and integration woven between them. You don't simply receive information and disappear behind a laptop for twelve weeks. You repeatedly come back into the room.
                </p>
              </div>
            </div>
            <div className="chips" style={{ justifyContent: "center" }}>
              <span>To receive</span>
              <span>To learn</span>
              <span>To practise</span>
              <span>To experience</span>{" "}<span>To be initiated</span>
              <span>To work with the tools</span>
              <span>To ask questions</span>
              <span>To deepen</span>
            </div>
            <p className="quiet center" style={{ maxWidth: "44ch", margin: "0 auto" }}>
              And then you return to your actual life and live it.
            </p>
          </div>
        </section>
        <section className="band dark">
          <div className="bgart" style={{ backgroundImage: "url(/assets/img/img-373d3ab644.jpg)", opacity: "1" }}></div>
          <div className="bgtint" style={{ background: "linear-gradient(180deg,rgba(20,8,11,.70),rgba(20,8,11,.80))" }}></div>
          <div className="frame"></div>
          <div className="wrap mid center stack loose rise">
            <p className="eyebrow on-dark">The Rhythm</p>
            <p className="cycle">
              <span className="step">Enter the room</span>{" "}<span className="pair"><span className="arw">→</span><span className="step">Return to life</span></span>{" "}<span className="pair"><span className="arw">→</span><span className="step last">Come back different.</span></span>
            </p>
            <div className="rule on-dark center"></div>
            <p className="lead" style={{ maxWidth: "54ch", margin: "0 auto" }}>
              You receive something. You take it into your life. You practise. You discover where it holds, and where you are still challenged. Life gives you opportunities to work with what you have received.
            </p>
            <p className="quiet" style={{ maxWidth: "54ch", margin: "0 auto" }}>
              You notice yourself differently. You receive private mentorship and guidance. And then you return to the room. You learn again. You experience again. You practise again.
            </p>
            <p className="big-quote" style={{ color: "var(--light)", maxWidth: "26ch", margin: "8px auto 0" }}>
              Over ninety days, the work begins becoming yours.
            </p>
          </div>
        </section>
        <section className="band cream2">
          <div className="wrap stack loose rise">
            <div className="center stack tight">
              <p className="eyebrow">Ninety Days</p>
              <h2 style={{ marginTop: "10px" }}>The times you come into the room.</h2>
              <div className="rule center" style={{ margin: "18px auto 0" }}></div>
            </div>
            <div className="rooms">
              <article>
                <span className="n">I</span>
                <span className="u">In person</span>
                <h3>Empower Thyself + Initiation</h3>
                <p>Two days of ancient teachings, rituals, spiritual tools, energetic development and initiation.</p>
              </article>
              <article>
                <span className="n">II</span>
                <span className="u">In person</span>
                <h3>The Stress Reset</h3>
                <p>
                  A five-part training in stress, self-regulation and inner stability, held progressively across the earlier portion of the ninety days.
                </p>
              </article>
              <article>
                <span className="n">III</span>
                <span className="u">In person</span>
                <h3>Spiritual Foundations</h3>
                <p>Sacred Geometry · Astral Travel · Magical Beings of the Earth · Journeys of the Spirit</p>
              </article>
              <article>
                <span className="n">IV</span>
                <span className="u">In person</span>
                <h3>Advanced Sacred Geometry</h3>
                <p>Crystal Lightworker training: practical tools and services you can begin using in service to others.</p>
              </article>
              <article>
                <span className="n">V</span>
                <span className="u">One to one</span>
                <h3>Personal healing</h3>
                <p>Life Activation, and an additional personal healing selected for your own needs.</p>
              </article>
              <article className="between">
                <span className="n">Throughout</span>
                <span className="u">Between the rooms</span>
                <h3>Private mentorship</h3>
                <p>Private guidance at the moments that matter, across the whole ninety days.</p>
              </article>
              <div className="total"><span className="tu">Repeated in-person experiences across the ninety days</span></div>
            </div>
            <p className="lead center" style={{ maxWidth: "58ch", margin: "0 auto" }}>
              There will be teachings you can understand with your mind. And there will be rituals, initiation, meditation, healing, practices and moments that need to be experienced for yourself.
            </p>
            <div className="land">
              <span className="a">This isn't simply something you log into.</span>{" "}<span className="b">It is something you enter.</span>
            </div>
            <div className="cta" style={{ marginTop: "6px" }}>
              <a className="btn solid" href="#answer">Answer the Call</a>
              <p className="sub">Apply for The Calling →</p>
            </div>
          </div>
        </section>
        <section className="band">
          <div className="wrap stack loose rise">
            <div className="center stack tight">
              <p className="eyebrow">VI &nbsp;·&nbsp; The Transformation</p>
              <h2 style={{ marginTop: "10px" }}>Called → Capable → Of Service</h2>
              <div className="rule center" style={{ margin: "18px auto 0" }}></div>
            </div>
            <div className="arc">
              <div className="step"><span className="a-lab">At the beginning</span><p>“I know I'm meant for more.”</p></div>
              <div className="step">
                <span className="a-lab">Around 30 days</span>
                <p>“I'm beginning to understand myself, and what has been getting in my way.”</p>
              </div>
              <div className="step">
                <span className="a-lab">Around 60 days</span>
                <p>“I'm developing the spiritual, energetic and personal foundation to hold more.”</p>
              </div>
              <div className="step">
                <span className="a-lab">At 90 days</span>
                <p>
                  “I have tools. I have training. I have greater capacity. I have direction. I know my next step. And I'm beginning to understand how what I have received can become useful to others.”
                </p>
              </div>
            </div>
            <div className="wrap narrow" style={{ marginTop: "10px" }}>
              <p className="subhead">What you leave with</p>
              <ul className="plain" style={{ marginTop: "14px" }}>
                <li>Greater self-knowledge</li>
                <li>Greater energetic capacity</li>
                <li>Greater stability</li>
                <li>Initiation</li>
                <li>Spiritual tools</li>
                <li>Practical training</li>
                <li>Direction</li>
                <li>A clearer relationship with service</li>
                <li>Concrete next steps</li>
              </ul>
              <p className="quiet" style={{ marginTop: "22px" }}>
                And for those called toward the healer's path, the prerequisite training needed to move into the next stage.
              </p>
            </div>
            <div className="land" style={{ marginTop: "12px" }}>
              <span className="a" style={{ color: "var(--ink)" }}>I don't need to know everything I'm destined to do.</span>{" "}<span className="b">I know what mine is to do next.</span>
            </div>
          </div>
        </section>
        <section className="band plateband dark">
          <div className="interlude">
            <img className="bg" style={{ objectPosition: "50% 40%" }} src="/assets/img/img-6fb949c81e.jpg" alt="A marble sculpture of Psyche beneath a gilded baroque ceiling" loading="lazy" decoding="async" />
            <div className="veil" style={{ background: "linear-gradient(180deg,rgba(30,15,19,.46),rgba(30,15,19,.74))" }}></div>
            <div className="frame"></div>
            <div className="inner">
              <p className="eyebrow on-dark">The Ancient Instruction</p>
              <p className="say">For three thousand years the instruction has not changed.</p>
            </div>
          </div>
        </section>
        <section className="band cream2">
          <div className="wrap stack loose rise">
            <div className="center stack tight">
              <p className="eyebrow">VII &nbsp;·&nbsp; The Philosophy</p>
              <h2 style={{ marginTop: "10px" }}>Know Thyself. Master Thyself. Serve.</h2>
              <div className="rule center" style={{ margin: "18px auto 0" }}></div>
            </div>
            <div className="wrap narrow">
              <div className="reframes">
                <div className="reframe">
                  <span className="r-neg">Know Thyself isn't endless introspection</span>
                  <p className="r-pos">Know yourself so you can understand <b>what you're here to give.</b></p>
                </div>
                <div className="reframe">
                  <span className="r-neg">Self-mastery isn't becoming perfect</span>
                  <p className="r-pos">Master yourself so you can hold <b>greater responsibility.</b></p>
                </div>
                <div className="reframe">
                  <span className="r-neg">Healing isn't endless self-work</span>
                  <p className="r-pos">Heal so your wounds don't become <b>the lens through which you serve.</b></p>
                </div>
                <div className="reframe">
                  <span className="r-neg">Wisdom isn't information</span>
                  <p className="r-pos">Acquire wisdom so you can <b>use it.</b></p>
                </div>
                <div className="reframe">
                  <span className="r-neg">Purpose isn't the perfect job</span>
                  <p className="r-pos">
                    Purpose begins with the question: <b>what can I contribute with the life I've been given?</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="land" style={{ marginTop: "14px" }}>
              <span className="a">A calling is not a crown.</span>{" "}<span className="b">It is a responsibility.</span>
            </div>
          </div>
        </section>
        <section className="band">
          <div className="wrap stack loose rise">
            <div className="center stack tight">
              <p className="eyebrow">VIII &nbsp;·&nbsp; The Shape of the Journey</p>
              <h2 style={{ marginTop: "10px" }}>Ninety days, and what follows.</h2>
              <div className="rule center" style={{ margin: "18px auto 0" }}></div>
            </div>
            <ol className="stages">
              <li className="stage lead-stage">
                <span className="s-lab">Stage One</span>
                <h3>The Calling</h3>
                <p className="s-sub">A 90-day initiatory journey</p>
                <p className="s-steps">Heal &nbsp;→&nbsp; Initiate &nbsp;→&nbsp; Expand &nbsp;→&nbsp; Train</p>
              </li>
              <li className="stage">
                <span className="s-lab">Stage Two</span>
                <h3>The Practicum</h3>
                <p className="s-sub">Take the training into real life</p>
                <p className="s-steps">Practise &nbsp;→&nbsp; Apply &nbsp;→&nbsp; Serve</p>
              </li>
              <li className="stage">
                <span className="s-lab">Stage Three</span>
                <h3>The Return</h3>
                <p className="s-sub">A final in-person integration gathering</p>
                <p className="s-steps">Reflect &nbsp;→&nbsp; Integrate &nbsp;→&nbsp; Continue</p>
              </li>
              <li className="stage last">
                <span className="s-lab">And then</span>
                <h3>The Path Continues</h3>
                <p className="s-sub">Ongoing monthly initiate calls and continued spiritual guidance</p>
              </li>
            </ol>
            <div className="land" style={{ marginTop: "6px" }}>
              <span className="a">The Calling has a completion.</span>{" "}<span className="b">The path does not.</span>
            </div>
          </div>
        </section>
        <section className="band cream2">
          <div className="wrap mid stack loose rise">
            <div className="center stack tight">
              <p className="eyebrow">IX &nbsp;·&nbsp; The Four Movements</p>
              <h2 style={{ marginTop: "10px" }}>Heal → Initiate → Expand → Train</h2>
              <p className="quiet" style={{ maxWidth: "44ch", margin: "14px auto 0" }}>
                The four movements inside the ninety days.
              </p>
            </div>
            <div className="moves">
              <details className="move" open>
                <summary className="move-head">
                  <span className="move-num">I</span>{" "}<span className="move-lab">
                    <span className="move-name">Heal</span>
                    <span className="move-sub">Get yourself right before trying to help anyone else.</span>
                  </span>{" "}<span className="move-tog">+</span>
                </summary>
                <div className="move-body">
                  <p>
                    Before anything is built, the ground is levelled. This movement clears what has been quietly running you, and begins the personal recalibration the rest of the journey rests on.
                  </p>
                  <ul>
                    <li>Life Activation</li>
                    <li>Personal healing</li>
                    <li>Onboarding & private mentorship</li>
                    <li>The Stress Reset begins</li>
                  </ul>
                  <p className="principle">
                    Your capacity to serve others will never sustainably exceed your capacity to govern yourself.
                  </p>
                </div>
              </details>
              <details className="move">
                <summary className="move-head">
                  <span className="move-num">II</span>{" "}<span className="move-lab">
                    <span className="move-name">Initiate</span>
                    <span className="move-sub">Cross the threshold into the lineage.</span>
                  </span>{" "}<span className="move-tog">+</span>
                </summary>
                <div className="move-body">
                  <p>
                    The central threshold of The Calling. Through the two-day Empower Thyself training you receive foundational Mystery School teachings, rituals and practical tools, culminating in initiation into the lineage.
                  </p>
                  <ul>
                    <li>Empower Thyself</li>
                    <li>Initiation</li>
                    <li>Mystery School teachings</li>
                    <li>Rituals & tools</li>
                    <li>The Stress Reset continues and completes</li>
                  </ul>
                  <p className="principle">You are not only learning more. You are building the capacity to hold more.</p>
                </div>
              </details>
              <details className="move">
                <summary className="move-head">
                  <span className="move-num">III</span>{" "}<span className="move-lab">
                    <span className="move-name">Expand</span>
                    <span className="move-sub">Widen what you are able to perceive and understand.</span>
                  </span>{" "}<span className="move-tog">+</span>
                </summary>
                <div className="move-body">
                  <p>
                    Four Spiritual Foundations trainings within the tradition, designed to expand awareness, deepen spiritual understanding and develop practical skill.
                  </p>
                  <ul>
                    <li>Sacred Geometry</li>
                    <li>Astral Travel</li>
                    <li>Magical Beings of the Earth</li>
                    <li>Journeys of the Spirit</li>
                  </ul>
                  <p className="quiet" style={{ fontSize: "16.5px" }}>Each training is described in full further down this page.</p>
                </div>
              </details>
              <details className="move">
                <summary className="move-head">
                  <span className="move-num">IV</span>{" "}<span className="move-lab">
                    <span className="move-name">Train</span>
                    <span className="move-sub">Begin learning how to give what you have received.</span>
                  </span>{" "}<span className="move-tog">+</span>
                </summary>
                <div className="move-body">
                  <p>
                    A separate day of Advanced Sacred Geometry and Crystal Lightworker training, where you begin learning practical tools and services that can be offered to others.
                  </p>
                  <ul>
                    <li>Advanced Sacred Geometry</li>
                    <li>Crystal Lightworker training</li>
                    <li>Practical tools for beginning to serve</li>
                  </ul>
                  <p className="principle">You are no longer only receiving the work. You begin learning how to give.</p>
                </div>
              </details>
            </div>
            <div className="land" style={{ marginTop: "14px" }}>
              <span className="a">You have received.</span>{" "}<span className="b">Now what will you do with it?</span>
            </div>
            <p className="cycle" style={{ marginTop: "-8px" }}>
              <span className="step">From receiving</span>{" "}<span className="pair"><span className="arw">→</span><span className="step last">To serving.</span></span>
            </p>
          </div>
        </section>
        <section className="band dark">
          <div className="bgart" style={{ backgroundImage: "url(/assets/img/img-373d3ab644.jpg)", opacity: "1" }}></div>
          <div className="bgtint" style={{ background: "linear-gradient(180deg,rgba(20,8,11,.62),rgba(20,8,11,.74))" }}></div>
          <div className="wrap stack loose rise">
            <div className="center stack tight">
              <p className="eyebrow on-dark">X &nbsp;·&nbsp; What Your Ninety Days Include</p>
              <h2 style={{ marginTop: "10px" }}>Depth, not volume.</h2>
              <p className="quiet" style={{ maxWidth: "52ch", margin: "14px auto 0" }}>
                A limited, high-touch cohort, because this work asks for intimacy, progression and access.
              </p>
            </div>
            <ul className="scale">
              <li>Life Activation</li>
              <li>Personal Healing</li>
              <li>Empower Thyself + Initiation</li>
              <li>The Stress Reset, a 5-part training</li>
              <li>Spiritual Foundations</li>
              <li>Advanced Sacred Geometry / Crystal Lightworker Training</li>
              <li>Private Mentorship</li>
              <li>The Practicum</li>
              <li>The Return</li>
              <li>Continued guidance after completion</li>
            </ul>
            <p className="quiet center" style={{ maxWidth: "52ch", margin: "0 auto", fontStyle: "italic" }}>
              The Practicum and The Return are included in the overall Calling experience.
            </p>
            <p className="subhead">Personal healing & recalibration</p>
            <div className="trainings">
              <article>
                <span className="t-lab">One</span>
                <h3>Life Activation</h3>
                <p>
                  An individual Life Activation session at the beginning of the journey. This begins the personal recalibration process and prepares you for the work ahead.
                </p>
              </article>
              <article>
                <span className="t-lab">Two</span>
                <h3>A second personal healing</h3>
                <p>An additional healing chosen according to your individual needs and where deeper support is required.</p>
              </article>
              <article>
                <span className="t-lab">Three</span>
                <h3>The Stress Reset</h3>
                <p>
                  A five-part training in stress, self-regulation and inner stability. The sessions run progressively through the earlier portion of the ninety days, so you come to understand your relationship with stress, recognise your own patterns, and build real internal steadiness.
                </p>
                <p style={{ fontStyle: "italic" }}>Learn the tools → practise the tools → live the tools.</p>
              </article>
            </div>
            <p className="big-quote center" style={{ color: "var(--gold-light)", maxWidth: "26ch", margin: "6px auto 0" }}>
              Strengthen the person who will carry the calling.
            </p>
          </div>
        </section>
        <section className="band dark" style={{ paddingTop: "clamp(48px,5vw,72px)" }}>
          <div className="bgart" style={{ backgroundImage: "url(/assets/img/img-373d3ab644.jpg)", opacity: "1" }}></div>
          <div className="bgtint" style={{ background: "linear-gradient(180deg,rgba(20,8,11,.74),rgba(20,8,11,.78))" }}></div>
          <div className="wrap mid center stack loose rise">
            <p className="eyebrow on-dark">The Threshold</p>
            <h2 className="statement">Empower Thyself & Initiation</h2>
            <div className="rule on-dark center"></div>
            <p className="lead" style={{ maxWidth: "56ch", margin: "0 auto" }}>
              Through the two-day Empower Thyself training you receive foundational Mystery School teachings, rituals and practical tools designed to strengthen your energetic foundation and support a more balanced, conscious way of living.
            </p>
            <ul className="plain" style={{ textAlign: "left", maxWidth: "760px", margin: "0 auto" }}>
              <li>Build greater energetic strength and resilience</li>
              <li>Balance yourself emotionally and energetically</li>
              <li>Work with rituals and tools that support flow and alignment</li>
              <li>Work consciously with your own energy</li>
              <li>Expand your capacity to hold greater light</li>
              <li>Establish a foundation for the training that follows</li>
            </ul>
            <p className="quiet" style={{ maxWidth: "56ch", margin: "0 auto" }}>
              The experience culminates in initiation into the lineage. This is where the journey moves from understanding spiritual ideas toward beginning to work with them deliberately in your own life.
            </p>
            <div className="land" style={{ marginTop: "8px" }}>
              <span className="a" style={{ color: "var(--light)" }}>You are not only learning more.</span>{" "}<span className="b">You are building the capacity to hold more.</span>
            </div>
          </div>
        </section>
        <section className="band">
          <div className="wrap stack loose rise">
            <div className="center stack tight">
              <p className="eyebrow">Spiritual Foundations Training</p>
              <h2 style={{ marginTop: "10px" }}>Four trainings within the tradition.</h2>
              <div className="rule center" style={{ margin: "18px auto 0" }}></div>
            </div>
            <div className="trainings">
              <article>
                <span className="t-lab">Foundation I</span>
                <h3>Sacred Geometry</h3>
                <p>
                  Learn foundational principles of Sacred Geometry and how they are used within the tradition to create sacred spaces and establish intentionally held, energetically sealed environments.
                </p>
                <p>
                  You begin learning how to consciously work with the spaces in which you live, work, practise, create and serve.
                </p>
              </article>
              <article>
                <span className="t-lab">Foundation II</span>
                <h3>Astral Travel</h3>
                <p>
                  Learn structured techniques intended to expand consciousness and awareness beyond ordinary perception, and begin exploring astral dimensions within the framework of the Mystery School tradition.
                </p>
                <p>The emphasis is on the expansion of awareness, consciousness and understanding.</p>
              </article>
              <article>
                <span className="t-lab">Foundation III</span>
                <h3>Magical Beings<br />of the Earth</h3>
                <p>
                  An exploration of the seen and unseen dimensions of life. This training invites you to deepen your awareness of the broader reality in which we live, and of the beings and intelligences described within the Mystery School teachings.
                </p>
                <p>
                  It helps you land more deeply into an understanding of both the reality we can see and the reality beyond ordinary perception.
                </p>
              </article>
              <article>
                <span className="t-lab">Foundation IV</span>
                <h3>Journeys<br />of the Spirit</h3>
                <p>
                  Seven sacred meditation journeys. Each offers a different experience and key of understanding through which you can explore yourself, consciousness and spiritual reality more deeply.
                </p>
                <p>
                  This training gives you direct experiences to contemplate and integrate, rather than more spiritual concepts to intellectually understand.
                </p>
              </article>
            </div>
            <p className="quiet center" style={{ maxWidth: "56ch", margin: "0 auto" }}>
              Together, these Spiritual Foundations trainings establish important groundwork for the deeper practitioner path available later.
            </p>
          </div>
        </section>
        <section className="band dark wine">
          <div className="wrap stack loose rise">
            <div className="splitfig">
              <div className="ph">
                <img src="/assets/img/img-b3a46119d1.jpg" alt="An antique brass doorknob with two skeleton keys in the lock" loading="lazy" decoding="async" />
              </div>
              <div className="cp stack">
                <p className="eyebrow on-dark">Advanced Training</p>
                <h2 className="statement">From receiving the work to beginning to serve.</h2>
                <div className="rule on-dark"></div>
                <p className="lead">
                  Following the Spiritual Foundations training, you receive a separate day of Advanced Sacred Geometry Training. This is an important threshold in The Calling, because here you begin learning practical tools and services that can be offered to others.
                </p>
              </div>
            </div>
            <div className="trainings">
              <article>
                <span className="t-lab">Application I</span>
                <h3>Crystal healings</h3>
                <p>
                  Learn a structured crystal healing service used within the tradition to work energetically in support of mental, emotional and physical wellbeing.
                </p>
              </article>
              <article>
                <span className="t-lab">Application II</span>
                <h3>Crystal grids for spaces</h3>
                <p>
                  Learn to create energetic crystal grids for homes, offices, businesses and other environments. These grids are used within the tradition with the intention of supporting a space in holding greater light, flow, protection and energetic clarity.
                </p>
              </article>
              <article>
                <span className="t-lab">Application III</span>
                <h3>Additional Sacred Geometry services</h3>
                <p>
                  You are introduced to further applications of Sacred Geometry that can begin forming part of your service as a light worker.
                </p>
              </article>
            </div>
            <div className="land" style={{ marginTop: "8px" }}>
              <span className="a" style={{ color: "#F6F1E9" }}>You don't leave only knowing more.</span>{" "}<span className="b">You leave beginning to know how to serve.</span>
            </div>
          </div>
        </section>
        <section className="band cream2">
          <div className="wrap stack loose rise">
            <div className="center stack tight">
              <p className="eyebrow">Private Mentorship</p>
              <h2 style={{ marginTop: "10px" }}>Private guidance at the moments that matter.</h2>
              <div className="rule center" style={{ margin: "18px auto 0" }}></div>
            </div>
            <p className="lead center" style={{ maxWidth: "56ch", margin: "0 auto" }}>
              Private mentorship happens at the key thresholds of The Calling: as you begin, as you prepare for initiation, and as the teachings meet your actual life.
            </p>
            <div className="trainings">
              <article>
                <span className="t-lab">At the beginning</span>
                <h3>Where you are now</h3>
                <p>
                  What is happening in your life? What do you feel called toward? What needs attention? What do you want these ninety days to address?
                </p>
              </article>
              <article>
                <span className="t-lab">At the threshold</span>
                <h3>Preparation & integration</h3>
                <p>Support leading into Empower Thyself and initiation, and the integration that follows it.</p>
              </article>
              <article>
                <span className="t-lab">Through the work</span>
                <h3>Into your actual life</h3>
                <p>
                  Relationships, work, habits, mind, emotion, energy, body, time, standards and service. This is where information becomes personal.
                </p>
              </article>
              <article>
                <span className="t-lab">After completion</span>
                <h3>Continued guidance</h3>
                <p>
                  Graduates are welcomed into ongoing monthly initiate calls, where you can keep receiving guidance, asking questions and integrating the teachings. Olivia continues to serve as a spiritual guide as you walk what comes next.
                </p>
              </article>
            </div>
            <div className="wrap narrow" style={{ marginTop: "14px" }}>
              <p className="subhead">Practice & integration</p>
              <p className="lead" style={{ marginTop: "16px" }}>
                A structured workbook accompanies the journey, with practices, reflection prompts, rituals and tools designed to bring the teachings out of the classroom and into everyday life.
              </p>
              <p className="big-quote" style={{ color: "var(--gold-deep)", margin: "22px 0 0" }}>
                Learn the tools → Practise the tools → Live the tools
              </p>
              <p className="quiet" style={{ marginTop: "16px" }}>
                The Calling is not designed to give you ninety days of information. It is designed to give you ninety days of application.
              </p>
            </div>
            <div className="cta" style={{ marginTop: "6px" }}>
              <a className="btn solid" href="#answer">Answer the Call</a>
              <p className="sub">Apply for The Calling →</p>
            </div>
          </div>
        </section>
        <section className="band dark">
          <div className="bgart" style={{ backgroundImage: "url(/assets/img/img-373d3ab644.jpg)", opacity: "1" }}></div>
          <div className="bgtint" style={{ background: "linear-gradient(180deg,rgba(20,8,11,.72),rgba(20,8,11,.82))" }}></div>
          <div className="frame"></div>
          <div className="wrap mid center stack loose rise">
            <p className="eyebrow on-dark">Following the Ninety Days</p>
            <h2 className="statement">The Practicum</h2>
            <div className="rule on-dark center"></div>
            <p className="lead" style={{ maxWidth: "52ch", margin: "0 auto" }}>
              There comes a point when learning more is no longer the next step. You have to use what you have been given.
            </p>
            <p className="quiet" style={{ maxWidth: "56ch", margin: "0 auto" }}>
              Following completion of The Calling, you enter a guided practicum designed to help you take the training into real life. It is an intentional period of practice, application, service, reflection and self-mastery.
            </p>
            <div className="chips">
              <span>Practice</span>
              <span>Application</span>
              <span>Service</span>
              <span>Reflection</span>
              <span>Self-mastery</span>
            </div>
            <p className="quiet" style={{ maxWidth: "58ch", margin: "0 auto" }}>
              You practise your tools, work with people and spaces, use your rituals, apply The Stress Reset, complete service assignments, and reflect on what serving reveals about you.
            </p>
            <div className="land" style={{ marginTop: "8px" }}>
              <span className="a" style={{ color: "#F6F1E9" }}>Don't just learn it.</span>{" "}<span className="b">Live it.</span>
            </div>
            <p className="big-quote" style={{ color: "var(--gold-light)", maxWidth: "30ch", margin: "8px auto 0" }}>
              The space between the rooms is part of the training.
            </p>
          </div>
        </section>
        <section className="band">
          <div className="wrap mid center stack loose rise">
            <p className="eyebrow">And Then</p>
            <h2 style={{ marginTop: "6px" }}>The Return</h2>
            <div className="rule center"></div>
            <p className="lead" style={{ maxWidth: "52ch", margin: "0 auto" }}>
              Following the practicum, the cohort returns for a final in-person integration gathering.
            </p>
            <p className="quiet" style={{ maxWidth: "54ch", margin: "0 auto" }}>
              It is a place to reflect on what happened when the work entered real life: what held, what was hard, what changed, and what is now yours to do next.
            </p>
            <div className="land" style={{ marginTop: "6px" }}>
              <span className="a">Enter the room. Return to life.</span>{" "}<span className="b">Come back different.</span>
            </div>
          </div>
        </section>
        <section className="band cream2">
          <div className="wrap mid stack loose rise">
            <div className="center stack tight">
              <p className="eyebrow">The Path Continues</p>
              <h2 style={{ marginTop: "10px" }}>The 90 days end.<br />The application begins.</h2>
              <div className="rule center" style={{ margin: "18px auto 0" }}></div>
            </div>
            <p className="lead center" style={{ maxWidth: "58ch", margin: "0 auto" }}>
              After the ninety-day intensive you enter The Practicum. After the practicum, the cohort returns for The Return. After that, graduates are welcomed into ongoing monthly initiate calls and continued spiritual guidance.
            </p>
            <div className="center stack tight" style={{ marginTop: "26px" }}>
              <p className="subhead" style={{ justifyContent: "center" }}>A clear path into further healer training</p>
            </div>
            <p className="lead center" style={{ maxWidth: "58ch", margin: "0 auto" }}>
              By completing the required foundational training within The Calling, those who want to continue developing as professional light workers and healers will have completed the prerequisite training needed to move into Healers Academy with the Modern Mystery School. Once those prerequisites are complete, Healers Academy is available as the next stage of training for those who choose to continue.
            </p>
            <p className="quiet center" style={{ maxWidth: "56ch", margin: "0 auto" }}>
              At Healers Academy, students go on to learn practitioner modalities including Life Activation, Aura Healing, MAX Meditation facilitation, and further healing work within the lineage.
            </p>
            <p className="quiet center" style={{ maxWidth: "56ch", margin: "0 auto", fontStyle: "italic" }}>
              Healers Academy is a separate training and is not included within The Calling. The Calling provides the foundational training required to access that next stage of the path.
            </p>
            <div className="land" style={{ marginTop: "8px" }}>
              <span className="a">The Calling has a completion.</span>{" "}<span className="b">The path does not.</span>
            </div>
          </div>
        </section>
        <section className="band plateband dark">
          <div className="interlude">
            <img className="bg" style={{ objectPosition: "50% 24%" }} src="/assets/img/img-44e56dd451.jpg" alt="Women laughing together, holding white roses, in a deep red room" loading="lazy" decoding="async" />
            <div className="veil" style={{ background: "linear-gradient(180deg,rgba(30,15,19,.44),rgba(30,15,19,.74))" }}></div>
            <div className="frame"></div>
            <div className="inner">
              <p className="eyebrow on-dark">The Cohort</p>
              <p className="say">You will not walk this ninety days alone.</p>
            </div>
          </div>
        </section>
        <section className="band">
          <div className="wrap stack loose rise">
            <div className="center stack tight">
              <p className="eyebrow">XI &nbsp;·&nbsp; Stories</p>
              <h2 style={{ marginTop: "10px" }}>What the work has meant.</h2>
              <div className="rule center" style={{ margin: "18px auto 0" }}></div>
            </div>
            <div className="stories">
              <div className="story headline">
                <div>
                  <span className="s-lab">Featured story &nbsp;·&nbsp; From seeking → direction</span>
                  <p className="quiet" style={{ fontFamily: "var(--serif)", fontStyle: "italic" }}>
                    Video or photograph, with the participant's own words.
                  </p>
                </div>
                <dl>
                  <dt>Before</dt>
                  <dd>Where were they before the work?</dd>
                  <dt>Experience</dt>
                  <dd>What did they actually experience?</dd>
                  <dt>Shift</dt>
                  <dd>What changed, internally or practically?</dd>
                  <dt>Now</dt>
                  <dd>What are they doing differently?</dd>
                </dl>
              </div>
              <div className="story">
                <span className="s-lab">From healing → development</span>
                <dl><dt>Before</dt><dd>Story to be added.</dd><dt>Shift</dt><dd>Story to be added.</dd></dl>
              </div>
              <div className="story">
                <span className="s-lab">From called → serving</span>
                <dl><dt>Before</dt><dd>Story to be added.</dd><dt>Shift</dt><dd>Story to be added.</dd></dl>
              </div>
              <div className="story">
                <span className="s-lab">Empower Thyself & initiation</span>
                <dl><dt>Before</dt><dd>Story to be added.</dd><dt>Shift</dt><dd>Story to be added.</dd></dl>
              </div>
            </div>
            <div className="cta" style={{ marginTop: "8px" }}>
              <a className="btn solid" href="#answer">Answer the Call</a>
              <p className="sub">Apply for The Calling →</p>
            </div>
          </div>
        </section>
        <section className="band dark">
          <div className="wrap stack loose rise">
            <div className="splitfig rev">
              <div className="ph">
                <img src="/assets/img/img-1349dc38ac.jpg" alt="Gilded baroque columns and a painted ceiling" loading="lazy" decoding="async" />
              </div>
              <div className="cp stack">
                <p className="eyebrow on-dark">XII &nbsp;·&nbsp; Why an Initiatory Path</p>
                <h2 className="statement">
                  There is a difference between collecting spiritual information and walking a spiritual path.
                </h2>
                <div className="rule on-dark"></div>
                <p className="quiet">
                  A path has sequence, structure, practice, training, teachers, progression, standards and responsibility.
                </p>
                <p className="lead">
                  Within an initiatory tradition you do not simply learn new ideas. Initiation, lineage, progressive training, ancient teachings, spiritual tools, direct experience and practice all ask something of the person receiving them.
                </p>
                <p className="big-quote" style={{ color: "var(--light)", maxWidth: "20ch", margin: "0" }}>
                  They are asked to develop.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="band cream2">
          <div className="wrap rise">
            <div className="founder">
              <div className="cp">
                <p className="eyebrow">XIII &nbsp;·&nbsp; A Note From Olivia</p>
                <h2 className="name">Olivia<em>Carli</em></h2>
                <p>
                  I know what it is to feel that persistent sense that life is asking something more of you. And I also know how easy it is to spend years trying to understand the call without ever building a life capable of answering it.
                </p>
                <p>
                  My work isn't about giving you an identity, declaring your purpose for you, or convincing you that you're special. It's about helping you know yourself more deeply, develop greater command of yourself, receive real spiritual training and become more useful with what you've been given.
                </p>
                <p>
                  I teach within an initiatory tradition because I believe deeply in paths that have structure, progression, standards and responsibility. And I created The Calling because there are people standing at a very specific threshold: <em>no longer content simply to seek, not yet certain how to serve.</em>
                </p>
                <p>If that's where you are, I'd be honoured to meet you there.</p>
                <p className="credline">
                  Guide · Teacher · Healer<br />Certified by the Modern Mystery School<br />Lineage of King Salomon
                </p>
              </div>
              <div className="ph">
                <img src="/assets/img/img-18f050d25b.jpg" alt="Olivia Carli walking through a candlelit room" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </section>
        <section className="band cream2">
          <div className="wrap stack loose rise">
            <div className="center stack tight">
              <p className="eyebrow">XIV &nbsp;·&nbsp; Discernment</p>
              <h2 style={{ marginTop: "10px" }}>Is this your next step?</h2>
              <div className="rule center" style={{ margin: "18px auto 0" }}></div>
            </div>
            <div className="fit">
              <div className="yes">
                <h3>The Calling may be for you if</h3>
                <ul>
                  <li><span className="mk">✦</span><span>You know your life is meant to mean something.</span></li>
                  <li>
                    <span className="mk">✦</span>
                    <span>You're drawn toward healing, leadership, contribution or service.</span>
                  </li>
                  <li>
                    <span className="mk">✦</span>
                    <span>You've explored personal development or spirituality and are ready to go deeper.</span>
                  </li>
                  <li><span className="mk">✦</span><span>You want structure rather than more random information.</span></li>
                  <li><span className="mk">✦</span><span>You are prepared to take responsibility for your life.</span></li>
                  <li><span className="mk">✦</span><span>You want training, not merely inspiration.</span></li>
                  <li>
                    <span className="mk">✦</span>
                    <span>You want greater self-mastery, and you want what is within you to become useful to others.</span>
                  </li>
                </ul>
              </div>
              <div className="no">
                <h3>This is probably not for you if you're looking for</h3>
                <ul>
                  <li><span className="mk">·</span><span>A quick spiritual high.</span></li>
                  <li><span className="mk">·</span><span>Another modality to collect.</span></li>
                  <li><span className="mk">·</span><span>Someone to tell you exactly who you are or what your purpose is.</span></li>
                  <li>
                    <span className="mk">·</span>
                    <span>A certification without the responsibility of personal development.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="land" style={{ marginTop: "14px" }}>
              <span className="a">You don't simply want to discover who you are.</span>{" "}<span className="b">You want to develop who you are, so what is within you can become useful to others.</span>
            </div>
          </div>
        </section>
        <section className="band dark wine">
          <div className="bgart" style={{ backgroundImage: "url(/assets/img/img-5ebf24d8ff.jpg)", opacity: "1" }}></div>
          <div className="bgtint" style={{ background: "linear-gradient(180deg,rgba(20,8,11,.46),rgba(20,8,11,.70))" }}></div>
          <div className="frame"></div>
          <div className="wrap mid stack loose rise">
            <div className="center stack tight">
              <p className="eyebrow on-dark">The Scale of It</p>
              <h2 className="statement" style={{ marginTop: "10px" }}>This is not access to a digital course.</h2>
              <div className="rule on-dark center" style={{ margin: "18px auto 0" }}></div>
            </div>
            <p className="quiet center" style={{ maxWidth: "44ch", margin: "0 auto" }}>The Calling includes:</p>
            <ul className="scale">
              <li>Life Activation</li>
              <li>Personal healing</li>
              <li>Empower Thyself + initiation</li>
              <li>The Stress Reset, a 5-part training</li>
              <li>Spiritual Foundations</li>
              <li>Advanced Sacred Geometry</li>
              <li>Private mentorship</li>
              <li>The Practicum</li>
              <li>The Return</li>
              <li>Continued guidance after completion</li>
            </ul>
            <div className="land" style={{ marginTop: "10px" }}>
              <span className="a" style={{ color: "#F6F1E9" }}>
                Ninety days of experience, practice, training and integration.
              </span>{" "}<span className="b">Not simply more information to consume.</span>
            </div>
          </div>
        </section>
        <section className="band">
          <div className="wrap mid stack loose rise">
            <div className="center stack tight">
              <p className="eyebrow">XV &nbsp;·&nbsp; Questions</p>
              <h2 style={{ marginTop: "10px" }}>Before you apply.</h2>
              <div className="rule center" style={{ margin: "18px auto 0" }}></div>
            </div>
            <div className="faq">
              <details className="qa">
                <summary>Is The Calling 90 days or longer?<span className="tog">+</span></summary>
                <div className="ans">
                  <p>
                    The core Calling journey takes place across 90 days. Following completion, participants enter a guided practicum and then return for a final in-person integration gathering.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>What happens after the 90 days?<span className="tog">+</span></summary>
                <div className="ans">
                  <p>
                    Participants move into The Practicum, then return for a final integration gathering. Afterward, ongoing monthly initiate calls and continued spiritual guidance are available.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>Is the practicum included?<span className="tog">+</span></summary>
                <div className="ans"><p>Yes. The Practicum and The Return are included in the overall experience.</p></div>
              </details>
              <details className="qa">
                <summary>How long is the practicum?<span className="tog">+</span></summary>
                <div className="ans"><p>Approximately one month.</p></div>
              </details>
              <details className="qa">
                <summary>When does the next cohort begin?<span className="tog">+</span></summary>
                <div className="ans"><p>The Calling opens January 2027.</p></div>
              </details>
              <details className="qa">
                <summary>Do I need to already know what my calling is?<span className="tog">+</span></summary>
                <div className="ans">
                  <p>
                    No. Most people arrive knowing only that they are here for something more. The Calling is designed to develop the self-knowledge and awareness required to begin recognising your own direction, rather than to have someone declare a purpose for you.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>Is The Calling only for people who want to become healers?<span className="tog">+</span></summary>
                <div className="ans">
                  <p>
                    No. The Calling does not require anyone to become a healer. Service may eventually express itself through healing, leadership, business, teaching, creativity, family, community, entrepreneurship, or something entirely different. For those who do feel drawn toward the healer's path, the foundational training received here is the prerequisite for continuing.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>Do I need previous spiritual experience?<span className="tog">+</span></summary>
                <div className="ans">
                  <p>
                    No previous training is required. Many participants have explored personal development or spirituality for years; others are earlier in the journey. What matters more is readiness to take responsibility and to work.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>What if I've already done a lot of healing or personal development?<span className="tog">+</span></summary>
                <div className="ans">
                  <p>
                    That is often exactly who The Calling is for. Many people arrive having read, healed and studied for years, and are ready for something with sequence, training and progression rather than another experience to add to the collection. The ninety days are structured to turn what you have already gathered into capacity.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>What is Life Activation?<span className="tog">+</span></summary>
                <div className="ans">
                  <p>
                    Life Activation is a one-to-one session within the Modern Mystery School tradition, and is one of the first personal experiences included in The Calling. Within this programme it is used as part of the initial recalibration process and as preparation for the training that follows.
                  </p>
                  <p>
                    It is intended to support greater alignment, energetic vitality, awareness and connection to your own potential. The session is received individually, before the deeper initiatory work begins.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>What is Empower Thyself?<span className="tog">+</span></summary>
                <div className="ans">
                  <p>
                    Empower Thyself is a two-day foundational Mystery School training and a central threshold within The Calling. Participants receive ancient teachings, rituals and practical spiritual tools designed to help strengthen their energetic foundation, support greater emotional and energetic balance, and work more consciously with their own energy.
                  </p>
                  <p>
                    The tools are intended to support greater flow and alignment, build energetic strength and expand your capacity and ability to hold greater light. The training culminates in initiation into the lineage, and establishes an important foundation for the deeper spiritual training that follows.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>What is The Stress Reset?<span className="tog">+</span></summary>
                <div className="ans">
                  <p>
                    A five-part training in stress, self-regulation and inner stability. The sessions run progressively through the earlier portion of the ninety days, rather than once a month, so the tools are learned, practised and then lived while the rest of the training is underway.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>What are the Spiritual Foundations trainings?<span className="tog">+</span></summary>
                <div className="ans">
                  <p>
                    Sacred Geometry, Astral Travel, Magical Beings of the Earth, and Journeys of the Spirit. Together they expand awareness, deepen spiritual understanding and develop practical skills within the tradition. Each is described in full further up this page.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>What is Advanced Sacred Geometry Training?<span className="tog">+</span></summary>
                <div className="ans">
                  <p>
                    A separate day of training that follows the Spiritual Foundations. It is the threshold where you move from primarily receiving the work toward learning practical tools and services that can be offered to others as a Crystal Lightworker: crystal healings, crystal grids for homes and other environments, and further Sacred Geometry applications.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>Will I be able to offer services after The Calling?<span className="tog">+</span></summary>
                <div className="ans">
                  <p>
                    You will have begun learning practical services through Advanced Sacred Geometry training, and The Practicum is where you actually put them to use. What you choose to offer, and how, is something the mentorship helps you think through.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>Does completing The Calling make me a certified healer?<span className="tog">+</span></summary>
                <div className="ans">
                  <p>
                    No. The Calling gives you foundational training, initiation and the beginning of practical service. Practitioner certification comes through Healers Academy, which is the next stage of the path.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>What is Healers Academy?<span className="tog">+</span></summary>
                <div className="ans">
                  <p>
                    Healers Academy is the next level of practitioner training within the Modern Mystery School, for those who want to continue developing as healers and light workers. Students who have completed the required prerequisite training continue into Healers Academy, where they learn practitioner modalities including Life Activation, Aura Healing, MAX Meditation facilitation and further healing work within the lineage.
                  </p>
                  <p>
                    Healers Academy itself is not included within The Calling. The Calling provides the foundational prerequisite training needed to access this next stage.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>Am I guaranteed access to Healers Academy after The Calling?<span className="tog">+</span></summary>
                <div className="ans">
                  <p>
                    Yes, once the required prerequisite training has been completed. You do not need to apply or be accepted. Once those prerequisites are complete, participants who wish to continue can simply sign up for Healers Academy as the next stage of their Mystery School training.
                  </p>
                  <p>Healers Academy is a separate training and is not included in The Calling.</p>
                </div>
              </details>
              <details className="qa">
                <summary>
                  What if I've already completed Empower Thyself or some of the foundational trainings?<span className="tog">+</span>
                </summary>
                <div className="ans">
                  <p>
                    That does not automatically mean The Calling isn't appropriate for you. Your application is reviewed individually, so we can understand where you currently are on the path, what training you have already completed, and whether the overall experience is still the right next step. Anything that needs adjusting is discussed directly.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>Is The Calling an online programme?<span className="tog">+</span></summary>
                <div className="ans">
                  <p>
                    No. The Calling is built around repeated in-person experiences. Private mentorship and some integration may happen online, but direct experience is intentionally woven throughout the entire journey.
                  </p>
                  <p>
                    The rhythm is: enter the room → return to life → come back different. You repeatedly return in person for healing, initiation, training, practice and direct experience. Between those experiences you take what you've received back into your everyday life, practise, integrate and receive mentorship.
                  </p>
                  <p>
                    The Calling is not designed as another twelve-week programme you consume behind a screen. It is something you participate in and experience.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>How much of The Calling is in person?<span className="tog">+</span></summary>
                <div className="ans">
                  <p>
                    The in-person experiences include Empower Thyself and initiation, The Stress Reset, the Spiritual Foundations trainings, the Advanced Sacred Geometry day, your personal healing sessions, and The Return at the end of the practicum.
                  </p>
                  <p>
                    Private mentorship and integration are woven between them. This repeated rhythm of receiving, living, integrating and returning is an intentional part of The Calling.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>Where does the in-person training take place?<span className="tog">+</span></summary>
                <div className="ans">
                  <p>
                    The in-person components take place in the Toronto / Etobicoke area. Exact locations and dates are provided to participants.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>How much time should I expect to devote each week?<span className="tog">+</span></summary>
                <div className="ans">
                  <p>
                    The Calling is designed to be integrated into real life, but it does require meaningful participation. Across the ninety days there are scheduled in-person training days, The Stress Reset sessions, private mentorship, personal healing experiences, personal practices, reflection and workbook integration, followed by the practicum.
                  </p>
                  <p>
                    Expect to make consistent space for the work rather than treating it as something to complete passively in the background. The exact calendar and time commitments are provided before enrolment.
                  </p>
                </div>
              </details>
              <details className="qa">
                <summary>How many people will be accepted?<span className="tog">+</span></summary>
                <div className="ans">
                  <p>
                    The Calling is intentionally limited to ten people per cohort. The small cohort allows the experience to remain personal, intimate and high-touch.
                  </p>
                  <p>
                    Because of the nature of the work, the level of in-person participation and the mentorship involved, the application process helps determine whether The Calling is aligned with where each individual currently is and what they are looking for. Only ten participants enter each cohort.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="band dark" id="answer">
          <div className="wrap stack loose rise">
            <div className="splitfig">
              <div className="ph">
                <img src="/assets/img/img-be1187073c.jpg" alt="A finger pressing a brass doorbell marked your calling" loading="lazy" decoding="async" />
              </div>
              <div className="cp stack">
                <p className="eyebrow on-dark">XVI &nbsp;·&nbsp; Answer the Call</p>
                <h2 className="statement">The Calling is not an open-enrolment course.</h2>
                <div className="rule on-dark"></div>
                <p className="lead">
                  Because the work is personal, high-touch and initiatory, the process begins with an application. Only ten people enter each cohort.
                </p>
              </div>
            </div>
            <div className="apply">
              <div className="s">
                <h3>The Application</h3>
                <p>
                  Tell Olivia a little about where you are, what you're reaching toward and why The Calling has caught your attention.
                </p>
              </div>
              <div className="s">
                <h3>The Conversation</h3>
                <p>If it appears that the programme may be aligned, you'll be invited into a private conversation.</p>
              </div>
              <div className="s">
                <h3>Discernment</h3>
                <p>
                  That conversation gives us the opportunity to explore where you are, answer your questions, discuss the full details of the experience, and discern together whether The Calling is the right next step.
                </p>
              </div>
            </div>
            <div className="cta" style={{ marginTop: "10px" }}>
              {" "}<a className="btn solid" href="#">Apply for The Calling</a>
              <p className="fine">The Calling opens January 2027 &nbsp;·&nbsp; Ten places per cohort</p>
            </div>
          </div>
        </section>
        <section className="band dark wine">
          <div className="bgart" style={{ backgroundImage: "url(/assets/img/img-f7f8783a99.jpg)", opacity: "1", backgroundPosition: "50% 58%" }}></div>
          <div className="bgtint" style={{ background: "radial-gradient(ellipse at 50% 46%,rgba(20,8,11,.78),rgba(20,8,11,.42) 66%),linear-gradient(180deg,rgba(20,8,11,.50),rgba(20,8,11,.80))" }}></div>
          <div className="frame"></div>
          <div className="wrap mid center stack loose rise">
            <p className="eyebrow on-dark">The Final Invitation</p>
            <h2 className="statement" style={{ maxWidth: "24ch", marginLeft: "auto", marginRight: "auto" }}>
              One day you'll look back on what you did with the life you were given.
            </h2>
            <div className="rule on-dark center"></div>
            <p className="lead" style={{ maxWidth: "46ch", margin: "0 auto" }}>May you be able to say:</p>
            <p className="big-quote" style={{ color: "var(--light)", maxWidth: "26ch", margin: "0 auto" }}>
              I used what I was given. I developed my potential. I loved people. I helped. I created something. I became someone I respected. I didn't sit on the sidelines of my own life.
            </p>
            <div className="land" style={{ marginTop: "6px" }}>
              <span className="a" style={{ color: "#F6F1E9" }}>You feel the call.</span>{" "}<span className="b">Now become capable of answering it.</span>
            </div>
            <p className="kicker" style={{ margin: "0" }}>
              90 Days &nbsp;·&nbsp; Healing &nbsp;·&nbsp; Initiation &nbsp;·&nbsp; Training &nbsp;·&nbsp; Self-Mastery &nbsp;·&nbsp; Service
            </p>
            <p className="big-quote" style={{ color: "var(--light)", maxWidth: "22ch", margin: "0 auto" }}>
              Cross the threshold. Practise what you have received. Return different.
            </p>
            <div className="cta">
              <a className="btn solid" href="#answer">Answer the Call</a>
              <p className="sub">Apply for The Calling →</p>
              <p className="fine">The Calling opens January 2027</p>
            </div>
          </div>
        </section>
      </div>
      <TheCallingInteractions />
    </>
  );
}
