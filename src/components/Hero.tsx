
import heroImg from "../assets/hero.png";

const Hero = () => (
  <>
    <style>{`
      .sk-hero {
        position: relative;
        width: 100%;
        min-height: calc(100vh - 60px);
        margin-top: 0;
        padding: 0;
        overflow: hidden;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border-radius: 18px 18px 0 0;
      }

      .sk-hero-overlay {
        position: relative;
        min-height: calc(100vh - 60px);
        display: flex;
        align-items: center;
        padding: 70px max(5%, calc((100% - 1256px) / 2));
        background: linear-gradient(
          90deg,
          #080c1bf5 0%,
          #080c1bd6 48%,
          #080c1b38 100%
        );
      }

      .sk-hero-content {
        position: relative;
        z-index: 2;
        width: min(1256px, 90%);
        max-width: 650px;
        margin: 0;
        padding-top: 0;
        padding-bottom: 0;
      }

      .sk-hero-tag {
        color: #ffbd83;
        font-size: 13px;
        font-weight: 700;
      }

      .sk-hero h1 {
        margin: 20px 0;
        font-size: clamp(36px, 5vw, 60px);
        line-height: 1.12;
        letter-spacing: -1px;
        color: #fff;
      }

      .sk-hero h1 span {
        display: block;
        color: #ff781d;
      }

      .sk-hero p {
        max-width: 560px;
        color: #bdc5d5;
        line-height: 1.8;
        font-size: 15px;
      }

      .sk-hero-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
        margin-top: 28px;
      }

      .sk-primary,
      .sk-secondary {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 14px 22px;
        border-radius: 30px;
        text-decoration: none;
        font-size: 13px;
        font-weight: 700;
      }

      .sk-primary {
        background: linear-gradient(110deg, #ff781d, #ed1745);
        color: #fff;
      }

      .sk-secondary {
        border: 1px solid #566075;
        color: #fff;
        background: #101626;
      }

      .sk-hero-trust {
        display: flex;
        flex-wrap: wrap;
        gap: 18px;
        margin-top: 28px;
        color: #d3d8e5;
        font-size: 12px;
      }

      .sk-hero-trust span:before {
        content: "✓";
        color: #ff781d;
        margin-right: 5px;
      }

     

/* Mobile Hero Heading */
@media (max-width: 600px) {
  .sk-hero h1 {
    width: 100%;
    margin: 0 auto 20px;
    padding: 0;
    font-size: clamp(29px, 7.8vw, 36px);
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: -0.5px;
    text-align: center;
    overflow-wrap: normal;
  }

  .sk-hero h1 span {
    display: block;
    color: #ff781d;
  }
}

@media (max-width: 380px) {
  .sk-hero h1 {
    font-size: 29px;
    line-height: 1.2;
    letter-spacing: -0.6px;
  }
}


  .sk-hero h1 {
    font-size: 29px;
  }

  .sk-hero p {
    font-size: 13px;
    line-height: 1.7;
  }

  .sk-primary,
  .sk-secondary {
    padding-left: 16px;
    padding-right: 16px;
  }
}

    `}</style>

    <section
      className="sk-hero"
      id="home"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="sk-hero-overlay">
        <div className="sk-hero-content">
          <span className="sk-hero-tag">
            AI-POWERED EXAM PREPARATION
          </span>

          <h1>
            MASTER MCQs WITH
            <span>AI-POWERED SPEED</span>
            <span>AND ACCURACY</span>
          </h1>

          <p>
            sklassics Quiz delivers a revolutionary AI-powered exam preparation platform designed exclusively for competitive exam success. Train smarter with intelligent practice tools, compete live with thousands of students nationwide, and master JEE Main, NEET, EAMCET, and aptitude tests through adaptive learning technology that evolves with your performance.
          </p>

          <div className="sk-hero-actions">
            <a href="/login" className="sk-primary">
              Start Practicing Now →
            </a>

            <a href="#features" className="sk-secondary">
              Explore Features
            </a>
          </div>

          
        </div>
      </div>
    </section>
  </>
);

export default Hero;
