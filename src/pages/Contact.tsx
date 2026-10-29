
import { useState, type FormEvent, type ChangeEvent } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";

const supportTopics = [
  {
    title: "Raise a complaint",
    description:
      "Report issues with quizzes, results, cheating attempts or platform behaviour. We take exam integrity seriously.",
  },
  {
    title: "Subscription & billing",
    description:
      "Ask about institute plans, bulk licensing, white-labelling or upgrading from the free tier.",
  },
  {
    title: "Quiz possibilities",
    description:
      "Wondering if Sklassics can support your exam pattern or game idea? Tell us your use-case and we'll guide you.",
  },
];

const initialForm = {
  name: "",
  email: "",
  reason: "Complaint / Issue",
  subject: "",
  caption: "",
  details: "",
  tried: "",
  urgency: "Normal",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setStatus("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
          subject: `[Sklassics Support] ${form.subject || form.reason}`,
          from_name: form.name,
          email: form.email,
          message: `
Name: ${form.name}
Email: ${form.email}
Reason: ${form.reason}
Subject: ${form.subject}
Caption / Title: ${form.caption}
Urgency: ${form.urgency}

Details:
${form.details}

What was tried / Expected fix:
${form.tried}
          `,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("Your message has been sent successfully.");
        setForm({ ...initialForm });
      } else {
        setStatus(
          "Unable to send your message. Check your Web3Forms access key or email us directly.",
        );
      }
    } catch {
      setStatus(
        "A network error occurred. Please try again or contact us by email.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <Navbar />

      <main className="contact-page">
        <style>{`
          .contact-page,
          .contact-page *,
          .contact-page *::before,
          .contact-page *::after {
            box-sizing: border-box;
          }

          .contact-page {
            position: relative;
            isolation: isolate;
            display: block;
            width: 100%;
            min-height: 100vh;
            padding: 35px 24px 50px;
            background:
              radial-gradient(ellipse at 18% 0%, #431a322b, transparent 40%),
              radial-gradient(ellipse at 100% 0%, #152b542b, transparent 38%),
              linear-gradient(135deg, #11101e, #080b19 75%);
            color: #f5f6fb;
            font-family: Inter, "Segoe UI", Arial, sans-serif;
          }

          .contact-layout {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(0, 400px);
            gap: 36px;
            width: min(1155px, 100%);
            margin: 0 auto;
            align-items: start;
          }

          .contact-intro {
            padding-top: 2px;
          }

          .contact-title {
            margin: 0 0 10px;
            font-size: clamp(26px, 3vw, 32px);
            font-weight: 800;
            line-height: 1.25;
            letter-spacing: -1px;
          }

          .contact-title span {
            color: #ff7426;
          }

          .contact-description {
            max-width: 470px;
            margin: 0 0 26px;
            color: #a0a7b7;
            font-size: 14px;
            line-height: 1.65;
          }

          .contact-topic-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 13px;
          }

          .contact-topic-card {
            min-height: 110px;
            padding: 15px;
            border: 1px solid #20283c;
            border-radius: 16px;
            background: rgba(2, 7, 22, 0.92);
            transition: border-color .2s ease, transform .2s ease;
          }

          .contact-topic-card:hover {
            transform: translateY(-3px);
            border-color: #ff74265c;
          }

          .contact-topic-card h3 {
            margin: 0 0 8px;
            font-size: 13px;
            font-weight: 800;
          }

          .contact-topic-card p {
            margin: 0;
            color: #d2d5df;
            font-size: 12px;
            line-height: 1.6;
          }

          .contact-topic-card:last-child {
            grid-column: 1;
          }

          .contact-stats {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 25px 18px;
            margin-top: 30px;
          }

          .contact-stat strong {
            display: block;
            margin-bottom: 5px;
            font-size: 18px;
            font-weight: 800;
          }

          .contact-stat span {
            display: block;
            color: #a0a7b7;
            font-size: 12px;
            line-height: 1.6;
          }

          .contact-stat:last-child {
            grid-column: 1 / -1;
          }

          .contact-right-column {
            display: flex;
            flex-direction: column;
            gap: 28px;
            min-width: 0;
          }

          .contact-form-card {
            padding: 24px 22px;
            border: 1px solid #202940;
            border-radius: 23px;
            background: rgba(2, 7, 22, 0.97);
            box-shadow: 0 20px 70px #00000020;
          }

          .contact-form-card h2 {
            margin: 0 0 7px;
            font-size: 18px;
            font-weight: 800;
          }

          .contact-form-intro {
            margin: 0 0 18px;
            color: #a0a7b7;
            font-size: 12px;
            line-height: 1.65;
          }

          .contact-form-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 13px;
          }

          .contact-field {
            display: flex;
            flex-direction: column;
            gap: 7px;
            min-width: 0;
          }

          .contact-field.full-width {
            grid-column: 1 / -1;
          }

          .contact-field label {
            color: #d9dce6;
            font-size: 12px;
            font-weight: 650;
          }

          .contact-required {
            color: #ff7426;
          }

          .contact-field input,
          .contact-field select,
          .contact-field textarea {
            width: 100%;
            min-width: 0;
            border: 1px solid #252d41;
            border-radius: 12px;
            outline: none;
            background: #030716;
            color: #f5f6fb;
            font-family: inherit;
            font-size: 12px;
            transition: border-color .2s ease, box-shadow .2s ease;
          }

          .contact-field input,
          .contact-field select {
            height: 41px;
            padding: 0 12px;
          }

          .contact-field textarea {
            min-height: 100px;
            padding: 11px 12px;
            resize: vertical;
            line-height: 1.6;
          }

          .contact-field input::placeholder,
          .contact-field textarea::placeholder {
            color: #70788b;
          }

          .contact-field input:focus,
          .contact-field select:focus,
          .contact-field textarea:focus {
            border-color: #ff7426;
            box-shadow: 0 0 0 3px #ff742615;
          }

          .contact-urgency {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 11px;
            margin: 18px 0 17px;
            color: #a0a7b7;
            font-size: 12px;
          }

          .contact-urgency-label {
            font-size: 11px;
            letter-spacing: .5px;
          }

          .contact-radio {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            cursor: pointer;
          }

          .contact-radio input {
            accent-color: #ff7426;
          }

          .contact-submit {
            display: inline-flex;
            min-height: 39px;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 0 18px;
            border: 1px solid #ff7426;
            border-radius: 25px;
            background: linear-gradient(110deg, #ff7426, #ad123d);
            box-shadow: 0 10px 28px #e52c4b26;
            color: white;
            font-size: 12px;
            font-weight: 800;
            cursor: pointer;
            transition: transform .2s ease, filter .2s ease;
          }

          .contact-submit:hover {
            transform: translateY(-2px);
            filter: brightness(1.1);
          }

          .contact-submit:disabled {
            opacity: .65;
            cursor: not-allowed;
            transform: none;
          }

          .contact-status {
            margin: 13px 0 0;
            color: #b7f7d1;
            font-size: 12px;
            line-height: 1.6;
          }

          .contact-status.error {
            color: #ffb4a8;
          }

          .contact-support-card {
            padding: 20px;
            border: 1px dashed #263149;
            border-radius: 17px;
            background: #111727b5;
          }

          .contact-support-card h3 {
            margin: 0 0 7px;
            font-size: 13px;
          }

          .contact-support-card p {
            margin: 0 0 5px;
            color: #a0a7b7;
            font-size: 12px;
            line-height: 1.6;
          }

          .contact-support-card a {
            display: block;
            width: fit-content;
            margin-bottom: 5px;
            color: #5da5ff;
            font-size: 12px;
            text-decoration: none;
          }

          .contact-support-card a:hover {
            text-decoration: underline;
          }

          .contact-support-hours {
            margin-top: 17px;
          }

          @media (max-width: 850px) {
            .contact-layout {
              grid-template-columns: minmax(0, 1fr) minmax(0, 360px);
              gap: 24px;
            }

            .contact-form-card {
              padding: 22px 18px;
            }
          }

          @media (max-width: 700px) {
            .contact-page {
              padding: 30px 16px 45px;
            }

            .contact-layout {
              grid-template-columns: 1fr;
              gap: 28px;
            }

            .contact-right-column {
              gap: 22px;
            }
          }

          @media (max-width: 420px) {
            .contact-topic-grid,
            .contact-form-grid,
            .contact-stats {
              grid-template-columns: 1fr;
            }

            .contact-topic-card:last-child,
            .contact-stat:last-child,
            .contact-field.full-width {
              grid-column: auto;
            }

            .contact-urgency {
              gap: 9px;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .contact-topic-card,
            .contact-submit {
              transition: none;
            }
          }
        `}</style>

        <div className="contact-layout">
          <section className="contact-intro">
            <h1 className="contact-title">
              Contact <span>sklassics Quiz</span> support
            </h1>

            <p className="contact-description">
              Raise a complaint, discuss subscription plans, or talk about
              what's possible with our quiz platform. Our team will help you
              design fair, scalable and engaging assessments.
            </p>

            <div className="contact-topic-grid">
              {supportTopics.map((topic) => (
                <article className="contact-topic-card" key={topic.title}>
                  <h3>{topic.title}</h3>
                  <p>{topic.description}</p>
                </article>
              ))}
            </div>

            <div className="contact-stats">
              <div className="contact-stat">
                <strong>24–48 hrs</strong>
                <span>Typical response time on business days</span>
              </div>

              <div className="contact-stat">
                <strong>Priority</strong>
                <span>
                  Support for colleges and companies on paid plans
                </span>
              </div>

              <div className="contact-stat">
                <strong>99.9%</strong>
                <span>Uptime for live exams and quiz sessions</span>
              </div>
            </div>
          </section>

          <div className="contact-right-column">
            <section className="contact-form-card">
              <h2>Tell us how we can help</h2>

              <p className="contact-form-intro">
                This form sends an email using Web3Forms (no backend
                required). Please include a short caption and what you
                already tried — it helps us solve faster.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="contact-form-grid">
                  <div className="contact-field">
                    <label htmlFor="contact-name">Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-email">
                      Email <span className="contact-required">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-reason">Reason</label>
                    <select
                      id="contact-reason"
                      name="reason"
                      value={form.reason}
                      onChange={handleChange}
                    >
                      <option>Complaint / Issue</option>
                      <option>Subscription &amp; Billing</option>
                      <option>Technical Support</option>
                      <option>Institute / Corporate Plan</option>
                      <option>Quiz Possibilities</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-subject">Subject</label>
                    <input
                      id="contact-subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Short summary of your request"
                    />
                  </div>

                  <div className="contact-field full-width">
                    <label htmlFor="contact-caption">
                      Caption / Title{" "}
                      <span className="contact-required">*</span>
                    </label>
                    <input
                      id="contact-caption"
                      name="caption"
                      value={form.caption}
                      onChange={handleChange}
                      placeholder="Example: Quiz result mismatch for Section B"
                      required
                    />
                  </div>

                  <div className="contact-field full-width">
                    <label htmlFor="contact-details">
                      Details <span className="contact-required">*</span>
                    </label>
                    <textarea
                      id="contact-details"
                      name="details"
                      value={form.details}
                      onChange={handleChange}
                      placeholder="Describe the issue or request. Include quiz name, date/time, browser/device details, or screenshots info if relevant."
                      required
                    />
                  </div>

                  <div className="contact-field full-width">
                    <label htmlFor="contact-tried">
                      What you tried / Expected fix
                    </label>
                    <textarea
                      id="contact-tried"
                      name="tried"
                      value={form.tried}
                      onChange={handleChange}
                      placeholder="Example: Cleared cache, tried Chrome + mobile, re-published quiz, but score still differs. Expected score should be 18/20."
                    />
                  </div>
                </div>

                <div className="contact-urgency">
                  <span className="contact-urgency-label">URGENCY:</span>

                  <label className="contact-radio">
                    <input
                      type="radio"
                      name="urgency"
                      value="Normal"
                      checked={form.urgency === "Normal"}
                      onChange={handleChange}
                    />
                    Normal
                  </label>

                  <label className="contact-radio">
                    <input
                      type="radio"
                      name="urgency"
                      value="High (exam soon)"
                      checked={form.urgency === "High (exam soon)"}
                      onChange={handleChange}
                    />
                    High (exam soon)
                  </label>
                </div>

                <button
                  type="submit"
                  className="contact-submit"
                  disabled={sending}
                >
                  {sending ? "Sending..." : "Send message"}
                  {!sending && <ArrowRight size={15} />}
                </button>

                {status && (
                  <p
                    className={`contact-status ${
                      status.startsWith("Unable") ||
                      status.startsWith("A network")
                        ? "error"
                        : ""
                    }`}
                    role="status"
                  >
                    {status}
                  </p>
                )}
              </form>
            </section>

            <section className="contact-support-card">
              <h3>Email support</h3>
              <p>For institute / corporate plans:</p>

              <a href="mailto:info@sklassics.com">
                info@sklassics.com
              </a>

              <a href="tel:6305490580">
                6305490580
              </a>

              <div className="contact-support-hours">
                <h3>Best time to reach us</h3>
                <p>Monday – Saturday, 10:00 AM – 7:00 PM IST</p>
                <p>
                  We reply to urgent exam-day issues as fast as possible.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
