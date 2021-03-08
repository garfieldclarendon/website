import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import collecting3 from '../assets/images/collecting3.jpeg'
import collecting2 from '../assets/images/collecting2.jpeg'
import collecting from '../assets/images/collecting.jpeg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Landing - Forty by HTML5 UP</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding style="learnAboutModelRailroading" title="Learn About Model Railroading" description="An Introduction to Model Railroading " />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>An introduction</h2>
                    </header>
                    <p>Model Railroading is a fun hobby that can be tailored to one's unique interests. If you like running trains you can build a layout that lets you see and experience railroad operations. If you like the artistic side you can build a masterpiece where the train is just one piece of the puzzle. Our brief introduction will help guide you through making decisions where to start and what to focus on.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <div className="image">
                        <img src={collecting3} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Operations</h3>
                            </header>
                            <p>Running a model railroad like a real one opens the hobby to new possibilities. Our club has been practicing realistic operations for years.</p>
                            <ul className="actions">
                                <li><Link to="/garfield-clarendon-operations" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={collecting2} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Art, Creativity, Action!</h3>
                            </header>
                            <p>This hobby as many options for the creative minded. From painting to scenery to model buiding, there are no shortages of things to learn and do.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={collecting} alt="BN ore train heads down the hill at Summit" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Collecting</h3>
                            </header>
                            <p>For some the real fun can be creating a colleciton of trains and display them for viewing. There are numerous vendors that sell eye-catching display cases. There are also magazines and Facebook groups that cater to collecting trains. There are too many specific types to list but some include, steam, brass, vintage, Lionel, European models, etc.</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing