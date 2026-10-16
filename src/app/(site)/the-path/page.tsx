import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "The Path | Olivia Carli",
  description: "The Path — the ways to work with Olivia Carli on your journey of awakening and self-mastery.",
  publicUrl: "/the-path",
  shareImagePath: "/assets/img/img-2c9fd9de9c.jpg",
});

export default function ThePathPage() {
  return (
    <>
      <div className="page visible" id="work">
        <section className="band bg-img">
          <div className="bgart" style={{ backgroundImage: "url(/assets/img/img-2c9fd9de9c.jpg)", opacity: "1", backgroundPosition: "50% 42%" }}></div>
          <div className="bgtint" style={{ background: "linear-gradient(180deg,rgba(235,227,214,.40),rgba(235,227,214,.68))" }}></div>
          <div className="wrap center">
            <p className="eyebrow">The Path</p>
            <h1 style={{ fontSize: "clamp(38px,4.8vw,66px)", marginTop: "16px" }}>
              Five Doorways. <span className="swash">One Journey.</span>
            </h1>
            <div className="rule" style={{ margin: "28px auto" }}></div>
            <p className="lead mid">
              There are many ways to begin this work. Whether you're seeking healing, timeless wisdom, immersive experiences, private mentorship, or professional training and certification, this page brings together the different ways we can work together. Each offering is a unique doorway into the same path: a journey of awakening, self-mastery, and meaningful service. Explore the path below and begin wherever feels right.
            </p>
            <div className="flow">
              <div className="flow-item" data-acc="acc-awaken">
                <span className="fn">I</span>
                <span className="fname">Awaken</span>
                <span className="fsub">Return to Your Light</span>
              </div>
              <div className="flow-arrow">↓</div>
              <div className="flow-item" data-acc="acc-study">
                <span className="fn">II</span>
                <span className="fname">Study</span>
                <span className="fsub">Understand Yourself & the Universe</span>
              </div>
              <div className="flow-arrow">↓</div>
              <div className="flow-item" data-acc="acc-immerse">
                <span className="fn">III</span>
                <span className="fname">Immerse</span>
                <span className="fsub">Live the Teachings</span>
              </div>
              <div className="flow-arrow">↓</div>
              <div className="flow-item" data-acc="acc-master">
                <span className="fn">IV</span>
                <span className="fname">Master</span>
                <span className="fsub">Cultivate Your Life</span>
              </div>
              <div className="flow-arrow">↓</div>
              <div className="flow-item" data-acc="acc-serve">
                <span className="fn">V</span>
                <span className="fname">Serve</span>
                <span className="fsub">Become a Light for Others</span>
              </div>
            </div>
            <div style={{ marginTop: "42px" }}>
              <a className="btn solid" data-go="calling" href="/the-calling">Answer the Call</a>
            </div>
          </div>
        </section>
        <section className="band cream2">
          <div className="wrap mid">
            <div className="acc" id="acc-awaken">
              <button aria-expanded="false" className="acc-head" style={{ backgroundImage: "url(/assets/img/img-258597c20c.jpg)" }}>
                {" "}<span className="acc-num">I</span>{" "}<span className="acc-lab">
                  <span className="acc-name">Awaken</span>
                  <span className="acc-sub">Return to Your Light</span>
                </span>{" "}<span className="acc-tog">+</span>{" "}
              </button>
              <div className="acc-body">
                <div className="acc-inner">
                  <p className="lead">Return to Your Light.</p>
                  <p>
                    Healing is often where the journey begins. Not because you are broken, but because beneath stress, conditioning, trauma, energetic distortion and the noise of everyday life, there is a deeper version of yourself waiting to be remembered. These sessions gently peel away what no longer serves you, restoring greater harmony throughout the body, mind, soul and energetic field. As your energy aligns, life begins to align with it.
                  </p>
                  <p><em>Healing is not simply about feeling better. It is about becoming more fully yourself.</em></p>
                  <div className="subhead">Featured Healing Sessions</div>
                  <div className="plist">
                    <div className="pitem">
                      <h4>Life Activation</h4>
                      <p>
                        Awaken more of your innate potential through an ancient energetic process that activates dormant aspects of your Light, bringing greater vitality, clarity, purpose and alignment into everyday life.
                      </p>
                    </div>
                    <div className="pitem">
                      <h4>Full Spirit Activation</h4>
                      <p>
                        Strengthen your connection with your Higher Self while expanding intuition, spiritual awareness, and conscious evolution.
                      </p>
                    </div>
                    <div className="pitem">
                      <h4>Cord Cutting & Energy Clearing</h4>
                      <p>
                        Release energetic cords, stagnant influences, and patterns that no longer belong to you, creating greater freedom, clarity and peace.
                      </p>
                    </div>
                    <div className="pitem">
                      <h4>Etheric Reconstruction</h4>
                      <p>
                        Restore and strengthen the energetic architecture of your being, supporting resilience, vitality, and deeper energetic integrity.
                      </p>
                    </div>
                    <div className="pitem">
                      <h4>Spiritual Drug Detox</h4>
                      <p>
                        Gently clears energetic imprints and residual influences left by psychedelics and other consciousness-altering substances, restoring greater sovereignty, clarity, and alignment with your own Light.
                      </p>
                    </div>
                  </div>
                  <div className="ksm">
                    <div className="subhead" style={{ marginTop: "0" }}>Featured Healing Journey</div>
                    <h4>The King Salomon Healing Modality</h4>
                    <p style={{ fontStyle: "italic", color: "var(--gold-deep)", margin: "2px 0 12px" }}>
                      Twelve Sessions. One Extraordinary Journey.
                    </p>
                    <p style={{ color: "var(--ink-soft)" }}>
                      A twelve-session healing journey designed to facilitate deep and lasting transformation across every dimension of your being. Each session builds upon the last, gently unraveling long-held patterns while restoring greater harmony within the physical body, mind, emotions, energetic field and soul. Rather than addressing isolated symptoms, this work supports the restoration of your whole being.
                    </p>
                    <div className="regions">
                      <div className="region">
                        <div className="rk">Core Region</div>
                        <h5>Restore Your Foundation</h5>
                        <p>
                          Works deeply with the body’s innate intelligence while supporting the mind, emotional body, etheric body and aura, cultivating vitality, resilience, balance and integration.
                        </p>
                      </div>
                      <div className="region">
                        <div className="rk">Mind Region</div>
                        <h5>Renew Your Mind</h5>
                        <p>
                          Supports healing and reorganization within the mental and emotional bodies as long-held patterns dissolve, inviting clarity, resilience, freedom and conscious choice.
                        </p>
                      </div>
                      <div className="region">
                        <div className="rk">Auric Region</div>
                        <h5>Strengthen Your Light</h5>
                        <p>
                          Restores balance and coherence within the auric field, deepening presence, intuition, stability, energetic integrity and spiritual alignment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="acc" id="acc-study">
              <button aria-expanded="false" className="acc-head" style={{ backgroundImage: "url(/assets/img/img-9df097e827.jpg)" }}>
                {" "}<span className="acc-num">II</span>{" "}<span className="acc-lab">
                  <span className="acc-name">Study</span>
                  <span className="acc-sub">Understand Yourself & the Universe</span>
                </span>{" "}<span className="acc-tog">+</span>{" "}
              </button>
              <div className="acc-body">
                <div className="acc-inner">
                  <p className="lead">Understand Yourself & the Universe.</p>
                  <p>
                    Awakening is only the beginning. For thousands of years, wisdom has been passed from teacher to student, not simply as information to collect, but as a way of understanding ourselves, the world around us, and our place within it. These trainings move beyond inspiration and into embodiment, offering practical tools and timeless teachings that can be integrated into every area of life.
                  </p>
                  <div className="subhead">Trainings & Teachings</div>
                  <div className="plist">
                    <div className="pitem">
                      <h4>Empower Thyself</h4>
                      <p>
                        <em>“Know Thyself.”</em> The foundational program introduces the timeless Mystery School principles of self-mastery, spiritual understanding, and conscious living: a framework for understanding yourself and your life with greater clarity, purpose and wisdom. This is where the journey begins.
                      </p>
                    </div>
                    <div className="pitem">
                      <h4>Spiritual Foundations</h4>
                      <p>
                        Foundational Mystery School teachings exploring consciousness, sacred symbolism and the invisible principles that shape our experience, including Sacred Geometry, Astral Travel, The Twelve Magickal Beings of the Earth, and Journeys of the Spirit.
                      </p>
                    </div>
                    <div className="pitem">
                      <h4>Universal Hermetic Ray Kabbalah</h4>
                      <p>
                        One of the most comprehensive maps for understanding both ourselves and the universe, illuminating the relationship between soul, personality, consciousness, purpose and the deeper patterns that shape our lives. Not merely a philosophy, but a compass and a roadmap.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="acc" id="acc-immerse">
              <button aria-expanded="false" className="acc-head" style={{ backgroundImage: "url(/assets/img/img-840e93e575.jpg)" }}>
                {" "}<span className="acc-num">III</span>{" "}<span className="acc-lab">
                  <span className="acc-name">Immerse</span>
                  <span className="acc-sub">Live the Teachings</span>
                </span>{" "}<span className="acc-tog">+</span>{" "}
              </button>
              <div className="acc-body">
                <div className="acc-inner">
                  <p className="lead">Live the Teachings.</p>
                  <p>
                    Some lessons cannot be learned from a book. They must be lived. Our immersive retreats combine ancient wisdom, ceremony, initiation, meaningful conversation, beautiful environments and intentional community. Held in extraordinary locations throughout Europe and North America, these experiences create space to step away from everyday life and into deep transformation.
                  </p>
                  <p>
                    Surrounded by beauty and supported by life-changing teachings, wisdom becomes more than something you understand. It becomes something you embody.
                  </p>
                  <p style={{ fontStyle: "italic", color: "var(--gold-deep)" }}>More than a retreat. A return to yourself.</p>
                </div>
              </div>
            </div>
            <div className="acc" id="acc-master">
              <button aria-expanded="false" className="acc-head" style={{ backgroundImage: "url(/assets/img/img-04ce341e4e.jpg)" }}>
                {" "}<span className="acc-num">IV</span>{" "}<span className="acc-lab">
                  <span className="acc-name">Master</span>
                  <span className="acc-sub">Cultivate Your Life</span>
                </span>{" "}<span className="acc-tog">+</span>{" "}
              </button>
              <div className="acc-body">
                <div className="acc-inner">
                  <p className="lead">Cultivate Your Life.</p>
                  <p>
                    Mastery is not a destination. It is a way of living. This private mentorship is for those who desire to intentionally cultivate every area of life. Together we refine your character, deepen your wisdom, clarify your purpose, and bring greater harmony to your relationships, leadership, work, health and service.
                  </p>
                  <p>
                    <em>Transformation is powerful. Integration is where it becomes permanent.</em> This is the work of consciously creating a congruent and meaningful life.
                  </p>
                </div>
              </div>
            </div>
            <div className="acc" id="acc-serve">
              <button aria-expanded="false" className="acc-head" style={{ backgroundImage: "url(/assets/img/img-da7fda9e77.jpg)" }}>
                {" "}<span className="acc-num">V</span>{" "}<span className="acc-lab">
                  <span className="acc-name">Serve</span>
                  <span className="acc-sub">Become a Light for Others</span>
                </span>{" "}<span className="acc-tog">+</span>{" "}
              </button>
              <div className="acc-body">
                <div className="acc-inner">
                  <p className="lead">Become a Light for Others.</p>
                  <p>
                    Every authentic path eventually asks the same question: <em>What will you do with everything you have received?</em> Wisdom was never meant to stop with us. As we cultivate greater healing, clarity, and self-mastery, a natural desire begins to emerge, not simply to continue growing, but to contribute. To uplift. To serve.
                  </p>
                  <p>Because the purpose of wisdom is not accumulation. It is contribution.</p>
                  <div className="subhead">Training & Community</div>
                  <div className="plist">
                    <div className="pitem">
                      <h4>Healers Academy</h4>
                      <p>
                        A professional Mystery School training for those called to become certified practitioners of Life Activation, Aura Healing and Max Meditation™. More than technique, it develops the integrity, presence, discipline and self-mastery required to hold transformational space for others.
                      </p>
                    </div>
                    <div className="pitem">
                      <h4>The Circle of Service</h4>
                      <p>
                        An ongoing mentorship community for certified healers committed to continual growth, refinement and meaningful contribution: deepening practice, receiving advanced mentorship, and supporting one another in bringing more Light into the world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="band cream2" style={{ padding: "70px 0" }}>
          <div className="wrap center">
            <p className="eyebrow">Begin With Clarity</p>
            <h2 className="statement" style={{ margin: "14px auto 22px", maxWidth: "20ch" }}>
              Not sure which doorway is yours?
            </h2>
            <p className="lead narrow" style={{ marginBottom: "28px" }}>
              The Calling is a place to begin: a ninety-day path for those ready to move from seeking into training and service.
            </p>
            <a className="btn solid" data-go="calling" href="/the-calling">Answer the Call</a>
          </div>
        </section>
        <section className="band dark wine">
          <div className="wrap center narrow">
            <p className="eyebrow on-dark">Final Invitation</p>
            <div className="rule on-dark" style={{ margin: "22px auto" }}></div>
            <p style={{ color: "#D8C7C2" }}>
              Every journey begins somewhere. Whether your first step is a healing session, a weekend training, an immersive retreat, a year of mentorship, or a calling into service, what matters most is not where you begin. It is simply that you begin.
            </p>
            <p className="big-quote" style={{ color: "var(--light)", margin: "28px auto", maxWidth: "24ch" }}>
              Imagine looking back on your life and seeing not a collection of random experiences, but a life intentionally cultivated. A life guided by wisdom. A heart that remained open. A soul that remembered why it came here.
            </p>
            <p style={{ color: "var(--gold-light)", fontStyle: "italic", fontSize: "1.2em" }}>
              This is the Great Work. And every path begins with a single step.
            </p>
            <div style={{ marginTop: "30px" }}>
              <a className="btn solid" data-go="calling" href="/the-calling">Answer the Call</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
