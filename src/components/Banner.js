import React from 'react'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>The Garfield-Clarendon Model Railroad Club</h1>
      </header>
      <div className="content">
        <p>
          A model railroad located in Uptown, Chicago
        </p>
        <ul className="actions">
          <li>
            <a href="/chicago-traveling-layout" name="Learn About Our Traveling Layout" className="button next scrolly">
              Learn About Our Traveling Layout
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
