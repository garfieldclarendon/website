import React from 'react'
import reopening from '../assets/images/reopening.jpeg'

const Banner = (props) => (
  <>
    <section id="banner" className="major">
      <div className="inner">
        <header className="major">
          <h1>The Garfield-Clarendon Model Railroad Club</h1>
        </header>
        <div className="content">
          <p>A model railroad located in Uptown, Chicago</p>
        </div>
      </div>
    </section>
    <section>
      <div className="inner">
        <div className="grid-wrapper">
          <div className="col-6">
            <span className="image fit">
              <img
                src={reopening}
                alt="A Burlington Northern Train enters Georgetown"
              />
            </span>
          </div>
          <div className="col-6">
            <header className="alt">
              <h3>Grand Re-Opening Dec 13th, Noon - 4PM</h3>
              <p>
                Join Us for the Holly Jolly Express! Our end of year open house
                and grand re-opening.
              </p>
              <p>
                <a
                  href="/events/december-open-house-2025"
                  className="button special"
                  name="Open House Information"
                >
                  Join Us for Our Open House
                </a>
              </p>
              <p>
                <a
                  href="/newsletter"
                  className="button outline"
                  name="Join our Email Newsletter"
                >
                  Join our Email Newsletter
                </a>
              </p>
            </header>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default Banner
