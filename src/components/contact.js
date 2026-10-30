import React from 'react';
import { PureComponent } from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import Navbar from '../components/navbar';

class Contact extends PureComponent {
    render() {
        return (
            <>
                <Navbar />
                <div className="contact m-4" style={{ textAlign: 'center' }}>
                    <h2><strong>Contact Us</strong></h2>
                    <div className="hr" />
                    <h3>HelpLine Numbers :</h3><br />
                    <h5>Commissioner, Food & Civil Supplies, U.P. <FaPhone /> 0522-2288808</h5><br />
                    <h5>Official email ID <FaEnvelope />  cfcsup@nic.in</h5><br />
                    <h5>Control Room, Lucknow (Toll-Free) <FaPhone /> 1800-1800-150</h5><br />
                    <h5>Uttar Pradesh Public Distribution System Helpline <FaPhone /> 1967 or 1800-1800-150</h5><br />
                    <br />
                    <h6>For More Details Visit :- <a className="btn btn-outline-primary btn-sm" href="https://fcs.up.gov.in/">Click here</a></h6>
                </div>
            </>
        );
    }
}

export default Contact;
