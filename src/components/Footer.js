import React from 'react'

const Footer = (props) => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://www.facebook.com/GCModelRailroad"
            aria-label="Facebook"
            className="icon alt fa-facebook"
          >
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/gcmodelrailroad/"
            aria-label="Instagram"
            className="icon alt fa-instagram"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/orgs/garfieldclarendon/dashboard"
            aria-label="GitHub"
            className="icon alt fa-github"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; The Garfield-Clarendon Model Railroad Club</li>
        <li>
          Design: <a href="https://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
