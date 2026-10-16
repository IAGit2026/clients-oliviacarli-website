import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Love Notes | Olivia Carli",
  description: "Love Notes — words from those who have worked with Olivia Carli.",
  publicUrl: "/love-notes",
  shareImagePath: "/assets/img/img-6303c0ce72.jpg",
});

export default function LoveNotesPage() {
  return (
    <>
      <div className="page visible" id="love">
        <section className="band bg-img">
          <div className="bgart" style={{ backgroundImage: "url(/assets/img/img-6303c0ce72.jpg)", opacity: "1", backgroundPosition: "50% 46%" }}></div>
          <div className="bgtint" style={{ background: "linear-gradient(180deg,rgba(235,227,214,.52),rgba(235,227,214,.78))" }}></div>
          <div className="wrap center">
            <svg className="ornament" fill="none" stroke="#6B222B" strokeWidth="1.3" style={{ marginBottom: "18px" }} viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="15"></circle>
              <circle cx="50" cy="50" fill="#6B222B" r="5.5" stroke="none"></circle>
              <g strokeLinecap="round">
                <line x1="50" x2="50" y1="6" y2="20"></line>
                <line x1="50" x2="50" y1="80" y2="94"></line>
                <line x1="6" x2="20" y1="50" y2="50"></line>
                <line x1="80" x2="94" y1="50" y2="50"></line>
                <line x1="19" x2="29" y1="19" y2="29"></line>
                <line x1="71" x2="81" y1="71" y2="81"></line>
                <line x1="81" x2="71" y1="19" y2="29"></line>
                <line x1="29" x2="19" y1="71" y2="81"></line>
              </g>
            </svg>
            <p className="eyebrow">Love Notes</p>
            <h1 style={{ fontSize: "clamp(38px,4.6vw,64px)", marginTop: "16px" }}>Words from those I've walked beside.</h1>
            <div className="rule" style={{ margin: "34px auto 50px" }}></div>
            <div className="slider" id="slider">
              <div className="slide on">
                <div className="mark">“</div>
                <blockquote>Olivia is as radiant as we humans get. Just being in her presence is healing.</blockquote>
                <div className="who">Mathew Barta</div>
              </div>
              <div className="slide">
                <div className="mark">“</div>
                <blockquote>
                  She literally changed my life. If you are looking to change your life in the best way possible, then Olivia is who you are looking for.
                </blockquote>
                <div className="who">Uni M.</div>
              </div>
              <div className="slide">
                <div className="mark">“</div>
                <blockquote>
                  Feeling so very expansive and yet also very centered. I've felt this before, but this is on a whole different level.
                </blockquote>
                <div className="who">A Client</div>
              </div>
              <div className="slide">
                <div className="mark">“</div>
                <blockquote>Absolutely blown away by the insights you guide me to. Honoured we get to work together.</blockquote>
                <div className="who">A Client</div>
              </div>
              <div className="slide">
                <div className="mark">“</div>
                <blockquote>
                  The road to self-mastery is a long and steep one, but Olivia assists in such a loving way to make it that much gentler.
                </blockquote>
                <div className="who">Stephany Garcia</div>
              </div>
              <div className="slide">
                <div className="mark">“</div>
                <blockquote>
                  Olivia is a truly amazing and magical human. She has given me the tools to become a better version of myself.
                </blockquote>
                <div className="who">Rachel Pagett</div>
              </div>
              <div className="slide">
                <div className="mark">“</div>
                <blockquote>
                  Feels like big things are moving within. I'm on the path I'm meant to be on. There's zero doubt in my heart and mind.
                </blockquote>
                <div className="who">A Client</div>
              </div>
              <div className="slide">
                <div className="mark">“</div>
                <blockquote>
                  I feel really in alignment, and now more than ever I feel like I have something bigger that I'm working towards.
                </blockquote>
                <div className="who">A Client</div>
              </div>
              <div className="slide">
                <div className="mark">“</div>
                <blockquote>Immeasurable gratitude. Words don't do justice for what you've given me.</blockquote>
                <div className="who">A Client</div>
              </div>
            </div>
            <div className="sl-nav">
              <button aria-label="Previous" className="sl-arrow" id="prev">←</button>
              <div className="dots" id="dots"></div>
              <button aria-label="Next" className="sl-arrow" id="next">→</button>
            </div>
            <div className="callout">
              <p className="c-line">Every one of these began with a single conversation.</p>
              <a className="btn solid" data-go="calling" href="/the-calling">Answer the Call</a>
            </div>
          </div>
        </section>
        <section className="band">
          <div className="wrap">
            <div className="center" style={{ marginBottom: "56px" }}>
              <p className="eyebrow">Love Letters</p>
              <h2 className="statement" style={{ marginTop: "14px" }}>The longer notes.</h2>
              <p className="lead narrow" style={{ marginTop: "18px" }}>
                Messages, letters and reflections shared by clients and students over the years, in their own words.
              </p>
            </div>
            <div className="letters">
              <div className="letter">
                <div className="mk">“</div>
                <p>
                  What can I say about Olivia? She literally changed my life. She has been my guide now for 4 years and played a huge part in my growth and who I am today. We've had countless sessions and energy healings, and each time I leave feeling rejuvenated, relaxed and ready to execute my mission. Her space and energy is so beautiful. Thank you, Olivia.
                </p>
                <div className="sig">Uni M.</div>
              </div>
              <div className="letter">
                <div className="mk">“</div>
                <p>
                  Olivia is as radiant as we humans get. I went to her in hopes of finding spiritual answers. Not only did she open my eyes on many topics, but she gave me the tools to find answers for myself. She has had a really profound effect on my life and has never faltered.
                </p>
                <div className="sig">Mathew Barta</div>
              </div>
              <div className="letter">
                <div className="mk">“</div>
                <p>
                  Truly a one-of-a-kind experience that has utterly shaped my perspective on how to approach my life so that it is one of joy and purpose. She's helped me realign my choices with who I really am and what genuinely brings me joy. Her ability to resonate with your energy and ask you the right questions is outstanding.
                </p>
                <div className="sig">Kait M.</div>
              </div>
              <div className="letter">
                <div className="mk">“</div>
                <p>
                  I have had many phenomenal experiences with Living Ceremony, from personal healing sessions to in-person classes. My most recent was a ten-session detox healing program that has truly made a massive impact. I feel more grounded, more clear in my direction in life, and have been supported in letting go of old experiences and finding peace.
                </p>
                <div className="sig">Laura Louise</div>
              </div>
              <div className="letter">
                <div className="mk">“</div>
                <p>
                  I'm doing absolutely amazing. I haven't smoked or drank alcohol at all since I left your house, and it's not like I'm deliberately trying not to. I genuinely don't want to. I'm slowly finding out who I am and finding happiness within, and it's brought so many new people into my life. Really grateful and happy I came to you.
                </p>
                <div className="sig">A Client</div>
              </div>
              <div className="letter">
                <div className="mk">“</div>
                <p>
                  I had the opportunity of receiving a healing series from her which itself was transformational. Life-changing, one might say. Olivia's presence and attentiveness to my experience throughout the series was one of the biggest keys that helped me understand and remain present with the process. I have so much love and gratitude for her. Stellar woman!
                </p>
                <div className="sig">Spencer Bronzi</div>
              </div>
              <div className="letter">
                <div className="mk">“</div>
                <p>
                  Good morning, Olivia. I just wanted to share that I feel so calm, peaceful, clear, and grounded in my own self. I haven't felt this way in such a long time. It's actually incredible to experience. I didn't know cord cutting and auric clearing could be so powerful. Things that would irritate me, I was just able to be more level-headed and accepting.
                </p>
                <div className="sig">A Client</div>
              </div>
              <div className="letter">
                <div className="mk">“</div>
                <p>
                  Olivia is such a grounded woman with a wealth of knowledge about life's workings. Her guidance in coaching, energy work and courses has helped me get closer to myself and spirit, and it's opened me to new feelings, new perspectives and new tools I can use to navigate through life. Thank you for all your counsel thus far.
                </p>
                <div className="sig">Sejal Barai</div>
              </div>
              <div className="letter">
                <div className="mk">“</div>
                <p>
                  Olivia is the best. She has this warmth about her that is unexplainable, that makes you instantly feel welcomed in her presence. Her meditations are wonderful and her guidance is priceless. Not only is she a mentor but an amazing friend. Highly recommend her services.
                </p>
                <div className="sig">Allison</div>
              </div>
            </div>
            <div className="center" style={{ marginTop: "20px" }}>
              <a className="btn" data-go="work" href="/the-path">Begin Your Journey</a> &nbsp; <a className="btn solid" data-go="calling" href="/the-calling">Answer the Call</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
