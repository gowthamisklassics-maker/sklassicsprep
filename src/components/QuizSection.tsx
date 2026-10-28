
const quizzes = [
  { title: "Senior BiPC - EAMCET", category: "BiPC", level: "Quiz | 1 level" },
  { title: "Senior MPC - EAMCET", category: "MPC", level: "Quiz | 1 level" },
  { title: "Junior BiPC - EAMCET", category: "BiPC", level: "Quiz | 1 level" },
  { title: "Junior MPC - EAMCET", category: "MPC", level: "Quiz | 1 level" },
  { title: "Junior MPC - EAPCET", category: "MPC", level: "Quiz | 1 level" },
  { title: "Junior BiPC - NEET", category: "BiPC", level: "Quiz | 1 level" },
];

const QuizSection = () => (
  <>
    <style>{`
      .sk-quiz-section {
        width: 100%;
        padding: 20px 0 55px;
        color: #f7f8fc;
        font-family: Inter, "Segoe UI", Arial, sans-serif;
      }

      .sk-quiz-section,
      .sk-quiz-section * {
        box-sizing: border-box;
      }

      .sk-quiz-inner {
        width: min(1376px, 90%);
        margin: 0 auto;
      }

      .sk-quiz-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        margin-bottom: 20px;
      }

      .sk-quiz-heading h2 {
        margin: 0 0 8px;
        color: #f7f8fc;
        font-size: 18px;
        font-weight: 700;
      }

      .sk-quiz-heading p {
        margin: 0;
        color: #a5a9b8;
        font-size: 13px;
        line-height: 1.6;
      }

      .sk-quiz-button {
        display: inline-flex;
        flex-shrink: 0;
        align-items: center;
        justify-content: center;
        padding: 12px 20px;
        border-radius: 28px;
        background: linear-gradient(110deg, #ff781d, #ed1745);
        color: #ffffff;
        font-size: 12px;
        font-weight: 700;
        text-decoration: none;
        box-shadow: 0 10px 25px rgba(237, 23, 69, 0.2);
        transition: transform 0.2s ease, filter 0.2s ease;
      }

      .sk-quiz-button:hover {
        transform: translateY(-2px);
        filter: brightness(1.08);
      }

      .sk-quiz-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;
        align-items: stretch;
      }

      /* Default quiz card */
.sk-quiz-card {
  min-width: 0;
  overflow: hidden;
  background: #030718;
  border: 1px solid #283047;
  border-radius: 17px;
  outline: none;

transition:
    background 0.35s ease,
    border-color 0.35s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

/* Gradient on mouse hover and keyboard focus */
.sk-quiz-card:hover,
.sk-quiz-card:focus,
.sk-quiz-card:focus-visible,
.sk-quiz-card:focus-within {
  background: linear-gradient(
    120deg,
    #193e5c 0%,
    #29243f 55%,
    #542d24 100%
  ) !important;

border-color: #52617e;
  transform: translateY(-4px);
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.3);
}

/* Visible keyboard focus indicator */
.sk-quiz-card:focus-visible {
  outline: 2px solid #ff8b42;
  outline-offset: 3px;
}

      .sk-quiz-image {
        width: 100%;
        height: 260px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #ffc5c3, #ff963f);
      }

      .sk-quiz-image span {
        color: rgba(255, 255, 255, 0.95);
        font-size: 15px;
        font-weight: 700;
        letter-spacing: 1px;
      }

      .sk-quiz-card-content {
        padding: 15px;
      }

      .sk-quiz-card-content small {
        display: block;
        margin-bottom: 10px;
        color: #a5a9b8;
        font-size: 11px;
      }

      .sk-quiz-card-content h3 {
        margin: 0 0 14px;
        color: #f7f8fc;
        font-size: 14px;
        font-weight: 700;
      }

      .sk-quiz-card-content a {
        display: inline-block;
        color: #ff526f;
        font-size: 12px;
        text-decoration: none;
        transition: color 0.2s ease;
      }

      .sk-quiz-card-content a:hover,
      .sk-quiz-card-content a:focus-visible {
        color: #ff9a4d;
      }

      .sk-quiz-card-content a:focus-visible,
      .sk-quiz-button:focus-visible {
        outline: 2px solid #ff8b42;
        outline-offset: 4px;
        border-radius: 4px;
      }

      @media (max-width: 750px) {
        .sk-quiz-inner {
          width: 92%;
        }

        .sk-quiz-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .sk-quiz-image {
          height: 200px;
        }
      }

      @media (max-width: 520px) {
        .sk-quiz-header {
          align-items: flex-start;
          flex-direction: column;
        }

        .sk-quiz-grid {
          grid-template-columns: 1fr;
        }

        .sk-quiz-image {
          height: 220px;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .sk-quiz-card,
        .sk-quiz-button {
          transition: none;
        }
      }
    `}</style>

    <section className="sk-quiz-section" id="quizzes">
      <div className="sk-quiz-inner">
        <div className="sk-quiz-header">
          <div className="sk-quiz-heading">
            <h2>Practice with live &amp; mock quizzes.</h2>
            <p>
              Get a sneak peek of a few quizzes available on sklassics Quiz.
            </p>
          </div>

          <a href="/login" className="sk-quiz-button">
            View All Quizzes →
          </a>
        </div>

        <div className="sk-quiz-grid">
          {quizzes.map((quiz) => (
            <article
              className="sk-quiz-card"
              key={quiz.title}
              tabIndex={0}
              aria-label={quiz.title}
            >
              <div className="sk-quiz-image">
                <span>{quiz.category} PRACTICE</span>
              </div>

              <div className="sk-quiz-card-content">
                <small>{quiz.level}</small>
                <h3>{quiz.title}</h3>
                <a href="/login">
                  Take Quiz →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default QuizSection;
