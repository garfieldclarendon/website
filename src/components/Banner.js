import React from 'react'

const Banner = (props) => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>The Garfield-Clarendon Model Railroad Club</h1>
      </header>
      <div className="content">
        <p>A model railroad located in Uptown, Chicago</p>
        <ul className="actions">
          <li>
            <a
              href="/renovation"
              name="Closed for Renovation"
              className="button next scrolly"
            >
              Under Renovation
            </a>
          </li>
        </ul>
      </div>
      <div className="content">
        <h2>
          <b>Re-Opening Summer 2024</b>
        </h2>
      </div>
    </div>
  </section>
)

export default Banner
