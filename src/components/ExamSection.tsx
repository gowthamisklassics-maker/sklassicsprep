
const exams = [
  {
    name: "NEET",
    subtitle: "Medical Entrance",
    students: "500K+ students",
    icon: "⚕",
    color: "#09b887",
  },
  {
    name: "JEE Main",
    subtitle: "Engineering Entrance",
    students: "400K+ students",
    icon: "⚙",
    color: "#4778ff",
  },
  {
    name: "JEE Advanced",
    subtitle: "IIT Entrance",
    students: "200K+ students",
    icon: "▦",
    color: "#8950f6",
  },
  {
    name: "EAMCET",
    subtitle: "AP/TS State Exam",
    students: "300K+ students",
    icon: "♜",
    color: "#ff513c",
  },
  {
    name: "GATE",
    subtitle: "Graduate Aptitude",
    students: "150K+ students",
    icon: "◧",
    color: "#1689ee",
  },
  {
    name: "UPSC",
    subtitle: "Civil Services",
    students: "100K+ students",
    icon: "♟",
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
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .sk-exam-card:hover {
          transform: translateY(-4px);
          border-color: #ff781d;
        }

        .sk-exam-icon {
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          border-radius: 18px;
          color: white;
          font-size: 27px;
          font-weight: 700;
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
            {exams.map((exam) => (
              <article className="sk-exam-card" key={exam.name}>
                <div
                  className="sk-exam-icon"
                  style={{ backgroundColor: exam.color }}
                >
                  {exam.icon}
                </div>

                <h3>{exam.name}</h3>
                <p>{exam.subtitle}</p>

                <span className="sk-exam-students">
                  {exam.students}
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
