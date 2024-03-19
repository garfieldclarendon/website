import React, { useState } from 'react'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Recaptcha from 'react-recaptcha'

const Newsletter = () => {
  let recaptchaInstance
  const [isSuccessful, setIsSuccessful] = useState(false)
  const [isError, setIsError] = useState(false)

  const _handleSubmit = async () => {
    let emailNewsletterForm = document.getElementById('emailNewsletter')
    let formData = new FormData(emailNewsletterForm)
    const email = formData.get('email')
    const fname = formData.get('firstName')
    const lname = formData.get('lastName')
    const result = await addToMailchimp(email, {
      FNAME: fname,
      LNAME: lname,
    })

    if (result.result === 'success') {
      setIsSuccessful(true)
      setIsError(false)
    } else {
      setIsError(true)
      setIsSuccessful(false)
    }
  }

  const _executeCaptcha = function (e) {
    e.preventDefault()
    recaptchaInstance.execute()
  }

  const _verifyCallback = function (response) {
    console.log(response)
    _handleSubmit()
  }

  return (
    <Layout>
      <SEO pageTitle="Garfield-Clarendon Newsletter" />
      <BannerLanding
        style="renovation"
        title="Garfield-Clarendon Newsletter Sign-Up"
        description="Join our email newsletter for updates"
      />

      <div id="main">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h2>Garfield-Clarendon Email Newsletter</h2>
            </header>
            <p>
              Stay up-to-date on what is going on within our club. Join our
              newsletter. We send out updates for upcoming shows, open houses,
              and other news.
            </p>
            <h3>Email Newsletter Form</h3>
            {isSuccessful && <p>Email Address Added</p>}
            <form
              id="emailNewsletter"
              method="post"
              action="#"
              onSubmit={_executeCaptcha}
            >
              <div className="grid-wrapper">
                <div className="col-6">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      defaultValue=""
                      placeholder="First Name"
                    />
                  </div>
                  <div className="mb-5">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      defaultValue=""
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      defaultValue=""
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <Recaptcha
                    ref={(e) => (recaptchaInstance = e)}
                    render="explicit"
                    sitekey="6Lc9QZ0pAAAAAHda5NI3P1KysZM9Ks-kmnsWVKoM"
                    verifyCallback={_verifyCallback}
                    size="invisible"
                  />
                </div>
                <div className="col-12">
                  {isError && <p>There was an issue, please try again.</p>}
                  <ul className="actions">
                    <li>
                      <input
                        type="submit"
                        value="Subscribe"
                        className="special"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Newsletter
