import React, { useState } from 'react'

const Contact = (props) => {
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setIsDisabled(true);
        let myForm = document.getElementById('contactForm');
        let formData = new FormData(myForm)
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        }).then((res) => { if (res.status === 200) { setIsSuccessful(true); } else { setIsError(true); } }).catch((error) =>
            setIsSuccessful(false));
    }

    return (
        <>{props.path !== "/new-member/" && <section id="contact">
            <div className="inner">
                <section>
                    {isError && <p>There was an issue, please try again.</p>}
                    {isSuccessful && <p>Form submitted, thanks!</p>}
                    <form action="contact-success" id="contactForm" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
                        <input type="hidden" name="form-name" value="contact" />
                        <p className="hidden">
                            <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                        </p>
                        <div className="field half first">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="field half">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" />
                        </div>
                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" rows="6"></textarea>
                        </div>
                        <div data-netlify-recaptcha="true"></div>
                        <ul className="actions">
                            <li><input type="submit" value="Send Message" className="special" disabled={isDisabled} /></li>
                            <li><input type="reset" value="Clear" /></li>
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
                            <span>4501 N. Clarendon Ave.<br />
                        Chicago, IL 60640<br />
                        United States of America</span>
                        </div>
                    </section>
                </section>
            </div>
        </section>}</>
    )
}

export default Contact
