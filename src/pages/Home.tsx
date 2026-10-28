
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ExamSection from "../components/ExamSection";
import QuizSection from "../components/QuizSection";
import FeaturesSection from "../components/FeaturesSection";
import LiveExamsSection from "../components/LiveExamsSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import examImage from "../assets/exam-preparation.png";

export default function Home() {
  return (
    <>
      <style>{`
        .sk-home {
          --sk-content-width: 1376px;
          --sk-content-gutter: 90%;
          --sk-section-space: 64px;

          min-height: 100vh;
          overflow: clip;
          background: #080a15;
          color: #f7f8fc;
          font-family: Inter, "Segoe UI", Arial, sans-serif;
        }

        .sk-home *,
        .sk-home *::before,
        .sk-home *::after {
          box-sizing: border-box;
        }

        .sk-home main {
          width: 100%;
          min-width: 0;
        }

        /*
         * Shared content width.
         * Apply this class to each section's main content container
         * for perfectly aligned left and right edges.
         */
        .sk-home .sk-page-container {
          width: min(var(--sk-content-width), var(--sk-content-gutter));
          margin-left: auto;
          margin-right: auto;
        }

        /*
         * Standard vertical spacing for page sections.
         */
        .sk-home .intro-section {
          width: 100%;
          margin: 0;
          padding: var(--sk-section-space) 0;
        }

        .sk-home .intro-card {
          width: min(var(--sk-content-width), var(--sk-content-gutter));
          margin: 0 auto;
          display: grid;
          grid-template-columns: 420px minmax(0, 1fr);
          align-items: center;
          gap: 40px;
          padding: 45px 36px;
          background: linear-gradient(115deg, #111827, #030718 75%);
          border: 1px solid #252d40;
          border-radius: 28px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
        }

        .sk-home .intro-image {
          min-width: 0;
        }

        .sk-home .intro-image img {
          display: block;
          width: 100%;
          height: 280px;
          object-fit: cover;
          border-radius: 24px;
        }

        .sk-home .intro-content {
          min-width: 0;
        }

        .sk-home .intro-content .sk-eyebrow {
          display: inline-block;
          padding: 9px 15px;
          margin-bottom: 18px;
          border: 1px solid #a94d0b;
          border-radius: 30px;
          background: rgba(255, 120, 29, 0.08);
          color: #ffd3a5;
          font-size: 12px;
        }

        .sk-home .intro-content h2 {
          margin: 0 0 18px;
          color: #ffffff;
          font-size: clamp(30px, 3vw, 43px);
          font-weight: 750;
          line-height: 1.2;
          letter-spacing: -1px;
        }

        .sk-home .intro-content h2 span {
          display: block;
          color: #ff781d;
        }

        .sk-home .intro-content p {
          max-width: 720px;
          margin: 0 0 23px;
          color: #a7adbb;
          font-size: 15px;
          line-height: 1.8;
        }

        .sk-home .intro-content .sk-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 13px 21px;
          border-radius: 28px;
          background: linear-gradient(110deg, #ff781d, #ed1745);
          color: #ffffff;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 10px 25px rgba(237, 23, 69, 0.2);
          transition: transform 0.2s ease;
        }

        .sk-home .intro-content .sk-primary:hover {
          transform: translateY(-2px);
        }

        .sk-home .intro-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 48px;
          margin-top: 30px;
        }

        .sk-home .intro-stats div {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .sk-home .intro-stats strong {
          color: #ffffff;
          font-size: 26px;
          font-weight: 750;
        }

        .sk-home .intro-stats span {
          color: #a7adbb;
          font-size: 12px;
        }

        .sk-home .sk-brand img {
          display: block;
          width: 220px;
          max-width: 100%;
          height: auto;
          object-fit: contain;
        }

        /*
         * Shared alignment helpers for section containers.
         * These apply only when the component uses these classes.
         */
        .sk-home .sk-live-inner,
        .sk-home .sk-features-inner,
        .sk-home .sk-faq-container,
        .sk-home .sk-footer-container {
          max-width: var(--sk-content-width);
          margin-left: auto;
          margin-right: auto;
        }

        /*
         * Keep the CTA centered at the same page width.
         */
        .sk-home .sk-final-cta-card {
          width: min(var(--sk-content-width), var(--sk-content-gutter));
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 1000px) {
          .sk-home {
            --sk-section-space: 48px;
          }

          .sk-home .intro-card {
            grid-template-columns: 0.9fr 1.1fr;
            gap: 25px;
            padding: 28px;
          }

          .sk-home .intro-image img {
            height: 240px;
          }

          .sk-home .intro-stats {
            gap: 25px;
          }
        }

        @media (max-width: 650px) {
          .sk-home {
            --sk-content-gutter: 92%;
            --sk-section-space: 40px;
          }

          .sk-home .intro-section {
            padding: var(--sk-section-space) 0;
          }

          .sk-home .intro-card {
            width: var(--sk-content-gutter);
            grid-template-columns: 1fr;
            gap: 25px;
            padding: 20px;
            border-radius: 22px;
          }

          .sk-home .intro-image img {
            height: 220px;
            border-radius: 16px;
          }

          .sk-home .intro-content h2 {
            font-size: 32px;
          }

          .sk-home .intro-content p {
            font-size: 14px;
          }

          .sk-home .intro-stats {
            gap: 22px;
          }

          .sk-home .intro-stats strong {
            font-size: 22px;
          }

          .sk-home .sk-brand img {
            width: 170px;
          }
        }
      `}</style>

      <div className="sk-home">
        <Navbar />

        <main>
          {/* 1. Hero */}
          <Hero />

          {/* 2. AI-Powered Learning Platform */}
          <section className="intro-section">
            <div className="intro-card">
              <div className="intro-image">
                <img
                  src={examImage}
                  alt="Online competitive exam practice"
                  loading="lazy"
                />
              </div>

              <div className="intro-content">
                <span className="sk-eyebrow">
                  AI-Powered Learning Platform
                </span>

                <h2>
                  Crack Your Dream Exam with
                  <span>Smart Practice</span>
                </h2>

                <p>
                  Master NEET, JEE, EAMCET and 50+ competitive exams with
                  AI-explained solutions, live mock tests, and personalized
                  study plans.
                </p>

                <a href="/login" className="sk-primary">
  Start Free Trial →
</a>
                <div className="intro-stats">
                  <div>
                    <strong>2M+</strong>
                    <span>Active Students</span>
                  </div>

                  <div>
                    <strong>50K+</strong>
                    <span>Selections</span>
                  </div>

                  <div>
                    <strong>1M+</strong>
                    <span>AI Explanations</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Prepare for Any Exam */}
          <ExamSection />

          {/* 4. Practice with Live & Mock Quizzes */}
          <QuizSection />

          {/* 5. Everything You Need to Succeed */}
          <FeaturesSection />

          {/* 6. Live Now */}
          <LiveExamsSection />

          {/* 7. Frequently Asked Questions */}
          <FAQSection />

          {/* 8. Start Your Journey to Success Today */}
          <CTASection />
        </main>

        {/* 9. Footer */}
        <Footer />
      </div>
    </>
  );
}
