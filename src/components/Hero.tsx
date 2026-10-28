
import heroImg from "../assets/hero.png";

const Hero = () => (
  <>
    <style>{`
      .sk-hero{min-height:650px;background-position:center;background-size:cover;background-repeat:no-repeat}
      .sk-hero-overlay{min-height:650px;display:flex;align-items:center;padding:70px max(5%,calc((100% - 1370px)/2));background:linear-gradient(90deg,#080c1bf5 0%,#080c1bd6 48%,#080c1b38 100%)}
      .sk-hero-content{max-width:650px}
      .sk-hero-tag{color:#ffbd83;font-size:13px;font-weight:700}
      .sk-hero h1{margin:20px 0;font-size:clamp(36px,5vw,60px);line-height:1.12;letter-spacing:-1px;color:#fff}
      .sk-hero h1 span{display:block;color:#ff781d}
      .sk-hero p{max-width:560px;color:#bdc5d5;line-height:1.8;font-size:15px}
      .sk-hero-actions{display:flex;flex-wrap:wrap;gap:14px;margin-top:28px}
      .sk-primary,.sk-secondary{display:inline-flex;align-items:center;justify-content:center;padding:14px 22px;border-radius:30px;text-decoration:none;font-size:13px;font-weight:700}
      .sk-primary{background:linear-gradient(110deg,#ff781d,#ed1745);color:#fff}
      .sk-secondary{border:1px solid #566075;color:#fff;background:#101626}
      .sk-hero-trust{display:flex;flex-wrap:wrap;gap:18px;margin-top:28px;color:#d3d8e5;font-size:12px}
      .sk-hero-trust span:before{content:"✓";color:#ff781d;margin-right:7px}
      @media(max-width:600px){.sk-hero,.sk-hero-overlay{min-height:600px}.sk-hero-overlay{padding:55px 6%}.sk-hero-actions{align-items:flex-start;flex-direction:column}}
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
            Prepare smarter for competitive exams with practice tests,
            intelligent learning tools, and clear explanations that
            help you improve your accuracy.
          </p>

          <div className="sk-hero-actions">
            {/* Opens the Login page */}
            <a href="/login" className="sk-primary">
              Start Practicing Now →
            </a>

            {/* Scrolls to the Features section */}
            <a href="#features" className="sk-secondary">
              Explore Features
            </a>
          </div>

          <div className="sk-hero-trust">
            <span>AI-powered learning</span>
            <span>Mock tests</span>
            <span>Personalized practice</span>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Hero;
