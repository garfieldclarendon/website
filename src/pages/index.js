import { Link } from 'gatsby'
import React from 'react'
import tour from '../assets/images/blockTour.jpg'
import visit from '../assets/images/blockVisit.jpg'
import GCYouthProgram from '../assets/images/GCYouthProgram.jpg'
import LearnSomethingNew from '../assets/images/LearnSomethingNew.jpg'
import blockSocialMedia from '../assets/images/blockSocialMedia.png'
import blockHistory from '../assets/images/blockHistory.jpg'
import Banner from '../components/Banner'
import Layout from '../components/layout'
import SEO from '../components/SEO'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <SEO pageTitle="Home" />
        <Banner />

        <div id="main">
          <section id="planYourVisit" className="tiles">
            <article style={{ backgroundImage: `url(${visit})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/blog"
                className="link primary"
              >
                <header className="major">
                  <h3>Blog</h3>
                  <p>Model railroading news and tips</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${GCYouthProgram})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/outreach"
                className="link primary"
              >
                <header className="major">
                  <h3>Outreach</h3>
                  <p>Giving back to the community</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${LearnSomethingNew})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/education"
                className="link primary"
              >
                <header className="major">
                  <h3>Education</h3>
                  <p>Learn about the model railroading</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${blockHistory})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/history"
                className="link primary"
              >
                <header className="major">
                  <h3>History</h3>
                  <p>Discover something new</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${tour})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/tour"
                className="link primary"
              >
                <header className="major">
                  <h3>Tour</h3>
                  <p>Take a virtual tour of the layout </p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${blockSocialMedia})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/social-media"
                className="link primary"
              >
                <header className="major">
                  <h3>Social Media</h3>
                  <p>Connect with us</p>
                </header>
              </Link>
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Model Railroading in the City</h2>
              </header>
              <p>
                Little space and big dreams? No problem! In our new series of blog posts we explore how to create a small layout perfect for city dewellers. Our solutions won't comprimise on enjoyment but will fit any apartment.
              </p>
              <ul className="actions">
                <li>
                  <Link
                    aria-label="Link to Landing Page"
                    to="/blog"
                    className="button next"
                  >
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
