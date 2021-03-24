import React, { useState } from 'react'
import SEO from '../components/SEO'
import Layout from '../components/layout'

import membershipApplication from '../assets/images/membershipApplication.jpg'

const NewMember = (props) => {
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        let myForm = document.getElementById('membershipApplication');
        let formData = new FormData(myForm);
        console.log(formData);
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        }).then((res) => { if (res.status === 200) { setIsSuccessful(true); } else { setIsError(true); } }).catch((error) =>
            setIsSuccessful(false));
    }

    return (
        <Layout path={props.path}>
            <SEO pageTitle="New Membership Application" />
            <div id="main" className="alt">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h1>New Membership Application</h1>
                        </header>
                        <span className="image main"><img src={membershipApplication} alt="Members in the club room" /></span>
                        {isSuccessful && <p>Application submitted, thanks! We will reach out to you soon.</p>}
                        {!isSuccessful && <form action="new-member-success" name="newMembership" id="membershipApplication" method="post" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
                            <input type="hidden" name="form-name" value="newMembership" />
                            <div className="grid-wrapper">
                                <div className="col-12">
                                    <p>There is a probationary period of six (6) months. Probationary Member Dues are $6.00 per month. After this period, if the applicant is accepted for Membership, an initiation fee of $60.00 is due. The initiation fee includes the first month’s Club dues & club T-shirt. Dues are: $12.00 per month for Regular Member; $5.00 per month of Junior Member; $9.00 per month for Family Member.
</p>
                                </div>
                                <div className="col-12">
                                    <div className="select-wrapper mb-5">
                                        <label htmlFor="name">Application Type</label>
                                        <select name="applicationType" id="applicationType">
                                            <option defaultValue="regular">Regular</option>
                                            <option value="junior">Junior</option>
                                            <option value="family">Family</option>
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
                                <div className="col-4">
                                    <label htmlFor="age">Age</label>
                                    <div className="mb-5"><input type="text" name="age" id="age" defaultValue="" placeholder="Age" required /></div>
                                </div>
                                <div className="col-8">
                                    <label htmlFor="occupation">Occupation</label>
                                    <div className="mb-5"><input type="text" name="occupation" id="occupation" defaultValue="" placeholder="Occupation" /></div>
                                </div>
                                <div className="col-12">
                                    <div className="mb-5">
                                        <label htmlFor="scale">In what scale are you interested?</label>
                                        <input type="text" name="scale" id="scale" defaultValue="" placeholder="" required />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mb-5">
                                        <label htmlFor="howLong">How long have you been interested in model railroading?</label>
                                        <input type="text" name="howLong" id="howLong" defaultValue="" placeholder="" required />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <p><b>Do you have a home layout?</b></p>
                                </div>
                                <div className="col-6">
                                    <div className="mb-5">
                                        <input type="radio" id="homeLayoutNo" name="homeLayout" required />
                                        <label htmlhtmlFor="homeLayoutNo">No home layout</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-5">
                                        <input type="radio" id="homeLayoutYes" name="homeLayout" required />
                                        <label htmlhtmlFor="homeLayoutYes">Yes, I have a home layout</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <h2>Equipment Completed or Building</h2>
                                </div>
                                <div className="col-4">
                                    <div className="mb-5">
                                        <label htmlFor="steam">Steam Locomotives</label>
                                        <input type="text" name="steam" id="steam" defaultValue="" placeholder="" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="mb-5">
                                        <label htmlFor="diesel">Diesel Locomotives</label>
                                        <input type="text" name="diesel" id="diesel" defaultValue="" placeholder="" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="mb-5">
                                        <label htmlFor="trolleys">Trolleys</label>
                                        <input type="text" name="trolleys" id="trolleys" defaultValue="" placeholder="" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="mb-5">
                                        <label htmlFor="passengerCars">Passenger Cars</label>
                                        <input type="text" name="passengerCars" id="passengerCars" defaultValue="" placeholder="" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="mb-5">
                                        <label htmlFor="freightCars">Freight Cars</label>
                                        <input type="text" name="freightCars" id="freightCars" defaultValue="" placeholder="" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="mb-5">
                                        <label htmlFor="cabooses">Cabooses</label>
                                        <input type="text" name="cabooses" id="cabooses" defaultValue="" placeholder="" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mb-5">
                                        <label htmlFor="specialInterests">Special Interests in the Hobby</label>
                                        <textarea name="specialInterests" id="specialInterests" rows="6"></textarea>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <p><b>Member of other railfan or model associations?</b></p>
                                </div>
                                <div className="col-6">
                                    <div className="mb-5">
                                        <input type="radio" id="associationsNo" name="associations" required />
                                        <label htmlhtmlFor="associationsNo">No associations</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-5">
                                        <input type="radio" id="associationsYes" name="associations" required />
                                        <label htmlhtmlFor="associationsYes">Yes, I'm part of other associations</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mb-5">
                                        <label htmlFor="scale">Railroad or model railroad publications you read regularly</label>
                                        <input type="text" name="publications" id="publications" defaultValue="" placeholder="" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mb-5">
                                        <p>If accepted, I will abide by the rules set down by the members of the club.</p>
                                        <input type="checkbox" id="rulesAgree" name="rulesAgree" required />
                                        <label htmlhtmlFor="rulesAgree">I agree</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    {isError && <p>There was an issue, please try again.</p>}
                                    <ul className="actions">
                                        <li><button type="submit">Submit Application</button></li>
                                    </ul>
                                </div>
                            </div>
                        </form>}
                    </div>
                </section>
            </div>

        </Layout>
    )
}

export default NewMember