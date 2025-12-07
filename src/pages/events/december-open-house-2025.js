import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import BannerLanding from '../../components/BannerLanding'

import event1 from '../../assets/images/events/event1.jpeg'
import event2 from '../../assets/images/events/event2.jpeg'

const HolidayTrains = (props) => (
  <Layout>
    <Helmet>
      <title>
        Garfield-Clarendon Model Railroad Open House December 13, 2025
      </title>
      <meta
        name="description"
        content="Model Railroad Open House at Clarendon Park Community Center December 13, 2025"
      />
    </Helmet>

    <BannerLanding
      style="holidayOpenHouse"
      bannerColor="grey"
      title="Holly Jolly Express - December 13th, Noon - 4PM"
      description="Join us for a fun-filled day of model trains and scenery at our free open house!"
    />

    <div id="main" className="alt">
      <section id="one" className="spotlights">
        <div className="inner">
          <hr className="major" />
          <div className="grid-wrapper">
            <div className="col-6">
              <span className="image fit">
                <img src={event1} alt="A miniature scene of a sanding pit" />
              </span>
            </div>
            <div className="col-6">
              <header>
                <h3>Garfield-Clarendon Model Railroad Club Grand-Reopening</h3>
                <h4>
                  At the Clarendon Park Community Center - December 13th 2025 -
                  Noon - 4PM
                </h4>
              </header>
              <p>
                Welcome back! After spending several months restoring the layout
                following a two-and-a-half-year closure, we are excited to open
                our doors once again. Countless hours of painting, cleaning,
                troubleshooting wiring, and restoring miniature details have
                brought us to this moment. We're thrilled to celebrate the
                holidays with everyone and hope you'll join us for our grand
                reopening!
              </p>
            </div>
          </div>
          <hr className="major" />
          <div className="grid-wrapper">
            <div className="col-6">
              <header>
                <h3>Why Attend?</h3>
              </header>
              <p>
                Model railroading is not just for kids; it is a hobby that can
                be enjoyed by people of all ages. Whether you are a seasoned
                enthusiast or just curious about the hobby, the Holly Jolly
                Express Open House is a great place to start. If you are
                interested in building your own module or looking for membership
                information, we are excited to talk. You will be amazed at the
                level of detail and craftsmanship on display, and you will have
                a chance to meet like-minded people who share your passion for
                trains. So come see for yourself why model railroading is such a
                fun and rewarding hobby.
              </p>
            </div>
            <div className="col-6">
              <span className="image fit">
                <div className="image">
                  <img src={event2} alt="A Milwaukee Road Passenger Train" />
                </div>
              </span>
            </div>
          </div>
        </div>
        <section>
          <div className="image">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1373.259056550766!2d-87.65005086279369!3d41.96371162350599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3cf9455abf1%3A0xa3083269e6ce880!2sGarfield-Clarendon%20Model%20Railroad%20Club!5e1!3m2!1sen!2sus!4v1763414000198!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Getting Here</h3>
              </header>
              <p>We are located at 4501 N. Clarendon</p>
              <p>We are easily accessible using the CTA / Bike / Car.</p>
              <ul className="actions">
                <li className="textItem">
                  By CTA Train: Red Line to Wilson and two block East walking{' '}
                </li>
                <li className="textItem">
                  By CTA bus: 78 Montrose, 36 Broadway or 146 Inner Drive
                  Express
                </li>
              </ul>
              <p>
                Parking is available in the lot or along Clarendon and Marine
                Dr.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default HolidayTrains
