
import { useState } from "react";
import sklassicsLogo from "../assets/sklassics-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style>{`
        .sk-navbar,
        .sk-navbar *,
        .sk-navbar *::before,
        .sk-navbar *::after {
          box-sizing: border-box;
        }

        .sk-navbar {
          position: relative;
          z-index: 1000;
          width: 100%;
          height: 60px;
          margin: 0;
          padding: 0;
          background: #111827;
          border-bottom: 1px solid #263044;
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
          white-space: nowrap;
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
          flex-shrink: 0;
          border: 1px solid #3a4052;
          border-radius: 10px;
          background: #171c2c;
          color: white;
          font-size: 23px;
          line-height: 1;
          cursor: pointer;
        }

        .sk-navbar-toggle:focus-visible,
        .sk-navbar-links a:focus-visible {
          outline: 2px solid #ff8b42;
          outline-offset: 3px;
        }

        /* Tablet */
        
/* Mobile Navbar */
@media (max-width: 700px) {
  .sk-navbar {
    width: 100%;
    height: 72px;
  }

  .sk-navbar-container {
    width: 100%;
    height: 100%;
    padding: 0 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .sk-navbar-logo {
    width: 150px;
    max-width: calc(100% - 56px);
    flex-shrink: 1;
  }

  .sk-navbar-logo img {
    display: block;
    width: 100%;
    max-height: 48px;
    object-fit: contain;
  }

  .sk-navbar-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 42px;
    width: 42px;
    height: 40px;
    margin-left: auto;
    padding: 0;
  }

  .sk-navbar-links {
    position: absolute;
    top: 71px;
    left: 0;
    right: 0;
    display: ${menuOpen ? "flex" : "none"};
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    padding: 12px 16px 18px;
    margin: 0;
    background: #111827;
    border-bottom: 1px solid #303548;
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.25);
  }

  .sk-navbar-links > a {
    display: flex;
    align-items: center;
    min-height: 46px;
    padding: 12px;
  }

  .sk-navbar-links .sk-nav-login,
  .sk-navbar-links .sk-nav-register {
    width: 100%;
    min-height: 44px;
    margin: 6px 0;
    justify-content: center;
  }
}

/* Small mobile screens */
@media (max-width: 380px) {
  .sk-navbar-container {
    padding-left: 12px;
    padding-right: 12px;
  }

  .sk-navbar-logo {
    width: 140px;
  }

  .sk-navbar-toggle {
    flex-basis: 40px;
    width: 40px;
    height: 38px;
  }

  .sk-navbar-links {
    padding-left: 12px;
    padding-right: 12px;
  }
}


          .sk-navbar-links > a {
            display: flex;
            align-items: center;
            min-height: 46px;
            padding: 12px;
            white-space: normal;
          }

          .sk-navbar-links .sk-nav-login,
          .sk-navbar-links .sk-nav-register {
            justify-content: center;
            width: 100%;
            min-height: 44px;
            margin: 6px 0;
          }
        }

        /* Extra-small phones */
        @media (max-width: 380px) {
          .sk-navbar-container {
            padding-left: 14px;
            padding-right: 14px;
          }

          .sk-navbar-logo {
            width: 130px;
          }

          .sk-navbar-toggle {
            width: 38px;
            height: 38px;
          }

          .sk-navbar-links {
            padding-left: 14px;
            padding-right: 14px;
          }
        }

        /* Reduced motion accessibility */
        @media (prefers-reduced-motion: reduce) {
          .sk-navbar-links > a {
            transition: none;
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
            aria-controls="sk-main-navigation"
            onClick={() => setMenuOpen((previous) => !previous)}
          >
            {menuOpen ? "×" : "☰"}
          </button>

          <nav
            id="sk-main-navigation"
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
