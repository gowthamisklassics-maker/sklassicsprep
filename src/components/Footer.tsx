
import sklassicsLogo from "../assets/sklassics-logo.png";

const Footer = () => {
  return (
    <>
      <style>{`
        .sk-footer {
          width: 100%;
          background: linear-gradient(110deg, #151c2e, #1b2031);
          border-top: 1px solid #303548;
          color: #e7eaf2;
          font-family: Inter, "Segoe UI", Arial, sans-serif;
        }

        .sk-footer *,
        .sk-footer *::before,
        .sk-footer *::after {
          box-sizing: border-box;
        }

        .sk-footer-container {
          width: min(1376px, 90%);
          margin: 0 auto;
          padding: 25px 0 0;
        }

        .sk-footer-main {
          display: grid;
          grid-template-columns: 1.15fr 1fr 1fr 1fr;
          gap: 45px;
          align-items: start;
        }

        .sk-footer-brand {
          padding-top: 20px;
        }

        /* Original Sklassics logo */
        .sk-footer-logo {
          display: inline-block;
          width: 220px;
          max-width: 100%;
          margin-bottom: 24px;
          line-height: 0;
          text-decoration: none;
        }

        .sk-footer-logo img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        .sk-footer-description {
          max-width: 300px;
          margin: 0 0 20px;
          color: #d4d9e6;
          font-size: 13px;
          line-height: 1.8;
        }

        .sk-footer-socials {
          display: flex;
          gap: 12px;
        }

        .sk-footer-socials a {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          background: #293244;
          color: #dbe1ed;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .sk-footer-socials a:hover {
          background: #ff781d;
          color: white;
          transform: translateY(-2px);
        }

        .sk-footer-column h3 {
          margin: 0 0 17px;
          color: #ffffff;
          font-size: 16px;
          font-weight: 750;
        }

        .sk-footer-links {
          display: grid;
          gap: 12px;
        }

        .sk-footer-links a,
        .sk-footer-contact a {
          color: #e1e5ef;
          font-size: 13px;
          line-height: 1.5;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .sk-footer-links a:hover,
        .sk-footer-contact a:hover,
        .sk-footer-legal a:hover {
          color: #ff8b42;
        }

        .sk-footer-contact {
          display: grid;
          gap: 13px;
          margin-bottom: 22px;
        }

        .sk-footer-contact a {
          display: flex;
          align-items: center;
          gap: 10px;
          overflow-wrap: anywhere;
        }

        .sk-footer-contact-icon {
          color: #e1e5ef;
          font-size: 15px;
        }

        .sk-footer-download-title {
          margin: 0 0 15px;
          color: #ffffff;
          font-size: 14px;
          font-weight: 750;
        }

        .sk-footer-store-links {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .sk-footer-store-links a {
          padding: 11px 16px;
          border-radius: 7px;
          background: #293244;
          color: #f5f6fa;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s ease;
        }

        .sk-footer-store-links a:hover {
          background: #39445a;
        }

        .sk-footer-bottom {
          min-height: 110px;
          margin-top: 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .sk-footer-copyright {
          margin: 0;
          color: #e1e5ef;
          font-size: 13px;
        }

        .sk-footer-legal {
          display: flex;
          flex-wrap: wrap;
          gap: 25px;
        }

        .sk-footer-legal a {
          color: #e1e5ef;
          font-size: 13px;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        @media (max-width: 950px) {
          .sk-footer-main {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 35px;
          }

          .sk-footer-brand {
            padding-top: 0;
          }

          .sk-footer-bottom {
            min-height: auto;
            padding: 28px 0;
          }
        }

        @media (max-width: 560px) {
          .sk-footer-container {
            width: 90%;
          }

          .sk-footer-main {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .sk-footer-logo {
            width: 200px;
          }

          .sk-footer-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 20px;
          }

          .sk-footer-legal {
            gap: 15px;
          }
        }
      `}</style>

      <footer className="sk-footer">
        <div className="sk-footer-container">
          <div className="sk-footer-main">
            {/* Brand and logo */}
            <div className="sk-footer-brand">
              <a
                href="/"
                className="sk-footer-logo"
                aria-label="Sklassics home"
              >
                <img src={sklassicsLogo} alt="Sklassics" />
              </a>

              <p className="sk-footer-description">
                Enterprise-ready exam &amp; quiz platform helping
                learners achieve their goals since 2020.
              </p>

              <div className="sk-footer-socials">
                <a href="https://www.facebook.com/" aria-label="Facebook">f</a>
                <a href="https://twitter.com/" aria-label="Twitter">𝕏</a>
                <a href="https://www.instagram.com/" aria-label="Instagram">◎</a>
                <a href="https://www.youtube.com/" aria-label="YouTube">▷</a>
              </div>
            </div>

            {/* Popular exams */}
            <div className="sk-footer-column">
              <h3>Popular Exams</h3>
              <div className="sk-footer-links">
                <a href="#exams">NEET Preparation</a>
                <a href="#exams">JEE Main &amp; Advanced</a>
                <a href="#exams">EAMCET</a>
                <a href="#exams">GATE</a>
                <a href="#exams">UPSC</a>
              </div>
            </div>

            {/* Resources */}
            <div className="sk-footer-column">
              <h3>Resources</h3>
              <div className="sk-footer-links">
                <a href="#resources">Previous Year Papers</a>
                <a href="#resources">Study Material</a>
                <a href="#quizzes">Mock Tests</a>
                <a href="#resources">AI Tutor</a>
                <a href="#resources">AI Explanation</a>
              </div>
            </div>

            {/* Contact information */}
            <div className="sk-footer-column">
              <h3>Contact Us</h3>

              <div className="sk-footer-contact">
                <a href="mailto:info@sklassics.com">
                  <span className="sk-footer-contact-icon">✉</span>
                  info@sklassics.com
                </a>

                <a href="tel:+918074595152">
                  <span className="sk-footer-contact-icon">♧</span>
                  +91 80745 95152
                </a>
              </div>

              <h4 className="sk-footer-download-title">Download App</h4>

              <div className="sk-footer-store-links">
                <a href="#app-store">App Store</a>
                <a href="#play-store">Play Store</a>
              </div>
            </div>
          </div>

          {/* Bottom footer */}
          <div className="sk-footer-bottom">
            <p className="sk-footer-copyright">
              © 2025 sklassics. All rights reserved.
            </p>

            <div className="sk-footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#refund">Refund Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
