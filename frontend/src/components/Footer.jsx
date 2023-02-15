import {NavLink} from "react-router-dom";

function Footer() {
  return (
    <footer className="btm-nav btm-nav-xs footer p-10 bg-neutral text-neutral-content">
      <div>
        <NavLink as="button" to="/about" className="link link-hover">
          <span className="footer-title">
              About Toolboxer
          </span>
        </NavLink>
      </div>
      <div>
        <NavLink as="button" to="/contact" className="link link-hover">
          <span className="footer-title">Contact</span>
        </NavLink>
      </div>
      <div>
        <NavLink as="button" to="/faq" className="link link-hover">
          <span className="footer-title">FAQ</span>
        </NavLink>
      </div>

    </footer>
  )
}

export default Footer;
