import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import youthProgram4 from '../assets/images/youthProgram4.jpg'
import youthProgram3 from '../assets/images/youthProgram3.jpg'
import youthProgram2 from '../assets/images/youth_program2.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Landing - Forty by HTML5 UP</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding style="youthOutreach" title="Community Youth Outreach Program" description="A fun and educational program for local students." />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>An Introduction</h2>
                    </header>
                    <p>The winter of 2018 saw our first annual six week program for children in our local schools. Since then this program has become an integral part of our club’s mission to share knowledge of model railroading and giving back to the community. The program was held using a classroom at the Chicago Park District’s Clarendon Park Community Center and the train layout room.</p>
                    <p>We taught how mathematics, engineering, and other sciences play a role in the everyday operations of railroads and public transit. </p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={youthProgram4} alt="Youth program participant and their train buddy" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Our Jr. Railfans Learned a lot in 6 Weeks</h3>
                            </header>
                            <p>Each session featured a lecture with interactive activities, snacks, and ended with activities in the train layout room incorporating the learnings from earlier.</p>
                            <p>Topics included the following:</p>
                            <ul>
                                <li>Layout Design/Electricity and Electronics
- Students tour of the train layout room.</li>
                                <li>Engineering/Bridge Building
- Student scavenger hunt for various bridge designs.</li>
                                <li>Motive Power
- Students learned about engineering design that goes into locomotives:  Diesel, Steam, and Electric.</li>
                                <li>Signal Lighting/Traffic Management
- Students control local switching and help plan moves and use proper horn / bell / whistle usage.</li>
                                <li>Classification Yards/Logistics and Routing
- Students control local switching; members supervise and help plan moves.</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={youthProgram3} alt="Youth Program in classroom" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Field Trip</h3>
                            </header>
                            <p>We ended our community youth outreach program with a special field trip to The Museum of Science and Industry. Students got a behind the scenes tour of their train layout display.</p>
                            <p>We are happy to help share knowledge of railroads and model railroading for future generations. We look forward to another great class!</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={youthProgram2} alt="Youth Promgram and Museum of Science and Industry" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Awards and Sponsor</h3>
                            </header>
                            <p>Our 2018 program was nominated for and won the Chicago Park District Foundation’s Connecting Communities Award. We were very proud and honored to have been recognized among nominations from across the city.</p>
                            <p>Special thanks to our 2019 - 2020 sponsor, Burlington Northern Santa Fe Railway</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing