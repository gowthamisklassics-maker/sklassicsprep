
import {
  BrainCircuit,
  Settings,
  Grid3X3,
  ChartNoAxesColumn,
  ScrollText,
  UserRound,
} from "lucide-react";

const features = [
  {
    title: "AI-Powered Explanations",
    description:
      "Get instant, detailed explanations for every question. Our AI breaks down complex concepts into easy-to-understand steps.",
    Icon: BrainCircuit,
    color: "#9747f5",
  },
  {
    title: "Live Mock Tests",
    description:
      "Join thousands of students in real-time mock tests. Experience exam pressure and compete on leaderboards.",
    Icon: Settings,
    color: "#4169f1",
  },
  {
    title: "Personalized Practice",
    description:
      "Smart algorithms identify weak areas and create customised practice sessions to improve your score.",
    Icon: Grid3X3,
    color: "#11bfd5",
  },
  {
    title: "Detailed Analytics",
    description:
      "Track your progress with comprehensive analytics. Understand your strengths and areas for improvement.",
    Icon: ChartNoAxesColumn,
    color: "#ffc51b",
  },
  {
    title: "Previous Year Papers",
    description:
      "Access 20+ years of previous exam papers with detailed solutions and difficulty analysis.",
    Icon: ScrollText,
    color: "#594de9",
  },
  {
    title: "Doubt Resolution",
    description:
      "Ask your doubts and get quick, accurate answers from our AI tutor or expert mentors.",
    Icon: UserRound,
    color: "#ed4e9b",
  },
];

const FeaturesSection = () => (
  <>
    <style>{`
      .sk-features {
        width: 100%;
        padding: 24px 0 4px;
        color: #f7f8fc;
        background: #080913;
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
        margin: 0 auto 24px;
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

      .sk-feature-card {
        min-width: 0;
        min-height: 260px;
        padding: 32px 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        background: #030718;
        border: 1px solid #151d32;
        border-radius: 25px;
        box-shadow: none;
        transition:
          background 0.35s ease,
          transform 0.3s ease,
          border-color 0.3s ease,
          box-shadow 0.3s ease;
      }

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

      .sk-feature-card:focus-visible {
        outline: 2px solid #ff9500;
        outline-offset: 3px;
      }

      .sk-feature-icon {
        width: 64px;
        height: 64px;
        flex-shrink: 0;
        margin: 0 auto 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        color: #ffffff;
      }

      .sk-feature-icon svg {
        width: 25px;
        height: 25px;
        stroke-width: 2.6;
      }

      .sk-feature-card h3 {
        margin: 0 0 14px;
        color: #f8fafc;
        font-size: 16px;
        font-weight: 750;
        line-height: 1.4;
      }

      .sk-feature-card p {
        max-width: 380px;
        margin: 0;
        color: #d1d5e0;
        font-size: 13px;
        line-height: 1.9;
      }

      @media (max-width: 900px) {
        .sk-features-grid {
          gap: 18px;
        }

        .sk-feature-card {
          padding: 26px 18px;
        }
      }

      @media (max-width: 650px) {
        .sk-features {
          padding: 40px 0;
        }

        .sk-features-inner {
          width: 92%;
        }

        .sk-features-grid {
          grid-template-columns: 1fr;
          gap: 15px;
        }

        .sk-feature-card {
          min-height: 220px;
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
          {features.map(({ title, description, Icon, color }) => (
            <article
              className="sk-feature-card"
              key={title}
              tabIndex={0}
              aria-label={title}
            >
              <div
                className="sk-feature-icon"
                style={{ backgroundColor: color }}
                aria-hidden="true"
              >
                <Icon />
              </div>

              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default FeaturesSection;
