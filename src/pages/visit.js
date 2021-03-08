import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import SEO from '../components/SEO'
import williamsport from '../assets/images/williamsport.jpeg'

const Landing = (props) => (
    <Layout>
        <SEO pageTitle="Visit" />
        <BannerLanding style="visitors" title="Visitors are always welcome" description="Located in the Clarendon Park Community Center in Uptown, Chicago" />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Hours</h2>
                    </header>
                    <p>We're open every Friday except the first occurance for the month, which is our meeting night. You will usually find a variety of trains running, especially on the last Friday of the month - which tends to be operations night. We are open from <b>7PM - 9:00PM</b> unless otherwise noted.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <div className="image">
                        <img src={williamsport} alt="Williamsport" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Days other than Friday</h3>
                            </header>
                            <p>We often get asked if we are open other days than Friday. As a non-profit volunteer lead group, we have limited availability. As such, we only guarantee being available on Fridays from 7pm - 9:00pm. Twice a year we hold open houses on Sundays. Sign up for our newsletter or like us on Facebook to learn about these openings.</p>
                            <p>Unfortunately we are unable to offer special openings for monetary donations. Most members are unable to oblige such requests due to everyday obligations.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.705025808824!2d-87.65147078457677!3d41.963670468033904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3cf9455abf1%3A0xa3083269e6ce880!2sGarfield-Clarendon%20Model%20Railroad%20Club!5e0!3m2!1sen!2sus!4v1615137454411!5m2!1sen!2sus" width="500" height="450" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Getting Here</h3>
                            </header>
                            <p>We're located in the Clarendon Park Community Center in the Uptown neighborhood of Chicago.
4501 N. Clarendon Ave. Chicago, IL 60640</p>
                            <p>We are easily accessible using the CTA.</p>
                            <ul className="actions">
                                <li className="textItem">By train: Walk east from the Wilson Station</li>
                                <li className="textItem">By bus: Use the 78 Montrose of 146 Inner Drive Express</li>
                            </ul>
                            <p>Plenty of parking is available in the lot adjacent to the building. Street parking is also available on Marine Dr. and Clarendon Ave.</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing