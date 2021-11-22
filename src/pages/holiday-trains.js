import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import histoicBlackstone from '../assets/images/Blackstone1a-1912.png';
import blackstoneTree from '../assets/images/blackstrone-tree.jpg';


const HolidayTrains = (props) => (
    <Layout>
        <Helmet>
            <title>Holiday Trains at the Blackstone Hotel - Presented by the Garfiled-Clarendon Model Railroad Club</title>
            <meta name="description" content="Holiday Trains at the Blackstone Hotel" />
        </Helmet>

        <BannerLanding style="holidayTrains" bannerColor="grey" title="Holiday Trains at the Blackstone Hotel" description="A festive holiday train display" />

        <div id="main" className="alt">
            <section id="one" className="spotlights">
                <section>
                    <Link to="https://www.theblackstonehotel.com/specials" className="image">
                        <img src={blackstoneTree} alt="A train travels around a christmas tree" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Holiday Trains at the Blackstone</h3>
                                <h4>Presented by the Garfiled-Clarendon Model Railroad Club</h4>
                            </header>
                            <p>This holiday season make a stop at the Blackstone part of your holiday plans. The lobby is fully decked out in holdiay galore! See trains traverse the space, ducking under and around brighly lit trees. The Michigan Ave. window features a minature scene of winter delight. Sip a cocktail from the bar and enjoy the ambiance or treat yourself to Mexican tapas at the Mercat.</p>
                            <p>Hotel rooms and packages are available, make yourself a staycation. A hotel room downtown makes it easy to see holiday favorites like the museums, The Christkindlmarket, The Walnut Room, Millinum Park, The Maggie Daley Skating Ribbon, and more!</p>
                            <ul className="actions">
                                <li><a href="https://www.theblackstonehotel.com/specials" className="button">View Hotel Deals</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="https://www.blackhawkrailwayhistoricalsociety.org/chicago--alton.html" className="image">
                        <img src={histoicBlackstone} alt="1912 View" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Railroad History</h3>
                            </header>
                            <p>The Blackstone Hotel was founded by Timothy Blackstone in 1910. Mr. Blackstone was a noteable Chicagoan who was founding president of the Union Stock Yards and president of the Chicago and Alton Railroad. This raiload connected Chicago to St. Louis and Kansas City. The C&amp;A had its share of historical events. It was the first line to use a Pullman-built sleeper car in 1859. It also featured the first dining car built by Pullman. Customers travled in comfort in the first AC equipped cars featured on The Alton from Chicago to St. Louis in 1932.</p>
                            <ul className="actions">
                                <li><a href="https://www.blackhawkrailwayhistoricalsociety.org/chicago--alton.html">Read More</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <iframe title="Location of Holiday Trains at the Blackstone" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.9100419699207!2d-87.6269329846879!3d41.87328187922273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c98db868aa7%3A0xbdd99a9a4da13bf7!2sThe%20Blackstone%2C%20Autograph%20Collection!5e0!3m2!1sen!2sus!4v1637538779488!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Getting Here</h3>
                            </header>
                            <p>Our exhibit at the Blackstone is located at 636 South Michigan Ave.</p>
                            <p>We are easily accessible using the CTA.</p>
                            <ul className="actions">
                                <li className="textItem">By train: Walk east from the Harrison CTA "L" Station</li>
                                <li className="textItem">By bus: J14, 147, 146, 126, 6, 4, 3, 29, 62 all stop within a block or two</li>
                            </ul>
                            <p>Numerous hourly parking lots are available nearly. Multi-Park Chicago is located on the corner of Balbo and Wabash.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="content">
                        <p>
                            <em>The Blackstone Hotel and Marriott International, Inc, are not affiliated with the Garfield-Clarendon Model Railroad Club.</em>
                        </p>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default HolidayTrains