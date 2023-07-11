import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import BannerLanding from '../../components/BannerLanding'

import event1 from '../../assets/images/events/modelRailroadSceneModular1.jpeg'
import event2 from '../../assets/images/events/modelRailroadSceneModular2.jpeg'
import event3 from '../../assets/images/events/modelRailroadModularScene3.jpeg'

const HolidayTrains = (props) => (
  <Layout>
    <Helmet>
      <title>
        Garfield-Clarendon Model Railroad Show at Margate Park Aug 19-20th
      </title>
      <meta
        name="description"
        content="Model Railroad Show at Margate Park - Aug 19th-20th"
      />
    </Helmet>

    <BannerLanding
      style="trainShow"
      bannerColor="grey"
      title="Model Railroad Show at Margate Park"
      description="Join us for two fun-filled days of model trains and scenery at our free model railroad event"
    />

    <div id="main" className="alt">
      <section id="one" className="spotlights">
        <section>
          <div className="image">
            <img src={event1} alt="A minature scene of a sanding pit" />
          </div>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Garfield-Clarendon Model Railroad Show</h3>
                <h4>At Margate Park - August 19th-20th</h4>
                <h5>Saturday August 19th Noon - 4pm</h5>
                <h5>Sunday August 20th 11AM - 2:30pm</h5>
              </header>
              <p>
                Model railroading is a cherished pastime that all generations
                and walks of life can enjoy. Our modular layout is an immersive
                and ever-changing experience. Trains glide between the city and
                the country passing by many interesting scenes in the process.
                Model railroading provides an escape from the stresses of
                everyday life. Become fully absorbed in the intricate details of
                our miniature world.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="image">
            <img src={event3} alt="A Milwuakee Road Passger Train" />
          </div>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Learn About Our Club</h3>
              </header>
              <p>
                The Garfield-Clarendon Model Railroad Club has been inspiring
                and teaching others about model railroading for over 75 years.
                We are excited to welcome guests back to our permanent home at
                Clarendon Park when it re-opens in 2024. In the meantime, we
                will have plenty of information about our club and membership if
                you're interested in learning more about getting into the hobby.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="image">
            <img src={event2} alt="A Milwuakee Road Passger Train" />
          </div>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Why Attend?</h3>
              </header>
              <p>
                Model railroading is not just for kids; it is a hobby that can
                be enjoyed by people of all ages. Whether you are a seasoned
                enthusiast or just curious about the hobby, the model railroad
                show at Margate Park is a great place to start. If you are
                interested in building your own module or looking for membership
                information, we are excited to talk. You will be amazed at the
                level of detail and craftsmanship on display, and you will have
                a chance to meet like-minded people who share your passion for
                trains. So mark your calendar for August 19th-20th and come see
                for yourself why model railroading is such a fun and rewarding
                hobby.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="image">
            <iframe
              title="Location of Garfield-Clarendon Model Railroad Show at Margate Park"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.3110148783785!2d-87.65237102434682!3d41.97213177123163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3d70e85343f%3A0x48466282b93e3fed!2sMargate%20Fieldhouse%20%E2%80%94%20park%20fitness%20center!5e0!3m2!1sen!2sus!4v1689041880853!5m2!1sen!2sus"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Getting Here</h3>
              </header>
              <p>
                Our exhibit will be in community room next to the front desk.
              </p>
              <p>We are easily accessible using the CTA / Bike / Car.</p>
              <ul className="actions">
                <li className="textItem">By CTA: 146 Inner Drive Express</li>
                <li className="textItem">
                  By CTA Train: Red Line - Argle Stop
                </li>
                <li className="textItem">
                  By Bike: The Lakefront Trail runs right by the building
                </li>
              </ul>
              <p>Parking is available in back or on the street.</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default HolidayTrains
