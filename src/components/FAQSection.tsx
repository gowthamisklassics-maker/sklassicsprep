
import { useState } from "react";
import studentImage from "../assets/faq-students.png";

const faqs = [
  {
    q: "What type of questions are supported?",
    a: "SklassicsPrep supports practice questions in formats such as multiple-choice questions, true/false, and other formats provided by the relevant quiz.",
  },
  {
    q: "How does anti-cheat & proctoring work?",
    a: "Mock tests can use the exam controls implemented in the platform. Available monitoring and proctoring features depend on your test configuration.",
  },
  {
    q: "Can I export results and detailed reports?",
    a: "You can review your test results and performance wherever those features are supported by the platform.",
  },
  {
    q: "Will this platform actually help me improve my exam score?",
    a: "Regular practice, timed mock tests, and reviewing your mistakes can help you identify weak areas and improve your exam preparation.",
  },
  {
    q: "What if I make mistakes or score low in mock tests?",
    a: "Mistakes are part of learning. Review your answers, identify topics that need more practice, and try again to track your improvement.",
  },
  {
    q: "Can beginners use this platform, or is it only for toppers?",
    a: "Absolutely. Beginners can start with basic questions, build confidence, and gradually progress to more challenging practice tests.",
  },
];

const FAQSection = () => {
  const [active, setActive] = useState<number | null>(0);

  return (
    <>
      <style>{`
        .sk-faq-section {
          width: 100%;
          padding: 65px 0 75px;
          background: linear-gradient(180deg, #0c0d19 0%, #080a15 100%);
          color: #f7f8fc;
          font-family: Inter, "Segoe UI", Arial, sans-serif;
        }

        .sk-faq-container {
          width: min(1450px, 94%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
          align-items: center;
          gap: 36px;
        }

        .sk-faq-content {
          min-width: 0;
        }

        .sk-faq-heading {
          margin-bottom: 26px;
        }

        .sk-faq-heading h2 {
          margin: 0 0 10px;
          color: #f7f8fc;
          font-size: clamp(25px, 2.5vw, 34px);
          font-weight: 750;
          letter-spacing: -0.7px;
        }

        .sk-faq-heading p {
          max-width: 480px;
          margin: 0;
          color: #a5a9b8;
          font-size: 14px;
          line-height: 1.8;
        }

        .sk-faq-list {
          display: grid;
          gap: 12px;
        }

        .sk-faq-item {
          overflow: hidden;
          border: 1px solid #293249;
          border-radius: 15px;
          background: rgba(5, 10, 26, 0.82);
          transition: border-color 0.2s ease, background 0.2s ease;
        }

        .sk-faq-item.active {
          border-color: #ed5266;
          background: #070b19;
        }

        .sk-faq-question {
          width: 100%;
          min-height: 48px;
          padding: 15px 17px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          text-align: left;
          background: transparent;
          color: #f5f6fa;
          border: 0;
          font-family: inherit;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.5;
          cursor: pointer;
        }

        .sk-faq-question:hover {
          color: #ffb17c;
        }

        .sk-faq-symbol {
          flex-shrink: 0;
          color: #a5a9b8;
          font-size: 19px;
          font-weight: 400;
        }

        .sk-faq-item.active .sk-faq-symbol {
          color: #ff781d;
        }

        .sk-faq-answer {
          padding: 0 17px 15px;
          margin: 0;
          color: #aab3c5;
          font-size: 13px;
          line-height: 1.8;
        }

        .sk-faq-image-wrap {
          width: 100%;
          min-width: 0;
          padding: 17px;
          border: 1px solid #252d40;
          border-radius: 27px;
          background: #030715;
          box-shadow: 0 24px 55px rgba(0, 0, 0, 0.22);
        }

        .sk-faq-image {
          display: block;
          width: 100%;
          aspect-ratio: 1.42 / 1;
          object-fit: cover;
          object-position: center;
          border-radius: 19px;
        }

        @media (max-width: 850px) {
          .sk-faq-container {
            grid-template-columns: 1fr;
            gap: 30px;
            width: min(700px, 92%);
          }

          .sk-faq-image-wrap {
            max-width: 600px;
            margin: 0 auto;
          }
        }

        @media (max-width: 550px) {
          .sk-faq-section {
            padding: 45px 0;
          }

          .sk-faq-container {
            width: 92%;
            gap: 25px;
          }

          .sk-faq-heading h2 {
            font-size: 26px;
          }

          .sk-faq-question {
            padding: 14px;
            font-size: 13px;
          }

          .sk-faq-answer {
            padding: 0 14px 14px;
          }

          .sk-faq-image-wrap {
            padding: 10px;
            border-radius: 20px;
          }

          .sk-faq-image {
            border-radius: 13px;
          }
        }
      `}</style>

      <section className="sk-faq-section" id="faq">
        <div className="sk-faq-container">
          <div className="sk-faq-content">
            <div className="sk-faq-heading">
              <h2>Frequently asked questions.</h2>
              <p>
                Everything you need to know about creating, hosting, and
                analysing quizzes on SklassicsPrep.
              </p>
            </div>

            <div className="sk-faq-list">
              {faqs.map((faq, index) => (
                <article
                  className={`sk-faq-item ${
                    active === index ? "active" : ""
                  }`}
                  key={faq.q}
                >
                  <button
                    type="button"
                    className="sk-faq-question"
                    onClick={() =>
                      setActive(active === index ? null : index)
                    }
                    aria-expanded={active === index}
                  >
                    <span>{faq.q}</span>
                    <span className="sk-faq-symbol">
                      {active === index ? "−" : "+"}
                    </span>
                  </button>

                  {active === index && (
                    <p className="sk-faq-answer">{faq.a}</p>
                  )}
                </article>
              ))}
            </div>
          </div>

          <div className="sk-faq-image-wrap">
            <img
              className="sk-faq-image"
              src={studentImage}
              alt="Students studying together for competitive exams"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
