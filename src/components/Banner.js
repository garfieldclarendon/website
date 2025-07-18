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
              <h3>Open by Appointment Only</h3>
              <p>
                We are now open by appointment only with full hours expected in
                Fall. Join our newsletter to be the first to learn about our
                grand reopening.
              </p>
              <p>
                <a
                  href="/newsletter"
                  className="button special"
                  name="Join our Email Newsletter"
                >
                  Join our Email Newsletter
                </a>
              </p>
              <p>
                <a
                  href="/membership"
                  className="button outline"
                  name="Learn About Membership"
                >
                  Learn About Membership
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
