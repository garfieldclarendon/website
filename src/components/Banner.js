import React from 'react'
import mallEvent1 from '../assets/images/events/mall-layout.jpeg'
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
      <div class="inner">
        <div class="grid-wrapper">
          <div class="col-6">
            <span class="image fit">
              <img
                src={reopening}
                alt="A Burlington Northern Train enters Georgetown"
              />
            </span>
          </div>
          <div class="col-6">
            <header class="alt">
              <h3>Re-Opening Mid-2025</h3>
              <p>
                We will be re-opening mid-2025. Join our email newsletter get
                updates!
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
