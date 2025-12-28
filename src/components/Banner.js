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
              <h3>Open Fridays 7PM - 9:00PM</h3>
              <p>
                Join Us Fridays to tour the layout, see trains running and learn
                about membership.
              </p>
              <p>
                <a
                  href="/visit"
                  className="button special"
                  name="More Information"
                >
                  More Information
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
