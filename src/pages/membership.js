import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/SEO'
import Layout from '../components/layout'

const Membership = (props) => (
  <Layout>
    <SEO pageTitle="Tour Our Layout" />
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Applying for Membership</h1>
          </header>

          <h2 id="content">Why Become A Member</h2>
          <p>
            Membership in a model railroad club like the Garfield-Clarendon
            Model Railroad Club in Chicago offers many benefits. However, please
            keep in mind we <b>never</b> require membership to view the layout
            when we're open or partake in our events.
          </p>
          <h2>Join Us</h2>
          <p>
            The Clarendon Park Community Center is nearing opening. We are
            accepting membership applications. Please fill one out and we will
            add you to our new member mailing list for updates.
          </p>
          <p>
            <Link
              aria-label="Link to Membership Form"
              to="/new-member"
              className="button next"
            >
              Apply
            </Link>
          </p>
          <div className="grid-wrapper">
            <div className="col-6">
              <h3>
                Benefits{' '}
                <i className="inlineIcon fa fa-plus" aria-hidden="true" />
              </h3>
              <ul>
                <li>Gain experience to build your own home layout</li>
                <li>Network with friendly like-minded individuals</li>
                <li>Run trains on a large layout</li>
                <li>Help in our mission to make the hobby approachable</li>
                <li>Have fun!</li>
              </ul>
            </div>
            <div className="col-6">
              <h3>
                Who Should Join{' '}
                <i
                  classNamee="inlineIcon fa fa-check-square"
                  aria-hidden="true"
                />
              </h3>
              <p>
                Anyone interested in railroads, model railroading, and
                connecting with others who share a similar passion.
              </p>
            </div>
            <div className="col-4">
              <h3>
                Membership Levels{' '}
                <i className="inlineIcon fa fa-signal" aria-hidden="true" />
              </h3>
              <p>
                We have several membership levels tailored to fit
                everyones&apos; needs. Please contact us or talk to a member
                in-person to learn more. In general costs are about the price of
                a coffee or two.
              </p>
              <p>
                Membership entitles you to operate the layout without constant
                supervision. Most people dream of layouts our size, this benefit
                is immense. Members may partake in community fellowship
                including field trips, weekend operation sessions, and learning
                presentations.
              </p>
            </div>
            <div className="col-4">
              <h3>
                Running Trains{' '}
                <i className="inlineIcon fa fa-train" aria-hidden="true" />
              </h3>
              <p>
                Membership is required to run trains without supervision. On
                days when we are not too busy, you might be able to run a train
                under the supervision of a club member.
              </p>
              <p>
                Running your own train is subject to club approval. The
                equipment must meet our standards to run well.
              </p>
            </div>
            <div className="col-4">
              <h3>
                Requirements{' '}
                <i className="inlineIcon fa fa-tasks" aria-hidden="true" />
              </h3>
              <p>
                Membership is open to anyone. Whether you're new to the hobby or
                a seasoned expert, you'll find yourself at home. Members under
                18 are considered junior members and must be accompanied by an
                adult.
              </p>
              <p>
                You will learn about the entire club as part of membership, read
                about our{' '}
                <a href="/blog/member_apprenticeship">apprenticeship progarm</a>
                .
              </p>
            </div>
            <div className="col-6">
              <h3>
                Equipment Standards{' '}
                <i className="inlineIcon fa fa-thumbs-up" aria-hidden="true" />
              </h3>
              <p>
                Prospective members must be accompanied by a club member when
                operating on the layout to ensure safe operations. The club has
                limited engines and rolling stock available for use. We highly
                recommend bringing your own equipment to run.
              </p>
              <p>
                Rolling stock (railcars) must be equipped with steel wheels and
                metal Kadee style couplers. Locomotives must be DCC enabled.
              </p>
              <p>
                Club members are happy to assist with any questions about
                rolling stock, engines and DCC programming. We use NCE DCC cabs.
                You do not need to bring your own, plenty of club cabs are
                available for use.
              </p>
            </div>
            <div className="col-6">
              <h3>
                Process{' '}
                <i className="inlineIcon fa fa-cogs" aria-hidden="true" />
              </h3>
              <p>
                We suggest taking your time to explore our club on work days and
                an operating session before making the decision to join.
                Applications can be submitted on meeting days, the first Friday
                of the month. Once submitted your application is read at the
                monthly meeting four times, with a vote on the last reading. You
                need to be present at the meetings for your application to be
                read. Don't worry about missing a meeting, the four readings do
                not need to be consecutive.
              </p>
              <p>
                <b>
                  Unable to attend on Fridays but still very interested in
                  joining?
                </b>{' '}
                Contact us and we'll let you know about alternative membership
                levels and an alternative process to join.
              </p>
            </div>
            <div className="col-6">
              <h3>
                Additonal Information{' '}
                <i
                  className="inlineIcon fa fa-puzzle-piece"
                  aria-hidden="true"
                />
              </h3>
              <ul>
                <li>
                  <b>No home layout needed.</b> Many members don't have a home
                  layout and most couldn't find room for one of our size either.
                </li>
                <li>
                  <b>Passion counts, not experience.</b> Our members come from
                  all walks of life. You need not be an engineer in real life to
                  be a member. All that's needed is a willingness to learn and
                  passion for operating or crafting railroads in miniature HO
                  size.
                </li>
                <li>
                  <b>Flexible attendance.</b> Life happens, we understand that.
                  You won't find us tallying off your attendance. Most members
                  stop in for meeting days and operating sessions are very
                  popular.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default Membership
