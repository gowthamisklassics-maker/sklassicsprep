
import { useState } from "react";
import sklassicsLogo from "../assets/sklassics-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style>{`
        .sk-navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          width: 100%;
          height: 68px;
          background: #111827;
          border-top: 2px solid #303044;
          border-bottom: 1px solid #303548;
          font-family: Inter, "Segoe UI", Arial, sans-serif;
        }

        .sk-navbar *,
        .sk-navbar *::before,
        .sk-navbar *::after {
          box-sizing: border-box;
        }

        .sk-navbar-container {
          width: min(1376px, 90%);
          height: 100%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .sk-navbar-logo {
          display: inline-flex;
          align-items: center;
          width: 180px;
          flex-shrink: 0;
          text-decoration: none;
        }

        .sk-navbar-logo img {
          display: block;
          width: 100%;
          max-height: 48px;
          object-fit: contain;
        }

        .sk-navbar-links {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 34px;
          margin-left: auto;
        }

        .sk-navbar-links > a {
          color: #f5f6fa;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s ease, filter 0.2s ease;
        }

        .sk-navbar-links > a:hover {
          color: #ff8b42;
        }

        .sk-navbar-links .sk-nav-login {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 75px;
          height: 40px;
          padding: 0 20px;
          margin-left: 8px;
          border: 1px solid #3a4052;
          border-radius: 24px;
          background: linear-gradient(110deg, #171c2c, #111827);
          color: #ffffff;
        }

        .sk-navbar-links .sk-nav-login:hover {
          border-color: #ff8b42;
          color: #ff8b42;
        }

        .sk-navbar-links .sk-nav-register {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 93px;
          height: 40px;
          padding: 0 21px;
          margin-left: -8px;
          border-radius: 24px;
          background: linear-gradient(110deg, #ff781d, #ed1745);
          color: #ffffff;
          box-shadow: 0 8px 22px rgba(237, 23, 69, 0.22);
        }

        .sk-navbar-links .sk-nav-register:hover {
          color: #ffffff;
          filter: brightness(1.1);
        }

        .sk-navbar-toggle {
          display: none;
          width: 42px;
          height: 40px;
          border: 1px solid #3a4052;
          border-radius: 10px;
          background: #171c2c;
          color: white;
          font-size: 23px;
          cursor: pointer;
        }

        @media (max-width: 700px) {
          .sk-navbar {
            height: 66px;
          }

          .sk-navbar-container {
            width: 92%;
            gap: 12px;
          }

          .sk-navbar-logo {
            width: 155px;
          }

          .sk-navbar-toggle {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-left: auto;
          }

          .sk-navbar-links {
            position: absolute;
            top: 64px;
            left: 0;
            right: 0;
            display: ${menuOpen ? "flex" : "none"};
            flex-direction: column;
            align-items: stretch;
            gap: 0;
            padding: 12px 5% 18px;
            margin: 0;
            border-bottom: 1px solid #303548;
            background: #111827;
            box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
          }

          .sk-navbar-links > a {
            padding: 14px 8px;
          }

          .sk-navbar-links .sk-nav-login,
          .sk-navbar-links .sk-nav-register {
            justify-content: center;
            margin: 7px 0;
            width: 100%;
          }
        }

        @media (min-width: 701px) and (max-width: 900px) {
          .sk-navbar-container {
            width: 94%;
            gap: 18px;
          }

          .sk-navbar-logo {
            width: 150px;
          }

          .sk-navbar-links {
            gap: 20px;
          }
        }
      `}</style>

      <header className="sk-navbar">
        <div className="sk-navbar-container">
          <a
            href="/"
            className="sk-navbar-logo"
            aria-label="Sklassics home"
            onClick={closeMenu}
          >
            <img src={sklassicsLogo} alt="Sklassics" />
          </a>

          <button
            type="button"
            className="sk-navbar-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((previous) => !previous)}
          >
            {menuOpen ? "×" : "☰"}
          </button>

          <nav
            className="sk-navbar-links"
            aria-label="Main navigation"
          >
            <a href="/" onClick={closeMenu}>
              Home
            </a>

            <a href="/#about" onClick={closeMenu}>
              About
            </a>

            <a href="/#contact" onClick={closeMenu}>
              Contact
            </a>

            <a
              href="/login"
              className="sk-nav-login"
              onClick={closeMenu}
            >
              Login
            </a>

            <a
              href="/register"
              className="sk-nav-register"
              onClick={closeMenu}
            >
              Register
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
