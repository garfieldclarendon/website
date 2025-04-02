import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

const Donate = (props) => (
  <Layout>
    <SEO pageTitle="Donate to the Garfield-Clarendon Model Railroad Club" />

    <BannerLanding
      style="donate"
      title="Donate to the Garfield-Clarendon Model Railroad Club"
      description="Equipment and monetary options"
    />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Donations</h2>
          </header>
          <p>We are happy to accept the following railroad equipment:</p>
          <ul>
            <li>HO Scale equipment (engines, rail cars, kits, etc)</li>
            <li>Model railroad scenery supplies</li>
          </ul>
          <p>Unfortunately we are unable to accept the following:</p>
          <ul>
            <li>
              Garden Scale, N Scale, Lionel and other non-HO scale equipment
            </li>
            <li>Broken or non-functioning HO scale equipment</li>
            <li>Large pre-built layouts or boards</li>
          </ul>
          <p>
            <b>Resellers - </b> Model railroad magazines often have many ads for
            these services. We do not provide recommendations.
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Monetary Donations</h3>
              </header>
              <p>
                Our open houses and events are always free. Donations are
                welcome but never expected.
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.paypal.com/donate/?hosted_button_id=DQRTF3EJTLBPN"
                  className="button"
                >
                  Donate with PayPal
                </a>
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Donate
