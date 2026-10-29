
import {
  Stethoscope,
  Settings,
  Calculator,
  Landmark,
  BookOpen,
  GraduationCap,
} from "lucide-react";

const exams = [
  {
    name: "NEET",
    subtitle: "Medical Entrance",
    students: "500K+ students",
    Icon: Stethoscope,
    color: "#09b887",
  },
  {
    name: "JEE Main",
    subtitle: "Engineering Entrance",
    students: "400K+ students",
    Icon: Settings,
    color: "#4778ff",
  },
  {
    name: "JEE Advanced",
    subtitle: "IIT Entrance",
    students: "200K+ students",
    Icon: Calculator,
    color: "#8950f6",
  },
  {
    name: "EAMCET",
    subtitle: "AP/TS State Exam",
    students: "300K+ students",
    Icon: Landmark,
    color: "#ff513c",
  },
  {
    name: "GATE",
    subtitle: "Graduate Aptitude",
    students: "150K+ students",
    Icon: BookOpen,
    color: "#1689ee",
  },
  {
    name: "UPSC",
    subtitle: "Civil Services",
    students: "100K+ students",
    Icon: GraduationCap,
    color: "#ff9500",
  },
];

const ExamSection = () => {
  return (
    <>
      <style>{`
        .sk-exams {
          width: 100%;
          padding: 60px 0 42px;
          color: #f8fafc;
          background: linear-gradient(110deg, #100e1d, #0b0d1c);
          font-family: Inter, "Segoe UI", Arial, sans-serif;
        }

        .sk-exams-inner {
          width: min(1376px, 90%);
          margin: 0 auto;
        }

        .sk-exams-heading {
          margin: 0 auto 34px;
          text-align: center;
          max-width: 700px;
        }

        .sk-exams-heading h2 {
          margin: 0 0 10px;
          color: #f8fafc;
          font-size: clamp(26px, 3vw, 32px);
          font-weight: 750;
          letter-spacing: -0.7px;
        }

        .sk-exams-heading h2 span {
          color: #ff781d;
        }

        .sk-exams-heading p {
          margin: 0;
          color: #a5a9b8;
          font-size: 15px;
          line-height: 1.7;
        }

        .sk-exams-grid {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 18px;
        }

        .sk-exam-card {
          min-width: 0;
          min-height: 210px;
          padding: 20px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background: #030718;
          border: 1px solid #151d32;
          border-radius: 23px;
          box-shadow: 0 14px 25px rgba(0, 0, 0, 0.15);
          transition:
            background 0.3s ease,
            transform 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        /* Gradient on hover and keyboard focus */
        .sk-exam-card:hover,
        .sk-exam-card:focus,
        .sk-exam-card:focus-visible,
        .sk-exam-card:focus-within {
          background: linear-gradient(
            120deg,
            #25264f 0%,
            #421d3c 55%,
            #63321f 100%
          ) !important;
          border-color: rgba(255, 255, 255, 0.25);
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3);
        }

        .sk-exam-card:focus-visible {
          outline: 2px solid #ff9500;
          outline-offset: 3px;
        }

        .sk-exam-icon {
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          border-radius: 18px;
          color: #ffffff;
          flex-shrink: 0;
        }

        .sk-exam-icon svg {
          width: 25px;
          height: 25px;
          stroke-width: 2.4;
        }

        .sk-exam-card h3 {
          margin: 0 0 14px;
          color: #f8fafc;
          font-size: 15px;
          font-weight: 700;
        }

        .sk-exam-card p {
          margin: 0 0 20px;
          color: #a5a9b8;
          font-size: 13px;
          line-height: 1.4;
        }

        .sk-exam-students {
          margin-top: auto;
          color: #ffd19a;
          font-size: 12px;
          font-weight: 500;
        }

        .sk-exams-link {
          display: block;
          width: fit-content;
          margin: 25px auto 0;
          color: #e9a14c;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
        }

        .sk-exams-link:hover {
          color: #ff781d;
        }

        @media (max-width: 1100px) {
          .sk-exams-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .sk-exams {
            padding: 42px 0 32px;
          }

          .sk-exams-inner {
            width: 92%;
          }

          .sk-exams-heading {
            margin-bottom: 25px;
          }

          .sk-exams-heading p {
            font-size: 13px;
          }

          .sk-exams-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
          }

          .sk-exam-card {
            min-height: 195px;
            padding: 18px 8px;
            border-radius: 18px;
          }

          .sk-exam-icon {
            width: 46px;
            height: 46px;
            margin-bottom: 20px;
            border-radius: 15px;
          }

          .sk-exam-icon svg {
            width: 23px;
            height: 23px;
          }

          .sk-exam-card h3 {
            font-size: 14px;
          }

          .sk-exam-card p {
            font-size: 12px;
          }
        }
      `}</style>

      <section className="sk-exams" id="exams">
        <div className="sk-exams-inner">
          <div className="sk-exams-heading">
            <h2>
              Prepare for <span>Any Exam</span>
            </h2>

            <p>
              Choose from 50+ national and state-level competitive exams.
              We've got you covered with comprehensive study material
              and practice tests.
            </p>
          </div>

          <div className="sk-exams-grid">
            {exams.map(({ name, subtitle, students, Icon, color }) => (
              <article
                className="sk-exam-card"
                key={name}
                tabIndex={0}
              >
                <div
                  className="sk-exam-icon"
                  style={{ backgroundColor: color }}
                >
                  <Icon aria-hidden="true" />
                </div>

                <h3>{name}</h3>
                <p>{subtitle}</p>

                <span className="sk-exam-students">
                  {students}
                </span>
              </article>
            ))}
          </div>

          <a href="#quizzes" className="sk-exams-link">
            View all 50+ exams →
          </a>
        </div>
      </section>
    </>
  );
};

export default ExamSection;
