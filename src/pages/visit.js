import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import BannerLanding from '../components/BannerLanding'
import SEO from '../components/SEO'
import williamsport from '../assets/images/williamsport.jpeg'
import { format } from 'date-fns'
import endOfWeek from 'date-fns/endOfWeek'
import sub from 'date-fns/sub'
import add from 'date-fns/add'

const Landing = () => {
  const [isSuccessful, setIsSuccessful] = useState(false)
  const [isError, setIsError] = useState(false)
  const result = endOfWeek(new Date(), { weekStartsOn: 1 })
  const thisFriday = sub(result, {
    days: 2,
  })
  const nextFriday = add(result, {
    days: 7,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    let myForm = document.getElementById('visit')
    let formData = new FormData(myForm)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then((res) => {
        if (res.status === 200) {
          setIsSuccessful(true)
        } else {
          setIsError(true)
        }
      })
      .catch((error) => setIsSuccessful(false))
  }

  useEffect(() => {
    var exampleCallback = function () {
      console.log('Order complete!')
    }

    window.EBWidgets.createWidget({
      // Required
      widgetType: 'checkout',
      eventId: '395872343837',
      iframeContainerId: 'eventbrite-widget-container-395872343837',

      // Optional
      iframeContainerHeight: 425, // Widget height in pixels. Defaults to a minimum of 425px if not provided
      onOrderComplete: exampleCallback, // Method called when an order has successfully completed
    })
  }, [])

  return (
    <Layout>
      <SEO pageTitle="Visit" />
      <BannerLanding
        bannerColor="grey"
        style="visitors"
        title="Visit Us"
        description="Located in the Clarendon Park Community Center in Uptown, Chicago"
      />

      <div id="main">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h2>Open by Appointment Only</h2>
            </header>
            <p>
              We are now open by appointment only with full hours expected in
              Fall. Join our newsletter to be the first to learn about our grand
              reopening.
            </p>
          </div>
        </section>
        {/* <section id="one">
          <div className="inner">
            <header className="major">
              <h2>Hours</h2>
            </header>
            <p>Fridays 5:30 PM to 7PM.</p>
            <p>
              <b>
                All visitors must obtain a free ticket to ensure availability of
                members and for capacity restrictions.
              </b>
            </p>
            <div id="eventbrite-widget-container-395872343837"></div>
          </div>
        </section> */}
        <section id="two" className="spotlights">
          {
            <section>
              <div className="image">
                <img src={williamsport} alt="Williamsport" />
              </div>
              <div className="content">
                <div className="inner">
                  <header className="major">
                    <h3>Opening Hours</h3>
                  </header>
                  <p>
                    We often get asked if we are open other days than Friday. As
                    a non-profit volunteer lead group, we have limited
                    availability. As such, we only guarantee being available on
                    Fridays from 5:00pm - 7:00pm.
                  </p>
                </div>
              </div>
            </section>
          }
          {
            <section>
              <div className="image">
                <iframe
                  title="Google Map of Garfield-Clarendon Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.705025808824!2d-87.65147078457677!3d41.963670468033904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3cf9455abf1%3A0xa3083269e6ce880!2sGarfield-Clarendon%20Model%20Railroad%20Club!5e0!3m2!1sen!2sus!4v1615137454411!5m2!1sen!2sus"
                  width="500"
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
                    We're located in the Clarendon Park Community Center in the
                    Uptown neighborhood of Chicago. 4501 N. Clarendon Ave.
                    Chicago, IL 60640
                  </p>
                  <p>We are easily accessible using the CTA.</p>
                  <ul className="actions">
                    <li className="textItem">
                      By train: Walk east from the Wilson Station
                    </li>
                    <li className="textItem">
                      By bus: Use the 78 Montrose of 146 Inner Drive Express
                    </li>
                  </ul>
                  <p>
                    Plenty of parking is available in the lot adjacent to the
                    building. Street parking is also available on Marine Dr. and
                    Clarendon Ave.
                  </p>
                </div>
              </div>
            </section>
          }
        </section>
      </div>
    </Layout>
  )
}

export default Landing
