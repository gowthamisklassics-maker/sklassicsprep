
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  ArrowRight,
  Sparkles,
  Target,
  Eye,
  ShieldCheck,
  Lightbulb,
  Users,
  Rocket,
  CheckCircle2,
} from "lucide-react";

const milestones = [
  {
    label: "OUR BEGINNING",
    title: "The Beginning",
    description:
      "Sklassics began with a vision to build meaningful digital experiences through technology, creativity and innovation.",
    side: "left",
  },
  {
    label: "OUR GROWTH",
    title: "Growing Together",
    description:
      "We continued developing modern digital solutions focused on quality, usability, performance and customer needs.",
    side: "right",
  },
  {
    label: "OUR EXPANSION",
    title: "Expanding Possibilities",
    description:
      "Our focus expanded towards scalable applications, digital platforms and technology-driven business solutions.",
    side: "left",
  },
  {
    label: "TODAY",
    title: "Trusted Partner",
    description:
      "Today, we stand as a trusted technology partner for businesses and individuals, known for quality, innovation and customer-centric solutions.",
    side: "right",
  },
];

const values = [
  {
    title: "Innovation",
    description:
      "We explore modern technologies and creative approaches to solve real-world problems.",
    icon: Lightbulb,
  },
  {
    title: "Quality",
    description:
      "We focus on reliable, carefully designed solutions that deliver a consistent user experience.",
    icon: ShieldCheck,
  },
  {
    title: "Collaboration",
    description:
      "We value teamwork, open communication and strong relationships with our clients.",
    icon: Users,
  },
  {
    title: "Growth",
    description:
      "We continuously learn, improve and adapt to changing technology and business needs.",
    icon: Rocket,
  },
];

export default function About() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      ".about-page .about-hero-content, " +
        ".about-page .about-section-heading, " +
        ".about-page .about-stat, " +
        ".about-page .about-profile-card, " +
        ".about-page .about-timeline-item, " +
        ".about-page .about-profile-pill, " +
        ".about-page .about-value-card, " +
        ".about-page .about-mv-card, " +
        ".about-page .about-cta"
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("about-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      }
    );

    elements.forEach((element, index) => {
      element.style.setProperty(
        "--reveal-delay",
        `${(index % 4) * 100}ms`
      );
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <main className="about-page">
        <style>{`
          .about-page,
          .about-page *,
          .about-page *::before,
          .about-page *::after {
            box-sizing: border-box;
          }

          .about-page {
            --about-bg: #050718;
            --about-panel: #0b1222;
            --about-border: #202b40;
            --about-text: #f5f6fb;
            --about-muted: #98a3b8;
            --about-orange: #ff781d;
            position: relative;
            isolation: isolate;
            min-height: 100vh;
            overflow: hidden;
            background:
              radial-gradient(
                ellipse at 5% 15%,
                rgba(160, 30, 61, 0.10),
                transparent 34%
              ),
              radial-gradient(
                ellipse at 95% 30%,
                rgba(255, 104, 31, 0.07),
                transparent 32%
              ),
              #050718;
            color: var(--about-text);
            font-family: Inter, "Segoe UI", Arial, sans-serif;
          }

          .about-container {
            width: min(1080px, calc(100% - 48px));
            margin: 0 auto;
          }

          .about-section {
            padding: 88px 0;
          }

          .about-hero {
            min-height: 540px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 90px 24px 80px;
            text-align: center;
          }

          .about-hero-content {
            width: min(900px, 100%);
            margin: 0 auto;
          }

          .about-eyebrow {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 7px;
            padding: 9px 16px;
            border: 1px solid rgba(255, 120, 29, 0.3);
            border-radius: 30px;
            background: linear-gradient(
              110deg,
              rgba(220, 36, 40, 0.22),
              rgba(255, 120, 29, 0.12)
            );
            color: #ffb18a;
            font-size: 10px;
            font-weight: 800;
            letter-spacing: 1.4px;
            text-transform: uppercase;
            transition: border-color 300ms ease, box-shadow 300ms ease;
          }

          .about-eyebrow:hover {
            border-color: #ff781d;
            box-shadow: 0 0 22px #ff781d25;
          }

          .about-hero h1 {
            margin: 27px 0 20px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(34px, 5.5vw, 66px);
            font-weight: 800;
            line-height: 1.14;
            letter-spacing: -1.5px;
          }

          .about-gradient-text {
            display: inline-block;
            background: linear-gradient(
              100deg,
              #e52535 0%,
              #ff781d 75%,
              #ff9c45 100%
            );
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
          }

          .about-hero-description {
            max-width: 620px;
            margin: 0 auto;
            color: var(--about-muted);
            font-size: 14px;
            line-height: 1.9;
          }

          .about-stats {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 15px;
            max-width: 700px;
            margin: 30px auto 28px;
          }

          .about-stat {
            padding: 19px 12px;
            border: 1px solid #202940;
            border-radius: 16px;
            background: rgba(12, 18, 34, 0.8);
            transition:
              opacity 700ms ease,
              transform 700ms cubic-bezier(0.2, 0.7, 0.2, 1),
              border-color 250ms ease,
              box-shadow 250ms ease;
          }

          .about-stat strong {
            display: block;
            margin-bottom: 7px;
            color: #ff7a2b;
            font-family: Georgia, "Times New Roman", serif;
            font-size: 25px;
          }

          .about-stat span {
            display: block;
            color: #a2aabe;
            font-size: 10px;
            line-height: 1.5;
          }

          .about-actions {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 14px;
          }

          .about-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 9px;
            min-height: 43px;
            padding: 0 20px;
            border: 1px solid #ff781d;
            border-radius: 28px;
            background: linear-gradient(110deg, #df2424, #ff781d);
            box-shadow: 0 9px 28px rgba(229, 44, 65, 0.18);
            color: white;
            font-size: 12px;
            font-weight: 750;
            text-decoration: none;
            transition:
              transform 250ms ease,
              box-shadow 250ms ease,
              filter 250ms ease;
          }

          .about-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px #ff781d30;
            filter: brightness(1.1);
          }

          .about-button.secondary {
            border-color: #343047;
            background: #0b0c1b;
            box-shadow: none;
          }

          .about-section-heading {
            margin-bottom: 35px;
            text-align: center;
          }

          .about-section-heading h2 {
            margin: 18px 0 12px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(29px, 4vw, 43px);
            font-weight: 800;
            line-height: 1.2;
          }

          .about-section-heading p {
            max-width: 640px;
            margin: 0 auto;
            color: var(--about-muted);
            font-size: 13px;
            line-height: 1.85;
          }

          .about-profile-card {
            padding: 35px;
            border: 1px solid #202940;
            border-radius: 22px;
            background: linear-gradient(
              145deg,
              rgba(12, 20, 37, 0.96),
              rgba(6, 10, 25, 0.96)
            );
            text-align: center;
          }

          .about-profile-card > p {
            max-width: 750px;
            margin: 0 auto 17px;
            color: #b1b9c9;
            font-size: 13px;
            line-height: 1.95;
          }

          .about-profile-pill-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
            margin-top: 25px;
          }

          .about-profile-pill {
            padding: 18px 12px;
            border: 1px solid #202940;
            border-radius: 14px;
            background: rgba(25, 31, 49, 0.56);
            transition:
              border-color 250ms ease,
              box-shadow 250ms ease;
          }

          .about-profile-pill strong {
            display: block;
            margin-bottom: 7px;
            font-size: 13px;
          }

          .about-profile-pill span {
            color: var(--about-muted);
            font-size: 11px;
            line-height: 1.6;
          }

          .about-timeline {
            position: relative;
            width: min(820px, 100%);
            margin: 0 auto;
          }

          .about-timeline::before {
            position: absolute;
            top: 8px;
            bottom: 8px;
            left: 50%;
            width: 1px;
            background: linear-gradient(
              to bottom,
              transparent,
              #ff781d,
              #a62a46,
              transparent
            );
            content: "";
            transform: translateX(-50%);
          }

          .about-timeline-item {
            position: relative;
            display: grid;
            grid-template-columns: 1fr 42px 1fr;
            align-items: start;
            margin-bottom: 42px;
          }

          .about-timeline-item:last-child {
            margin-bottom: 0;
          }

          .about-timeline-content {
            padding: 0 24px;
          }

          .about-timeline-item.left .about-timeline-content {
            grid-column: 1;
            text-align: right;
          }

          .about-timeline-item.right .about-timeline-content {
            grid-column: 3;
            text-align: left;
          }

          .about-timeline-dot {
            z-index: 1;
            grid-column: 2;
            grid-row: 1;
            width: 13px;
            height: 13px;
            margin: 43px auto 0;
            border: 3px solid #ff8a42;
            border-radius: 50%;
            background: #fff0e6;
            box-shadow: 0 0 17px #ff641d80;
            transition: box-shadow 350ms ease, transform 350ms ease;
          }

          .about-timeline-item:hover .about-timeline-dot {
            transform: scale(1.35);
            box-shadow: 0 0 12px #ff781d, 0 0 28px #ff781d80;
          }

          .about-timeline-label {
            display: inline-block;
            margin-bottom: 10px;
            padding: 6px 10px;
            border-radius: 20px;
            background: linear-gradient(110deg, #d82c35, #ff781d);
            color: white;
            font-size: 9px;
            font-weight: 800;
            letter-spacing: 0.7px;
          }

          .about-timeline-content h3 {
            margin: 0 0 10px;
            font-size: 19px;
          }

          .about-timeline-content p {
            margin: 0;
            color: var(--about-muted);
            font-size: 12px;
            line-height: 1.85;
          }

          .about-values-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
          }

          .about-value-card {
            padding: 25px;
            border: 1px solid #202940;
            border-radius: 19px;
            background: linear-gradient(145deg, #0d1625, #080c1a);
            transition:
              opacity 700ms ease,
              transform 700ms cubic-bezier(0.2, 0.7, 0.2, 1),
              border-color 250ms ease,
              box-shadow 250ms ease;
          }

          .about-value-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 45px;
            height: 45px;
            margin-bottom: 18px;
            border-radius: 13px;
            background: linear-gradient(135deg, #e62c39, #ff781d);
            box-shadow: 0 7px 22px #f14b3030;
            color: white;
          }

          .about-value-card h3 {
            margin: 0 0 10px;
            font-size: 17px;
          }

          .about-value-card p {
            margin: 0;
            color: var(--about-muted);
            font-size: 12px;
            line-height: 1.85;
          }

          .about-mission-vision {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
          }

          .about-mv-card {
            padding: 27px;
            border: 1px solid #202940;
            border-radius: 19px;
            background: linear-gradient(145deg, #0d1625, #080c1a);
            transition:
              opacity 700ms ease,
              transform 700ms cubic-bezier(0.2, 0.7, 0.2, 1),
              border-color 250ms ease,
              box-shadow 250ms ease;
          }

          .about-mv-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 45px;
            height: 45px;
            margin-bottom: 17px;
            border-radius: 13px;
            background: linear-gradient(135deg, #e62c39, #ff781d);
            color: white;
          }

          .about-mv-card h3 {
            margin: 0 0 12px;
            font-size: 19px;
          }

          .about-mv-card p {
            margin: 0;
            color: var(--about-muted);
            font-size: 13px;
            line-height: 1.9;
          }

          .about-cta {
            padding: 55px 30px;
            border: 1px solid #34283b;
            border-radius: 24px;
            background:
              radial-gradient(
                ellipse at 0% 100%,
                rgba(208, 35, 57, 0.14),
                transparent 55%
              ),
              linear-gradient(135deg, #0e1425, #090b19);
            text-align: center;
          }

          .about-cta h2 {
            margin: 18px 0 12px;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(28px, 4vw, 40px);
          }

          .about-cta p {
            max-width: 570px;
            margin: 0 auto 24px;
            color: var(--about-muted);
            font-size: 13px;
            line-height: 1.85;
          }

          /* Scroll-triggered reveal animations */
          .about-page .about-hero-content,
          .about-page .about-section-heading,
          .about-page .about-stat,
          .about-page .about-profile-card,
          .about-page .about-timeline-item,
          .about-page .about-profile-pill,
          .about-page .about-value-card,
          .about-page .about-mv-card,
          .about-page .about-cta {
            opacity: 0;
            transform: translateY(28px);
            transition:
              opacity 700ms ease,
              transform 700ms cubic-bezier(0.2, 0.7, 0.2, 1),
              border-color 250ms ease,
              box-shadow 250ms ease;
            transition-delay: var(--reveal-delay, 0ms);
          }

          .about-page .about-hero-content.about-visible,
          .about-page .about-section-heading.about-visible,
          .about-page .about-stat.about-visible,
          .about-page .about-profile-card.about-visible,
          .about-page .about-timeline-item.about-visible,
          .about-page .about-profile-pill.about-visible,
          .about-page .about-value-card.about-visible,
          .about-page .about-mv-card.about-visible,
          .about-page .about-cta.about-visible {
            opacity: 1;
            transform: translateY(0);
          }

          /* Staggered card reveal */
          .about-page .about-stat:nth-child(2),
          .about-page .about-profile-pill:nth-child(2),
          .about-page .about-value-card:nth-child(2),
          .about-page .about-mv-card:nth-child(2) {
            transition-delay: 100ms;
          }

          .about-page .about-stat:nth-child(3),
          .about-page .about-profile-pill:nth-child(3),
          .about-page .about-value-card:nth-child(3) {
            transition-delay: 200ms;
          }

          .about-page .about-stat:nth-child(4),
          .about-page .about-value-card:nth-child(4) {
            transition-delay: 300ms;
          }

          .about-page .about-stat:hover,
          .about-page .about-profile-pill:hover,
          .about-page .about-value-card:hover,
          .about-page .about-mv-card:hover {
            border-color: #ff781d80;
            box-shadow: 0 12px 35px #00000030;
          }

          @media (max-width: 700px) {
            .about-section {
              padding: 58px 0;
            }

            .about-container {
              width: min(100% - 32px, 540px);
            }

            .about-hero {
              min-height: auto;
              padding: 75px 16px 60px;
            }

            .about-hero h1 {
              letter-spacing: -0.5px;
            }

            .about-stats {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 12px;
            }

            .about-profile-card {
              padding: 24px 18px;
            }

            .about-profile-pill-grid {
              grid-template-columns: 1fr;
            }

            .about-timeline::before {
              left: 8px;
            }

            .about-timeline-item {
              grid-template-columns: 18px minmax(0, 1fr);
              gap: 12px;
              margin-bottom: 32px;
            }

            .about-timeline-dot {
              grid-column: 1;
              grid-row: 1;
              width: 13px;
              height: 13px;
              margin: 35px 0 0;
            }

            .about-timeline-item.left .about-timeline-content,
            .about-timeline-item.right .about-timeline-content {
              grid-column: 2;
              grid-row: 1;
              text-align: left;
              padding: 0 0 0 8px;
            }

            .about-values-grid,
            .about-mission-vision {
              grid-template-columns: 1fr;
            }

            .about-cta {
              padding: 38px 20px;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .about-page *,
            .about-page *::before,
            .about-page *::after {
              animation: none !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }

            .about-page .about-hero-content,
            .about-page .about-section-heading,
            .about-page .about-stat,
            .about-page .about-profile-card,
            .about-page .about-timeline-item,
            .about-page .about-profile-pill,
            .about-page .about-value-card,
            .about-page .about-mv-card,
            .about-page .about-cta {
              opacity: 1;
              transform: none;
            }
          }
        `}</style>

        {/* Hero section */}
        <section className="about-hero">
          <div className="about-hero-content">
            <span className="about-eyebrow">
              <Sparkles size={13} />
              ABOUT OUR COMPANY
            </span>

            <h1>
              About <span className="about-gradient-text">SKLASSICS</span>
              <br />
              <span className="about-gradient-text">
                TECHNOLOGIES PVT LTD
              </span>
            </h1>

            <p className="about-hero-description">
              A trusted technology and service brand delivering innovative
              digital solutions, creative designs, and professional business
              services across India.
            </p>

            <div className="about-stats">
              <div className="about-stat">
                <strong>50+</strong>
                <span>Projects Delivered</span>
              </div>

              <div className="about-stat">
                <strong>30+</strong>
                <span>Happy Clients</span>
              </div>

              <div className="about-stat">
                <strong>3+</strong>
                <span>Years Experience</span>
              </div>

              <div className="about-stat">
                <strong>100%</strong>
                <span>Client Satisfaction</span>
              </div>
            </div>

            <div className="about-actions">
              <a className="about-button" href="/contact">
                Get In Touch <ArrowRight size={15} />
              </a>

              <a className="about-button secondary" href="#about-profile">
                Explore Our Work <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* Company profile */}
        <section className="about-section" id="about-profile">
          <div className="about-container">
            <div className="about-section-heading">
              <span className="about-eyebrow">OUR PROFILE</span>
              <h2>
                Our Company <span className="about-gradient-text">Profile</span>
              </h2>
              <p>
                Discover the principles, capabilities and approach that shape
                our work and define our commitment to creating meaningful
                digital experiences.
              </p>
            </div>

            <div className="about-profile-card">
              <p>
                SKLASSICS TECHNOLOGIES PVT LTD is a technology-focused company
                committed to transforming ideas into impactful digital
                experiences.
              </p>

              <p>
                We believe in quality, trust and long-term relationships,
                delivering solutions that are visually engaging,
                performance-driven and user-centric.
              </p>

              <div className="about-profile-pill-grid">
                <div className="about-profile-pill">
                  <strong>Design</strong>
                  <span>Modern UI with premium user experiences</span>
                </div>

                <div className="about-profile-pill">
                  <strong>Development</strong>
                  <span>Scalable and high-performance applications</span>
                </div>

                <div className="about-profile-pill">
                  <strong>Trust</strong>
                  <span>Reliable and client-focused delivery</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company timeline */}
        <section className="about-section">
          <div className="about-container">
            <div className="about-section-heading">
              <span className="about-eyebrow">OUR JOURNEY</span>
              <h2>
                Our Growth <span className="about-gradient-text">Story</span>
              </h2>
              <p>
                Our journey reflects a commitment to innovation, continuous
                improvement and building lasting relationships.
              </p>
            </div>

            <div className="about-timeline">
              {milestones.map((milestone) => (
                <article
                  className={`about-timeline-item ${milestone.side}`}
                  key={milestone.title}
                >
                  <div className="about-timeline-content">
                    <span className="about-timeline-label">
                      {milestone.label}
                    </span>
                    <h3>{milestone.title}</h3>
                    <p>{milestone.description}</p>
                  </div>

                  <div className="about-timeline-dot" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="about-section">
          <div className="about-container">
            <div className="about-section-heading">
              <span className="about-eyebrow">WHAT DRIVES US</span>
              <h2>
                Our Core <span className="about-gradient-text">Values</span>
              </h2>
              <p>
                The values that guide our decisions, shape our culture and
                influence every solution we create.
              </p>
            </div>

            <div className="about-values-grid">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <article className="about-value-card" key={value.title}>
                    <div className="about-value-icon">
                      <Icon size={22} />
                    </div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission and vision */}
        <section className="about-section">
          <div className="about-container">
            <div className="about-section-heading">
              <span className="about-eyebrow">OUR PURPOSE</span>
              <h2>
                Mission &amp; <span className="about-gradient-text">Vision</span>
              </h2>
            </div>

            <div className="about-mission-vision">
              <article className="about-mv-card">
                <div className="about-mv-icon">
                  <Target size={23} />
                </div>
                <h3>Our Mission</h3>
                <p>
                  To empower businesses and individuals with innovative,
                  reliable and high-quality digital solutions that drive
                  growth, build trust and create lasting impact in the modern
                  digital landscape.
                </p>
              </article>

              <article className="about-mv-card">
                <div className="about-mv-icon">
                  <Eye size={23} />
                </div>
                <h3>Our Vision</h3>
                <p>
                  To become a globally recognized technology brand known for
                  excellence, creativity and customer-centric innovation,
                  setting new standards in digital services and business
                  solutions.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="about-section">
          <div className="about-container">
            <div className="about-cta">
              <span className="about-eyebrow">
                <CheckCircle2 size={13} />
                LET'S WORK TOGETHER
              </span>

              <h2>
                Have an Idea? Let's{" "}
                <span className="about-gradient-text">Build It.</span>
              </h2>

              <p>
                Have a project, business idea or digital challenge? Connect
                with our team to discuss how we can help turn your ideas into
                practical digital solutions.
              </p>

              <div className="about-actions">
                <a className="about-button" href="/contact">
                  Contact Us <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
