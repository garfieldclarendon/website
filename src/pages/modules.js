import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import straightModule from '../assets/images/modules/straightModule.png'
import cornerModule from '../assets/images/modules/corner-module.png'

const Modules = () => {
  return (
    <Layout>
      <SEO pageTitle="Layout Modules" />
      <BannerLanding
        style="modules"
        title="Layout Modules"
        description="Club layout module standards"
      />

      <div id="main">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h2>Module Standards</h2>
            </header>
            <p>
              Listed on this page are the module standards we have agreed to as
              a club. They are loosely influenced by other standards but not
              entirely. They might work for you but are suited for our
              particular use-cases.
            </p>
          </div>
        </section>
        <section id="two">
          <div className="inner">
            <header className="major">
              <h2>Module Scemantics</h2>
            </header>
            <p>The straight track module is listed below.</p>
            <div className="image" style={{ backgroundColor: '#FFF' }}>
              <img src={straightModule} alt="Straight Module" width="100%" />
            </div>
            <p>The corner track module is listed below.</p>
            <div className="image" style={{ backgroundColor: '#FFF' }}>
              <img src={cornerModule} alt="Corner Module" width="100%" />
            </div>
          </div>
        </section>
        <section id="three">
          <div className="inner">
            <header className="major">
              <h2>Tracks</h2>
            </header>
            <ul>
              <li>6” from the front edge measured from center of the track</li>
              <li>Single track main line with passing sidings</li>
              <li>
                Doulble track centerlines shall be spaced precisely 2 inches
                apart
              </li>
              <li>Code 83 track main, 70 possible on sidings</li>
              <li>Micro-engineering or Peco brands</li>
              <li>Cork roadbed</li>
              <li>
                Motorized or manual turnouts - If manual, paint diverging throw
                yellow
              </li>
              <li>
                Toggle switches are recessed or have bump protection on the
                outside
              </li>
              <li>
                Each piece of track should have a feeder wire soldered to the
                power bus
              </li>
              <li>Peco or Walthers turnouts - #6 on main, #5 on sidings</li>
              <li>Joiner track is 2” from end - 4” long track</li>
              <li>Use Micro-engineering joiners</li>
            </ul>
          </div>
        </section>
        <section id="four">
          <div className="inner">
            <header className="major">
              <h2>Electrical</h2>
            </header>
            <ul>
              <li>Track bus - 14g wire</li>
              <li>
                Track bus - white wire for rail nearest module front; black for
                rail further from front
              </li>
              <li>Accessory bus - 14g wire @ 12v</li>
              <li>
                Accessory bus - red for positive wire and green for negative
              </li>
              <li>Wireless NCE</li>
              <li>Plug panels to be determined at later date</li>
              <li>Cork roadbed</li>
              <li>
                Motorized or manual turnouts - If manual, paint diverging throw
                yellow
              </li>
              <li>
                Toggle switches are recessed or have bump protection on the
                outside
              </li>
              <li>
                Each piece of track should have a feeder wire soldered to the
                power bus
              </li>
              <li>Peco or Walthers turnouts - #6 on main, #5 on sidings</li>
              <li>Joiner track is 2” from end - 4” long track</li>
              <li>Use Micro-engineering joiners</li>
            </ul>
          </div>
        </section>
        <section id="five">
          <div className="inner">
            <header className="major">
              <h2>Structure</h2>
            </header>
            <ul>
              <li>40” height without levelers, with 40.5”</li>
            </ul>
          </div>
        </section>
        <section id="six">
          <div className="inner">
            <header className="major">
              <h2>Scenery</h2>
            </header>
            <ul>
              <li>Ballast should be Woodland Scenics fine gray blend</li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Modules
