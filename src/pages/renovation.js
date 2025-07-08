import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import renovationPDFIMG from '../assets/images/renovationPDF.png'
import renovationsPDF from '../assets/2019-09-19-Chicago-PD-Clarendon-Park-Fieldhouse-Presentation-v2-1.pdf'

const Renovation = () => {
  return (
    <Layout>
      <SEO pageTitle="Building Renovations" />
      <BannerLanding
        style="renovation"
        title="Clarendon Park Building Renovations"
        description="Clarendon Park Building Renovations"
      />

      <div id="main">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h2>Reopened</h2>
            </header>
            <p>
              We re-opened the Garfield-Clarendon Model Railroad Club on July 7,
              2025.
            </p>
            <p>
              <small>Last updated: July 7, 2025</small>
            </p>
          </div>
        </section>
        <section id="one">
          <div className="inner">
            <header className="major">
              <h2>A New Era for Uptown</h2>
            </header>
            <p>
              We are excited for the Chicago Park District's commitment to
              bringing upgrades and ammenties to the Uptown community. The
              renovations of the Clarendon Park Community Center will bring the
              building up to modern accessibility standards and repair vital
              infrastructure.
            </p>
            <div className="image">
              <a href={renovationsPDF}>
                <img
                  src={renovationPDFIMG}
                  alt="Clarendon Park Main Room"
                  width={400}
                />
              </a>
            </div>
            <ul className="actions">
              <li>
                <Link href={renovationsPDF} className="button">
                  View Renderings
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <section id="two">
          <div className="inner">
            <header className="major">
              <h2>Enhancing the Garfield Clarendon Model Railroad Club</h2>
            </header>
            <p>
              The building renovation will offer the Garfield-Clarendon Model
              Railroad Club a bunch of enhancements
            </p>
            <p>
              <ul>
                <li>
                  An upgraded HVAC system will make the room more comfortable.
                </li>
                <li>
                  Windows will offer visitors a chance to look at the layout
                  when the room is not open.
                </li>
                <li>
                  New lighting will enhance the visual display of the layout
                  while being more energy efficient.
                </li>
                <li>
                  A separate workshop will allow us to work on projects more
                  easily while opening up more space for visitors in the layout
                  room.
                </li>
                <li>
                  Leaks will be repaired, ensuring the layout is secure from
                  further damage.
                </li>
              </ul>
            </p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Renovation
