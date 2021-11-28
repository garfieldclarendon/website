import React, { useState } from 'react'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import SEO from '../components/SEO'
import travelingLayout from '../assets/images/traveling.jpeg'

const TravelingLayout = () => {
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        let myForm = document.getElementById('newLocationApplication');
        let formData = new FormData(myForm);
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        }).then((res) => { if (res.status === 200) { setIsSuccessful(true); } else { setIsError(true); } }).catch((error) => {
            console.log(error);
            setIsSuccessful(false)
        });
    }

    return (
        <Layout>
            <SEO pageTitle="Chicago Traveling Layout" />
            <BannerLanding style="travelingLayout" bannerColor="grey"  title="Chicagoland Traveling Layout" description="We are looking into building a portable layout. Learn more about this." />

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>A New Way to Reach Out</h2>
                        </header>
                        <p>Since we are closed to the public for the foreseeable future, the potential for building a portable layout has come up. This would allow us to host a layout for a few hours in Chicagoland area locations, bringing the joy of trains and model railroading to more people.</p>
                    </div>
                </section>
                <section id="two" className="spotlights">
                    <section>
                        <div className="image">
                            <img src={travelingLayout} alt="Traveling cirle of track" />
                        </div>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Volunteer to Host</h3>
                                </header>
                                <p>While we look into the portable layout endevor, if you have a space or event you'd like to host us please contact us for future reference.</p>
                                {isSuccessful && <p>Application submitted, thanks! We will reach out to you soon.</p>}
                                {!isSuccessful && <form action="new-location-success" name="newLocation" id="newLocationApplication" method="post" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
                                <input type="hidden" name="form-name" value="newLocation" />
                                <div className="grid-wrapper">
                                    <div className="col-12">
                                        <div className="select-wrapper mb-5">
                                            <label htmlFor="name">Company or Entity Type</label>
                                            <select name="applicationType" id="applicationType">
                                                <option defaultValue="regular">For-Profit</option>
                                                <option value="junior">Non-Profit</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mb-5">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" name="name" id="name" defaultValue="" placeholder="Name" required />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mb-5">
                                            <label htmlFor="date">Date</label>
                                            <input type="text" name="date" id="date" defaultValue="" placeholder="Date" required />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-5">
                                            <label htmlFor="date">Email</label>
                                            <input type="text" name="email" id="email" defaultValue="" placeholder="Email" required />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-5">
                                            <label htmlFor="date">Address</label>
                                            <input type="text" name="address" id="address" defaultValue="" placeholder="Address" required />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <p><b>Do you have insurance?</b></p>
                                    </div>
                                    <div className="col-6">
                                        <div className="mb-5">
                                            <input type="radio" id="insurance-yes" name="insurance" defaultChecked />
                                            <label htmlFor="insurance-yes">Yes</label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mb-5">
                                            <input type="radio" id="insurance-no" name="insurance" defaultChecked />
                                            <label htmlFor="insurance-no">No</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <h2>Space Details</h2>
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-5">
                                            <label htmlFor="spaceAvailable">Please describe the space available for the layout</label>
                                            <textarea name="spaceAvailable" id="spaceAvailable" rows="6"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-5">
                                            <label htmlFor="whyInterested">Please describe why you're interested in hosting us</label>
                                            <textarea name="whyInterested" id="whyInterested" rows="6"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <p>I understand this is only preliminary and not a promise or gurantee.</p>
                                        <div className="mb-5">
                                            <input type="checkbox" id="rules-agree" name="rules-agree" />
                                            <label htmlFor="rules-agree">I agree</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        {isError && <p>There was an issue, please try again.</p>}
                                        <ul className="actions">
                                            <li><button type="submit">Submit</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </form>}
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </Layout>
    )
}

export default TravelingLayout