import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import layoutOverall from '../assets/images/layoutOverall.jpg';
import bridgeport from '../assets/images/tour/bridgeport.jpeg';
import bridgeport1 from '../assets/images/tour/bridgeport1.jpeg';
import williamsport from '../assets/images/tour/williamsport.jpeg';
import williamsport1 from '../assets/images/tour/williamsport1.jpeg';
import summit from '../assets/images/tour/summit.jpeg';
import summit1 from '../assets/images/tour/summit1.jpeg';
import ridge from '../assets/images/tour/ridge.jpeg';
import georgetown from '../assets/images/tour/georgetown.jpeg';
import georgetown1 from '../assets/images/tour/georgetown1.jpeg';
import subway from '../assets/images/tour/subway.jpeg';
import subway1 from '../assets/images/tour/subway1.jpeg';
import courthouse from '../assets/images/tour/courthouse.jpeg';
import courthouse1 from '../assets/images/tour/courthouse1.jpeg';
import clarendonGap from '../assets/images/tour/clarendonGap.jpeg';
import clarendonGap1 from '../assets/images/tour/clarendonGap1.jpeg';
import gaskill from '../assets/images/tour/gaskillMine.jpeg';
import gaskill1 from '../assets/images/tour/gaskillMine1.jpeg';

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>The Garfield Central Layout</h1>
                        <p>It takes over 25 minutes at scale speed to make a complete loop around the layout.</p>
                    </header>
                    <span className="image main"><img src={layoutOverall} alt="Overall photo of the Garfield-Central Layout" /></span>
                    <p>The Garfield Central's mainline extends from an eastern reversing loop at Clarendon Gap to a western reversing loop at Williamsport. The main is double-tracked between each loop. Heading west to east, trains depart the west loop and head thru the sizeable terminal of Williamsport, which features a small yard and engine terminal. Upon exiting Williamsport, trains begin their climb up the stiff eastbound grade, heading across the famous 4-way crossover at "Bohl Crossing". Towards the top of the hill, trains head through a large overhead bridge (literally) before entering Summit. Summit features a few sidings and a small town.</p>
                    <p>From Summit, trains work their way through Ridge (above and around Clarendon Gap) and then into Georgetown, the major terminal of the Garfield Central. Georgetown features a large yard, roundhouse, engine terminal, and lengthy passing sidings along both mains, making it the ideal crew-change and division point for the GC. East of Georgetown is Bridgeport, a town featuring several sidings and a small station. Next, trains head through the "Subway" which is not a town, just a long and narrow rock cut through which the mainline passes.</p>
                    <p>The main next wraps around Garfield Courthouse, a rural area with some sidings. East of Garfield Courthouse, "Bohl Crossing" is encountered once again. This time, the train heads across it from the other direction and rolls downhill into Clarendon Gap, the eastern end of the GC. Clarendon Gap features several long sidings as well as an enginehouse and a connection to the Gaskill Mine complex. Finally, the train enters and clears the east loop and heads back west.</p>
                    <p>Let's explore the track plan in detail going westbound from Williamsport.</p>
                    <h2>Williamsport</h2>
                    <img src={williamsport} alt="Trackplan of Williamsport" />
                    <p>Williamsport is a fairly busy terminal, with its own yard and engine terminal, as well as passenger station. There is a long passing siding eastbound, with the yard and other various sidings situated south of the main. Additionally, the west loop of the layout is located at Williamsport.</p>
                    <img className="responsivePageImage" src={williamsport1} alt="Detail view of Williamsport" />
                    <h2>Summit</h2>
                    <img src={summit} alt="Trackplan of Summit" />
                    <p>As trains finally reach the top of the long grade from Williamsport, they head over a large steel bridge that marks the entrance. Summit is a bustling town which is used to fast freights passing through. The mainline wraps all the way around Summit, and there are a few industrial sidings as well as an eastbound passing siding. </p>
                    <img className="responsivePageImage" src={summit1} alt="Detail view of Summit" />
                    <h2>The Ridge</h2>
                    <img src={ridge} alt="Trackplan of Ridge" />
                    <p>After trains clear Summit, they navigate a long stretch of mainline railroading until pulling into the West end of Georgetown.</p>
                    <h2>Georgetown</h2>
                    <img src={georgetown} alt="Trackplan of Georgetown" />
                    <p>Georgetown (GT) serves as GC's major freight and passenger terminal. Georgetown Tower sits at GT's west end. GT's west lead is right in front of the tower. Georgetown's yard is large, with 16 tracks divided into classification and arrival/departure. GT also services the Garfield Central's locomotive roster.</p>
                    <img className="responsivePageImage" src={georgetown1} alt="Detail view of Georgetown" />
                    <h2>Bridgeport</h2>
                    <img src={bridgeport} alt="Trackplan of Bridgeport" />
                    <p>Bridgeport is a thriving stop along the GC mainline. Several GC customers receive shipments by rail here, and Bridgeport is a popular stop for GC passenger trains. Bridgeport is also a major GC on-line customer. Behind the Bridgeport passenger station is a large coke oven facility.</p>
                    <img className="responsivePageImage" src={bridgeport1} alt="Detail view of Bridgeport" />
                    <h2>Subway</h2>
                    <img src={subway} alt="Trackplan of Subway" />
                    <p>East of Bridgeport, the GC main passes through a long rock-cut, known as the "Subway". This is a popular spot to view trains, since it fronts along the main layout viewing aisle.</p>
                    <img className="responsivePageImage" src={subway1} alt="Detail view of Subway" />
                    <h2>Garfield Courthouse</h2>
                    <img src={courthouse} alt="Trackplan of Garfield Courthouse" />
                    <p>Whereas Bridgeport is a busy stop along the GC mainline, Garfield Courthouse is mainly farmland, and only an occasional GC freight customer. Just east of Garfield Courthouse is the "Bohl Crossing" 4-way crossover again. From there, the main continues into a tunnel and on into Clarendon Gap.</p>
                    <img className="responsivePageImage" src={courthouse1} alt="Detail view of Courthouse" />
                    <h2>Clarendon Gap</h2>
                    <img src={clarendonGap} alt="Trackplan of Clarendon Gap" />
                    <p>Clarendon Gap is as far east as the Garfield Central goes. This is another small GC terminal, with several long sidings and even a 2-stall engine house that is used to house coal train power between runs into and out of the mine at Gaskill. Typical action at Clarendon Gap consists mainly of coal moving into and out of Gaskill Mine, and there are also a few lineside customers of the GC, such as Valley Lumber Co.</p>
                    <img className="responsivePageImage" src={clarendonGap1} alt="Detail view of Clarendon Gap" />
                    <h2>Gaskill Mine</h2>
                    <img src={gaskill} alt="Trackplan of Gaskill Mine" />
                    <p>On the western side of Clarendon Gap, a branch line leaves the main and heads into a tunnel. This is the Gaskill branch, which crosses through Gaskill Run on its way to serve the massive Gaskill Mine complex. Gaskill Mine supplies the GC with unit coal trains five to seven times during the typical week.</p>
                    <img className="responsivePageImage" src={gaskill1} alt="Detail view of Gaskill Mine" />
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic