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
              <li>Use of Micro-engineering joiners suggested</li>
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
              <li>
                The base layer of "soil" should be{' '}
                <a href="https://www.homedepot.com/p/Custom-Building-Products-Prism-105-Earth-17-lb-Grout-PG10517T/202753902">
                  Prism #105 Earth
                </a>
              </li>
              <li>
                Ground foam at the ends where it touches other modules should be{' '}
                <a href="https://www.sceneryexpress.com/SCRUB-GRASS-BLEND-32-oz/productinfo/EX882B/">
                  Scenics Express Scrub Grass Blend
                </a>
                . This is a very forgiving mix that covers well and has much
                visual variety to make scenes more interesting. Feather this mix
                into whatever colors you choose for other parts of your module.
                Suggested mixes are listed below.
              </li>
              <li>
                Facade paint will be{' '}
                <a href="https://www.sherwin-williams.com/en-us/color/color-family/orange-paint-colors/SW6104-kaffee">
                  Sherwin-Williams Kaffee
                </a>
              </li>
            </ul>
            <p>
              Track paint will use the Woodland Scencis paint pens detailed{' '}
              <a href="https://woodlandscenics.woodlandscenics.com/show/category/TrackPainters">
                here
              </a>
              .
            </p>
            <ul>
              <li>Steel rail is used for main lines</li>
              <li>Rusty rail is used for spurs</li>
              <li>Weathered tie is used for all ties</li>
            </ul>
            <p>
              Woodland Sceneics and Scenic Express offer a variety of mixes that
              make excellet scenery. Here are a few suggestions.
            </p>
            <ul>
              <li>
                Scenic Express Green Grass Blend, great for lawns and parks that
                a slightly un-kept
              </li>
              <li>
                Scenic Express Summer Lawn Blend, great for lawns and parks that
                are highly maintained
              </li>
              <li>
                Scenics Express Farm Pasture Blend, use in farm scenes and as an
                alterantive to scrub grass
              </li>
              <li>
                Woodland Scenics Green Grass, Burnt Grass, and Weeds are nice
                mix-ins
              </li>
            </ul>
            <p>
              There are too many static grass options to list and frankly, you
              can't go wrong. The key is to pick three or so colors and sizes
              and use them randomly on a field.
            </p>
            <p>
              Static grass tufts are great to use in addition to larger patches
              of static grass. Etsy is a great place to buy these, often branded
              for "Wargaming". Take a look at this{' '}
              <a href="https://www.etsy.com/listing/780464328/self-adhesive-static-grass-tufts-for?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=static+grass+tufts&ref=sr_gallery-1-1&frs=1&cns=1&sts=1&organic_search_click=1">
                example
              </a>{' '}
              or{' '}
              <a href="https://www.etsy.com/listing/1158417351/grass-tufts-4-6-mm-meadow-grass?click_key=40909e3d36635f7430e0f4ae95076de458d6f106%3A1158417351&click_sum=db724c94&ref=internal_similar_listing_bot-1&sts=1&listing_id=1158417351&listing_slug=grass-tufts-4-6-mm-meadow-grass">
                this one
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Modules
