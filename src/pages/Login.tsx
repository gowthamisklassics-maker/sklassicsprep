
import { useState } from "react";
import type { FormEvent } from "react";
import sklassicsLogo from "../assets/sklassics-logo.png";

export default function Login() {
  const [accountTab, setAccountTab] = useState<"login" | "register">("login");
  const [loginMethod, setLoginMethod] = useState<"otp" | "password">("otp");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Connect your authentication backend to send OTPs
    // or verify passwords. This demo does not authenticate users.
    alert(
      loginMethod === "otp"
        ? `Connect your backend to send an OTP to ${email}.`
        : "Connect your backend to verify your login details."
    );
  };

  return (
    <>
      <style>{`
        .sk-login-page,
        .sk-login-page *,
        .sk-login-page *::before,
        .sk-login-page *::after {
          box-sizing: border-box;
        }

        .sk-login-page {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 55px 24px;
          overflow-x: hidden;
          background:
            radial-gradient(ellipse at 10% 20%, rgba(92, 35, 68, .16), transparent 42%),
            radial-gradient(ellipse at 90% 10%, rgba(24, 43, 78, .25), transparent 40%),
            linear-gradient(135deg, #100d19, #080a15 75%);
          color: #f7f8fc;
          font-family: Inter, "Segoe UI", Arial, sans-serif;
        }

        .sk-login-layout {
          width: min(1264px, 100%);
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(370px, .9fr);
          align-items: center;
          gap: clamp(50px, 7vw, 105px);
          margin: auto;
        }

        /* Promotional content */

        .sk-login-intro {
          min-width: 0;
        }

        .sk-login-intro h1 {
          margin: 0 0 12px;
          font-size: clamp(30px, 3vw, 37px);
          line-height: 1.25;
          letter-spacing: -.8px;
          font-weight: 750;
        }

        .sk-login-intro h1 span {
          color: #ff781d;
        }

        .sk-login-subtitle {
          max-width: 500px;
          margin: 0 0 28px;
          color: #a8adbc;
          font-size: 14px;
          line-height: 1.7;
        }

        .sk-login-benefits {
          display: grid;
          gap: 17px;
          margin-bottom: 30px;
        }

        .sk-login-benefit {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .sk-login-benefit-icon {
          width: 38px;
          height: 38px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border: 1px solid #344054;
          border-radius: 11px;
          background: #111827;
          color: #f1f3f9;
          font-size: 17px;
        }

        .sk-login-benefit h3 {
          margin: 0 0 4px;
          color: #f5f6fa;
          font-size: 14px;
          font-weight: 700;
        }

        .sk-login-benefit p {
          margin: 0;
          color: #a8adbc;
          font-size: 12px;
          line-height: 1.6;
        }

        .sk-login-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 28px;
        }

        .sk-login-stat strong {
          display: block;
          margin-bottom: 6px;
          color: #ffffff;
          font-size: 20px;
          font-weight: 750;
        }

        .sk-login-stat span {
          color: #a8adbc;
          font-size: 11px;
        }

        /* Login card */

        .sk-login-card {
          width: 100%;
          min-width: 0;
          padding: 42px 27px;
          border: 1px solid #202b40;
          border-radius: 23px;
          background: #030718;
          box-shadow: 0 25px 70px rgba(0, 0, 0, .3);
        }

        .sk-login-brand {
          display: flex;
          justify-content: center;
          margin-bottom: 26px;
        }

        .sk-login-brand img {
          display: block;
          width: 205px;
          max-width: 100%;
          max-height: 62px;
          object-fit: contain;
        }

        .sk-login-card h2 {
          margin: 0 0 8px;
          text-align: center;
          color: #f7f8fc;
          font-size: 21px;
          line-height: 1.35;
          font-weight: 750;
        }

        .sk-login-card-description {
          margin: 0 0 22px;
          text-align: center;
          color: #a8adbc;
          font-size: 13px;
          line-height: 1.6;
        }

        /* Login and register tabs */

        .sk-login-tabs,
        .sk-login-methods {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 4px;
          padding: 4px;
          border: 1px solid #202b40;
          border-radius: 30px;
          background: #111827;
        }

        .sk-login-tabs {
          margin-bottom: 18px;
        }

        .sk-login-methods {
          margin-bottom: 15px;
          border-radius: 24px;
          background: #0c1220;
        }

        .sk-login-tabs button,
        .sk-login-methods button {
          min-width: 0;
          min-height: 37px;
          border: 0;
          border-radius: 25px;
          background: transparent;
          color: #a8adbc;
          font-family: inherit;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: background .2s ease, color .2s ease;
        }

        .sk-login-tabs button.active {
          background: #f33d48;
          color: #ffffff;
        }

        .sk-login-methods button {
          min-height: 31px;
        }

        .sk-login-methods button.active {
          background: #030718;
          color: #ff781d;
        }

        /* Form fields */

        .sk-login-form {
          display: grid;
          gap: 15px;
          width: 100%;
        }

        .sk-login-input-wrap {
          width: 100%;
          min-width: 0;
          min-height: 53px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 15px;
          border: 1px solid #202b40;
          border-radius: 14px;
          background: #030718;
          color: #a8adbc;
        }

        .sk-login-input-wrap input {
          width: 100%;
          min-width: 0;
          border: 0;
          outline: 0;
          background: transparent;
          color: #f7f8fc;
          font-family: inherit;
          font-size: 13px;
        }

        .sk-login-input-wrap input::placeholder {
          color: #939db0;
        }

        .sk-login-input-wrap:focus-within {
          border-color: #ff781d;
        }

        .sk-login-submit {
          width: 100%;
          min-height: 51px;
          margin-top: 5px;
          border: 0;
          border-radius: 13px;
          background: linear-gradient(105deg, #ff781d, #ed1745);
          color: white;
          font-family: inherit;
          font-size: 13px;
          font-weight: 750;
          cursor: pointer;
          box-shadow: 0 14px 30px rgba(237, 23, 69, .25);
          transition: filter .2s ease, transform .2s ease;
        }

        .sk-login-submit:hover {
          filter: brightness(1.08);
          transform: translateY(-1px);
        }

        .sk-login-secure {
          margin: 16px 0 0;
          text-align: center;
          color: #a8adbc;
          font-size: 11px;
        }

        .sk-login-tabs button:focus-visible,
        .sk-login-methods button:focus-visible,
        .sk-login-submit:focus-visible {
          outline: 2px solid #ff8b42;
          outline-offset: 3px;
        }

        /* Tablet layout */

        @media (max-width: 850px) and (min-width: 601px) {
          .sk-login-page {
            padding: 35px 24px;
          }

          .sk-login-layout {
            max-width: 520px;
            grid-template-columns: minmax(0, 1fr);
            gap: 35px;
          }

          .sk-login-intro h1 {
            font-size: 30px;
          }

          .sk-login-card {
            padding: 34px 22px;
          }
        }

        /* Mobile: show only the login form */

        @media (max-width: 600px) {
          .sk-login-page {
            width: 100%;
            min-height: 100vh;
            min-height: 100dvh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px 15px;
            margin: 0;
          }

          .sk-login-intro {
            display: none !important;
          }

          .sk-login-layout {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            max-width: 420px;
            min-width: 0;
            margin: auto;
            gap: 0;
          }

          .sk-login-card {
            width: 100%;
            max-width: 420px;
            min-width: 0;
            padding: 0;
            margin: 0;
            border: none;
            border-radius: 0;
            background: transparent;
            box-shadow: none;
          }

          .sk-login-brand {
            justify-content: center;
            margin-bottom: 24px;
          }

          .sk-login-brand img {
            width: 205px;
            max-width: 75%;
            max-height: 62px;
          }

          .sk-login-card h2 {
            margin: 0 0 8px;
            font-size: 21px;
            line-height: 1.35;
            text-align: center;
          }

          .sk-login-card-description {
            margin: 0 0 22px;
            font-size: 13px;
            line-height: 1.6;
            text-align: center;
          }

          .sk-login-tabs {
            width: 100%;
            margin-bottom: 18px;
            padding: 4px;
            gap: 4px;
          }

          .sk-login-tabs button {
            min-width: 0;
            min-height: 40px;
            font-size: 13px;
          }

          .sk-login-methods {
            width: 100%;
            margin-bottom: 15px;
            padding: 4px;
          }

          .sk-login-methods button {
            min-width: 0;
            min-height: 34px;
            font-size: 12px;
          }

          .sk-login-form {
            width: 100%;
            gap: 15px;
          }

          .sk-login-input-wrap {
            width: 100%;
            min-height: 58px;
            padding: 0 15px;
            border-radius: 16px;
          }

          .sk-login-input-wrap input {
            min-width: 0;
            font-size: 14px;
          }

          .sk-login-submit {
            width: 100%;
            min-height: 55px;
            margin-top: 5px;
            border-radius: 14px;
            font-size: 14px;
          }

          .sk-login-secure {
            margin-top: 17px;
            font-size: 12px;
            text-align: center;
          }
        }

        /* Extra-small mobile screens */

        @media (max-width: 380px) {
          .sk-login-page {
            padding: 20px 15px;
          }

          .sk-login-brand {
            margin-bottom: 20px;
          }

          .sk-login-brand img {
            width: 190px;
          }

          .sk-login-card h2 {
            font-size: 20px;
          }

          .sk-login-card-description {
            font-size: 12px;
          }

          .sk-login-input-wrap {
            min-height: 54px;
            padding: 0 12px;
          }

          .sk-login-submit {
            min-height: 52px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sk-login-tabs button,
          .sk-login-methods button,
          .sk-login-submit {
            transition: none;
          }
        }
      `}</style>

      <main className="sk-login-page">
        <div className="sk-login-layout">
          {/* Desktop promotional content */}
          <section className="sk-login-intro">
            <h1>
              Your quizzes, <span>smarter &amp; faster.</span>
            </h1>

            <p className="sk-login-subtitle">
              Login to create quizzes, schedule assessments, invite students,
              and track performance in real-time with advanced analytics.
            </p>

            <div className="sk-login-benefits">
              <div className="sk-login-benefit">
                <div className="sk-login-benefit-icon" aria-hidden="true">
                  ♢
                </div>
                <div>
                  <h3>Secure assessments</h3>
                  <p>Anti-cheat, browser lock &amp; question shuffling.</p>
                </div>
              </div>

              <div className="sk-login-benefit">
                <div className="sk-login-benefit-icon" aria-hidden="true">
                  ϟ
                </div>
                <div>
                  <h3>Instant scoring</h3>
                  <p>Auto-graded MCQs with topic-wise analysis.</p>
                </div>
              </div>

              <div className="sk-login-benefit">
                <div className="sk-login-benefit-icon" aria-hidden="true">
                  ♧
                </div>
                <div>
                  <h3>Built for teams</h3>
                  <p>Colleges, companies, and communities use Sklassics Quiz.</p>
                </div>
              </div>
            </div>

            <div className="sk-login-stats">
              <div className="sk-login-stat">
                <strong>10k+</strong>
                <span>Quizzes hosted</span>
              </div>
              <div className="sk-login-stat">
                <strong>1M+</strong>
                <span>Questions attempted</span>
              </div>
              <div className="sk-login-stat">
                <strong>99.9%</strong>
                <span>Uptime</span>
              </div>
            </div>
          </section>

          {/* Login form */}
          <section className="sk-login-card">
            <div className="sk-login-brand">
              <img src={sklassicsLogo} alt="Sklassics" />
            </div>

            <h2>
              {accountTab === "login"
                ? "Login to Sklassics Quiz"
                : "Register for Sklassics Quiz"}
            </h2>

            <p className="sk-login-card-description">
              Continue your learning &amp; assessment journey.
            </p>

            <div className="sk-login-tabs">
              <button
                type="button"
                className={accountTab === "login" ? "active" : ""}
                aria-pressed={accountTab === "login"}
                onClick={() => setAccountTab("login")}
              >
                Login
              </button>

              <button
                type="button"
                className={accountTab === "register" ? "active" : ""}
                aria-pressed={accountTab === "register"}
                onClick={() => setAccountTab("register")}
              >
                Register
              </button>
            </div>

            <div className="sk-login-methods">
              <button
                type="button"
                className={loginMethod === "otp" ? "active" : ""}
                aria-pressed={loginMethod === "otp"}
                onClick={() => setLoginMethod("otp")}
              >
                OTP Login
              </button>

              <button
                type="button"
                className={loginMethod === "password" ? "active" : ""}
                aria-pressed={loginMethod === "password"}
                onClick={() => setLoginMethod("password")}
              >
                Password Login
              </button>
            </div>

            <form className="sk-login-form" onSubmit={handleSubmit}>
              <label className="sk-login-input-wrap">
                <span aria-hidden="true">✉</span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your registered email"
                  autoComplete="email"
                  aria-label="Email address"
                  required
                />
              </label>

              {loginMethod === "password" && (
                <label className="sk-login-input-wrap">
                  <span aria-hidden="true">♙</span>
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                    autoComplete={
                      accountTab === "login"
                        ? "current-password"
                        : "new-password"
                    }
                    aria-label="Password"
                    required
                  />
                </label>
              )}

              <button type="submit" className="sk-login-submit">
                {accountTab === "register"
                  ? "Create Account →"
                  : loginMethod === "otp"
                    ? "Send OTP →"
                    : "Login →"}
              </button>
            </form>

            <p className="sk-login-secure">
              🔒{loginMethod === "otp" ? "OTP-based secure" : "password-based"}{" "}
              {accountTab === "register" ? "registration" : "login"}
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
