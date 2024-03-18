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
          <ul className="actions">
            <li>
              <a
                href="/events/lincolnwood-town-center-2024"
                name="Spring Show Details"
                className="button next scrolly"
              >
                Spring Show Details
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <div class="inner">
        <div class="grid-wrapper">
          <div class="col-6">
            <header class="alt">
              <h3>Lincolnwood Town Center Spring Show</h3>
              <p>Join us April 20, 2024 for our Spring modular layout show!</p>
              <p>
                <a
                  href="/events/lincolnwood-town-center-2024"
                  className="button special"
                  name="Spring Show Details"
                >
                  View More Information
                </a>
              </p>
            </header>
          </div>
          <div class="col-6">
            <span class="image fit">
              <img
                src={mallEvent1}
                alt="Happy visitors look at the Mall Layout"
              />
            </span>
          </div>
        </div>
      </div>
    </section>
    {/* <section>
      <div class="inner">
        <div class="grid-wrapper">
          <div class="col-6">
            <span class="image fit">
              <img
                src={reopening}
                alt="A Burnlington Northern Train enters Georgetown"
              />
            </span>
          </div>
          <div class="col-6">
            <header class="alt">
              <h3>Re-Opening June 2024</h3>
              <p>
                We will be re-opening June 2024. Join our email newsletter get
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
            </header>
          </div>
        </div>
      </div>
    </section> */}
  </>
)

export default Banner
