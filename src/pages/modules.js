import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import straightModule from '../assets/images/modules/straightModule.png'
import cornerModule from '../assets/images/modules/corner-module-2.png'

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
              a club. They are loosely influenced by other standards like
              Free-Mo. We choose to create our own standard to suit our needs.
              Our guide allows for smaller setups, simplified wiring, and
              interfacing with other popular standards.
            </p>
            <p>
              Some of the main differences you will find are within our corner
              construction, track placements, and DCC plugs. Our standards are
              meant to work with Free-Mo or other standards with adaptors. We
              welcome any modules from other standards if they can fit within
              our setups. We removed DCC plugs in favor of Wifi throttles, which
              have greatly simplified operations, setup, and wiring.
            </p>
            <p>
              Our corners are less spacious than other standards. We sought to
              create ones that nest within each other for easy storage and
              transport. A set of four corners can easily fit within a
              hatchback! At a 31" radius, our corners still look pretty good
              with longer passenger cars while still being easily transportable.
              This also allows flexibility to create a small layout in more
              spaces.
            </p>
            <p>
              We chose to not center tracks within modules. This brings the
              action closer to viewers. It also allows for more spacious areas
              in the background for industries, scenes, and switching. Some
              members opt to extend scenery into the public's viewing area with
              detachable scenery blocks. These are acceptable.
            </p>
          </div>
        </section>
        <section id="two">
          <div className="inner">
            <header className="major">
              <h2>Module Schematics</h2>
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
              <h2>Track</h2>
            </header>
            <ul>
              <li>
                <b>T1. Track Spacing</b>
                <ul>
                  <li>
                    T1.1 Mainline track should be 6” from the front edge
                    measured from center of the track
                  </li>
                  <li>
                    T1.2 Double track center lines shall be spaced precisely 2
                    inches apart. The right-running track shall be 6" from the
                    front edge as measured from the center of the track.
                  </li>
                  <li>
                    T1.3 2" of space should be left at the ends of a module for
                    joiner tracks. You may choose to fill this space with empty
                    ties and ballast for a cleaner look or simply paint the cork
                    roadbed grey to allow the joiner track to fit easily.
                  </li>
                  <li>
                    T1.4 Points on a turnout should not be less than 6" from the
                    edge of a module.
                  </li>
                  <li>1.5 A turnout should not connect to a joiner track</li>
                  <li>
                    T1.6 Mainline tracks should end perpendicular to the
                    endplate of a module
                  </li>
                </ul>
              </li>
              <li>
                <b>T2. Track Arrangements</b>
                <ul>
                  <li>T2.1 Single or double track main lines are permitted</li>
                  <li>
                    T2.2 Single track mainlines are suggested to have passing
                    sidings
                  </li>
                </ul>
              </li>
              <li>
                <b>T3. Track Construction</b>
                <ul>
                  <li>T3.1 Code 83 must be used on mainline track</li>
                  <li>
                    T3.2 Code 100 can be used only in street running mainlines
                  </li>
                  <li>
                    T3.3 Peco and Walthers brand switches are highly suggested
                  </li>
                  <li>T3.4 Cork roadbed must be used</li>
                  <li>
                    T3.5 Motorized or manual turnouts - If manual, paint
                    diverging throw yellow
                  </li>
                  <li>
                    T3.6 Toggle switches are recessed or have bump protection
                    should be provided. When possible, try placing switches on
                    the inside away from the front public facing side.
                  </li>
                  <li>
                    T3.7 Each piece of track should have a feeder wire soldered
                    to the power bus
                  </li>
                  <li>T3.8 Curved tracks must have staggered joints</li>
                  <li>
                    T3.9 31" is the minium radius allowed for mainline tracks
                  </li>
                  <li>
                    T3.10 It is highly suggested to solder tracks connecting to
                    joiners to screws for durability
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
        <section id="four">
          <div className="inner">
            <header className="major">
              <h2>Electrical</h2>
            </header>
            <ul>
              <li>
                <b>E1. Track bus wire</b>
                <ul>
                  <li>E1.1 14g wire must be used</li>
                  <li>
                    E1.2 white wire is used for the rail nearest module front
                  </li>
                  <li>
                    E1.3 black wire is used for the rail further from the module
                    front
                  </li>
                </ul>
              </li>
              <li>
                <b>E2. Accessory bus</b>
                <ul>
                  <li>E2.1 14g wire must be used</li>
                  <li>
                    E2.2 12v DC power must be provided, higher voltage is not
                    permitted
                  </li>
                  <li>E2.3 Incandescent bulbs must not be used in buildings</li>
                  <li>
                    E2.4 Red colored wire is used for positive and green for
                    negative
                  </li>
                </ul>
              </li>
              <li>
                <b>E3. DCC</b>
                <ul>
                  <li>E3.1 Wireless NCE is our preferred DCC system</li>
                  <li>
                    E3.2 Plug panels will not be used in shows, we have no
                    regulations regarding plug panel locations or quantity
                  </li>
                  <li> E3.3 WIFI throttles will be provided</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
        <section id="five">
          <div className="inner">
            <header className="major">
              <h2>Construction</h2>
            </header>
            <ul>
              <li>
                <b>C1. Height</b>
                <ul>
                  <li>C1.1 40” height from floor</li>
                  <li>
                    C1.2 .5-1" of flexible height should be provided from leg
                    levelers
                  </li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>
                <b>C2. Lumber</b>
                <ul>
                  <li>
                    C2.1 Particle board is prohibited as a construction material
                  </li>
                  <li>
                    C2.2 It highly suggested to use high-quality pine plywood
                  </li>
                  <li>
                    C2.3 Tracks must have a solid wood base but the rest of a
                    module can constructed as desired to accommodate scenery
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
        <section id="six">
          <div className="inner">
            <header className="major">
              <h2>Scenery</h2>
            </header>
            <ul>
              <li>
                S1.1 Ballast should be Woodland Scenics brand "fine gray blend"
              </li>
              <li>
                S1.2 Ground foam at the ends where a module touches other
                modules is highly suggested to be{' '}
                <a href="https://www.sceneryexpress.com/SCRUB-GRASS-BLEND-32-oz/productinfo/EX882B/">
                  Scenics Express Scrub Grass Blend
                </a>
                . This is a very forgiving mix that covers well and has much
                visual variety to make scenes more interesting. Feather this mix
                into whatever colors you choose for other parts of your module.
                Suggested mixes are listed below.
              </li>
              <li>
                S1.3 Facade paint will be{' '}
                <a href="https://www.sherwin-williams.com/en-us/color/color-family/orange-paint-colors/SW6104-kaffee">
                  Sherwin-Williams Kaffee
                </a>
              </li>
              <li>
                S1.4 Suggested track paints are the Woodland Scenics paint pens
                detailed{' '}
                <a href="https://woodlandscenics.woodlandscenics.com/show/category/TrackPainters">
                  here
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Modules
