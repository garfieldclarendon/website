import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { format, toDate } from 'date-fns';
import SEO from '../components/SEO'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

const Landing = () => {
    const data = useStaticQuery(
        graphql`
        query OpenHouses {
            allContentfulOpenHouses {
            nodes {
                date
                description {
                description
                }
                title
                startTime
                endTime
            }
            }
        }
        `
    );
    const futureDates = data.allContentfulOpenHouses.nodes.filter(item => (toDate(new Date(item.date)) > new Date()));
    const pastEvents = data.allContentfulOpenHouses.nodes.filter(item => (toDate(new Date(item.date)) < new Date()));
    return (
        <Layout>
            <SEO pageTitle="Open Houses" />
            <BannerLanding style="openHouses" title="Open Houses" description="Vist us soon or browse photos from a prior events." />

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>Upcoming Events</h2>
                        </header>
                        <p>All our events are free, (donations accepted). Our layout is a great destination for the whole family. Stop by and stay a while.</p>
                        <div className="grid-wrapper">
                            {futureDates.length === 0 && <p className="col-6"><em>No events schedule, please check back.</em></p>}
                            {futureDates && futureDates.map(openHouse => {
                                const theDate = toDate(new Date(openHouse.date));
                                return (<div className="col-6">
                                    <h3>{openHouse.title} - {format(theDate, 'yyyy-MM-dd')}</h3>
                                    <h4>Open From {openHouse.startTime} - {openHouse.endTime}</h4>
                                    <p>{openHouse.description.description}</p>
                                </div>)
                            })}
                        </div>
                        <header className="major">
                            <h2>Past Events</h2>
                        </header>
                        <div className="grid-wrapper">
                            {pastEvents && pastEvents.map(openHouse => {
                                const theDate = toDate(new Date(openHouse.date));
                                return (<div className="col-6">
                                    <h3>{openHouse.title} - {format(theDate, 'yyyy-MM-dd')}</h3>
                                    <h4>Open From {openHouse.startTime} - {openHouse.endTime}</h4>
                                    <p>{openHouse.description.description}</p>
                                </div>)
                            })}
                        </div>
                    </div>
                </section>
            </div>

        </Layout>
    )
}

export default Landing