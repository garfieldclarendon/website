import React from 'react'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import Timeline from '../components/Timeline'

const Landing = (props) => (
    <Layout>
        <SEO pageTitle="History Timeline" />

        <BannerLanding style="history" title="Garfield-Clarendon Model Railroad Club History" description="A look into our past and present." />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>History Timeline</h2>
                    </header>
                    <p>Since our founding in 1947, we have been busy building HO scale model railroad layouts for the enjoyment of our members and the public.</p>
                    <Timeline />
                </div>
            </section>
        </div>

    </Layout>
)

export default Landing