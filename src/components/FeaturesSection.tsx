
const features = [
  {
    title: "AI-Powered Explanations",
    description:
      "Get instant, detailed explanations for every question. Our AI breaks down complex concepts into easy-to-understand steps.",
    icon: "♧",
    color: "#9747f5",
  },
  {
    title: "Live Mock Tests",
    description:
      "Join thousands of students in real-time mock tests. Experience exam pressure and compete on leaderboards.",
    icon: "⚙",
    color: "#4169f1",
  },
  {
    title: "Personalized Practice",
    description:
      "Smart algorithms identify weak areas and create customised practice sessions to improve your score.",
    icon: "▦",
    color: "#11bfd5",
  },
  {
    title: "Detailed Analytics",
    description:
      "Track your progress with comprehensive analytics. Understand your strengths and areas for improvement.",
    icon: "◧",
    color: "#ffc51b",
  },
  {
    title: "Previous Year Papers",
    description:
      "Access 20+ years of previous exam papers with detailed solutions and difficulty analysis.",
    icon: "▤",
    color: "#594de9",
  },
  {
    title: "Doubt Resolution",
    description:
      "Ask your doubts and get quick, accurate answers from our AI tutor or expert mentors.",
    icon: "♟",
    color: "#ed4e9b",
  },
];

const FeaturesSection = () => (
  <>
    <style>{`
      .sk-features {
        width: 100%;
        padding: 65px 0 70px;
        color: #f7f8fc;
        font-family: Inter, "Segoe UI", Arial, sans-serif;
      }

      .sk-features,
      .sk-features * {
        box-sizing: border-box;
      }

      .sk-features-inner {
        width: min(1376px, 90%);
        margin: 0 auto;
      }

      .sk-features-heading {
        max-width: 760px;
        margin: 0 auto 42px;
        text-align: center;
      }

      .sk-features-heading h2 {
        margin: 0 0 12px;
        color: #f8fafc;
        font-size: clamp(26px, 3vw, 32px);
        font-weight: 750;
        letter-spacing: -0.7px;
        line-height: 1.3;
      }

      .sk-features-heading h2 span {
        color: #ff781d;
      }

      .sk-features-heading p {
        margin: 0;
        color: #a5a9b8;
        font-size: 15px;
        line-height: 1.7;
      }

      .sk-features-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 26px;
        align-items: stretch;
      }

      /* Default card appearance */
      .sk-feature-card {
        min-width: 0;
        min-height: 230px;
        padding: 32px 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        background: #030718;
        border: 1px solid #151d32;
        border-radius: 25px;
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        transition:
          background 0.35s ease,
          transform 0.3s ease,
          border-color 0.3s ease,
          box-shadow 0.3s ease;
        outline: none;
      }

      /* Gradient on mouse hover and keyboard focus */
      .sk-feature-card:hover,
      .sk-feature-card:focus,
      .sk-feature-card:focus-visible,
      .sk-feature-card:focus-within {
        background: linear-gradient(
          120deg,
          #193e5c 0%,
          #29243f 55%,
          #542d24 100%
        );
        border-color: #35425c;
        box-shadow: 0 18px 38px rgba(0, 0, 0, 0.28);
        transform: translateY(-4px);
      }

      .sk-feature-icon {
        width: 64px;
        height: 64px;
        flex-shrink: 0;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 19px;
        color: #ffffff;
        font-size: 31px;
        font-weight: 700;
      }

      .sk-feature-card h3 {
        margin: 0 0 12px;
        color: #f8fafc;
        font-size: 17px;
        font-weight: 750;
        line-height: 1.4;
      }

      .sk-feature-card p {
        max-width: 380px;
        margin: 0;
        color: #c0c6d4;
        font-size: 14px;
        line-height: 1.8;
      }

      @media (max-width: 900px) {
        .sk-features-grid {
          gap: 18px;
        }

        .sk-feature-card {
          padding: 26px 18px;
        }

        .sk-feature-card h3 {
          font-size: 15px;
        }

        .sk-feature-card p {
          font-size: 13px;
        }
      }

      @media (max-width: 650px) {
        .sk-features {
          padding: 45px 0;
        }

        .sk-features-inner {
          width: 92%;
        }

        .sk-features-heading {
          margin-bottom: 28px;
        }

        .sk-features-heading p {
          font-size: 13px;
        }

        .sk-features-grid {
          grid-template-columns: 1fr;
          gap: 15px;
        }

        .sk-feature-card {
          min-height: 205px;
          padding: 25px 20px;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .sk-feature-card {
          transition: none;
        }
      }
    `}</style>

    <section className="sk-features" id="features">
      <div className="sk-features-inner">
        <div className="sk-features-heading">
          <h2>
            Everything You Need to <span>Succeed</span>
          </h2>

          <p>
            Powerful features designed to make your exam preparation
            efficient, effective, and enjoyable.
          </p>
        </div>

        <div className="sk-features-grid">
          {features.map((feature) => (
            <article
              className="sk-feature-card"
              key={feature.title}
              tabIndex={0}
              aria-label={feature.title}
            >
              <div
                className="sk-feature-icon"
                style={{ backgroundColor: feature.color }}
                aria-hidden="true"
              >
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default FeaturesSection;
