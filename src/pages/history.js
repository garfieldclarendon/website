import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import history2 from '../assets/images/history2.jpg'
import history3 from '../assets/images/history3.jpeg'
import history4 from '../assets/images/history4.jpeg'
import history5 from '../assets/images/history5.jpeg'

const Landing = (props) => (
    <Layout>
        <SEO pageTitle="History" />

        <BannerLanding style="history" title="Garfield-Clarendon Model Railroad Club History" description="A look into our past and present." />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Over 50 Years of Model Railroading</h2>
                    </header>
                    <p>Since our founding in 1947, we have been busy building HO scale model railroad layouts for the enjoyment of our members and the public.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <div className="image">
                        <img src={history2} alt="Burlington passenger at the crossing" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Our Mission</h3>
                            </header>
                            <p>To build and run a true to life model railroad that educates the public and our members on the history and operations of railroads. We provide a setting suited for sharing ideas and techniques in this hobby that helps grow awareness and interest in the community for all things model railroading.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={history3} alt="Burlington and CNW passenger trains at Georgetown" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>About Us</h3>
                            </header>
                            <p>We are located in the Uptown neighborhood of Chicago within the Chicago Park District's Clarendon Park Community Center. As a Chicago model railroad club since founding, we provide a large scale layout that is not possible in smaller city dwellings. We have open houses four times a year and our operating sessions are open to the public.</p>
                            <ul className="actions">
                                <li><Link to="/visit" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={history4} alt="Northern Pacific train leaves Bridgeport" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Past Layouts</h3>
                            </header>
                            <p>Three layouts were built in the Garfield Park Fieldhouse before the Chicago Park District moved the Club to Clarendon Park in 1963--hence the name Garfield-Clarendon. The fourth layout, housed in another part of the Clarendon Park building, was scrapped when the fieldhouse was remodeled in 1972-1973.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={history5} alt="BN freight at Bridgeport" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>OUR CURRENT LAYOUT</h3>
                            </header>
                            <ul>
                                <li>Construction began in 1974.</li>
                                <li>Approximately 1,400 feet of hand-laid track.</li>
                                <li>100% Digital Command Controlled.</li>
                                <li>Beautiful scenic elements including three large bridges.</li>
                                <li>Features fully signaled, dual main lines. </li>
                                <li>Outstanding scenery both urban and rural settings.</li>
                                <li>A streetcar line operates with two cars.</li>
                                <li>Operating with a scale speed takes over 25 minutes to complete a round trip.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing