import React, { useState } from 'react'

const Contact = (props) => {
  const [isSuccessful, setIsSuccessful] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [formData, setFormData] = useState({ message: '', email: '', name: '' })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsDisabled(true)
    const validationErrors = validateContactForm(formData)
    if (Object.keys(validationErrors).length === 0) {
      setErrors({}) // Clear errors when valid
      let myForm = document.getElementById('contactForm')
      let formData = new FormData(myForm)
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
        .then((res) => {
          if (res.status === 200) {
            setIsSuccessful(true)
            setFormData({ name: '', email: '', message: '' }) // Reset form
          } else {
            setIsError(true)
            setIsDisabled(false)
          }
        })
        .catch((error) => () => {
          setIsSuccessful(false)
          setIsDisabled(false)
        })
    } else {
      setIsDisabled(false)
      setErrors(validationErrors)
    }
  }

  const validateContactForm = (formData) => {
    const errors = {}

    // Validate Name (at least 2 characters)
    if (!formData.name.trim()) {
      errors.name = 'Name is required.'
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters.'
    }

    // Validate Email (basic regex check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      errors.email = 'Email is required.'
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Invalid email format.'
    }

    // Validate Message (at least 10 characters)
    if (!formData.message.trim()) {
      errors.message = 'Message is required.'
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters.'
    }

    return errors
  }

  return (
    <>
      {props.path !== '/new-member/' && (
        <section id="contact">
          <div className="inner">
            <section>
              {isError && (
                <p className="form-error">
                  There was an issue, please try again.
                </p>
              )}
              {isSuccessful && (
                <p className="form-success">Form submitted, thanks!</p>
              )}
              <form
                action="contact-success"
                id="contactForm"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don’t fill this out if you’re human:{' '}
                    <input name="bot-field" />
                  </label>
                </p>
                <div className="field half first">
                  <label htmlFor="name">Name (required)</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <span className="form-error">{errors.name}</span>
                  )}
                </div>
                <div className="field half">
                  <label htmlFor="email">Email (required)</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="form-error">{errors.email}</span>
                  )}
                </div>
                <div className="field">
                  <label htmlFor="message">Message (required)</label>
                  <textarea
                    name="message"
                    id="message"
                    rows="6"
                    required
                    value={formData.message}
                    onInput={handleChange}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && (
                    <span className="form-error">{errors.message}</span>
                  )}
                </div>
                <div data-netlify-recaptcha="true"></div>
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      value="Send Message"
                      className="special"
                      disabled={isDisabled}
                    />
                  </li>
                  <li>
                    <input type="reset" value="Clear" />
                  </li>
                </ul>
              </form>
            </section>
            <section className="split">
              <section>
                <div className="contact-method">
                  <span className="icon alt fa-envelope"></span>
                  <h3>Email</h3>
                  <a href="#">yardmaster@garfieldcentral.org</a>
                </div>
              </section>
              {/* <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>(000) 000-0000 x12387</span>
                    </div>
                </section> */}
              <section>
                <div className="contact-method">
                  <span className="icon alt fa-home"></span>
                  <h3>Address</h3>
                  <span>
                    4501 N. Clarendon Ave.
                    <br />
                    Chicago, IL 60640
                    <br />
                    United States of America
                  </span>
                </div>
              </section>
            </section>
          </div>
        </section>
      )}
    </>
  )
}

export default Contact
