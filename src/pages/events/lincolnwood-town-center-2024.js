import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import BannerLanding from '../../components/BannerLanding'

import event1 from '../../assets/images/events/mall-layout2.jpeg'
import event2 from '../../assets/images/events/mall-layout3.jpeg'

const HolidayTrains = (props) => (
  <Layout>
    <Helmet>
      <title>
        Garfield-Clarendon Model Railroad Show at the Lincolnwood Town Center
        2024
      </title>
      <meta
        name="description"
        content="Model Railroad Show at the Lincolnwood Town Center - April 29"
      />
    </Helmet>

    <BannerLanding
      style="trainShow"
      bannerColor="grey"
      title="Model Railroad Show at the Lincolnwood Town Center"
      description="Join us for a fun-filled day of model trains and scenery at our free one-day model railroad event!"
    />

    <div id="main" className="alt">
      <section id="one" className="spotlights">
        <div className="inner">
          <hr className="major" />
          <div className="grid-wrapper">
            <div class="col-6">
              <span className="image fit">
                <img src={event1} alt="A minature scene of a sanding pit" />
              </span>
            </div>
            <div class="col-6">
              <header>
                <h3>Garfield-Clarendon Model Railroad Show</h3>
                <h4>At the Lincolnwood Town Center - April 20th 2024</h4>
              </header>
              <p>
                Model railroading is a cherished pastime that all generations
                and walks of life can enjoy. It is an immersive experience that
                allows you to create your own miniature world, complete with
                trains, tracks, landscapes, and buildings. Model railroading
                provides an escape from the stresses of everyday life. You
                become fully absorbed in the intricate details of the miniature
                world. You can spend hours designing and building your layout,
                perfecting the placement of each piece of scenery, and watching
                your trains as they travel along the tracks.
              </p>
              <p>
                If you are looking for a fun and unique experience, then you
                should definitely check out the model railroad show at
                Lincolnwood Town Center on April 20th 2024. We have created a
                portable layout to enjoy while our home layout is closed for
                construction. You will be able to speak with expert model
                railroaders, ask questions, or just enjoy the sights. It is a
                chance to see a wide variety of trains in action.
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
                enthusiast or just curious about the hobby, the model railroad
                show at Lincolnwood Town Center is a great place to start. If
                you are interested in building your own module or looking for
                membership information, we are excited to talk. You will be
                amazed at the level of detail and craftsmanship on display, and
                you will have a chance to meet like-minded people who share your
                passion for trains. So mark your calendar for April 20th from
                10am to 4:30pm, and come see for yourself why model railroading
                is such a fun and rewarding hobby.
              </p>
            </div>
            <div class="col-6">
              <span className="image fit">
                <div className="image">
                  <img src={event2} alt="A Milwuakee Road Passger Train" />
                </div>
              </span>
            </div>
          </div>
        </div>
        <section>
          <div className="image">
            <iframe
              title="Location of Garfield-Clarendon Model Railroad Show at the Lincolnwood Town Center"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.5492064424734!2d-87.71614878487466!3d42.00994926513222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fce36509405bf%3A0x895aad21cc4a3593!2sLincolnwood%20Town%20Center!5e0!3m2!1sen!2sus!4v1678648101627!5m2!1sen!2sus"
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
                Our exhibit will be located on the first floor near Old Navy.
              </p>
              <p>We are easily accessible using the CTA / Pace / Car.</p>
              <ul className="actions">
                <li className="textItem">By Pace Bus: 290 Touhy</li>
                <li className="textItem">By CTA bus: 82</li>
              </ul>
              <p>Plenty of free parking is available.</p>
            </div>
          </div>
        </section>
        <section>
          <div className="content">
            <p>
              <em>
                Lincolnwood Town Center and Friedman Real Estate Brokerage IL
                LLC are not affiliated with the Garfield-Clarendon Model
                Railroad Club.
              </em>
            </p>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default HolidayTrains
