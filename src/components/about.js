import React from 'react';
import { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";
import { FaInstagram, FaLinkedin, FaGithub, FaGlobe, FaEnvelope } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';
import Navbar from '../components/navbar';

class About extends PureComponent {
    render() {
        return (
            <>
                <Navbar />
                <div className="about m-3 text-center">
                    <h2><strong>About Us</strong></h2>
                    <div className="hr" />
                    <p className="vertical-center">
                        The Department of Food and Civil Supplies in Uttar Pradesh is responsible for the management of food security and ration distribution throughout the state. The Public Distribution System (PDS) in UP operates under the National Food Security Act (NFSA) and provides subsidized food grains to eligible households.
                        <br /><br />
                        The state is divided into various zones, each managed by District Supply Officers and regional Food Commissioners. The department manages the issuance, cancellation, and modification of ration cards through online and offline processes. The aim is to ensure transparency, eliminate corruption, and provide quality food grains to the citizens at affordable prices.
                        <br /><br />
                        The system is monitored via the UP Food and Civil Supplies portal: <a href="https://fcs.up.gov.in/" target="_blank" rel="noopener noreferrer">fcs.up.gov.in</a>.
                    </p>
                    <h2><strong>Aim of the System</strong></h2>
                    <div className="hr" />
                    <p>Our focus is to reduce corruption in the ration distribution system. We aim to build a transparent and fair system to ensure rightful delivery of resources to all beneficiaries.</p>
                </div>

                <h3><strong>Developers</strong></h3>
                <div className="hr" />

                <div className="card-container d-flex flex-wrap justify-content-center">
                    {/* Developer 1 */}
                    <Card border="dark" style={{ width: '18rem', height: "18rem", borderRadius: "50%" }} className="m-2 overflow-hidden">
                        <Card.Header className="bg-dark text-white"><b>Developer #1</b></Card.Header>
                        <Card.Body>
                            <Card.Title><b>Dnyaneshwar Sakhare</b></Card.Title>
                            <Card.Text className="about-icons">
                                B. Tech CSE 2021, <br />
                                Rit Islampur, Sangli.
                                <div className="icons">
                                    <a data-tip="sdnyanu22@gmail.com" style={{ color: "black" }} target="blank" href="mailto:sdnyanu22@gmail.com"><FaEnvelope /></a>
                                    <a data-tip="/Dnyaneshwarsakhare" style={{ color: "black" }} target="blank" href="https://github.com/Dnyaneshwarsakhare/"><FaGithub /></a>
                                    <a data-tip="/dnyaneshwar_s22" style={{ color: "black" }} target="blank" href="https://www.instagram.com/dnyaneshwar_s22/"><FaInstagram /></a>
                                    <a data-tip="/dnyaneshwar-sakhare" style={{ color: "black" }} target="blank" href="https://linkedin.com/dnyaneshwar-sakhare"><FaLinkedin /></a>
                                    <a data-tip="Personal website" style={{ color: "black" }} target="blank" href="http://dnyaneshwarsakhare.github.io/Portfolio"><FaGlobe /></a>
                                </div>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="bg-dark text-white"><b>Github LinkedIn</b></Card.Footer>
                    </Card>

                    {/* Developer 2 */}
                    <Card border="dark" style={{ width: "18rem", height: "18rem", borderRadius: "50%" }} className="m-2 overflow-hidden">
                        <Card.Header className="bg-dark text-white"><b>Developer #2</b></Card.Header>
                        <Card.Body>
                            <Card.Title><b>Ram Waghmode</b></Card.Title>
                            <Card.Text className="about-icons">
                                B. Tech CSE 2021, <br />
                                Rit Islampur, Sangli.
                                <div className="icons">
                                    <a data-tip="ramwaghmode145@gmail.com" style={{ color: "black" }} target="blank" href="mailto:ramwaghmode145@gmail.com"><FaEnvelope /></a>
                                    <a data-tip="/ramraj145" style={{ color: "black" }} target="blank" href="https://github.com/ramraj145"><FaGithub /></a>
                                    <a data-tip="/r_a_m_145" style={{ color: "black" }} target="blank" href="https://www.instagram.com/r_a_m_145/"><FaInstagram /></a>
                                    <a data-tip="/ram-waghmode-687aa8185" style={{ color: "black" }} target="blank" href="https://www.linkedin.com/in/ram-waghmode-687aa8185/"><FaLinkedin /></a>
                                    <a data-tip="Personal website" style={{ color: "black" }} target="blank" href="#"><FaGlobe /></a>
                                </div>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="bg-dark text-white"><b>Github LinkedIn</b></Card.Footer>
                    </Card>

                    {/* Developer 3 */}
                    <Card border="dark" style={{ width: '18rem', height: "18rem", borderRadius: "50%" }} className="m-2 overflow-hidden">
                        <Card.Header className="bg-dark text-white"><b>Developer #3</b></Card.Header>
                        <Card.Body>
                            <Card.Title><b>Sanket Gavali</b></Card.Title>
                            <Card.Text className="about-icons">
                                B. Tech CSE 2021, <br />
                                Rit Islampur, Sangli.
                                <div className="icons">
                                    <a data-tip="sanketgavali885@gmail.com" style={{ color: "black" }} target="blank" href="mailto:sanketgavali885@gmail.com"><FaEnvelope /></a>
                                    <a data-tip="/Sanketgavali" style={{ color: "black" }} target="blank" href="https://github.com/"><FaGithub /></a>
                                    <a data-tip="/gavali_sanket" style={{ color: "black" }} target="blank" href="https://www.instagram.com/gavali_sanket/"><FaInstagram /></a>
                                    <a data-tip="/sanket-gavali" style={{ color: "black" }} target="blank" href="https://linkedin.com/"><FaLinkedin /></a>
                                    <a data-tip="Personal website" style={{ color: "black" }} target="blank" href="#"><FaGlobe /></a>
                                </div>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="bg-dark text-white"><b>Github LinkedIn</b></Card.Footer>
                    </Card>

                    {/* Developer 4 */}
                    <Card border="dark" style={{ width: '18rem', height: "18rem", borderRadius: "50%" }} className="m-2 overflow-hidden">
                        <Card.Header className="bg-dark text-white"><b>Developer #4</b></Card.Header>
                        <Card.Body>
                            <Card.Title><b>Nikhil Mane</b></Card.Title>
                            <Card.Text className="about-icons">
                                B. Tech CSE 2021, <br />
                                Rit Islampur, Sangli.
                                <div className="icons">
                                    <a data-tip="manenikhil83@gmail.com" style={{ color: "black" }} target="blank" href="mailto:manenikhil83@gmail.com"><FaEnvelope /></a>
                                    <a data-tip="/Nikhilmane" style={{ color: "black" }} target="blank" href="https://github.com/"><FaGithub /></a>
                                    <a data-tip="/mr_nick__11" style={{ color: "black" }} target="blank" href="https://www.instagram.com/mr_nick__11/"><FaInstagram /></a>
                                    <a data-tip="/nikhil-mane" style={{ color: "black" }} target="blank" href="https://linkedin.com/"><FaLinkedin /></a>
                                    <a data-tip="Personal website" style={{ color: "black" }} target="blank" href="#"><FaGlobe /></a>
                                </div>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="bg-dark text-white"><b>Github LinkedIn</b></Card.Footer>
                    </Card>

                    <ReactTooltip />
                </div>
            </>
        );
    }
}

export default About;
