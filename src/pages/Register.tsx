
import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState<Record<string, string>>({});

  const update = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };

  const field = (
    label: string,
    name: string,
    placeholder: string,
    required = false,
    type = "text"
  ) => (
    <label className="register-field" key={name}>
      <span>
        {label} {required && <b>*</b>}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={form[name] || ""}
        onChange={update}
      />
    </label>
  );

  const dropdown = (
    label: string,
    name: string,
    options: string[],
    required = false
  ) => (
    <label className="register-field" key={name}>
      <span>
        {label} {required && <b>*</b>}
      </span>
      <select
        name={name}
        required={required}
        value={form[name] || ""}
        onChange={update}
      >
        <option value="">-- Select {label} --</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      "Registration form validated. Connect an OTP service to send OTP."
    );
  };

  return (
    <>
      <style>{`
        .register-page {
          min-height: 100vh;
          padding: 45px 20px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          background:
            radial-gradient(ellipse at 15% 10%, #211323 0%, transparent 45%),
            radial-gradient(ellipse at 90% 0%, #12162c 0%, transparent 40%),
            #080b19;
          color: #f8fafc;
          font-family: Arial, sans-serif;
          box-sizing: border-box;
        }

        .register-page,
        .register-page * {
          box-sizing: border-box;
        }

        .register-card {
          width: 100%;
          max-width: 770px;
          padding: 26px 25px 28px;
          background: #030716;
          border: 1px solid #20283a;
          border-radius: 20px;
        }

        .register-header {
          text-align: center;
          margin-bottom: 22px;
        }

        .register-header h1 {
          font-size: 22px;
          margin: 0 0 8px;
          color: #f8fafc;
        }

        .register-header p {
          color: #a4a9b8;
          font-size: 12px;
          margin: 0;
        }

        .register-header strong {
          color: #ff6b23;
        }

        .register-form {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 15px 14px;
        }

        .register-field {
          display: flex;
          flex-direction: column;
          gap: 7px;
          min-width: 0;
        }

        .register-field span {
          font-size: 11px;
          font-weight: 600;
          color: #e4e7ef;
        }

        .register-field span b {
          color: #ff6b23;
        }

        .register-field input,
        .register-field select {
          width: 100%;
          height: 38px;
          padding: 0 11px;
          color: #f8fafc;
          background: #030716;
          border: 1px solid #273044;
          border-radius: 8px;
          outline: none;
          font-size: 12px;
          font-family: inherit;
        }

        .register-field input::placeholder {
          color: #718098;
        }

        .register-field input:focus,
        .register-field select:focus {
          border-color: #ff572c;
          box-shadow: 0 0 0 2px #ff572c20;
        }

        .register-field select option {
          background: #030716;
          color: white;
        }

        .register-submit {
          grid-column: 1 / -1;
          width: 100%;
          height: 42px;
          margin-top: 5px;
          border: none;
          border-radius: 25px;
          background: linear-gradient(100deg, #ff6716, #f20d48);
          color: white;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 12px 28px #ef254044;
          transition: filter 0.2s ease, transform 0.2s ease;
        }

        .register-submit:hover {
          filter: brightness(1.08);
          transform: translateY(-1px);
        }

        .register-submit:focus-visible {
          outline: 2px solid #ff9a4d;
          outline-offset: 3px;
        }

        .register-login {
          text-align: center;
          margin: 20px 0 0;
          font-size: 12px;
          color: #9ca3b5;
        }

        .register-login a {
          color: #ff681c;
          text-decoration: none;
          font-weight: 700;
        }

        .register-login a:hover {
          text-decoration: underline;
        }

        @media (max-width: 600px) {
          .register-page {
            padding: 20px 12px;
          }

          .register-card {
            padding: 23px 16px;
            border-radius: 15px;
          }

          .register-header h1 {
            font-size: 19px;
          }

          .register-form {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .register-submit {
            grid-column: 1;
          }
        }
      `}</style>

      <main className="register-page">
        <section className="register-card">
          <header className="register-header">
            <h1>Create your sklassics Quiz account</h1>
            <p>
              Start your learning journey. Enjoy a{" "}
              <strong>2-day</strong> free trial!
            </p>
          </header>

          <form onSubmit={handleSubmit} className="register-form">
            {field("Full Name", "fullName", "Enter full name", true)}
            {field("Contact", "contact", "Enter mobile number", true, "tel")}

            {field("Email", "email", "Enter email address", true, "email")}
            {field(
              "School / College / Institution",
              "institution",
              "Enter school, college, or institution name",
              true
            )}

            {field("College Code", "collegeCode", "Enter your college code")}
            {dropdown(
              "Institution Type",
              "institutionType",
              [
                "School",
                "Junior College",
                "Degree College",
                "Engineering College",
                "University",
                "Coaching Institute",
                "Other",
              ],
              true
            )}

            {field(
              "Department / Major",
              "department",
              "Example: CSE, MPC, Commerce"
            )}
            {dropdown("Class / Course Year", "courseYear", [
              "Class 6",
              "Class 7",
              "Class 8",
              "Class 9",
              "Class 10",
              "Intermediate 1st Year",
              "Intermediate 2nd Year",
              "Diploma",
              "B.Tech",
              "B.Sc",
              "B.Com",
              "BBA",
              "MBA",
              "M.Tech",
              "Other",
            ])}

            {dropdown(
              "Stream",
              "stream",
              [
                "Science",
                "MPC",
                "BiPC",
                "Commerce",
                "Arts",
                "Engineering",
                "Medical",
                "Management",
                "Computer Science",
                "Other",
              ],
              true
            )}
            {field("Current Year", "currentYear", "Example: 2nd Year")}

            {field(
              "Graduation / Passing Out Year",
              "passingYear",
              "Example: 2027"
            )}
            {field("City", "city", "Enter city", true)}

            {field("State", "state", "Enter state", true)}
            {dropdown(
              "Gender",
              "gender",
              ["Male", "Female", "Other", "Prefer not to say"],
              true
            )}

            {field("Date of Birth", "dob", "", true, "date")}
            {field(
              "Preferred Categories",
              "categories",
              "Example: JEE, Python, Data Science"
            )}

            {dropdown("How did you hear about us?", "source", [
              "Friends",
              "College",
              "Instagram",
              "YouTube",
              "Google Search",
              "WhatsApp",
              "Other",
            ])}

            <button type="submit" className="register-submit">
              Send OTP
            </button>
          </form>

          <p className="register-login">
            Already have an account? <a href="/login">Login</a>
          </p>
        </section>
      </main>
    </>
  );
}
