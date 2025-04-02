import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import socialMedia from '../assets/images/socialMedia.jpg'

const Landing = (props) => (
  <Layout>
    <SEO pageTitle="Social Media" />
    <BannerLanding
      style="socialMedia"
      title="Social Media"
      description="Follow us for the latest updates"
    />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>The Latest News and Updates</h2>
          </header>
          <p>
            Follow us on Facebook, Instagram, Twitter, and YouTube for the
            latest updates.
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <img src={socialMedia} alt="NS freight leaving Georgetown" />
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Our Accounts</h3>
              </header>
              <ul>
                <li>
                  <a href="https://www.facebook.com/garfieldcentral">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/gcmodelrailroad/">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/GCModelRailroad">Twitter</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCpX2im7bxyus9zBoO_th0sA">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Landing
