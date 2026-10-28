
const examGroups = [
  {
    title: "Medical Entrance Exams",
    icon: "∿",
    items: [
      "NEET (UG) – Full syllabus & chapter-wise live mocks",
      "AI-based accuracy & biology-focused analytics",
    ],
    itemIcons: ["◎", "▦"],
  },
  {
    title: "Engineering Entrance Exams",
    icon: "▦",
    items: [
      "JEE Main & JEE Advanced (MCQ + numerical)",
      "EAMCET / State CETs with real exam UI",
    ],
    itemIcons: ["◎", "◎"],
  },
  {
    title: "MBA & Management Exams",
    icon: "♧",
    items: [
      "CAT-pattern aptitude & sectional tests",
      "Quant, LRDI & Verbal with time pressure",
    ],
    itemIcons: ["◎", "▦"],
  },
  {
    title: "Aptitude, Reasoning & Placements",
    icon: "∿",
    items: [
      "Quantitative & logical reasoning tests",
      "Campus placement & hiring assessments",
    ],
    itemIcons: ["◎", "♧"],
  },
];

const LiveExamsSection = () => (
  <>
    <style>{`
      .sk-live-section {
        width: 100%;
        padding: 55px 0 70px;
        color: #f7f8fc;
        font-family: Inter, "Segoe UI", Arial, sans-serif;
      }

      .sk-live-inner {
        width: min(1376px, 90%);
        margin: 0 auto;
        display: grid;
        grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
        align-items: start;
        gap: 65px;
      }

      .sk-live-content {
        padding-top: 0;
      }

      .sk-live-badge {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        padding: 8px 14px;
        margin-bottom: 16px;
        border: 1px solid #693047;
        border-radius: 25px;
        background: #291925;
        color: #ff9a62;
        font-size: 12px;
      }

      .sk-live-badge span {
        color: #ff8a2a;
        font-size: 15px;
      }

      .sk-live-content h2 {
        margin: 0 0 14px;
        color: #f8fafc;
        font-size: clamp(27px, 3vw, 32px);
        font-weight: 750;
        line-height: 1.2;
        letter-spacing: -0.8px;
      }

      .sk-live-content h2 span {
        color: #ff781d;
      }

      .sk-live-content p {
        margin: 0 0 16px;
        color: #a5a9b8;
        font-size: 15px;
        line-height: 1.7;
      }

      .sk-live-content .sk-live-detail {
        color: #c0c6d4;
        font-size: 14px;
      }

      .sk-live-stats {
        display: flex;
        flex-wrap: wrap;
        gap: 32px;
        margin: 26px 0;
      }

      .sk-live-stat {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .sk-live-stat strong {
        color: #ffffff;
        font-size: 18px;
        font-weight: 750;
      }

      .sk-live-stat span {
        color: #a5a9b8;
        font-size: 12px;
      }

      .sk-live-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 13px 21px;
        border-radius: 28px;
        background: linear-gradient(110deg, #ff781d, #ed1745);
        color: #ffffff;
        font-size: 12px;
        font-weight: 700;
        text-decoration: none;
        box-shadow: 0 10px 25px rgba(237, 23, 69, 0.2);
        transition: transform 0.2s ease;
      }

      .sk-live-button:hover {
        transform: translateY(-2px);
      }

      .sk-live-panel {
        min-width: 0;
        padding: 20px;
        background: #030718;
        border: 1px solid #202b40;
        border-radius: 23px;
      }

      .sk-live-panel h3 {
        margin: 0 0 16px;
        color: #e6e9f1;
        font-size: 16px;
        font-weight: 750;
      }

      .sk-live-card {
        padding: 16px;
        margin-top: 14px;
        background: #030718;
        border: 1px solid #202b40;
        border-radius: 17px;
      }

      .sk-live-card:first-of-type {
        margin-top: 0;
      }

      .sk-live-card h4 {
        display: flex;
        align-items: center;
        gap: 9px;
        margin: 0 0 9px;
        color: #f1f3f8;
        font-size: 14px;
        font-weight: 700;
      }

      .sk-live-card h4 span {
        color: #ff781d;
        font-size: 17px;
      }

      .sk-live-card ul {
        list-style: none;
        padding: 0 0 0 14px;
        margin: 0;
      }

      .sk-live-card li {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        margin-top: 4px;
        color: #c0c6d4;
        font-size: 12px;
        line-height: 1.5;
      }

      .sk-live-card li span {
        flex-shrink: 0;
        color: #ff781d;
      }

      @media (max-width: 900px) {
        .sk-live-inner {
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .sk-live-stats {
          gap: 20px;
        }

        .sk-live-panel {
          padding: 16px;
        }

        .sk-live-card {
          padding: 13px;
        }
      }

      @media (max-width: 650px) {
        .sk-live-section {
          padding: 40px 0 50px;
        }

        .sk-live-inner {
          width: 92%;
          grid-template-columns: 1fr;
          gap: 30px;
        }

        .sk-live-content h2 {
          font-size: 28px;
        }

        .sk-live-content p {
          font-size: 14px;
        }

        .sk-live-stats {
          gap: 25px;
        }
      }
    `}</style>

    <section className="sk-live-section" id="live-exams">
      <div className="sk-live-inner">
        <div className="sk-live-content">
          <span className="sk-live-badge">
            <span>◉</span> Live Now
          </span>

          <h2>
            India-Scale <span>Competitive Live Exams,</span> Conducted by Us
          </h2>

          <p>
            We design and conduct real exam-pattern live tests for NEET,
            JEE, EAMCET, aptitude, reasoning, and placement exams — exactly
            like the actual exam experience students face.
          </p>

          <p className="sk-live-detail">
            From thousands of students attempting simultaneously to instant
            All India Ranks, detailed analytics, and strict exam controls —
            our platform is built to handle high-stakes competitive testing
            without compromise.
          </p>

          <div className="sk-live-stats">
            <div className="sk-live-stat">
              <strong>100+</strong>
              <span>Live tests / month</span>
            </div>

            <div className="sk-live-stat">
              <strong>50K</strong>
              <span>Avg. participants</span>
            </div>

            <div className="sk-live-stat">
              <strong>₹10L</strong>
              <span>Monthly prizes</span>
            </div>
          </div>

          <a href="/login" className="sk-live-button">
  Join Live Test Now →
</a>
        </div>

        <div className="sk-live-panel">
          <h3>Exams &amp; Test Types We Conduct</h3>

          {examGroups.map((group) => (
            <article className="sk-live-card" key={group.title}>
              <h4>
                <span>{group.icon}</span>
                {group.title}
              </h4>

              <ul>
                {group.items.map((item, index) => (
                  <li key={item}>
                    <span>{group.itemIcons[index]}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default LiveExamsSection;
