import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/SEO'

import operations from '../assets/images/operations.jpeg'

const Generic = (props) => (
    <Layout>
        <SEO pageTitle="Learn About Model Railroading" />

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Garfield-Clarendon Operations</h1>
                    </header>
                    <span className="image main"><img src={operations} alt="Union Pacific passenger train heads down hill" /></span>
                    <h2>Typical Operation Sessions</h2>
                    <p>Operating sessions typically occur the last Friday of the month at 7pm. A session usually lasts two hours and is always open to the public. Each session is different but follows prototypical scenarios found on real railroads.</p>
                    <h2>Grades</h2>
                    <p>The ruling grade of the GC lies between Williamsport and Summit, between which the mainline climbs from its lowest elevation to its highest, over a distance of about 40 feet. This stiff grade necessitates heavy motive power on the head end, and helpers on this stretch are a rare but occasional sight.</p>
                    <h2>Track Construction</h2>
                    <p>The minimum mainline curve radius is 42", with all mainline turnouts being #8 or larger. Rail sizes are code 83 on the main, code 70 on yard trackage and sidings, and code 100 on east and west loops. Train control is done by DCC (Digital Command Control) and mostly all switches are powered.</p>
                    <p>There are approximately 1,500 feet of hand-laid trackage on the GC. All turnouts are built in place to permit the flowing track work which you see. Current track-laying practice begins with spline sub-roadbed supporting Homosote-brand board. Club-cut, white pine ballast board is then added to the structure. Northern pine ties, ripped with a radial arm saw, top out the base. After ballasting with a variety of materials ranging from beach sand to commercial ballast, the rail is hand-spiked, and turnouts are built to fit.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic