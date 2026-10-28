
const CTASection = () => {
  return (
    <>
      <style>{`
        .sk-final-cta {
          width: 100%;
          padding: 40px 0 55px;
          background: #080a15;
          color: #f7f8fc;
          font-family: Inter, "Segoe UI", Arial, sans-serif;
        }

        .sk-final-cta *,
        .sk-final-cta *::before,
        .sk-final-cta *::after {
          box-sizing: border-box;
        }

        .sk-final-cta-card {
          width: min(1376px, 90%);
          min-height: 280px;
          margin: 0 auto;
          padding: 55px 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          border: 1px solid #202035;
          border-radius: 30px;
          background:
            radial-gradient(
              ellipse at 50% 0%,
              rgba(104, 35, 70, 0.17),
              transparent 65%
            ),
            linear-gradient(115deg, #10101f, #0c0d1a);
          box-shadow: 0 22px 50px rgba(0, 0, 0, 0.2);
        }

        .sk-final-cta-card h2 {
          margin: 0 0 12px;
          color: #ffffff;
          font-size: clamp(27px, 3vw, 36px);
          font-weight: 750;
          line-height: 1.25;
          letter-spacing: -0.8px;
        }

        .sk-final-cta-card h2 span {
          color: #ff781d;
        }

        .sk-final-cta-description {
          max-width: 700px;
          margin: 0 0 26px;
          color: #d0d1dc;
          font-size: 15px;
          line-height: 1.75;
        }

        .sk-final-cta-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 18px;
        }

        .sk-final-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 42px;
          padding: 12px 21px;
          border: 0;
          border-radius: 28px;
          background: linear-gradient(110deg, #ff781d, #ed1745);
          color: #ffffff;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 12px 28px rgba(237, 23, 69, 0.24);
          transition: transform 0.2s ease;
        }

        .sk-final-cta-button:hover {
          transform: translateY(-2px);
        }

        .sk-final-cta-note {
          color: #e0e0e8;
          font-size: 13px;
        }

        @media (max-width: 600px) {
          .sk-final-cta {
            padding: 30px 0 40px;
          }

          .sk-final-cta-card {
            width: 92%;
            min-height: 250px;
            padding: 38px 20px;
            border-radius: 23px;
          }

          .sk-final-cta-card h2 {
            font-size: 27px;
          }

          .sk-final-cta-description {
            font-size: 14px;
          }

          .sk-final-cta-actions {
            flex-direction: column;
            gap: 14px;
          }
        }
      `}</style>

      <section className="sk-final-cta" id="get-started">
        <div className="sk-final-cta-card">
          <h2>
            Start Your Journey to <span>Success Today</span>
          </h2>

          <p className="sk-final-cta-description">
            Join 2 million+ students who are already cracking their dream
            exams. Get 7 days free access to all features.
          </p>

          <div className="sk-final-cta-actions">
            <a href="/login" className="sk-final-cta-button">
              Start 7-Day Free Trial →
            </a>

            <span className="sk-final-cta-note">
              No credit card required
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTASection;
